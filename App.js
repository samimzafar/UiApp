import * as React from 'react';
import {Navigation} from './src/navigation';
import CustomDropdown from './src/screens/Home';
function App() {
  let list = [
    'Board games revival',
    'Comedy trends',
    'Amusement parks',
    'Escape rooms',
    'Street performances',
    'Online challenges',
    'Festivals impact',
    'Crafting movement',
    'Social gaming',
    'Virtual reality',
  ];
  return <CustomDropdown />;
}
export default App;
