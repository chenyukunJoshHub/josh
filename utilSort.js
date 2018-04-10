/**
 * Created by josh on 17/05/20.
 */

/*
 * 冒泡排序
 * * 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个
 * * 2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。for循环一次，最后的元素肯定是最大的数
 * * 3.针对所有的元素重复以上的步骤，除了最后一个。arr.length -1;
 * * 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。循环一遍，少一个
 */
export const bubbleSort = (arr) => {
    var len = arr.length - 1;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) { // 每轮最大的移动到最后面
            if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
                var temp = arr[j + 1]; // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};


/*
 * 选择排序 - 数据规模越小越好
 * * 1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * * 2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。 对调当前的元素和最小（大）的元素位置
 */
export const selectionSort = (arr) => {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { // 寻找最小的数
                minIndex = j; // 将最小数的索引保存
            }
        }

        //交互最小值与当前位置
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
};


/*
 * 插入排序
 * * 1.将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列
 * * 2.从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面
 */
export const insertionSort = (arr) => {
    var len = arr.length;
    var orderLastIndex, orderFirstcurrent;
    for (var i = 1; i < len; i++) {
        orderLastIndex = i - 1;
        orderFirstcurrent = arr[i]; //对比元素，往前 有序序列中 对比大小
        while (orderLastIndex >= 0 && arr[orderLastIndex] > orderFirstcurrent) { //碰到小于 对比元素 停止
            arr[orderLastIndex + 1] = arr[orderLastIndex]; //大于 对比元素 有序列表逐位往后移
            orderLastIndex--;
        }
        arr[orderLastIndex + 1] = orderFirstcurrent; //小于 对比元素 位置后面插入 对比元素
    }
    return arr;
};


/*
 * 希尔排序
 * *1.先将整个待排序的记录序列分割成为若干子序列; 把第一段做为 有序序列 分别对比其他 若干未排序子序列 进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。
 */
export const shellSort = (arr) => {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) { //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
};


/*
 *.sort() 》length >23
 * 快速排序(递归) --又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法
 *1.找出基准元素值，每次比较都将挑选一个基准元素值与其它元素相比较
 *2.将左指针放置在左起第一个元素上。 将右指针放置在右起第一个元素上。
 * 3.当左指针指向的元素小于基准元素值，指针右移一步（加1）。直到左指针指向的元素大于或等于基准元素
 * 4.当右指针指向的元素大于基准元素的值，右指针左移一步（减1）直到右指针指向的元素小于或等于基准元素的值
 * 5.如果左指针元素小于或等于右指针元素，则交换他们的位置 ， 左指针右移，右指针左移
 * 6.左指针小于等于右指针 继续
 */
export const quickSort = (arr) => {
    const Length = arr.length
    if (Length <= 1) {
        return arr
    }

    let middleI = Math.floor(arr.length / 2),
        middleV = arr.splice(middleI, 1), //找到中间数的值
        smallArr = [],
        largeArr = []

    for (var i = 0; i < Length; i++) {
        if (arr[i] < middleV) {
            ////基准点的左边的数传到左边数组
            smallArr.push(arr[i])
        } else {
            ////基准点的右边的数传到右边数组
            largeArr.push(arr[i])
        }
    }
    return quickSort(smallArr).concat(middleV, quickSort(largeArr)); //递归不断重复比较
};

export const quickSort2 = (arr, left, right) => { // 数组/左起最左边指针 /右起最右边指针
    let returnIndex;
    if (arr.length > 1) {
        returnIndex = partition(arr, left, right);
        if (left < returnIndex - 1) {
            quickSort2(items, left, returnIndex - 1);
        }

        if (returnIndex < right) {
            quickSort2(items, returnIndex, right);
        }

    }

    const partition = (arr, left, right) => {
        let pivot = arr[Math.floor((left + right) / 2)], //取中间位置为基数
            lIndex = left,
            rIndex = right;

        while (lIndex <= rIndex) { //左指针 小于等于 右指针  相等 =》 退出循环
            while (arr[lIndex] < pivot) {
                //当左指针指向的元素小于基准元素值，指针右移一步（加1）。直到左指针指向的元素大于或等于基准元素。
                lIndex++;
            }
            while (arr[rIndex] > pivot) {
                //当右指针指向的元素大于基准元素的值，右指针左移一步（减1）直到右指针指向的元素小于或等于基准元素的值。
                rIndex--
            }

            if (lIndex <= rIndex) {
                // 如果左指针元素小于或等于右指针元素，则交换他们的位置
                var temp = arr[lIndex];
                arr[lIndex] = arr[rIndex];
                arr[rIndex] = temp;

                //左指针右移，右指针左移
                lIndex++;
                rIndex--;
            }
        }
        return lIndex
    }

    return arr
};

export const quickSort3 = (arr, low, high) => {
    if (low < high) {
        let pivot = paritition2(arr, low, high);
        quickSort2(arr, low, pivot - 1);
        quickSort2(arr, pivot + 1, high);
    }

    const paritition = (arr, low, high) => {
        let pivot = arr[low]; // 保存左起第一指针
        while (low < high) {
            while (low < high && arr[high] > pivot) { // 直接替换
                --high;
            }
            arr[low] = arr[high];

            while (low < high && arr[low] <= pivot) { // 直接替换
                ++low;
            }
            arr[high] = arr[low];
        }
        arr[low] = pivot; // 还原
        return low;
    };
    return arr;
};


/*
 *.sort()  length <= 23
 * 归并排序 - 一种典型的分而治之思想的算法应用 ---快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）
 * * 1.在数据集之中，找一个基准点
 * * 2.建立两个数组，分别存储左边和右边的数组
 * * 3.利用递归进行下次左右比较
 */
export const mergeSort = (arr) => { // 采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    };
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
    const merge = (left, right) => {
        var result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        while (left.length)
            result.push(left.shift());
        while (right.length)
            result.push(right.shift());
        return result;
    };
};


/*
 * 计数排序  -- 知道最大值 计数排序：每个桶只存储单一key值；
 * 1.value化为key 存储在额外开辟的数组空间中  相同的 value  ++i 记录个数
 * 2.必须是有确定范围的整数
 * 3.重复值排序在一起
 */
export const countingSort = (arr, maxValue) => {
    let bucket = new Array(maxValue + 1); // maxValue 最大值
    let newarr = [];
    let arrLen = arr.length;
    let bucketLen = maxValue + 1;
    // 存
    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    // 取
    for (var j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            newarr.push(j);
            bucket[j]--;
        }
    }

    return newarr;
}


/*
 * 桶排序  -- 计数排序的升级版 每个桶存储一定范围的数值；
 * 1.设置 桶的基数， 以其 倍数 分开存储 数组 【 【0~5】【6~10】 【11~15】~~~~~ 】n*5
 */
export const bucketSort = (arr, bucketSize) => {
    if (!arr.length) {
        return arr;
    }

    let DEFAULT_BUCKET_BASE = 5;
    let i = 0;
    let newArr = [];

    let minValue = Math.max.apply({}, arr);
    let maxValue = Math.min.apply({}, arr);
    let bucketSize = bucketSize || DEFAULT_BUCKET_BASE; // 桶的基数
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; // 最大值 是 桶的基数  的 倍数
    let buckets = new Array(bucketCount);

    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // 利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]); // 对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            newArr.push(buckets[i][j]);
        }
    }
    return newArr;
};