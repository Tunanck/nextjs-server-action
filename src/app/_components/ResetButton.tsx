"use client";
import React, { useTransition } from "react";
import { resetTodo } from "../_actions/todo-action";
// import { resetTodo } from "../_actions/todo-action";

type Props = {};

export default function ResetButton({}: Props) {
  const [_, startTransition] = useTransition();

  return (
    <button
      type="button"
      className="text-black mt-3 font-semibold border border-gray-500 rounded h-8"
      onClick={() => {
        startTransition(() => resetTodo());
      }}
    >
      Reset
    </button>
  );
}
