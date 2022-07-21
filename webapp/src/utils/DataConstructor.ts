import { seriesType } from "@/models/DataType";

/**
 * Constructor for series data that will be used in props of the chart components
 */
export const seriesConstructor: seriesType = {
  content: Array({
    name: "",
    data: Array({
      name: "",
      value: 0,
    }),
  }),
};
