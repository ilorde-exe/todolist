import React from "react";
const s = {
  li: `flex justify-between bg-slate-50 bg-opacity-20 rounded-xl shadow-md p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-indigo-500 bg-opacity-70 rounded-xl shadow-md p-4 my-2 capitalize`,
  row: `flex items-center`,
  text: `ml-2 cursor-pointer font-mono text-indigo-800 truncate md:overflow-clip`,
  textComplete: `ml-2 cursor-pointer line-through font-mono text-white truncate md:overflow-clip`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
  trash: `h-4`,
};

const Task = ({ task, handleClick, deleteTask }) => {
  return (
    <li className={task.completed ? s.liComplete : s.li}>
      <div className={s.row}>
        <input
          onChange={() => handleClick(task)}
          type="checkbox"
          checked={task.completed ? `checked` : ``}
          className={s.checkbox}
        />
        <p
          onClick={() => handleClick(task)}
          className={task.completed ? s.textComplete : s.text}
        >
          {task.text}
        </p>
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <img className={s.trash} src="/trash.png" alt="trash" />
      </button>
    </li>
  );
};

export default Task;
