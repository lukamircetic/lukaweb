import { ChevronRight } from "lucide-react";

interface ExpandButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ExpandButton({ isOpen, setIsOpen }: ExpandButtonProps) {
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      <ChevronRight
        // transform transition-transform duration-200 ease-in-out
        className={`ml-[-4px] ${isOpen ? "rotate-90" : "rotate-0"}`}
      />
    </button>
  );
}
