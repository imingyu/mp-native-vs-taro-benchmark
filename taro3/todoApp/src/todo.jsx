import { View, Input, Button } from "@tarojs/components";
import { useState } from "react";
import { TodoItem } from "./todo-item";
import "./todo.css";

let globalId = 0;

export const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([
    {
      id: ++globalId,
      text: "wxml",
    },
    {
      id: ++globalId,
      text: "wxss",
    },
  ]);
  const onInput = (e) => {
    setText(e.target.value || "");
  };
  const add = () => {
    if (!text) {
      return;
    }
    setText("");
    list.push({
      id: ++globalId,
      text,
    });
    setList(list);
  };
  const onDone = (index) => {
    const newList = list.slice();
    newList[index].done = !newList[index].done;
    setList(newList);
  };
  const onDelete = (index) => {
    const newList = list.slice();
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <>
      <View className="todo-form">
        <Input className="todo-input" value={text} onInput={onInput}></Input>
        <Button type="primary" onClick={add}>
          添加
        </Button>
      </View>
      {list.map((item, index) => {
        return (
          <TodoItem
            value={item}
            onDone={() => onDone(index)}
            onDelete={() => onDelete(index)}
          ></TodoItem>
        );
      })}
    </>
  );
};
