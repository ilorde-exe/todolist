import { useState } from "react";
export default function Content() {
  const [task, setTask] = useState("");
  const onFormSubmit = () => {};
  const onInputChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <article>
        <header className="todo-title">Todolist</header>
        <form className="form" onSubmit={onFormSubmit}></form>
        <input
          type="text"
          placeholder="Enter another task.."
          onChange={onInputChange}
        />
      </article>
    </>
  );
}
