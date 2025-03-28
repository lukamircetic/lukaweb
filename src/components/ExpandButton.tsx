import { ChevronDown, ChevronRight } from "lucide-react";

interface ExpandButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ExpandButton({ isOpen, setIsOpen }: ExpandButtonProps) {
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {!isOpen && <ChevronRight className="ml-[-4px]" />}
      {isOpen && <ChevronDown className="ml-[-4px]" />}
    </button>
  );
}
