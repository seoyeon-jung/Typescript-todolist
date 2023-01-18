import TodoItem from "./TodoItem";
import "../../styles/TodoList.css";

interface Todolist {
  todo: any;
  onToggle(id: number): void;
  onDel(id: number): void;
  check: boolean;
}

interface TItem {
  item: string;
  onToggle(id: number): void;
  onDel(id: number): void;
}

interface TList extends TItem {
  id: number;
  title: string;
  text: string;
  check: boolean;
}

const TodoList = ({ todo, onToggle, onDel, check }: Todolist) => {
  return (
    <div className="TodoList">
      <h2>{check ? "완료" : "진행 중"}</h2>
      {todo.map(
        (item: any) =>
          item.check === check && (
            <TodoItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDel={onDel}
            />
          )
      )}
    </div>
  );
};

export default TodoList;