import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../../App.css";

import { useDispatch, useSelector } from "react-redux";
import { registerPatientfunc } from "../../store/reducers/registerPatientReducers";

const AddPatient = () => {
  const [nrc, setNrc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //redux state
  const { loading, error } = useSelector((state) => state.registerPatient);

  const handleRegistePatient = (e) => {
    e.preventDefault();
    // if(password===ConfirmPassword){

    // setSamePassword(true);
    let registerDate = {
      nrc: nrc,
      name: name,
      email: email,
      phone: phone,
      address:address,
      dob: dob,
      sex:sex,
      height:height,
      weight:weight,
      password: password,
    };

    dispatch(registerPatientfunc(registerDate)).then((result) => {
      if (result.payload) {
        setNrc("");
        setName("");
        setEmail("");
        setPhone("");
        setDob("");
        setSex("");
        setHeight("");
        setWeight("");
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
        <button className="Button violet">Add Patient</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Patient</Dialog.Title>
          {error}
          {/* <Dialog.Description className="DialogDescription">
            Click Add when you are done.
          </Dialog.Description> */}
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="nrc">
              NRC
            </label>
            <input
              className="Input"
              id="name"
              value={nrc}
              onChange={(e) => setNrc(e.target.value)}
            />
          </fieldset>
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
            <label className="Label" htmlFor="username">
              Email
            </label>
            <input
              className="Input"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Phone
            </label>
            <input
              className="Input"
              id="username"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Address
            </label>
            <input
              className="Input"
              id="username"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Dob
            </label>
            <input
              className="Input"
              id="username"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Sex
            </label>
            <input
              className="Input"
              id="username"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </fieldset>
          <div>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Height
              </label>
              <input
                className="Input"
                id="username"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Weight
              </label>
              <input
                className="Input"
                id="username"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </fieldset>
          </div>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Password
            </label>
            <input
              className="Input"
              id="username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <div
            style={{
              display: "flex",
              // marginTop: 1,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green" onClick={handleRegistePatient}>
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

export default AddPatient;
