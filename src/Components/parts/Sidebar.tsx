import axios from "axios";
import { useState, ChangeEvent } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "../parts/Sidebar.css";

const Sidebar = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
        navigate("/home");
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

  return (
    <div className=" absolute top-[-108px] left-0 rounded-tr-[57px]">
      <ProSidebar>
        <Menu>
          <SubMenu
            className="font-['MonteCarlo']"
            title={intl.formatMessage({ id: "theme1" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/numerolo">
                <FormattedMessage id="sidebar.theme1" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/astro">
                <FormattedMessage id="sidebar.theme2" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/tarm">
                <FormattedMessage id="sidebar.theme3" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/tri">
                <FormattedMessage id="sidebar.theme4" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/bell">
                <FormattedMessage id="sidebar.theme5" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/ora g">
                <FormattedMessage id="sidebar.theme6" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/orac b">
                <FormattedMessage id="sidebar.theme7" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/j 32">
                <FormattedMessage id="sidebar.theme8" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/ref n">
                <FormattedMessage id="sidebar.theme9" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/chir">
                <FormattedMessage id="sidebar.theme10" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/mouv l">
                <FormattedMessage id="sidebar.theme11" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/int rev">
                <FormattedMessage id="sidebar.theme12" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="font-['MonteCarlo']"
            title={intl.formatMessage({ id: "theme2" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/int num">
                <FormattedMessage id="sidebar.theme13" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/int tar">
                <FormattedMessage id="sidebar.theme14" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/cul gen">
                <FormattedMessage id="sidebar.theme15" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/int astro">
                <FormattedMessage id="sidebar.theme16" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="font-['MonteCarlo']"
            title={intl.formatMessage({ id: "theme3" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/com">
                <FormattedMessage id="sidebar.theme17" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/coch">
                <FormattedMessage id="sidebar.theme18" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="font-['MonteCarlo']"
            title={intl.formatMessage({ id: "theme4" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/nat hum">
                <FormattedMessage id="sidebar.theme19" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/Boudd">
                <FormattedMessage id="sidebar.theme20" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/autr">
                <FormattedMessage id="sidebar.theme21" />
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        {localStorage.getItem("access_token") ? (
          <Button
            onClick={logout}
            style={{ borderRadius: 10 }}
            className="w-[140px] h-[60px] top-[625px] left-[50px] absolute font-['MonteCarlo']"
          >
            Quiz
            <br/>
            <FormattedMessage id="sidebar.button.logout" />
          </Button>
        ) : (
          <Button
            className="w-[140px] h-[60px] top-[625px] left-[50px] absolute font-['MonteCarlo']"
            onClick={toggleModal}
            style={{ borderRadius: 10 }}
          >
            Quiz
            <br />
            <FormattedMessage id="sidebar.button.login" />
          </Button>
        )}

        {open ? (
          <Modal
            className="font-['MonteCarlo']"
            centered
            scrollable
            isOpen={open}
            toggle={() => setOpen(false)}
          >
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
                    backgroundColor: "gray",
                    border: 0,
                  }}
                  type="submit"
                >
                  <FormattedMessage id="button.confirm" />
                </Button>
                <Button
                  style={{
                    backgroundColor: "gray",
                    border: 0,
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
      </ProSidebar>
    </div>
  );
};
export default Sidebar;
