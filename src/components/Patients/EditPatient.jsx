import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../../App.css";

const EditPatient = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Edit</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            Edit Patient Info to the System
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Click Done when you are done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="nrc">
              NRC
            </label>
            <input className="Input" id="name" defaultValue="nrc" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="name" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Email
            </label>
            <input
              className="Input"
              id="username"
              defaultValue="example@gmail.com"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Phone
            </label>
            <input className="Input" id="username" defaultValue="09xxxxxxxx" />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Password
            </label>
            <input className="Input" id="username" defaultValue="password" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Confirm Password
            </label>
            <input className="Input" id="username" defaultValue="password" />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Done</button>
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

export default EditPatient;
