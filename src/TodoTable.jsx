
const Todotable = (props) => {

    const todos = props.todos;
    const removeTodo = props.removeTodo;

    const todoItems = todos.map((todo, index) => {
        return (
            <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td><button onClick={() => removeTodo(index)}>Remove</button></td>
            </tr>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {todoItems}
            </tbody>
        </table>
    )
}
export { Todotable };