function Button({ label }: { label: string }) {
  // switch colors to variables
  return (
    <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer sm:text-2xl text-white sm:px-7 px-4 sm:py-3 py-2 rounded-lg font-bold">
      {label}
    </button>
  );
}

export default Button;
