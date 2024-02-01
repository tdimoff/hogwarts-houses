import React, { useEffect, useState } from "react";
import { fetchHouses } from "../api/api";
import { IHouse } from "../interfaces/IHouse.interface";
import { Container, Paper, TextField } from "@mui/material";
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
    <Container maxWidth="md" style={{ height: 400, marginTop: 20 }}>
      <Paper
        elevation={4}
        style={{ height: "100%", width: "100%", padding: "20px" }}
        className="p-4"
      >
        <TextField
          id="search"
          label="Filter by Animal"
          type="search"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleFilterChange}
        />
        <DataGrid
          rows={filteredHouses}
          columns={columns}
          //   pageSize={50}
          // rowsPerPageOptions={[5]}
          checkboxSelection
          className="p-4"
        />
        <CreateHouseModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </Paper>
    </Container>
  );
};

export default HouseTable;
