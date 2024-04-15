const FormSubmitButton = ({ name, onClick, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`mt-2 x text-black border border-black font-bold py-1 px-4 rounded-full w-full transition-transform duration-100 ${
        disabled ? "transform-none" : "transform-gpu active:scale-95"
      }`}
    >
      <p className="text-2xl">{name}</p>
    </button>
  );
};

export default FormSubmitButton;
