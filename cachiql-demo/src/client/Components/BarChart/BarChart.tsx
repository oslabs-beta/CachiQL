import styled from 'styled-components';
import React from 'react';
import { TitleGraph } from '../TitleGraph';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Props } from '../../interfaces/interfaces';
import { BarStyle } from './styles';

const BarChartComp: React.FC<Props> = ({ recentQueries, setRecentQueries }) => {
  return (
    <>
      <TitleGraph>CachiQL Results</TitleGraph>
      <BarStyle>
        <BarChart
          width={500}
          height={300}
          data={recentQueries}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="GraphQL" fill="#808080" />
          <Bar dataKey="CachiQL" fill="#3751e0" />
        </BarChart>
      </BarStyle>
    </>
  );
};

export default BarChartComp;
