import { Button, Pressable, Text } from "react-native";

interface ButtonComponentProps {
    title: string,
    onClick: () => void
}

const ButtonComponent = (props: ButtonComponentProps) => {
    const { onClick, title } = props;

    return (
        <Pressable className="h-[50px] bg-accent items-center justify-center rounded-xl w-[30%]"
            onPress={onClick} >
            <Text className="text-sm text-white">
                {title}
            </Text>
        </Pressable>
    )
}

export default ButtonComponent;