import { useEffect, useState } from "react";
import { fetchHouses } from "../api/api";
import { IHouse } from "../interfaces/IHouse.interface";
import { Button, Container, Paper, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CreateHouseModal from "./CreateHouseModal";

const HouseTable = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchHouses().then((res) => setHouses(res.data));
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 160 },
    { field: "animal", headerName: "Animal", width: 160 },
    { field: "ghost", headerName: "Ghost", width: 160 },
    { field: "commonRoom", headerName: "Common Room", width: 160 },
  ];

  return (
    <Container maxWidth="md" className="mt-6">
      <Paper elevation={4} className="p-6">
        <Typography variant="h4" className="text-center">
          Hogwarts Houses
        </Typography>
        <DataGrid
          rows={houses}
          columns={columns}
          className="p-4 mt-8"
          autoHeight
        />
        <Box className="flex justify-end mt-5">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto"
          >
            Create House
          </Button>
        </Box>
        <CreateHouseModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </Paper>
    </Container>
  );
};

export default HouseTable;
