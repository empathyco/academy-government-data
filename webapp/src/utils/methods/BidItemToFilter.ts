import { filterType } from "@/models/DataType";
import { APIResponseType } from "@/models/APIResponseType";

export const fromItemToFilters: (
  item: APIResponseType
) => (filterType | null)[] = (item) => {
  return [
    fromParamToFilter(item.region_impacto, "region_impacto"),
    fromParamToFilter(item.organo, "organo"),
    fromParamToFilter(item.administracion, "administracion"),
    fromParamToFilter(item.departamento, "departamento"),
    fromParamToFilter(item.tipo_beneficiario, "tipo_beneficiario"),
  ];
};

const fromParamToFilter: (
  param: string,
  paramName: string
) => filterType | null = (param, paramName) => {
  if (param && param.length > 1) {
    return {
      label: param,
      modelName: "SimpleFilter",
      selected: false,
      id: param,
      value: param,
      facetId: paramName,
      type: paramName,
      totalResults: 1,
    };
  } else {
    return null;
  }
};
