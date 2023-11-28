import React from "react";
import { Link, useParams } from "react-router-dom";
import { Space, Table } from "antd";

const Home = ({ books, setBooks }) => {
  // delete fn is written using the unique property title
  const handleDelete = (bookToDelete) => {
    console.log("id of deleted book:", bookToDelete.title);

    const updatedBooks = books.filter(
      (book) => book.title !== bookToDelete.title
    );
    setBooks(updatedBooks);
  };

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
      render: (_, record) => {
        console.log({ record });
        return (
          <Space size="middle" className="text-white">
            <Link
              to={`/singlebook/${record.id}`}
              className="bg-[#0395FF]  px-2 py-2 rounded-md"
            >
              Show
            </Link>
            <Link
              to={`/editbook/${record.id}`}
              className="bg-green-500  px-2 py-2 rounded-md"
            >
              Edit
            </Link>
            <a
              className=" px-2 py-2 bg-red-500 rounded-md"
              onClick={() => handleDelete(record)}
            >
              Delete
            </a>
          </Space>
        );
      },
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
            dataSource={books}
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
