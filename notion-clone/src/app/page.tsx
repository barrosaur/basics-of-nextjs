'use client';
import './page.css';
import React, { useState } from "react";
import CreateNewTask from "@/components/CreateNewTask";
import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const [createNewTask, setCreateNewTask] = useState(false);
  const [saveTask, setSaveTask] = useState(false);

  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  });

  const [submittedInputs, setSubmittedInputs] = useState<
    { title : string, content : string}[]
  >([]);

  const openCreateNewTaskTab = () => {
    if(!createNewTask) {
      setCreateNewTask(true);
    }
  }

  const closeCreateNewTaskTab = () => {
    setCreateNewTask(false);
  }

  const handleSubmit = () => {
    setSubmittedInputs(prev => [...prev, inputs]);
    setSaveTask(true);
    closeCreateNewTaskTab();
    setInputs({ title: '', content: ''});
  }

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field] : value,
    }))
  }

  return(
    <div className="home-page">
      <Navbar onCreateTask={openCreateNewTaskTab} />
      <main>
        
        {createNewTask && (
          <CreateNewTask 
            onCancelCreate={closeCreateNewTaskTab}
            onHandleChange={handleInputChange}
            inputs = {inputs}
            onSubmit={handleSubmit}
          />
        )}

        {submittedInputs.map((task, index) => (
          <TaskCard inputs={task} key={index}/>
        ))}
        
      </main>
    </div>
  );
}