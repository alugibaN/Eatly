import Button from "./Button";
export interface ButtonProps {
  title:string;
  primary?: boolean;
  onClick?: () => void;
}

export const ButtonComponent = ({
  title = 'shared/Button',
  primary = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return  (
    <Button/>
  );
};
