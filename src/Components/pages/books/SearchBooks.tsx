import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
import Book from "../../../@Types/Book";

const SearchBooks = () => {
  let { search } = useParams(); // params for search books.

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book/search/" + search, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        console.log(data);

        setBooks(data);
      })
      .catch((e) => {
        console.log(e.response.data.messagee);
      });
  }, [search]); // function for search bar.

  return (
    <div className="container p-3 books">
      <div className="row">
        {books.map((book) => (
          <div className="col-3" key={book._id}>
            <br />
            <Card
              style={{
                height: 296,
                width: 200,
                marginTop: 55,
                border: 0,
                marginBottom: -15,
              }}
            >
              <Link to={"/book/" + book._id}>
                <CardImg
                  alt={book.title}
                  src={book.coverPath}
                  top
                  width="100%"
                />
              </Link>
            </Card>
            <img src="/img/raff.jpg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
