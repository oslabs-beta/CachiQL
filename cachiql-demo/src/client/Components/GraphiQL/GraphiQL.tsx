import React, { useEffect, useState } from 'react';
import GraphiQL from 'graphiql';
import styled from 'styled-components';
import 'graphiql/graphiql.min.css';
import { execute } from 'graphql';
import { Stylegraphiql } from './styles'
import { Props } from '../../interfaces/interfaces'

const Graphiql: React.FC<Props> = ({ recentQueries, setRecentQueries }) => {
  const getCounter = () => {
    fetch('/counter')
      .then(res => res.json())
      .then(data => {
        setRecentQueries([...recentQueries, ...data] || [...recentQueries]);
      });
  };

  return (
    <Stylegraphiql>
      <div className="graphiql">
        <GraphiQL
          fetcher={async graphQLParams => {
            const data = await fetch('graphql', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(graphQLParams),
              credentials: 'same-origin',
            });
            return data.json().catch(() => {
              data.text();
            });
          }}
        >
          <GraphiQL.Toolbar>
            Compare CachiQL
            <GraphiQL.ToolbarButton
              onClick={() => getCounter()}
              title="ToolbarButton"
              label="Display Results"
            />
          </GraphiQL.Toolbar>
        </GraphiQL>
      </div>
    </Stylegraphiql>
  );
};

export default Graphiql;
