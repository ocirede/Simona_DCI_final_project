const RegisterFormButton = () => {
  return (
    <button
      type="submit"
      className={
        "mt-2 x text-white border bg-retroRed py-1 px-4 rounded-full w-full transition-transform duration-100  transform-gpu active:scale-95"
      }
    >
      <p className="font-custom pt-1 pb-1 text-xl">Register</p>
    </button>
  );
};

export default RegisterFormButton;
