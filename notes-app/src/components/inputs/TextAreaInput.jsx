const TextAreaInput = ({ label, value, name, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
        required></textarea>
    </div>
  );
};

export default TextAreaInput;
