import { seriesType } from "@/models/DataType";

export const seriesConstructor: seriesType = {
  content: Array({
    name: "",
    data: Array({
      name: "",
      value: 0,
    }),
  }),
};
