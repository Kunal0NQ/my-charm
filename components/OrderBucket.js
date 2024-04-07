"use client"

import {useState} fro "react"
import { FaPlus, FaListCheck, FaXmark } from "react-icons/fa6";
  let nextId = 0;

export default function OrderBucket () {
    const [name, setName] = useState("");
    const [todo, setTodo] = useState([]);
   return (
         <div class="flex items-center justify-center w-full h-full font-medium">
      <div class="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        {/* Component Start */}
        <div class="max-w-full p-4 bg-white rounded-lg shadow-lg w-96">
          <div class="flex items-center mb-6">
            <FaListCheck class="h-5 w-5 text-indigo-500 stroke-current text-md" />

            <h4 class="font-semibold ml-3 text-lg">Checklist </h4>
          </div>
          <div class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <button
              class="w-5 h-5 text-gray-400 fill-current"
              onClick={() => {
                setTodo([...todo, { id: nextId++, name: name }]);
                setName("");
              }}
            >
              <FaPlus className="text-md" />
            </button>
            {/* <svg
              class="w-5 h-5 text-gray-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg> */}

            <input
              class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="add a new task"
            />
            <button
              class="w-5 h-5 text-gray-400 fill-current"
              onClick={() => {
                setTodo([...todo, { id: nextId++, name: name }]);
                setName("");
              }}
            >
              {/* <FaPlus className="text-md" /> */}
              <FaXmark className="text-lg text-red-500" />
            </button>
          </div>
          <ul>
            {todo.map((artist) => (
              <li key={artist.id}>
                <div>
                  <input class="hidden" type="checkbox" id="task_1" checked />
                  <label
                    class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
                    for="task_1"
                  >
                    <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
                      <svg
                        class="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="flex justify-between">
                    <span class="ml-4 text-sm">{artist.name}</span>
                    <span class="mr-4 text-sm">
                      <FaXmark className="text-lg text-red-500" />
                    </span>
                    </div>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- Component End  --> */}
      </div>

    </div>
   )
}
