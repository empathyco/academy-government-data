import { filterType } from "@/models/DataType";
import { APIResponseType } from "@/models/APIResponseType";

export const fromItemToFilters: (
  item: APIResponseType
) => (filterType | null)[] = (item) => {
  return [
    fromParamToFilter(item.organo, "organo"),
    fromParamToFilter(item.administracion, "administracion"),
    fromParamToFilter(item.departamento, "departamento"),
    fromParamToFilter(item.tipo_beneficiario, "tipoBeneficiario"),
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
    if (paramName === "organo") {
      return {
        label: "Sin órgano",
        modelName: "SimpleFilter",
        selected: false,
        id: "organo_vacio",
        value: "",
        facetId: "organo",
        type: "organo",
        totalResults: 1,
      };
    }
    return null;
  }
};
