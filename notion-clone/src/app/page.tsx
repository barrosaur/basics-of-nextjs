'use client';
import './page.css';
import React, { useState } from "react";
import CreateNewTask from "@/components/CreateNewTask";
import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const [createNewTask, setCreateNewTask] = useState(false);
  const [saveTask, setSaveTask] = useState(false);
  const [selected, setSelected] = useState<number[]>([])

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

  const handleInputChange = (field : string, value : string) => {
    setInputs(prev => ({
      ...prev,
      [field] : value,
    }))
  }

  const handleToggleCard = (index: number) => {
    setSelected(prev => 
      prev.includes(index) ? 
      prev.filter(i => i !== index) : 
      [...prev, index]
    )
  }

  const handleDelete = () => {
    setSubmittedInputs(prev => prev.filter((_, index) => !selected.includes(index)))
    setSelected([]);
  }

  return(
    <div className="home-page">
      <Navbar 
        onCreateTask={openCreateNewTaskTab}
        onDelete={handleDelete}
        hasSelection={selected.length > 0}
      />
      <main>
        
        {createNewTask && (
          <CreateNewTask 
            onCancelCreate={closeCreateNewTaskTab}
            onHandleChange={handleInputChange}
            inputs = {inputs}
            onSubmit={handleSubmit}
          />
        )}

        {submittedInputs.map((task, index : number) => (
          <TaskCard 
            inputs={task} 
            key={index}
            isSelected={selected.includes(index)}
            onToggle={() => handleToggleCard(index)}
          />
        ))}
        
      </main>
    </div>
  );
}