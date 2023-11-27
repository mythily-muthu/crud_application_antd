import React from "react";
import { Link } from "react-router-dom";
import { Space, Table } from "antd";

const Home = () => {
  const columns = [
    {
      title: "Serial No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Language",
      dataIndex: "lang",
      key: "lang",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Sale Price",
      dataIndex: "sale_price",
      key: "sale_price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="text-white">
          <Link
            to={"/singlebook"}
            className="bg-[#0395FF]  px-2 py-2 rounded-md"
          >
            Show
          </Link>
          <Link
            // to={`/editbook/${id}`}
            className="bg-green-500  px-2 py-2 rounded-md"
          >
            Edit
          </Link>
          <a className=" px-2 py-2 bg-red-500 rounded-md">Delete</a>
        </Space>
      ),
    },
  ];

  const dataSource = [
    {
      key: 1,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      lang: "English",
      price: 19.99,
      sale_price: 15.99,
    },
    {
      key: 2,
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      lang: "Spanish",
      price: 24.99,
      sale_price: 19.99,
    },
    {
      key: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      lang: "English",
      price: 16.99,
      sale_price: 13.99,
    },
    {
      key: 4,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      lang: "English",
      price: 29.99,
      sale_price: 23.99,
    },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="bg-[#0395FF] h-14 text-white font-semibold text-xl w-full flex items-center justify-between px-10">
        <Link to={"/"}>
          <div className="px-3 py-5 ">
            <button className="">Book List</button>
          </div>
        </Link>
        <Link to={"/addbook"}>
          <div className="px-3 py-5 ">
            <button className="px-3 py-5">Add New Book</button>
          </div>
        </Link>
      </div>
      <div className="bg-[#343A3F] w-screen  h-screen">
        <div className="">
          <Table
            dataSource={dataSource}
            columns={columns}
            size="large"
            bodySortBg="#343A3F"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
