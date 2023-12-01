const WordAnimate = (word: string) => {
  const result = [];
  let str = "";
  for (let i = 0; i < word.length; i++) {
    str += word[i];
    result.push(str, 120);
  }
  return result;
};
