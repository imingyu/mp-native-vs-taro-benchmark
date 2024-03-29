import { View, Checkbox, Button } from "@tarojs/components";
import "./todo-item.css";

export const TodoItem = ({ value, onDone, onDelete }) => {
  return (
    <View className="todo-item">
      <Checkbox
        className="todo-check"
        checked={!!value.done}
        onChange={onDone}
      ></Checkbox>
      <View className="todo-text">{value.text}</View>
      <Button className="todo-btn" type="warn" onClick={onDelete}>
        删除
      </Button>
    </View>
  );
};
