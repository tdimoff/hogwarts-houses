import { useForm } from "react-hook-form";
import { IHouse } from "../interfaces/IHouse.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { validationSchema } from "../schemas/house.schema";
import { postHouse } from "../api/api";

interface IHouseFormProps {
  onClose: () => void;
}

const HouseForm = ({ onClose }: IHouseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IHouse>({
    mode: "all",
    resolver: yupResolver(validationSchema as any),
    defaultValues: {
      name: "",
      animal: "",
      ghost: "",
      commonRoom: "",
    } as IHouse,
  });

  const onSubmit = (data: IHouse) => {
    postHouse(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <FormControl error={!!errors.animal} fullWidth margin="normal">
        <Select
          native
          id="animal"
          label="Animal"
          variant="outlined"
          {...register("animal")}
        >
          <MenuItem value="giraffe">giraffe</MenuItem>
          <MenuItem value="dolphin">dolphin</MenuItem>
          <MenuItem value="armadillo">armadillo</MenuItem>
          <MenuItem value="unicorn">unicorn</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="ghost"
        label="Ghost"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("ghost")}
        error={!!errors.ghost}
        helperText={errors.ghost?.message}
      />
      <TextField
        id="commonRoom"
        label="Common Room"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("commonRoom")}
        error={!!errors.commonRoom}
        helperText={errors.commonRoom?.message}
      />
      <Button
        onClick={() => {
          reset();
          onClose();
        }}
      >
        Cancel
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default HouseForm;
