import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../../App.css";

import { useDispatch, useSelector } from "react-redux";
import { registerHospitalfunc } from "../../store/reducers/registerHospitalReducers";
// import { useNavigate } from "react-router-dom";

const AddHospital = () => {
  //Input data handle
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  // const [ConfirmPassword, setConfirmPassword] = useState("");

  // const [samePassword, setSamePassword] = useState("");

  // const navigate=useNavigate();

  const dispatch = useDispatch();

  //redux state
  const { loading, error } = useSelector((state) => state.registerHospital);

  const handleRegisterDoctor = (e) => {
    e.preventDefault();
    // if(password===ConfirmPassword){

    // setSamePassword(true);
    let registerDate = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      password: password,
    };



    dispatch(registerHospitalfunc(registerDate)).then((result) => {
      if (result.payload) {
       
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPassword("");
        // setConfirmPassword("");
        location.reload();
      }
    });
    // }else{
    //   setSamePassword(false);
    // }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Add Hospital</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Hospital</Dialog.Title>
          <Dialog.Description className="DialogDescription red">
            {error}
            {/* {!samePassword && <p>Type the password correctly</p>} */}
          </Dialog.Description>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input
              className="Input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="email">
              Email
            </label>
            <input
              className="Input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="phone">
              Phone
            </label>
            <input
              className="Input"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="qualification">
              Address
            </label>
            <input
              className="Input"
              id="qualification"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="password">
              Password
            </label>
            <input
              className="Input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          {/* <fieldset className="Fieldset">
            <label className="Label" htmlFor="ConfirmPassword">
              Confirm Password
            </label>
            <input
              className="Input"
              id="ConfirmPassword"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </fieldset> */}

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green" onClick={handleRegisterDoctor}>
                {loading ? "Loading..." : "Add"}
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddHospital;
