import { colorList } from "@/utils/data/GlobalVariables";

export function* nextIndex(): IterableIterator<string> {
  for (let i = 0; i < colorList.length; i++) {
    yield colorList[i];
  }
}
