/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  /**
   * Compares two TreeNode's
   * @param {TreeNode} root1
   * @param {TreeNode} root2
   * @return {boolean}
   */
  function isEqual(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return root1.val === root2.val && isEqual(root1.left, root2.right) && isEqual(root1.right, root2.left);
  }
  if (!root) return true;
  return isEqual(root.left, root.right);
};

// var isSymmetric = function(root) {
//   if (!root) return true;

//   const stack = [root.left, root.right];
//   while (stack.length) {
//       const currLeft = stack.shift();
//       const currRight = stack.shift();
//       if (!currLeft && !currRight) continue;
//       if ((!currLeft || !currRight) || currLeft.val !== currRight.val) return false;
//       stack.push(currLeft.left, currRight.right, currLeft.right, currRight.left);
//   }
//   return true;
// };

const nl3 = new TreeNode(3, null, null);
const nl4 = new TreeNode(4, null, null);
const nr3 = new TreeNode(3, null, null);
const nr4 = new TreeNode(4, null, null);

const nr2 = new TreeNode(2, nr4, nr3);
const nl2 = new TreeNode(2, nl3, nl4);
const root = new TreeNode(1, nl2, nr2);

console.log(isSymmetric(root));
// console.log(breadthFirst(root));
