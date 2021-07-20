import styled from 'styled-components';
import React from 'react';
import { TitleGraph } from './TitleGraph';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  {
    name: 'Query A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Query B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Query C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Query D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Query E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Query F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Query G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const BarStyle = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const BuildBarChart = () => {
  return (
    <>
      <TitleGraph>CachiQL Results</TitleGraph>
      <BarStyle>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </BarStyle>
    </>
  );
};
