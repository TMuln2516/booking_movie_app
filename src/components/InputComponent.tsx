import { TextInput, View } from "react-native";

interface InputComponentProps {
    placeholder: string,
    value: string,
    onChangeValue: (value: string) => void;
}

const InputComponent = (props: InputComponentProps) => {
    const { onChangeValue, placeholder, value } = props;

    return (
        <TextInput className="bg-primary flex-1 rounded-lg h-[50px] w-full pl-4 mb-2 text-gray-300"
            value={value}
            onChangeText={onChangeValue}
            placeholder={placeholder}
            placeholderTextColor="gray" />
    )
}

export default InputComponent;