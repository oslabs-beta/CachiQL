import React, { useEffect, useState } from 'react';
import GraphiQL from 'graphiql';
import styled from 'styled-components';
import 'graphiql/graphiql.min.css';
import { execute } from 'graphql';

const Stylegraphiql = styled.div`
  margin: auto;
  max-width: 60%;
  margin-bottom: 25px;
  .graphiql {
    height: 50vh;
  }
`;

interface Props {
  recentQueries: any[];
  setRecentQueries: React.Dispatch<React.SetStateAction<any[]>>;
}
export const Graphiql: React.FC<Props> = ({
  recentQueries,
  setRecentQueries
}) => {
  const getCounter = () => {
    fetch('/counter')
      .then((res) => res.json())
      .then((data) => {
        setRecentQueries([...recentQueries, ...data] || [...recentQueries]);
      });
  };

  return (
    <Stylegraphiql>
      <div className="graphiql">
        <GraphiQL
          fetcher={async (graphQLParams) => {
            const data = await fetch('graphql', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(graphQLParams),
              credentials: 'same-origin'
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
