import { useState, useEffect } from "react";
import Task from "./Task";
import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "@firebase/firestore";

const s = {
  text: `ml-2 font-mono text-center text-xl`,
};

export default function Content() {
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState("");

  //Create Task
  const createTask = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid task!");
      return;
    }
    await addDoc(collection(db, "tasks"), { text: input, completed: false });
    setInput("");
  };

  //Read tasks
  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArr = [];
      querySnapshot.forEach((doc) => {
        tasksArr.push({ ...doc.data(), id: doc.id });
      });
      setTask(tasksArr);
    });
    return () => unsubscribe();
  }, []);

  //Update tasks
  const handleClick = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), { completed: !task.completed });
  };

  //Delete tasks
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  //Render elements
  return (
    <>
      <article>
        <header className="todo-title">Todolist</header>
        <form className="form" onSubmit={createTask}>
          <input
            className="add-task"
            value={input}
            type="text"
            placeholder="Enter another task.."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="add-button">
            <img src="public/more.png" alt="add button" />
          </button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              handleClick={handleClick}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
        <p className={s.text}>You have {tasks.length} tasks</p>
      </article>
    </>
  );
}
