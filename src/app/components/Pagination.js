import ReactPaginate from "react-paginate";
import { IoCaretForwardCircle, IoCaretBackCircle } from "react-icons/io5";

export default function Pagination({
  currentPage,
  pageCount,
  setcurrentPage,
  setoffset,
}) {
  const handlePageClick = async (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setcurrentPage(e.selected);
    setoffset(e.selected * 10);
  };

  return (
    <ReactPaginate
      nextLabel={
        <IoCaretForwardCircle className="te text-4xl ml-2 md:text-5xl lg:text-6xl hover:scale-150" />
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={
        <IoCaretBackCircle className="te text-4xl mr-2 md:text-5xl lg:text-6xl hover:scale-150" />
      }
      breakLabel="..."
      renderOnZeroPageCount={null}
      className="flex gap-5 md:gap-7 items-center lg:gap-16 justify-center text-sm md:text-2xl lg:text-3xl"
      activeLinkClassName=" rounded-md shadow-lg px-3 py-2 bg-black text-white dark:text-black dark:bg-white"
      forcePage={currentPage}
    />
  );
}
