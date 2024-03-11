// Problem - Leetcode - Medium
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

function generateParenthesis(n) {
    const result = [];
     function generate(current, open, close) {
         if (current.length === 2 * n) {
             result.push(current);
             return
         }
         
         if (open < n) {
             generate(current + '(', open+1, close);
         }
         
         if (close < open) {
             generate(current + ')', open, close + 1);
         }
     }
     generate('', 0, 0);
     return result;
}

console.log(generateParenthesis(3));