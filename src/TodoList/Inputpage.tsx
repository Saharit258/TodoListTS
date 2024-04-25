import React from "react";
import { Form, Input, Button } from "antd";
import { MdSaveAlt } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

interface Todo {
  id: number;
  text: string;
}

interface InputpageProps {
  news: string;
  edits: Todo | null;
  setNews: React.Dispatch<React.SetStateAction<string>>;
  addTodos: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Inputpage({ news, edits, setNews, addTodos }: InputpageProps) {
  return (
    <Form onFinish={addTodos}>
      <Form.Item>
        <Input
          type="text"
          value={news}
          onChange={(e) => setNews(e.target.value)}
          className='w-[500px] mt-[20px] ml-[400px]'
        />{" "}
        <Button htmlType="submit">
          {edits ? <MdSaveAlt /> : <AiFillPlusCircle />}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Inputpage;
