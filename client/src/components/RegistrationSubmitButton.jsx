const RegistrationSubmitButton = ({ name, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
    >
      {name}
    </button>
  );
};

export default RegistrationSubmitButton;
