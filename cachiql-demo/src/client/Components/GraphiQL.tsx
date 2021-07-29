import React, { useEffect, useState } from 'react';
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
  // const [count, setCount] = useState(false);

  // useEffect(() => {
  //   console.log('i am using effect');
  //   fetch('/counter')
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log('this is the data', data);
  //       setCount(data || []);
  //     });
  // }, []);
  // console.log('i am counting ', count);

  // if (count === true) {
  //   fetch('/counter')
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log('Am I getting data?', data);
  //       setCount(false);
  //     });
  // }
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
            // setCount(true);
            return data.json().catch(() => {
                data.text();
              });
          }}
        />
      </div>
    </Stylegraphiql>
  );
};
