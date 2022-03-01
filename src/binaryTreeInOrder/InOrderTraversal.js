/**
 * Definition for a binary tree node.

 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  return !root ? [] : [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

const right = new TreeNode(2, new TreeNode(3, null, null));
const root = new TreeNode(1, null, right);

var fromArray = function (arrayInOrder) {
  const left = fromArray(arrayInOrder.slice(1));
  const right = fromArray(arrayInOrder.slice(2));
  const root = arrayInOrder[0] != null ? new TreeNode(arrayInOrder[0], left, right) : null;
  return root;
};
// RLR[1,null,2,3]
console.log(inorderTraversal(fromArray([1, null, 2, 3])));
// console.log(inorderTraversal(root));
