"use client";
import { useState } from "react";
import { CalendarIcon, XIcon, ViewIcon, PlusIcon } from "lucide-react";

interface Task {
  id: number;
  title: string;
  date: string;
  completed: boolean;
  subtasks?: { id: number; title: string }[];
  inbox?: boolean;
  notes?: string;
}

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "DSA neetcode 5 question from array by",
      date: "21 Apr",
      completed: false,
      inbox: true,
      subtasks: [{ id: 1, title: "1" }],
    },
    {
      id: 2,
      title: "make post about Leetcode by",
      date: "21 Apr",
      completed: false,
      inbox: true,
    },
    {
      id: 3,
      title: "Productivity application start",
      date: "21 Apr",
      completed: false,
      inbox: true,
    },
    {
      id: 4,
      title: "devops karna hai",
      date: "Yesterday",
      completed: false,
      inbox: true,
    },
    {
      id: 5,
      title: "chess app deploy karke dekhna hai",
      date: "Yesterday",
      completed: false,
      inbox: true,
    },
    {
      id: 6,
      title: "linux shell scripting",
      date: "Yesterday",
      completed: false,
      inbox: true,
    },
    {
      id: 7,
      title: "chess application code",
      date: "Yesterday",
      completed: false,
      inbox: true,
      notes: "make code cleaner / file restructuring...",
    },
    {
      id: 8,
      title: "learn about next js and build my portfolio",
      date: "Yesterday",
      completed: false,
      inbox: true,
    },
  ]);

  const [overdueExpanded, setOverdueExpanded] = useState(true);

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleOverdue = () => {
    setOverdueExpanded(!overdueExpanded);
  };

  return (
    <div className="w-full mx-auto bg-white ">
      <div className="flex justify-between items-center px-4 py-4 ">
        <div></div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
            <CalendarIcon size={16} />
            Connect calendar
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <XIcon size={16} />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <ViewIcon size={16} />
            <span className="sr-only">View</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="p-4 max-w-3xl w-full">
          <h1 className="text-2xl font-bold mb-2">Today</h1>
          <div className="flex items-center text-gray-500 mb-6">
            <div className="flex items-center">
              <span className="w-5 h-5 rounded-full border  flex items-center justify-center text-xs mr-2">
                <span className="text-gray-500">8</span>
              </span>
              <span>tasks</span>
            </div>
          </div>

          <div className="mb-6">
            <div
              className="flex items-center justify-between py-2 border-b cursor-pointer"
              onClick={toggleOverdue}
            >
              <div className="flex items-center ">
                <svg
                  className={`w-6 h-6 mr-2 transform ${
                    overdueExpanded ? "rotate-90" : ""
                  } transition-transform hover:bg-gray-200 p-1 rounded-md`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="font-medium">Overdue</span>
              </div>
              <button className="text-red-500 text-sm hover:underline">
                Reschedule
              </button>
            </div>

            {overdueExpanded && (
              <div className="mt-2 space-y-1">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="pl-6 pr-2 py-2 hover:bg-gray-50 rounded"
                  >
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <button
                          className="w-5 h-5 rounded-full border border-gray-300 flex-shrink-0 mt-1"
                          onClick={() => toggleTaskCompletion(task.id)}
                        >
                          {task.completed && (
                            <svg
                              className="w-full h-full text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          )}
                        </button>
                        <div className="ml-3">
                          <div className="text-sm">{task.title}</div>
                          {task.notes && (
                            <div className="text-xs text-gray-500 mt-1">
                              {task.notes}
                            </div>
                          )}
                          <div className="flex items-center mt-1">
                            <div className="text-xs px-2 py-0.5  text-red-700 rounded mr-2">
                              {task.date}
                            </div>
                            {task.subtasks && task.subtasks.length > 0 && (
                              <div className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded">
                                {task.subtasks
                                  .map((subtask) => subtask.title)
                                  .join(", ")}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-xs self-start mt-1">
                        {task.inbox && "Inbox"}
                      </div>
                    </div>
                  </div>
                ))}
                <hr className=" bg-gray-400" />
              </div>
            )}
          </div>

          <div className="pt-4">
            <div className="text-sm text-black font-bold mb-2">
              23 Apr · Today · Wednesday
            </div>
            <hr className=" bg-gray-400 mb-4" />
            <button className="flex items-center text-gray-500 hover:text-gray-800">
              <PlusIcon size={16} className="mr-2" />
              Add task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Todo };
