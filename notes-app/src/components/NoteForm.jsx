import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const priorityOptions = [
    { value: "high", label: "🔴 High" },
    { value: "medium", label: "🟠 Medium" },
    { value: "low", label: "🟢 Low" },
  ];

  const categoryOptions = [
    { value: "work", label: "💼 Work" },
    { value: "personal", label: "🏡 Personal" },
    { value: "ideas", label: "💡 Ideas" },
  ];

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
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            options={priorityOptions}
            onChange={handleChange}
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            options={categoryOptions}
            onChange={handleChange}
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-orange-300 text-white py-2 rounded-lg cursor-pointer hover: bg-orange-300">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
