interface IInputProps {
  name: string;
  register: any;
  placeholder: string;
}

const NumberInput: React.FC<IInputProps> = ({
  name,
  register,
  placeholder,
}) => {
  return (
    <input
      type="number"
      className="w-full border-solid border-2 rounded-md border-slate-300 h-35 px-4"
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default NumberInput;
