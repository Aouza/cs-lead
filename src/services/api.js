import axios from "axios";

export const api = axios.create({
  baseURL: "https://cs-lead-api.herokuapp.com/",
  // baseURL: 'http://localhost:3333/'
});

export const MenuItems = [
  { name: "Cellphone", url: "/cellphone" },
  { name: "Partners", url: "/partners" },
  { name: "Calculator", url: "/calculator" },
];
