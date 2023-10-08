import { useState } from "react";

import Todolist from './TodoList.jsx';
import Home from './Home.jsx';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabApp = () => {

  const [value,setValue] = useState("one");
  const handleChange = (event, value) =>  setValue(value);

  return (
      <div>
          <Tabs value={value} onChange={handleChange}>
              <Tab value="one" label="Home" />
              <Tab value="two" label="Todos" />
          </Tabs>
          {value === 'one' && <Home />}
          {value === 'two' && <Todolist />}
      </div>
  )
}
export default TabApp;