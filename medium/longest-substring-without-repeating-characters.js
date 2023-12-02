const currentSubstringLength = (str, startIndex) => {
  const chars = [];
  let i;
  for (i = startIndex; i < str.length; i++) {
    if (chars.includes(str[i])) {
      return i - startIndex;
    }
    chars.push(str[i]);
  }
  return i - startIndex;
};

const lengthOfLongestSubstring = (s) => {
  return Math.max(...[...s].map((_, i) => currentSubstringLength(s, i)), 0);
};
