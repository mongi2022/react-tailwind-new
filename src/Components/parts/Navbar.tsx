import axios from "axios";
import { useState, ChangeEvent } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
} from "reactstrap";
import IconHome from "../modules/IconHome";
import IconSearch from "../modules/IconSearch";

interface NavbardInterfaceProps {
  lang: Function;
}

export default function Navbard(props: NavbardInterfaceProps) {
  const { lang } = props;

  const intl = useIntl();

  const navigate = useNavigate();
  // form states
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [search, setSearch] = useState<string>("");

  const changeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const toggleModal = (e: any) => {
    setOpen(!open);
    e.preventDefault();
  };

  const handelClose = () => setOpen(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", { username, password })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        handelClose();
        console.log(data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  }; // function for login admin.

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
    window.location.reload();
  }; // function for logout admin.

  const handleSearch = () => {
    navigate("/booksSearch/" + search);
  }; // for search bar.

  return (
    <div className="h-[50px] bg-gray-400">
      <Navbar expand="md" light responsive>
        <NavbarBrand>
          <p className="whitespace-pre-wrap absolute cursor-pointer top-[10px] left-[45px] h-[61px] w-[135px]  font-['MonteCarlo'] text-2xl leading-[normal] text-left text-white">
            <FormattedMessage id="navbar.title" />
          </p>
          <IconHome />
        </NavbarBrand>

        <Form onSubmit={(e) => e.preventDefault()}>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            className="w-[450px] h-11 absolute top-[3px] left-[270px] rounded-[20px] bg-[#e7eaec]"
            type="text"
            placeholder={intl.formatMessage({ id: "placeholder" })}
          />

          <button onClick={handleSearch}>
            <IconSearch />
          </button>
        </Form>

        <Link to="/">
          <img
            className="left-[750px] top-[6px] absolute"
            src="img/pagehome/loger.png"
            height={35}
            width={37}
            alt="accimg"
          />
        </Link>

        <Nav navbar>
          <UncontrolledDropdown
            className="left-[820px] top-[-1px] absolute"
            inNavbar
            nav
          >
            <DropdownToggle nav>
              <img
                src="/img/pagehome/traduction.png"
                alt="img"
                height={30}
                width={34}
              />
            </DropdownToggle>
            <DropdownMenu
              style={{
                backgroundColor: "lightgray",
                height: 65,
                margin: 2,
                padding: 7,
              }}
            >
              <DropdownItem
                onClick={() => {
                  lang("fr");
                }}
              >
                <img
                  src="/img/icons/la-france.png"
                  alt="img"
                  height={20}
                  width={20}
                />
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  lang("en");
                }}
              >
                <img
                  src="/img/icons/royaume-uni.png"
                  alt="img"
                  height={20}
                  width={20}
                />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {localStorage.getItem("access_token") ? (
            <>
              <UncontrolledDropdown
                className="left-[890px] top-[-3px] absolute"
                inNavbar
                nav
              >
                <DropdownToggle nav>
                  <img
                    src="/img/pagehome/settings.png"
                    alt="img"
                    height={37}
                    width={39}
                  />
                </DropdownToggle>
                <DropdownMenu
                  style={{
                    backgroundColor: "lightgray",
                    height: 75,
                    padding: 1,
                  }}
                  className="w-[20px] h-[85px] absolute"
                >
                  <DropdownItem>
                    {" "}
                    <Link
                      to="/adminp2"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <img
                        src="/img/icons/book.png"
                        alt="img"
                        height={20}
                        width={30}
                      />
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/adduser2"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <img
                        src="/img/icons/add-user.png"
                        alt="img"
                        height={20}
                        width={30}
                      />
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </>
          ) : (
            <> </>
          )}
        </Nav>

        {localStorage.getItem("access_token") ? (
          <Button
            className="w-[40px] h-[40px] left-[1440px] top-[-15px] absolute"
            onClick={logout}
            style={{
              backgroundColor: "#e6e1dc00",
              border: "none",
            }}
          >
            <img
              className="h-[35px] w-[35px] absolute"
              src="/img/pagehome/logout.png"
              alt="img"
            />
          </Button>
        ) : (
          <Button
            className="w-[40px] h-[40px] left-[1440px] top-[-17px] absolute"
            onClick={toggleModal}
            style={{
              backgroundColor: "#e6e1dc00",
              border: "none",
            }}
          >
            <img
              className="h-[45px] w-[45px] absolute"
              src="/img/pagehome/utilisateur.png"
              alt="img"
            />
          </Button>
        )}
      </Navbar>

      {open ? (
        <Modal centered scrollable isOpen={open} toggle={() => setOpen(false)}>
          <Form onSubmit={(e) => handleLogin(e)}>
            <ModalHeader
              toggle={() => setOpen(!open)}
              style={{ backgroundColor: "gray", color: "white" }}
            >
              <FormattedMessage id="modal.title.button.login" />
            </ModalHeader>
            <ModalBody>
              <FormGroup floating>
                <Input
                  value={username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={changeUsername}
                />
                <Label for="username">
                  <FormattedMessage id="user.username" />
                </Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  onChange={changePassword}
                />
                <Label for="password">
                  <FormattedMessage id="user.password" />
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                style={{
                  backgroundColor: "lightgray",
                  border: 0,
                  fontFamily: "Caveat Brush",
                }}
                type="submit"
              >
                <FormattedMessage id="button.confirm" />
              </Button>
              <Button
                style={{
                  backgroundColor: "lightgray",
                  border: 0,
                  fontFamily: "Caveat Brush",
                }}
                onClick={handelClose}
              >
                <FormattedMessage id="button.cancel" />
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
