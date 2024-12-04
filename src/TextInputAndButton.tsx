import { IconButton } from "./IconButton";
import { TextInput, TextInputProps } from "./TextInput";
import "./TextInputAndButton.less";

export type TextInputAndButtonProps = TextInputProps & {
    iconName: string;
    buttonContent?: string;
    onClick?: () => void;
}

export function TextInputAndButton({ iconName, buttonContent, onClick, ...textInputProps }:
    TextInputAndButtonProps) {
    return <div class="TextInputAndButton" >
        <TextInput {...textInputProps} onEnter={onClick} />
        <IconButton iconName={iconName} text={buttonContent} onClick={onClick} />
    </div>
}
