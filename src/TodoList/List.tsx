import React from "react";
import { Button, Table } from "antd";
import { MdEdit } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";

interface Todo {
  id: number;
  text: string;
}

interface ListProps {
  todos: Todo[];
  edit: (id: number) => void;
  remove: (id: number) => void;
}

const List: React.FC<ListProps> = ({ todos, remove, edit }) => {
  const columns = [
    {
      title: "Todo",
      dataIndex: "text",
      key: "text",
      width: "500px",
      backgroundColor: "#0F172A",
      render: (text: string) => <div className='text-ellipsis w-[500px]' style={{ color: '#ffffff'}}>{text}</div>,
    },
    {
      title: "Action",
      key: "action",
      width: "200px",
      render: (record: Todo) => (
        <span className='w-[100px]'>
          <Button onClick={() => edit(record.id)}><MdEdit /></Button>
          <Button className='ml-3' onClick={() => remove(record.id)}><CgPlayListRemove /></Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={todos}
        columns={columns}
        pagination={false}
        className='w-[700px] ml-[400px]'
      />
    </div>
  );
};

export default List;
