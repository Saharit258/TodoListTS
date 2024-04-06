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
      <table style={{ marginLeft: "350px", marginTop: "10px" }}>
        {todos.map((todo, i) => (
          <tr key={i} style={{ border: 'solid 1px #009EFF', padding: '10px' }}>
            <td style={{ width: "500px", padding: '10px' }}>
              <span style={{ color: "white" }}>{todo.text}</span>
            </td>
            <td style={{ border: 'solid 1px #009EFF', padding: '10px'}}>
              <Button
                style={{
                  backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
                  color: "#FFF",
                }}
                onClick={() => edit(todo.id)}
              >
                edit
              </Button>
            </td>
            <td style={{ border: 'solid 1px #009EFF',padding: '10px' }}>
              <Button
                style={{
                  backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
                  color: "#FFF",
                }}
                onClick={() => remove(todo.id)}
              >
                remove
              </Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default List;
