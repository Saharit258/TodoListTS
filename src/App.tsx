import React, { useState } from "react";
import Inputpage from './TodoList/Inputpage'
import List from './TodoList/List'

interface Todo {
  id: number;
  text: string;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [news, setNews] = useState<string>("");
  const [edits, setEdits] = useState<Todo | null>(null);

  const submit = () => {
    if (edits) {
      setTodos(
        todos.map((todo) =>
          todo.id === edits.id ? { ...todo, text: news } : todo
        )
      );
      setEdits(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: news }]);
    }
    setNews("");
  };

  const remove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const edit = (id: number) => {
    const editTodo = todos.find((todo) => todo.id === id);
    if (editTodo) {
      setEdits(editTodo);
      setNews(editTodo.text);
    }
  };

  return (
    <div className='bg-slate-900 h-[100vh] w-[100vw]'
    >
      <Inputpage news={news} edits={edits} setNews={setNews} submit={submit} />
      <List todos={todos} remove={remove} edit={edit}/>
    </div>
  );
}

export default App;
