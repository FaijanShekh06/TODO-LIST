"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = (
    <h2 className="text-2xl text-center font-medium">No Task Available</h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-orange-400 text-amber-50 px-4 py-2 rounded font-bold cursor-pointer"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-4xl font-bold p-5 text-center">
        Faijan's Todo List
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="Enter Title Here"
          className="border-2 border-zinc-900 rounded-md p-2 m-5 w-80 text-xl"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Enter Description Here"
          className="border-2 border-zinc-900 rounded-md p-2 m-5 w-80 text-xl"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="bg-black text-white rounded-md p-3 m-5 font-bold cursor-pointer"
        >
          Add Todo
        </button>
      </form>
      <hr></hr>
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
