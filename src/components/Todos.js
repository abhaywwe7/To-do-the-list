import React from 'react'
import Todocomponent from './Todoscomponent';
export default function Todos(props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle} >
            <h3 className="my-4">Todos List</h3>
            {props.todos.length === 0 ? "Nothing to todo" :
                props.todos.map((todo) => {
                    console.log(todo.sno);
                    return <Todocomponent todo={todo} key={todo.sno} onDelete={props.onDelete} />

                })
            }

        </div>
    )
}
