import { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [description, setDescription] = useState("");

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          {title}
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          {priority}
        </label>
        <select
          type="text"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded-lg">
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          {category}
        </label>
        <select
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg">
          <option value="Work">💼 Work</option>
          <option value="Personal">🏡 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg"></textarea>
      </div>

      <button className="w-full bg-orange-300 text-white py-2 rounded-lg cursor-pointer hover: bg-orange-300">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
