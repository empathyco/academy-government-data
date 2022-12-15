import { filterType } from "@/models/DataType";

const endpoint = "http://localhost:8080/query/governmentdata/";
//export const searchEndpoint: string = "search?query=";
const compulsoryExtension = "lang=en";
const tagEndpoint = "field-values?";
export const addFilter: (filter: filterType) => string = (filter) =>
  filter.selected ? `&filter=${filter.type}:${filter.value}` : "";

export const tagCall: (param: string) => string = (param) =>
  endpoint + tagEndpoint + compulsoryExtension + "&attribute=" + param;
