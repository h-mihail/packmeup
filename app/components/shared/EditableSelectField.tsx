export type ClickOutsideCbParams = {
  e: MouseEvent | TouchEvent;
} & {
  [key: string]: string | number;
};

interface EditableSelectFieldProps {
  name: string;
  value: string | number;
  options: { label: string; value: string }[];
  clickOutsideCb: (params: ClickOutsideCbParams) => void;
}

export const EditableSelectField: React.FC<EditableSelectFieldProps> = ({
  name,
  value,
  options,
  clickOutsideCb,
}) => {
  const handleOnChangeField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params: ClickOutsideCbParams = {
      e: e as unknown as MouseEvent | TouchEvent,
      [name]: e.target.value,
    } as ClickOutsideCbParams;
    return clickOutsideCb(params);
  };

  return (
    <select
      className="bg-transparent appearance-none cursor-pointer w-12"
      value={value}
      onChange={handleOnChangeField}
    >
      {options.map((o) => (
        <option className="bg-background" key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};
