import React, { useEffect, useState } from "react";
import { fetchHouses } from "../api/api";
import { IHouse } from "../interfaces/IHouse.interface";
import { Button, Container, Paper, TextField, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CreateHouseModal from "./CreateHouseModal";

const HouseTable = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchHouses().then((res) => setHouses(res.data));
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(event.target.value.toLowerCase());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredHouses = houses.filter((house) =>
    house.animal.toLowerCase().includes(filterTerm)
  );

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "animal", headerName: "Animal", width: 150 },
    { field: "ghost", headerName: "Ghost", width: 150 },
    { field: "commonRoom", headerName: "Common Room", width: 200 },
  ];

  return (
    <Container maxWidth="md" className="mt-6">
      <Paper elevation={4} className="p-6">
        <Typography variant="h4" className="text-center">
            Hogwarts Houses
        </Typography>
        <TextField
          id="search"
          label="Filter by Animal"
          type="search"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleFilterChange}
          className="mt-4"
        />
        <DataGrid rows={filteredHouses} columns={columns} className="p-4" />
        <Box className="flex justify-end mt-6">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(true)}
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
