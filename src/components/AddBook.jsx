import { Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = ({ books, setBooks }) => {
  let navigate = useNavigate();

  // initial state
  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    lang: "",
    price: "",
    sale_price: "",
  });

  // handling the inputs with key & value
  const handleInputChange = (key, value) => {
    setAddBook((prevAddBook) => ({
      ...prevAddBook,
      [key]: value,
    }));
  };

  const handleAdd = () => {
    // when button clicked, the main state update happens
    setBooks((prevBooks) => [
      ...prevBooks,
      { id: Math.floor(Math.random() * 1000), ...addBook },
    ]);

    // empty the inputs
    setAddBook({
      title: "",
      author: "",
      lang: "",
      price: "",
      sale_price: "",
    });

    // navigate to home
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-y-3 p-20 justify-center items-center">
      <p className="py-10 font-bold text-2xl">
        Add the Book details in the form
      </p>
      <form className="flex flex-col gap-y-4">
        <Input
          placeholder="Enter the book title here.."
          size="large"
          className="w-[550px]"
          // onChange={(e) => setAddBook({ ...addBook, title: e.target.value })}
          onChange={(e) => handleInputChange("title", e.target.value)}
          value={addBook.title}
        />
        <Input
          placeholder="Enter the language here.."
          size="large"
          className="w-[550px]"
          // onChange={(e) => setAddBook({ ...addBook, lang: e.target.value })}
          onChange={(e) => handleInputChange("lang", e.target.value)}
          value={addBook.lang}
        />
        <Input
          placeholder="Enter the author here.."
          size="large"
          className="w-[551px]"
          // onChange={(e) => setAddBook({ ...addBook, author: e.target.value })}
          onChange={(e) => handleInputChange("author", e.target.value)}
          value={addBook.author}
        />
        <Input
          placeholder="Enter the price here.."
          size="large"
          className="w-[550px]"
          // onChange={(e) => setAddBook({ ...addBook, price: e.target.value })}
          onChange={(e) => handleInputChange("price", e.target.value)}
          value={addBook.price}
        />
        <Input
          placeholder="Enter the sale price here.."
          size="large"
          className="w-[550px]"
          // onChange={(e) =>
          //   setAddBook({ ...addBook, sale_price: e.target.value })
          // }
          onChange={(e) => handleInputChange("sale_price", e.target.value)}
          value={addBook.sale_price}
        />
      </form>

      <button
        className="bg-blue-400 px-2 py-2 w-[550px] font-bold rounded-md text-white"
        onClick={handleAdd}
        type="button"
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
