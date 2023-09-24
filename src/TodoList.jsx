import { useState } from "react";
import { Todotable } from './TodoTable';

const Todolist = () => {

    const [obj,setObj] = useState({desc:"",date:""});
    const [todos,setTodos] = useState([]);

   const addTodo = () => {
    setTodos([...todos,obj]);
    setObj({desc:"",date:""});

   }

   const removeTodo = (index) => {
    const lista = todos.filter((todo,i) => i !== index)
    setTodos(lista);
   }
 

    return (
        <div>
            <label>Date: </label>
            <input type="date"  value={obj.date} onChange={(e) => setObj({...obj, date:e.target.value})} />
            <label>Description: </label>
            <input  value={obj.desc} onChange={(e) => setObj({...obj, desc:e.target.value})} />
            <button onClick={addTodo}>Add</button>
            <Todotable todos={todos} removeTodo={removeTodo} />
        </div>
    )
}
export default Todolist;