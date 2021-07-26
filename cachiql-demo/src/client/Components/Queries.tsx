import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TitleGraph } from './TitleGraph';

// Generate Order Data
function createData(id, query, time, added, cleared, runtime) {
  return { id, query, time, added, cleared, runtime };
}

const rows = [
  createData(0, 'Shortened Query', '0.00 ms', '0.00 ms', 'Yes', 312.44),
  createData(1, 'Shortened Query', '0.00 ms', '0.00 ms', 'Yes', 866.99),
  createData(2, 'Shortened Query', '0.00 ms', '0.00 ms', 'Yes', 100.81),
  createData(3, 'Shortened Query', '0.00 ms', '0.00 ms', 'Yes', 654.39),
  createData(4, 'Shortened Query', '0.00 ms', '0.00 ms', 'Yes', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const queriesCount = () => {
  fetch('/counter')
    .then((data) => data.json())
    .then((data) => console.log(data.num));
}

export const Queries = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <TitleGraph>Recent Queries</TitleGraph>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Query</TableCell>
            <TableCell>Cache/Fetch Time</TableCell>
            <TableCell>Added to Cache</TableCell>
            <TableCell>Cache Cleared</TableCell>
            <TableCell align="right">Uncached Runtime</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.query}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.added}</TableCell>
              <TableCell>{row.cleared}</TableCell>
              <TableCell align="right">{row.runtime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};