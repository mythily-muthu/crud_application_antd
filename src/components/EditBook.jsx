import { Input } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  console.log("current id for edit page:", id);
  return (
    <div className="flex flex-col gap-y-3 p-20 justify-center items-center">
      <p className="py-10 font-semibold text-xl">
        Edit the Book details in the form
      </p>

      <Input
        placeholder="Enter the book title here.."
        size="large"
        className="w-[550px]"
      />
      <Input
        placeholder="Enter the language here.."
        size="large"
        className="w-[550px]"
      />
      <Input
        placeholder="Enter the author here.."
        size="large"
        className="w-[550px]"
      />
      <Input
        placeholder="Enter the price here.."
        size="large"
        className="w-[550px]"
      />
      <Input
        placeholder="Enter the sale price here.."
        size="large"
        className="w-[550px]"
      />
      <button className="bg-blue-400 px-2 py-2 w-[550px] font-bold rounded-md text-white">
        Update Book
      </button>
    </div>
  );
};

export default EditBook;
