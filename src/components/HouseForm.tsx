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
import { animals } from "../constants";
// import { postHouse } from "../api/api";

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

  const onSubmit = (data: IHouse) => {
    // postHouse(data).then(onClose);
    onClose();
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
        {errors.animal && (
          <FormHelperText>{errors.animal.message}</FormHelperText>
        )}
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
      <Box className="mt-4 md:flex md:justify-end md:space-x-4">
          <Button
            onClick={() => {
              reset();
              onClose();
            }}
            className="w-full md:w-auto py-6"
          >
            Cancel
          </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full md:w-auto"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default HouseForm;
