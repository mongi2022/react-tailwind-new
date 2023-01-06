import React, { useRef, useEffect, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import { useNavigate, useParams } from "react-router";
import Book from "../../@Types/Book";
import { getBook } from "../../action/Books/action";
import { Button } from "reactstrap";

function PdfFiles() {
  const viewerDiv = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // for button return.

  let { bookId } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (bookId) getBook(bookId, setBook); // aka setBook(data)
  }, []);

  useEffect(() => {
    if (book && viewerDiv.current)
      WebViewer(
        {
          path: "/lib",
          initialDoc: book.pdfPath,
        },
        viewerDiv.current as HTMLDivElement
      );
  }, [book]); // function for lecteur pdf.

  return (
    <div className="webviewer" ref={viewerDiv}>
      <Button className="btn4-book" onClick={() => navigate(-1)}>
        <img
          className="img-flech"
          src="/img/icons/back grey.png"
          height={40}
          width={40}
        />
      </Button>
    </div>
  );
}

export default PdfFiles;
