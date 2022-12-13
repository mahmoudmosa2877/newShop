import { BaseButton, GoogleSignIn, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "baseButton",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, onClick, ...otherProps }) => {
  const CustomizedButton = getButton(buttonType);
  return (
    <CustomizedButton onClick={onClick} {...otherProps}>
      {children}
    </CustomizedButton>
  );
};

export default Button;
