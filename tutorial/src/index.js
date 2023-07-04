import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const author = "Taylor Jenkins Reid";
const title = "The Seven Husbands of Evelyn Hugo: A Novel";
const img = "./images/book-1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
