'use client';
import './page.css';
import React, { useState } from "react";
import CreateNewTask from "@/components/CreateNewTask";
import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const [createNewTask, setCreateNewTask] = useState(false);

  const openCreateNewTaskTab = () => {
    if(!createNewTask) {
      setCreateNewTask(true);
    }
  }

  const closeCreateNewTaskTab = () => {
    setCreateNewTask(false);
  }

  return(
    <div className="home-page">
      <Navbar onCreateTask={openCreateNewTaskTab} />
      <main>
        {createNewTask && 
          <CreateNewTask onCancelCreate={closeCreateNewTaskTab}/>
        }
        
      </main>
    </div>
  );
}