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

//Tailwind css classes
const s = {
  text: `ml-2 font-mono text-center text-xl`,
  form: `flex p-4 gap-4`,
  title: `text-8xl text-center font-sans font-thin font-extrabold text-indigo-900 p-8`,
  input: `py-3 px-5 border-2 block w-full border-indigo-900 rounded-full text-l focus:border-indigo-900 focus:ring-indigo-900 bg-slate-50 bg-opacity-20 border-indigo-900 text-indigo-900 placeholder-black font-mono`,
  main: `bg-slate-50 bg-opacity-10 rounded-2xl shadow-md p-10 mx-20 my-1`,
  button: `flex h-12 w-12`,
};

//Main Component
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
      <article className={s.main}>
        <header className={s.title}>Todolist</header>
        <form className={s.form} onSubmit={createTask}>
          <input
            className={s.input}
            value={input}
            type="text"
            placeholder="Enter another task.."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className={s.button}>
            <img className={s.plus} src="/more.png" alt="add button" />
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
