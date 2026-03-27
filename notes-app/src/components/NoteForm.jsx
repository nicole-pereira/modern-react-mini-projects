import { useState } from "react";

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          {formData.title}
        </label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          {formData.priority}
        </label>
        <select
          name="priority"
          type="text"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg">
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          {formData.category}
        </label>
        <select
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
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
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"></textarea>
      </div>

      <button className="w-full bg-orange-300 text-white py-2 rounded-lg cursor-pointer hover: bg-orange-300">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
