import { loremData } from "../data/lorem.data";

export const loremHelper = (length: number) => {
  const loremIpsum = loremData;
  const words = loremIpsum.split(' ');
  const numWords = words.length;
  let generatedLorem = "";

  if (length <= 0) {
    return "";
  }

  for (let i = 0; i < length; i++) {
    generatedLorem += words[i % numWords] + " ";
  }

  return generatedLorem.trim();
}
