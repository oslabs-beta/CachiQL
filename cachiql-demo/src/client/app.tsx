import React from 'react';
import { FloatNavigationMenuStyle } from './Components/Navigation';
import { Graphiql } from './Components/GraphiQL';
import CachiQLLogo from '../../dist/assets/cachiql_(1).svg';


const App = () => (
  <div>
    <h1>Welcome to CachiQL</h1>
    <FloatNavigationMenuStyle />
    <Graphiql />
  </div>
);
export default App;