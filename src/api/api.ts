import axios from "axios";
import { IHouse } from "../interfaces/IHouse.interface";

export const api = axios.create({
  baseURL: "https://wizard-world-api.herokuapp.com/",
});

export const fetchHouses = async () => api.get("/houses");
export const postHouse = async (house: IHouse) => api.post("/houses", house);
