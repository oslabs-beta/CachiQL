import React from 'react';
import GraphiQL from 'graphiql';
import styled from 'styled-components';
import 'graphiql/graphiql.min.css';

const Stylegraphiql = styled.div`
  margin: auto;
  max-width: 60%;
  margin-bottom: 25px;
  .graphiql {
    height: 50vh;
  }
`;

export const Graphiql = () => {
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
            return data.json().catch(() => data.text());
          }}
        />
      </div>
    </Stylegraphiql>
  );
};
