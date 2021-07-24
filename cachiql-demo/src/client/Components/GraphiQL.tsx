import React, { useState } from 'react';
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
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState([]);
  const dataLoaded = () => {
    fetch('./counter')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data > 0) {
          console.log('loaded')
          setCount(data || []);
          setLoaded(true);
        }
        if (loaded) {
          console.log('count edited')
          console.log('loaded data', data)
          setCount(data || []);
          setLoaded(false);
        }
      })
    console.log('data is loaded');
    console.log('count', count);
  }

  const handleAdd = (event) => {
    console.log('what is the event', event)
    setCount(event || [])
  }
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
            dataLoaded();
            return data.json().catch(() => data.text());
          }}
          ExecuteButton
        />
      </div>
    </Stylegraphiql>
  );
};
