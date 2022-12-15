import { colorList } from "@/utils/data/GlobalVariables";

/**
 * Given the size of the color map of types, it parses to RGB the color given the rest between
 * the division of the current size and the size of the color list in the color list to RGB color.
 * Then, it darkens the color a 4% and parses it back to hex value.
 * In case something went wrong, it will return black or the first color of the color list.
 * @param currentSize length of the color map
 */
export const newColor: (currentSize: number) => string = (currentSize) => {
  // Gets the corresponding color to the new element
  const color = colorList[currentSize % colorList.length];
  // Parses to RGB
  const rgbColorGiven = hexToRgb(color);
  // Sets the value that will represent the 4%
  let quantityToDark = 20;
  const numberOfTimesListWasIterated = currentSize / colorList.length;
  quantityToDark *= Math.trunc(numberOfTimesListWasIterated);
  // Checks that there are enough colors
  if (numberOfTimesListWasIterated >= 1) {
    //Each 3 times the list is iterated, the value representing a 4% will be incremented by 1
    numberOfTimesListWasIterated % 3 === 0
      ? (quantityToDark += 1)
      : quantityToDark;
    // If there is no color given black will be returned
    if (rgbColorGiven) {
      rgbColorGiven.r -= quantityToDark;
      rgbColorGiven.g -= quantityToDark;
      rgbColorGiven.b -= quantityToDark;
      return rgbToHex(
        rgbColorGiven.r > 0 ? rgbColorGiven.r : 0,
        rgbColorGiven.g > 0 ? rgbColorGiven.g : 0,
        rgbColorGiven.b > 0 ? rgbColorGiven.b : 0
      );
    } else {
      return "black";
    }
  } else {
    return colorList[currentSize];
  }
};

/**
 * Parses a hex color into a rgb object
 * @param hexColor
 */
const hexToRgb: (
  hexColor: string
) => { r: number; b: number; g: number } | null = (hexColor) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hexColor = hexColor.replace(
    shorthandRegex,
    function (m: string, r: string, g: string, b: string) {
      return r + r + g + g + b + b;
    }
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Passes an rgb color to hex color
 * @param r
 * @param g
 * @param b
 */
const rgbToHex: (r: number, g: number, b: number) => string = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
