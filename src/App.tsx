import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/parts/Sidebar";
import Navbard from "./Components/parts/Navbar";
import Books from "./Components/pages/books/Books";
import PdfFiles from "./Components/pages/PdfFiles";
import Book from "./Components/pages/books/Book";
import Users from "./Components/pages/users/User";
import BooksTable from "./Components/pages/books/admin/BooksTable";
import Home from "./Components/pages/Home";
import AffichageList from "./Components/pages/AffichageList";
import Accueil from "./Components/pages/Accueil";
import SearchBooks from "./Components/pages/books/SearchBooks";
import AffichageNor from "./Components/pages/AffichageNor";

import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import AccLang from "./Components/AccLang";
import AddUser from "./Components/AddUser";
import AddBook from "./Components/AddBook";

interface Messages {
  "login.title": string;
  "login.subtitle": string;
}
interface I18n {
  en: Record<string, string>;
  fr: Record<string, string>;
}

let allMessages: I18n = { en, fr };
const userLang: string = navigator.language.slice(0, 2);
// @ts-ignore
let messages: Record<string, string> = allMessages[userLang];

function App() {
  const [language, setLanguage] = useState<string>("fr");

  const lang = (payload: string) => {
    setLanguage(payload);
    // @ts-ignore
    messages = allMessages[payload];
  };

  return (
    <>
      <IntlProvider messages={messages} locale={language} defaultLocale="en">
        <Navbard lang={lang} />
        <Routes>
                <Route path="/" element={<Accueil />} />
               <Route path="/acclang" element={<AccLang />} />
              <Route path="/adduser" element={<AddUser />} />
               <Route path="/addbook" element={<AddBook />} />
                   {/*  <Route path="/book/:bookId" element={<Book />} />
                <Route path="/pdffiles/:bookId" element={<PdfFiles />} />
                <Route path="/admin/books" element={<BooksTable />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/affichagelist" element={<AffichageList />} />
                <Route path="/affichagenor/:them" element={<AffichageNor />} />
                <Route path="/accueil" element={<Accueil />} /> */}
              </Routes>
      </IntlProvider>
    </>
  );
}
export default App;
