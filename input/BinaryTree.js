// 结点结构
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 普通二叉树，形状：
//         10
//        /  \
//       5   15
//      / \  / \
//     3  8 12  17
//    /\  /  \
//   1 4 7   13
let root = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3,
            left: {
                val: 1, left: null, right: null
            },
            right: {
                val: 4, left: null, right: null
            }
        },
        right: {
            val: 8,
            left: {
                val: 7, left: null, right: null
            },
            right: null
        }
    },
    right: {
        val: 15,
        left: {
            val: 12,
            left: null,
            right: {
                val: 13, left: null, right: null
            }
        },
        right: {
            val: 17, left: null, right: null
        }
    }
};

// 只有左子树, 形状：
//        10
//       /
//      5
//     /
//    6
let leftTree = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: null,
    },
    right: null,
};

// 只有右子树, 形状：
//        10
//          \
//          5
//           \
//            6
let rightTree = {
    val: 10,
    right: {
        val: 5,
        right: {
            val: 6,
            left: null,
            right: null,
        },
        left: null,
    },
    left: null,
};
// 二叉搜索树，形状：
//          5
//        /  \
//       2    8
//      / \  /
//     1  4 6
let searchTree = {
    val: 5,
    left: {
        val: 2,
        left: {
            val: 1, left: null, right: null
        },
        right: {
            val: 4, left: null, right: null
        }
    },
    right: {
        val: 8,
        left: {
            val: 6, left: null, right: null
        },
        right: null
    }
};

// B是A的子结构
let ATree = {
    val: 8,
    left: {
        val: 8,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 2,
            left: {
                val: 4,
                left: null,
                right: null,
            },
            right: {
                val: 7,
                left: null,
                right: null,
            }
        }
    },
    right: {
        val: 7,
        left: null,
        right: null,
    }
};
let BTree = {
    val: 8,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 2,
        left: null,
        right: null,
    }
};
module.exports = {
    TreeNode, root, searchTree, leftTree, rightTree, ATree, BTree
};