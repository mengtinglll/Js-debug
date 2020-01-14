/**
 *从上往下打印出二叉树的每个节点，同层节点从左至右打印
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//传入二叉树头结点
function PrintFromTopToBottom(root)
{
    if ( !root ) return false;//如果头结点为空、返回假
    let result = []; //创建一个数组存放结果
    let tree = []; //创建一个数组存放二叉树
    tree.push(root); //先传入头结点
    // 当tree数组长度不为空
    while( tree.length ){
        let node = tree.shift();    // 将数组第一个结点放到node中   
        result.push(node.val); //将node结点的值压入result数组中
        //如果node结点左子树不为空
        if( node.left ){
            tree.push(node.left); // 将node结点的左子树结点的值压入tree数组中
        }

        //如果node结点又子树不为空
        if( node.right ) {
            tree.push(node.right); //将node结点的右子树结点的值压入tree数组中
        }
    }
    console.log('打印二叉树：',result);
    return result; //返回result数组
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};