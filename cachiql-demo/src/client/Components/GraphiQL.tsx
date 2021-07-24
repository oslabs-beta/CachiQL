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
  const [data, getData] = useState([]);

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

  const getCounter = () => {
    fetch('/counter')
      .then((res) => res.json())
      .then((res) => {
        console.log('Am I getting data?', res);
        const arr = [...data, res];
        console.log(arr);
      });
  };

  function onClickToolbarButton(event) {
    alert('Clicked toolbar button!');
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
            getCounter();
            console.log('clicked', graphQLParams);
            return data.json().catch(() => {
              data.text();
            });
          }}
        >
          <GraphiQL.Toolbar>
            // GraphiQL.ToolbarButton usage
            <GraphiQL.ToolbarButton
              onClick={() => onClickToolbarButton()}
              title="ToolbarButton"
              label="Click Me as well!"
            />
            // Some other possible toolbar items
            <button name="GraphiQLButton">Click Me</button>
          </GraphiQL.Toolbar>
        </GraphiQL>
      </div>
    </Stylegraphiql>
  );
};
