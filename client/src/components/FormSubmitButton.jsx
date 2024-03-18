const FormSubmitButton = ({ name, onClick, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full transition-transform duration-100 ${
        disabled ? "transform-none" : "transform-gpu active:scale-95"
      }`}
    >
      {name}
    </button>
  );
};

export default FormSubmitButton;
