import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();

    //Validation
    if (!formData.title || !formData.description) return;

    //Create note object
    const newNote = { id: Date.now(), ...formData };

    //Add notes to state
    setNotes([newNote, ...notes]);

    // Reset form data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-1000 border border-gray-300 text-orange-400 py-2 rounded-lg cursor-pointer hover:bg-orange-100 hover:border-orange-400 transition mb-4">
        {isFormVisible ? "Hide Form ▽" : "Add new note ✶"}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSumit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              Title
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
              Priority
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
              Category
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
      )}
    </>
  );
};

export default NoteForm;
