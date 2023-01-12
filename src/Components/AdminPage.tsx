import React, { useEffect, useState } from "react";
import IconMenu from "./modules/IconMenu";
import IconViewGrid from "./modules/IconViewGrid";
import Ellipse4 from "./modules/Ellipse4";
import Ellipse8 from "./modules/Ellipse8";
import Ellipse9 from "./modules/Ellipse9";
import Ellipse10 from "./modules/Ellipse10";
import Ellipse11 from "./modules/Ellipse11";
import Ellipse5 from "./modules/Ellipse5";
import Ellipse6 from "./modules/Ellipse6";
import Ellipse7 from "./modules/Ellipse7";
import { Link, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getBooks } from "../action/Books/action";
import Book from "../@Types/Book";
import Ellipse12 from "./modules/Ellipse12";
import Ellipse13 from "./modules/Ellipse13";
import Ellipse14 from "./modules/Ellipse14";
import Ellipse15 from "./modules/Ellipse15";
import Ellipse16 from "./modules/Ellipse16";
import Ellipse17 from "./modules/Ellipse17";
import Ellipse18 from "./modules/Ellipse18";
import Ellipse19 from "./modules/Ellipse19";
import Ellipse20 from "./modules/Ellipse20";
import Ellipse21 from "./modules/Ellipse21";
interface Props {}

const AdminPage = (props: Props) => {
  let { them } = useParams();

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks({ theme: them }, setBooks); // aka setBooks(data)
  }, [them]);

  return (
    <div
      className="box-border block left-[-147px] w-[1285px] h-[692px] relative overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <p className="whitespace-pre-wrap absolute top-[100px] left-[10px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        <FormattedMessage id="affichageIcon.title" />
      </p>

      <Link to="/theme5">
        <IconMenu />
      </Link>

      <Link to="/adminpage">
        <IconViewGrid />
      </Link>

      <div className="container p-3">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-2" style={{ padding: 40 }} key={book._id}>
              <Link to={"/bookdetails/" + book._id}>
                <img
                  className="top-[125px] p-1 relative"
                  style={{
                    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.70)",
                  }}
                  src={book.coverPath}
                  alt={book.title}
                  key={book._id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
