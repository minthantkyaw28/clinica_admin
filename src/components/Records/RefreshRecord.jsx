
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./styles.css";

const RefreshRecord = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="Button violet">Refresh Records</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">
          Are you sure?
        </AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          This action will refresh the List and load latest medical records.
        </AlertDialog.Description>
        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Action asChild>
            <button className="Button red">Yes, Refresh the List</button>
          </AlertDialog.Action>
          <AlertDialog.Cancel asChild>
            <button className="Button mauve">Cancel</button>
          </AlertDialog.Cancel>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default RefreshRecord;
