import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
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
import { addUser } from "../../../action/Users/action";

interface UserAddPropsType {
  refresh: () => void;
}

const UserAdd = (props: UserAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // form state for modal.

  // form states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = () => {
    const newUser = {
      username,
      password,
    };
    addUser(newUser, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Button
        className="w-[50px] h-[50px] top-[-210px] left-[880px] absolute"
        style={{ backgroundColor: "#deb887", border: 0 }}
        size="lg"
        onClick={() => setIsOpened(true)}
      >
        <FontAwesomeIcon icon={faAdd} />
      </Button>
      <Modal
        className="font-['Poppins']"
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <Form onSubmit={(e) => submit()}>
          <ModalHeader
            toggle={() => setIsOpened(!isOpened)}
            style={{ backgroundColor: "gray", color: "white" }}
          >
            <FormattedMessage id="users.add.dialog.title" />
          </ModalHeader>
          <ModalBody>
            <FormGroup floating>
              <Input
                value={username}
                id="username"
                name="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
              }}
              type="submit"
              disabled={!username || !password}
            >
              <FormattedMessage id="button.confirm" />
            </Button>{" "}
            <Button
              style={{
                backgroundColor: "lightgray",
                border: 0,
              }}
              onClick={() => setIsOpened(false)}
            >
              <FormattedMessage id="button.cancel" />
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default UserAdd;
