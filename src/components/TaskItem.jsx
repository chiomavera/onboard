"use client";

const TaskItem = ({ task, onToggle, onChange }) => {
  return (
    <div className="flex items-center gap-3 px-2 py-2 rounded-md transition">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
        disabled={!task.label.trim()}
        className={`w-4 h-4 border-2 border-black cursor-pointer accent-[#50C2C9] ${
          !task.label.trim() ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />

      <input
        type="text"
        value={task.label}
        onChange={onChange}
        placeholder="Enter task..."
        className={`bg-transparent w-full focus:outline-none text-sm text-black font-semibold placeholder-gray-400 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      />
    </div>
  );
};

export default TaskItem;
