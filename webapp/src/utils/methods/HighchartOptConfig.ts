import { empathyBlack } from "@/utils/data/GlobalVariables";

/**
 * Given the parameters, returns a title object that will be processed by Highchart.
 * Title is compulsory, but other parameters are set by default
 * @param title of the chart
 * @param color of the title
 * @param fontFamily of the title
 * @param fontSize of the title
 */
export const titleVal: (
  title: string,
  color?: string,
  fontFamily?: string,
  fontSize?: string
) => {
  text: string;
  style: {
    color: string;
    fontFamily: string;
    fontSize: string;
  };
} = (
  title,
  color = empathyBlack,
  fontFamily = "Avenir, Helvetica, Arial, sans-serif",
  fontSize = "24px"
) => {
  return {
    text: title,
    style: {
      color: color,
      fontFamily: fontFamily,
      fontSize: fontSize,
    },
  };
};

/**
 * Displays the legend given the boolean value
 * @param display
 */
export const legendVal: (display: boolean) => { enabled: boolean } = (
  display
) => {
  return {
    enabled: display,
  };
};

/**
 * Generates an object of the tooltip
 */
export const quickTooltipVal: () => {
  headerFormat: string;
  style: {
    fontSize: number;
  };
} = () => {
  return {
    headerFormat: `<span style="font-size: 16px; font-weight: bolder ; color:${empathyBlack};">{point.key}</span><br/>`,
    style: {
      fontSize: 16,
    },
  };
};

/**
 * Function that, given the categories in a list,
 * generates an object of the categories and a crosshair
 * so that Highchart graph that uses a X axis can process it
 * @param categories to be represented
 */
export const xAxisVal: (categories: string[]) => {
  categories: string[];
  crosshair: boolean;
} = (categories) => {
  return {
    categories: categories,
    crosshair: true,
  };
};

/**
 * Function that initializes a yAxis and returns an object that
 * Highchart recognises for setting the Y axis
 */
export const yAxisVal: () => {
  min: number;
  title: string;
} = () => {
  return {
    min: 0,
    title: "",
  };
};
