import Link from "next/link";

const Breadcrumb = ({ currentPage }) => {
  return (
    <nav className="text-gray-500 mb-4 text-sm">
      <Link href="/" className="text-blue-500">Home</Link> →  
      <span className="font-bold text-gray-700"> {currentPage}</span>
    </nav>
  );
};

export default Breadcrumb;
