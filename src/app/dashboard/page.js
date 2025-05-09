"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TopLayout from "@/components/TopLayout";
import TaskItem from "@/components/TaskItem";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      { label: "", completed: false, id: Date.now() },
    ]);
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleChangeLabel = (id, value) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, label: value } : task))
    );
  };

  return (
    <>
      <TopLayout bgColor="#50C2C9" ellipseSrc="/dashboard-ellipse.svg">
        <div className="flex flex-col items-center mt-20 mb-6">
          <Image
            src="/profile-pics.svg"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-white font-bold mt-2 text-lg">
            Welcome Jeegar Goyani
          </h1>
        </div>
      </TopLayout>
      <div className="bg-[#f3f3f3] p-4 pb-20 w-full sm:w-[480px] min-h-screen">
        <div className="flex flex-col">
          <p className="text-xs text-right font-semibold mt-2">
            Good Afternoon
          </p>
          <div className="flex items-center justify-center">
            <Image src="/clock.svg" alt="Clock" width={120} height={120} />
          </div>
        </div>

        {/* Task List */}
        <div className="mt-6">
          <h2 className="font-semibold text-sm mb-3">Task list</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm space-y-4 max-h-[300px] overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs text-[#000000B3] font-semibold">
                Daily Task
              </h3>
              <button
                onClick={handleAddTask}
                className="text-primary-color cursor-pointer"
              >
                <FaPlus />
              </button>
            </div>

            {tasks.length === 0 ? (
              <p className="text-xs text-gray-400 italic">
                No tasks yet. Click + to add one.
              </p>
            ) : (
              <div className="space-y-3 text-sm">
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={() => handleToggle(task.id)}
                    onChange={(e) => handleChangeLabel(task.id, e.target.value)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
