import React from "react";
import { Button } from "antd";

interface Todo {
  id: number;
  text: string;
}

interface ListProps {
    todos: Todo[];
    edit: (id: number) => void; 
    remove: (id: number) => void; 
}

function List({ todos, remove, edit }: ListProps) {
  return (
    <div>
      <table style={{ marginLeft: "550px", marginTop: "10px" }}>
        {todos.map((todo, i) => (
          <tr key={i}>
            <td style={{ width: "100px" }}>
              <span style={{ color: 'white'}}>{todo.text}</span>
            </td>
            <td>
              <Button onClick={() => edit(todo.id)}>edit</Button>
            </td>
            <td>
              <Button onClick={() => remove(todo.id)}>remove</Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default List;
