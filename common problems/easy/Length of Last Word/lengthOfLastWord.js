var lengthOfLastWord = function (s) {
  const arr1 = s.split(/\s+/).filter((word) => word !== "");
  console.log(arr1);
  const index = arr1.length;
  const lastWord = arr1[index - 1];
  console.log(lastWord);
  console.log(lastWord.length);
};
lengthOfLastWord("   fly me   to   the moon  ");
