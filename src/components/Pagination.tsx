import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  firstPage: number;
  currentPage: number;
  lastPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Pagination({
  firstPage,
  currentPage,
  lastPage,
  setCurrentPage,
}: PaginationProps) {
  // list of ints, -1 will represent ...
  // if the last page is <= 7 then we just generate a list of 7 pages, no ...
  // if the list is > 7 pages:
  // if the currentPage <= firstPage + 4 -> render the first 4 pages
  // then for the last 3 pages its 5 ... lastPage
  // if the currentPage >= lastPage - 3 -> render the last 4 pages
  // then for the first three its firstPage ... lastPage - 4
  // if the page is not within the first 4 or last 3,then the layout is:
  // firstPage, ... currentPage - 1, currentPage, currentPage + 1, ..., lastPage
  let pages: number[] = [];
  if (lastPage <= 7) {
    pages = Array.from({ length: lastPage }, (_, index) => index + 1);
  } else {
    if (currentPage <= firstPage + 4) {
      pages = [1, 2, 3, 4, 5, -1, lastPage];
    } else if (currentPage >= lastPage - 3) {
      pages = [
        1,
        -1,
        lastPage - 4,
        lastPage - 3,
        lastPage - 2,
        lastPage - 1,
        lastPage,
      ];
    } else {
      pages = [
        firstPage,
        -1,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        -1,
        lastPage,
      ];
    }
  }

  return (
    <div className="flex flex-row gap-2 self-center md:self-start items-center">
      <button
        className="disabled:text-gray-700"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={firstPage === currentPage}
      >
        <ChevronLeft />
      </button>
      {pages.map((page, index) => (
        <button
          className="w-6 text-center"
          key={index}
          onClick={() => setCurrentPage(page)}
          disabled={page == -1}
        >
          {page === -1 ? (
            <span className="text-xs p-0 m-0">{"..."}</span>
          ) : (
            <span className={currentPage == page ? "underline" : ""}>
              {page}
            </span>
          )}
        </button>
      ))}
      <button
        className="disabled:text-gray-600"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={lastPage === currentPage}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
