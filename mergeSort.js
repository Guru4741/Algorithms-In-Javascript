// let arr = [1, 3, 5, 45, 6, 2, 89, 31];

function mergeSort(arr = [1, 3, 5, 45, 6, 2, 89, 31]) {
    //console.log("Before Sorting : ", arr);
    //debugger;
    if (arr.length > 1) {
        let midOfArray = arr.length / 2;
        let leftArray = [],
            rightArray = [];
        for (let i = 0; i < midOfArray; i++) {
            leftArray.push(arr[i]);
        }
        for (let i = midOfArray; i < arr.length; i++) {
            rightArray.push(arr[i]);
        }
        mergeSort(leftArray);
        mergeSort(rightArray);
        let i = j = k = 0;
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] < rightArray[j]) {
                arr[k] = leftArray[i];
                i += 1;
            } else {
                arr[k] = rightArray[j];
                j += 1;
            }
            k += 1;
        }

        while (i < leftArray.length) {
            arr[k] = leftArray[i];
            i += 1;
            k += 1;
        }
        while (j < rightArray.length) {
            arr[k] = rightArray[j];
            j += 1;
            k += 1;
        }
    }

    //console.log("After Sorting : ", arr);

}
mergeSort();