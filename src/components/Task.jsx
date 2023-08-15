import React from "react";
const s = {
  li: `flex justify-between bg-slate-50 bg-opacity-20 rounded-xl shadow-md p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-indigo-500 bg-opacity-75 rounded-xl shadow-md p-4 my-2 capitalize`,
  row: `flex `,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
};

const Task = ({ task, handleClick, deleteTask }) => {
  return (
    <li className={task.completed ? s.liComplete : s.li}>
      <div className={s.row}>
        <input
          onChange={() => handleClick(task)}
          type="checkbox"
          checked={task.completed ? `checked` : ``}
        />
        <p
          onClick={() => handleClick(task)}
          className={task.completed ? s.textComplete : s.text}
        >
          {task.text}
        </p>
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <img className="trash-button" src="public/trash.png" alt="trash" />
      </button>
    </li>
  );
};

export default Task;
