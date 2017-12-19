**栈和队列**

- 队列先进先出，栈先进后出

**栈和堆的区别？**

- 栈区（stack）编译器自动分配释放

- 堆区（heap）程序员分配释放,OS回收。

- 堆：树

- 栈：先进后出

**快速 排序的思想并实现一个快排？**

"快速排序"的思想很简单，整个排序过程只需要三步：

- （1）在数据集之中，找一个基准点

- （2）建立两个数组，分别存储左边和右边的数组

- （3）利用递归进行下次比较

```
 <script type="text/javascript">

        function quickSort(arr){
            if(arr.length<=1){
                return arr;//如果数组只有一个数，就直接返回；
            }

            var num = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整

            var numValue = arr.splice(num,1);//找到中间数的值
            var left = [];
            var right = [];

            for(var i=0;i<arr.length;i++){
                if(arr[i]<numValue){
                    left.push(arr[i]);//基准点的左边的数传到左边数组
                }
                else{
                   right.push(arr[i]);//基准点的右边的数传到右边数组
                }
            }

            return quickSort(left).concat([numValue],quickSort(right));//递归不断重复比较
        }

        alert(quickSort([32,45,37,16,2,87]));//弹出“2,16,32,37,45,87”

    </script>
```

**二叉树bfs,dfs**

*bfs=队列，dfs=栈*
```
<!-- 
            A
           / \
         B     C
        / \   / \     
       D   E  F  H    
 -->     
         
var testTree = {
    value: 'A',
    childNodes:[{
        value: 'B',
        childNodes:[{
            value: 'D'
        },{
            value: 'E'
        }]
    },{
        value: 'C',
        childNodes:[{
            value: 'F'
        },{
            value: 'H'
        }]
    }] 
}
function bfs(root){
    var queue = []
    queue.push(root)
    while(queue.length>0){
        var node = queue.shift()
        console.log(node.value)

        //左右子树入队
        node.childNodes && node.childNodes.map(function(item, key){
            queue.push(item)
        })
    }
}
bfs(testTree)//A B C D E F H

function dfs(root){
    var stack = []
    stack.push(root)
    while(stack.length>0){
        var node = stack.pop()
        console.log(node.value)

        //右子树入栈，左子树入栈
        if(node.childNodes && node.childNodes[1]){
            stack.push(node.childNodes[1])
        }
        if(node.childNodes && node.childNodes[0]){
            stack.push(node.childNodes[0]) 
        }
    }
}
dfs(testTree)//A B D E C F H
```

**二分查找**
```
var arr=[0,1,2,3,4,5,6,7,8,9]
function binarySearch(arr,target){
    var left=0
    var right=arr.length
    while(left<right){
        var middle = parseInt((left+right+1)/2)
        if(arr[middle]===target){
            return middle
        }
        if(arr[middle]<target){
            left = middle
        }
        if(arr[middle]>target){
            right = middle
        }
    }
    return -1;
}
binarySearch(arr, 6)

```



























