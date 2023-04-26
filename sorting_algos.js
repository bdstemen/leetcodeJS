const selectionSort = function(arr) {
  for (let i = 0;  i < arr.length; i++) {
    let min = Infinity;
    let minIndex;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

const quickSort = function(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}



const mergeSort = function(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = function(left, right) {
  let merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) merged.push(left.shift());
    else merged.push(right.shift());
  }

  return [...merged, ...left, ...right];
};

console.log(selectionSort([3, 2, 1, 5, -3, 0, 9]))