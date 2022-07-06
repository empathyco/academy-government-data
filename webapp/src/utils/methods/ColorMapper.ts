import { colorList } from "@/utils/data/GlobalVariables";

export const getColorFromDictionary: (
  dictionary: {
    color: string;
    type: string;
  }[],
  type: string
) => string | undefined = (dictionary, type) => {
  const dictionarySize = dictionary.length;
  if (!dictionary.some((pair) => pair.type === type)) {
    dictionary[dictionarySize] = {
      color: getColor(dictionarySize),
      type: type,
    };
  }
  return dictionary.filter((pair) => pair.type === type)[0].color;
};

export const getColor: (size: number) => string = (size) => {
  size = size % colorList.length;
  return colorList[size];
};
