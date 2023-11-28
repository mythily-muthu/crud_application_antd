import React from "react";
import { Link } from "react-router-dom";

const SingleBook = () => {


  
  return (
    <>
      <div className="px-10 py-5 flex justify-between ">
        <h2 className="text-2xl font-bold ">book name</h2>
        <div className="flex gap-x-1">
          <Link to={"/editbook"}>
            <button className="bg-green-500 text-white font-bold rounded-md px-3 py-1">
              Edit
            </button>
          </Link>
          <Link to={"/"}>
            <button className="bg-orange-500 text-white font-bold rounded-md px-3 py-1">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="w-screen py-5 px-10 flex items-center gap-x-3 ">
        <div className="w-[50%] h-[600px] bg-black p-10 rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
            alt="book"
            className="object-fill h-full w-full "
          />
        </div>
        <div className="w-[50%] h-[600px] p-10 bg-orange-300 gap-y-10 rounded-xl">
          <p className="text-xl font-bold capitalize tracking-wider">title</p>
          <p className="text-xl font-bold capitalize tracking-wider">price</p>
          <p className="text-xl font-bold capitalize tracking-wider">
            sell price
          </p>
          <p className="text-xl font-bold capitalize tracking-wider">author</p>
          <p className="text-xl font-bold capitalize tracking-wider">
            language
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
