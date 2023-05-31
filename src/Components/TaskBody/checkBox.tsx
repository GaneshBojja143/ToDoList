import React from "react";

interface CheckBoxProps {
  id: number;
  isChecked: boolean;
  handleCheckBox: (id: number, checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  isChecked,
  handleCheckBox,
}) => {
  const ChangeCheckBoxState = () => {
    handleCheckBox(id, !isChecked);
  };

  return (
    <input
      type="checkbox"
      name=""
      id={id.toString()}
      checked={isChecked}
      onChange={ChangeCheckBoxState}
    />
  );
};

export default CheckBox;
