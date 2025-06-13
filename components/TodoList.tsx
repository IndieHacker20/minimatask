"use client"

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PlusIcon, CheckIcon, TrashIcon } from "lucide-react";

export function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useQuery(api.todos.list);
  const addTodo = useMutation(api.todos.create);
  const toggleTodo = useMutation(api.todos.toggle);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center gap-2 mb-4">
        <Input 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
        />
        <Button 
          onClick={() => {
            addTodo({ title: newTodo });
            setNewTodo("");
          }}
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>

      <ul className="space-y-2">
        {todos?.map((todo) => (
          <li key={todo._id} className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleTodo({ id: todo._id })}
            >
              <CheckIcon className={`h-4 w-4 ${todo.completed ? "text-green-500" : "text-gray-300"}`} />
            </Button>
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.title}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto"
              onClick={() => deleteTodo({ id: todo._id })}
            >
              <TrashIcon className="h-4 w-4 text-red-500" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}