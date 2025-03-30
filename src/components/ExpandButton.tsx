import { ChevronRight } from "lucide-react";

interface ExpandButtonProps {
  isOpen: boolean;
  toggleArticle: () => void;
}

export function ExpandButton({ isOpen, toggleArticle }: ExpandButtonProps) {
  return (
    <button onClick={() => toggleArticle()}>
      <ChevronRight
        // transform transition-transform duration-200 ease-in-out
        className={`ml-[-4px] ${isOpen ? "rotate-90" : "rotate-0"}`}
      />
    </button>
  );
}
