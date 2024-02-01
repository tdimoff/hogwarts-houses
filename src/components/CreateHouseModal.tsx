import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import HouseForm from "./HouseForm";

interface ICreateHouseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateHouseModal = ({ isOpen, onClose }: ICreateHouseModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Create House</DialogTitle>
      <DialogContent>
        <HouseForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateHouseModal;
