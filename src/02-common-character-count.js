/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  let count = 0;
  const res = arr1.reduce((acc, item) => {
    count = acc;
    if (arr2.includes(item)) {
      count += 1;
      arr2.splice(arr2.indexOf(item), 1);
    }
    return count;
  }, 0);
  return res;
}

module.exports = getCommonCharacterCount;
