import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  firstPage: number;
  currentPage: number;
  lastPage: number;
}

export function Pagination({
  firstPage,
  currentPage,
  lastPage,
}: PaginationProps) {
  return (
    <div className="flex flex-row gap-4 self-center">
      <ChevronLeft />
      <span>{firstPage}</span>
      <span>{"..."}</span>
      <span>{currentPage - 1}</span>
      <span className="underline">{currentPage}</span>
      <span>{currentPage + 1}</span>
      <span>{"..."}</span>
      <span>{lastPage}</span>
      <ChevronRight />
    </div>
  );
}
