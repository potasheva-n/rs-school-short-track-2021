/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = String(n).split('');
  let res = 0;
  for (let i = 0; i < number.length; i++) {
    let buf = number.slice();
    buf.splice(i, 1);
    buf = Number(buf.join(''));
    if (buf > res) {
      res = buf;
    }
  }
  return res;
}

module.exports = deleteDigit;
