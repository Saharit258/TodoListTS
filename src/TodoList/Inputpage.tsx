import React from 'react';
import { Input, Button } from "antd";

interface Todo {
  id: number;
  text: string;
}

interface InputpageProps {
  news: string;
  edits: Todo | null;
  setNews: React.Dispatch<React.SetStateAction<string>>;
  submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Inputpage({ news, edits, setNews, submit }: InputpageProps) {
  return (
    <div>
        <Input
          type="text"
          value={news}
          onChange={(e) => setNews(e.target.value)}
          style={{ width: "500px", marginTop: "20px", marginLeft: "400px" }}
        />
        <Button onClick={submit} style={{ marginLeft: "10px" }}>
          {edits ? "Save" : "Submit"}
        </Button>
      </div>
  );
}

export default Inputpage;
