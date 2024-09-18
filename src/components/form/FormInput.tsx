import { Controller } from "react-hook-form";

type TFormInput = {
  type: string;
  name: string;
  label?: string;
  defaultValue?: string; 
};

const FormInput = ({ type, name, label, defaultValue = "" }: TFormInput) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <Controller
        name={name}
        defaultValue={defaultValue} 
        render={({ field }) => (
          <div className="space-y-2">
            {label && (
              <label className="font-semibold" htmlFor={name}>
                {label}
              </label>
            )}
            <input
              className="w-full px-2 py-1 rounded"
              type={type}
              id={name}
              {...field}
              value={field.value ?? ""} 
            />
          </div>
        )}
      />
    </div>
  );
};

export default FormInput;