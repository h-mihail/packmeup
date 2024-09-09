import { useEffect, useState } from "react";

import { useClickOutside } from "@/app/hooks/useClickOutside";

export type ClickOutsideCbParams = {
  e: MouseEvent | TouchEvent;
} & {
  [key: string]: string | number;
};

interface EditableFieldProps {
  name: string;
  value: string | number;
  clickOutsideCb: (params: ClickOutsideCbParams) => void;
  extraClassName?: string;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  name,
  value: defaultValue,
  clickOutsideCb,
  extraClassName,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isActive, setIsActive] = useState(false);

  const [innerRef] = useClickOutside({
    onClickOutside: (e) => {
      if (defaultValue === value) return;

      toggleSetIsActive();
      const params: ClickOutsideCbParams = {
        e,
        [name]: value,
      } as ClickOutsideCbParams;
      return clickOutsideCb(params);
    },
  });

  const toggleSetIsActive = () => {
    setIsActive(!isActive);
  };

  const handleOnChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (isActive) innerRef.current?.focus();
  }, [isActive, innerRef]);

  return isActive ? (
    <input
      ref={innerRef}
      value={value}
      onChange={handleOnChangeField}
      className={`bg-transparent ${extraClassName}`}
    />
  ) : (
    <div onClick={toggleSetIsActive}>{value}</div>
  );
};
