import { data } from "./data";
const list = data.data;
export function getCategories(params) {
  const manufacturesList = [
    ...new Set(list.map((ship) => ship.manufacturer.name)),
  ].sort();
  const classificationList = [
    ...new Set(list.map((ship) => ship.type.toUpperCase())),
  ].sort();
  const priceList = [...new Set(list.map((ship) => ship.price))].sort();
  return [manufacturesList, classificationList, priceList];
}
