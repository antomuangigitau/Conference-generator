import { Button } from "./ui/button";

interface ButtonsProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?:
    | "cancel"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "ticket"
    | "next"
    | null;
}

const Buttons = (props: ButtonsProps) => {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      variant={props.variant}
      className={`cursor-pointer ${props.className}`}>
      {props.children}
    </Button>
  );
};

export default Buttons;
