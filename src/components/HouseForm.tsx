import { useForm } from "react-hook-form";
import { IHouse } from "../interfaces/IHouse.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
  Box,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { validationSchema } from "../schemas/house.schema";
import { postHouse } from "../api/api";
// import { animals } from "util";

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
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      animal: "",
      ghost: "",
      commonRoom: "",
    } as IHouse,
  });

  const animals = ["giraffe", "dolphin", "armadillo", "unicorn"];

  const onSubmit = (data: IHouse) => {
    postHouse(data).then(onClose);
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
        <InputLabel id="type-label">Animal</InputLabel>
        <Select
          native
          id="animal"
          label="Animal"
          variant="outlined"
          {...register("animal")}
        >
          {animals.map((animal) => (
            <MenuItem key={animal} value={animal}>
              {animal}
            </MenuItem>
          ))}
        </Select>
        {errors.animal && <FormHelperText>{errors.animal.message}</FormHelperText>}
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
      <Box className="flex justify-end mt-4">
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
      </Box>
    </form>
  );
};

export default HouseForm;
