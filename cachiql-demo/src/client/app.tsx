import React from 'react';
import { FloatNavigationMenuStyle } from './Components/Navigation'
import { Graphiql } from './Components/GraphiQL'
import { BuildBarChart } from './Components/BarChart';
import CachiQLLogo from '../../dist/assets/cachiql_(1).svg'


const App = () => (
  <div>
    <h1>Welcome to CachiQL</h1>
    <FloatNavigationMenuStyle />
    <Graphiql />
    <BuildBarChart />
  </div>
);
export default App;