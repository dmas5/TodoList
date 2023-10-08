import { useState, useRef } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const Todolist = () => {

    const [obj, setObj] = useState({ description: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const columns = [
        { field: "description", sortable: true, filter: true, floatingFilter: true },
        { field: "date", sortable: true, filter: true, floatingFilter: true },
        {
            field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ];

    const addTodo = () => {
        setTodos([...todos, obj]);
        setObj({ description: "", date: "", priority: "" });
    }

    const removeTodo = () => {
        //const lista = todos.filter((todo,i) => i !== index)
        const lista = todos.filter((todo, index) => index != gridRef.current.getSelectedNodes()[0].id);
        setTodos(lista)
    }

    return (
        <div>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField variant="standard" label="date" type="text" value={obj.date} onChange={(e) => setObj({ ...obj, date: e.target.value })} />
                <TextField variant="standard" label="desc" value={obj.description} onChange={(e) => setObj({ ...obj, description: e.target.value })} />
                <TextField variant="standard" label="priority" value={obj.priority} onChange={(e) => setObj({ ...obj, priority: e.target.value })} />
                <Button onClick={addTodo} variant="contained">Add</Button>
                <Button onClick={removeTodo} variant="contained">Delete</Button>
            </Stack>
            <div className="ag-theme-material" style={{ height: '700px', width: '100%', margin: 'auto' }} >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columns}
                    animateRows={true}
                    rowData={todos}>
                </AgGridReact>
            </div>
        </div>
    )
}


export default Todolist;