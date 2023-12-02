const current = (str, startIndex, offset = 0) => {
  const palindrome = [...str.slice(startIndex, startIndex + offset + 1)];

  for (let i = 1; i < str.length - 1; i++) {
    if (str[startIndex - i] === str[startIndex + i + offset]) {
      palindrome.push(str[startIndex - i]);
      palindrome.unshift(str[startIndex - i]);
    } else {
      return palindrome.join("");
    }
  }
  return palindrome.join("");
};

const currentPalindrome = (str, startIndex) => {
  let evenPalindrome = "";

  if (str[startIndex] === str[startIndex + 1]) {
    evenPalindrome = current(str, startIndex, 1);
  }
  const oddPalindrome = current(str, startIndex);
  return evenPalindrome.length > oddPalindrome.length
    ? evenPalindrome
    : oddPalindrome;
};

var longestPalindrome = function (s) {
  if (s.length <= 2) {
    return s[0] === s[1] ? s : s[0];
  }
  return [...s].reduce(
    (state, _, i) => {
      const palindrome = currentPalindrome(s, i);
      return palindrome.length >= state[0]
        ? [palindrome.length, palindrome]
        : state;
    },
    [0, ""]
  )[1];
};
