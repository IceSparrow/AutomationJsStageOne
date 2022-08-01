let arrOfNum = [1,6,7,8,3,4,5,6]

function bblSort (arr) {

    let i, j;
    let len = arr.length;
    let isSwapped = false;

    for (i=0; i < len; i++) {
        isSwapped = false;

        for (j=0; j < len; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true
            }
        }

        if (!isSwapped) {
            break;
        }

    }

    console.log (arrOfNum)
}

bblSort (arrOfNum)