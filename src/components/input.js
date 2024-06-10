import { TextInput } from "react-native-paper";
import { primaryColor } from "../config/colors";
const Input = (props) => {
  const { label, value, onChange, icon } = props;

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(text)}
      mode="outlined"
      textColor="black"
      activeOutlineColor={primaryColor}
      style={{ marginVertical: 5 }}
      right={<TextInput.Icon icon={icon} />}
    />
  );
};

export default Input;
