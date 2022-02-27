export function isPalindrome(str: string): boolean {
  console.log(str);
  console.log(str.split("").reverse().join(""));
  return str === str.split("").reverse().join("");
}
