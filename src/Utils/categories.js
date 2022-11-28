import { data } from "./data";
const list = data.data;
export function getCategories(params) {
  const manufacturesList = [
    ...new Set(list.map((ship) => ship.manufacturer.name)),
  ];
  return manufacturesList;
}
