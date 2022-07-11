let numOfBars = document.getElementById("slider").value;
let minRange = 1;
let maxRange = document.getElementById("slider").value;
let heightFactor = 10;
let barsContainer = document.getElementById("barsContainer");
let slider = document.getElementById("slider");
let speed = document.getElementById("speed");
let speedFactor = 100;
let select_algo = document.getElementById("algo");
let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let unsorted_array = new Array(numOfBars);






function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray() {
    let array = new Array(numOfBars);
    for (let i = 0; i < numOfBars; i++) {
        array[i] = randomNum(minRange, maxRange);
    }

    return array;
}

function renderBars(array) {
    for (let i = 0; i < numOfBars; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        let data = document.createTextNode(array[i]);
        bar.appendChild(data);
        barsContainer.appendChild(bar);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
});

slider.addEventListener("input", function () {
    numOfBars = document.getElementById("slider").value;
    maxRange = document.getElementById("slider").value;
    barsContainer.innerHTML = "";
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
});

speed.addEventListener("change", (e) => {
    // console.log(e.target.value);
    speedFactor = parseInt(e.target.value);
});

let algotouse = "";

select_algo.addEventListener("change", function () {
    //console.log(this.value);
    algotouse = select_algo.value;
});

randomize_array.addEventListener("click", function () {
    unsorted_array = createRandomArray();
    barsContainer.innerHTML = "";
    renderBars(unsorted_array);
});

function bubbleSortComplexity() {
    document.getElementById("timeComplexity").innerHTML = `
    <h1>Complexity: </h1>

    <li>Worst Case Time Complexity: O(n<sup>2</sup>)</li>
    <li>Average Case Time Complexity: O(n<sup>2</sup>)</li>
    <li>Best Case Time Complexity:    O(n)</li>
    <li>Space Complexity:             O(1)</li>`;
}
function SelectionSortComplexity() {
    document.getElementById("timeComplexity").innerHTML = `
    <h1>Complexity: </h1>

    <li>Worst Case Time Complexity: O(n<sup>2</sup>)</li>
    <li>Average Case Time Complexity: O(n<sup>2</sup>)</li>
    <li>Best Case Time Complexity:    O(n<sup>2</sup>)</li>
    <li>Space Complexity:             O(1)</li>`;
}
function InsertionSortComplexity() {
    document.getElementById("timeComplexity").innerHTML = `
    <h1>Complexity: </h1>

    <li>Worst Case Time Complexity: O(n<sup>2</sup>)</li>
    <li>Average Case Time Complexity: O(n<sup>2</sup>)</li>
    <li>Best Case Time Complexity:    O(n)</li>
    <li>Space Complexity:             O(1)</li>`;
}
function quickSortComplexity() {
    document.getElementById("timeComplexity").innerHTML = `
    <h1>Complexity: </h1>

    <li>Worst Case Time Complexity: O(n<sup>2</sup>)</li>
    <li>Average Case Time Complexity: O(nlogn)</li>
    <li>Best Case Time Complexity:    O(nlogn)</li>
    <li>Space Complexity:             O(logn)</li>`;
}
function mergeSortComplexity() {
    document.getElementById("timeComplexity").innerHTML = `
    <h1>Complexity: </h1>

    <li>Worst Case Time Complexity: O(nlogn)</li>
    <li>Average Case Time Complexity: O(nlogn)</li>
    <li>Best Case Time Complexity:    O(nlogn)</li>
    <li>Space Complexity:             O(n)</li>`;
}



sort_btn.addEventListener("click", function () {
    switch (algotouse) {
        case "bubble":
            bubbleSortComplexity();
            bubbleSort(unsorted_array);
            break;
        case "merge":
            mergeSortComplexity();
            mergeSort(unsorted_array, 0, unsorted_array.length - 1);
            break;
        case "selection":
            SelectionSortComplexity();
            SelectionSort(unsorted_array);
            break;
        case "insertion":
            InsertionSortComplexity();
            InsertionSort(unsorted_array);
            break;
        case "quick":
            quickSortComplexity();
            quickSort(unsorted_array, 0, unsorted_array.length - 1);
            break;
        default:
            bubbleSortComplexity();
            bubbleSort(unsorted_array);
            break;
    }
});


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
    let bar = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {

        let j = 0; while (j < array.length - 1 - i) {
            bar[j].style.backgroundColor = "red";
            bar[j + 1].style.backgroundColor = "blue";
            await sleep(speedFactor);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                let t = bar[j].style.height;
                bar[j].style.height = bar[j + 1].style.height;
                bar[j].innerText = array[j];
                bar[j + 1].style.height = t;
                bar[j + 1].innerText = array[j + 1];

                bar[j].style.backgroundColor = "blue";
                bar[j + 1].style.backgroundColor = "red";


                await sleep(speedFactor);


            }
            bar[j].style.backgroundColor = "aqua";
            bar[j + 1].style.backgroundColor = "aqua";
            j++;
            // await sleep(speedFactor);
        }
        bar[j].style.backgroundColor = "yellow";
        await sleep(speedFactor);

    }
}




async function InsertionSort(array) {
    let bar = document.getElementsByClassName("bar");
    bar[0].style.backgroundColor = "yellow";
    await sleep(speedFactor);
    for (let i = 1; i < array.length; i++) {
        bar[i].style.backgroundColor = "red";
        await sleep(speedFactor);
        let key = array[i];
        let j = i - 1;
        while (j >= 0) {
            bar[j].style.backgroundColor = "blue";
            await sleep(speedFactor);
            if (array[j] > key) {
                array[j + 1] = array[j];
                bar[j + 1].style.height = bar[j].style.height;
                bar[j + 1].innerText = array[j];
                bar[j + 1].style.backgroundColor = "yellow";
                bar[j].style.backgroundColor = "yellow";
                await sleep(speedFactor);
            }
            else {
                bar[j].style.backgroundColor = "yellow";
                await sleep(speedFactor);
                break;
            }
            j--;
        }
        array[j + 1] = key;
        bar[j + 1].style.height = key * heightFactor + "px";
        bar[j + 1].innerText = key;
        bar[j + 1].style.backgroundColor = "yellow";
        await sleep(speedFactor);


    }
}


async function SelectionSort(array) {
    let bar = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length; i++) {
        bar[i].style.backgroundColor = "red";
        await sleep(speedFactor);
        let minIndex = i;
        let j = i + 1;
        while (j < array.length) {

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            j++;
        }
        if (minIndex != i) {
            bar[minIndex].style.backgroundColor = "blue";
            await sleep(speedFactor);
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
            let t = bar[i].style.height;
            bar[i].style.height = bar[minIndex].style.height;
            bar[i].innerText = array[i];
            bar[i].style.backgroundColor = "blue";
            bar[minIndex].style.height = t;
            bar[minIndex].innerText = array[minIndex];
            bar[minIndex].style.backgroundColor = "red";
            await sleep(speedFactor);

        }
        bar[minIndex].style.backgroundColor = "aqua";
        bar[i].style.backgroundColor = "yellow";
        await sleep(speedFactor);
    }


}


async function partition(array, s, e) {
    let bar = document.getElementsByClassName("bar");
    bar[e].style.backgroundColor = "red";
    await sleep(speedFactor);
    let pivot = array[e];
    let i = s - 1;
    let j = s;
    while (j < e) {
        if (array[j] <= pivot) {
            i++;
            let t = array[i];
            array[i] = array[j];
            array[j] = t;
            bar[i].innerText = array[i];
            bar[j].innerText = array[j];
            t = bar[i].style.height;
            bar[i].style.height = bar[j].style.height;
            bar[j].style.height = t;

        }
        j++;
    }

    array[e] = array[i + 1];
    array[i + 1] = pivot;
    bar[e].innerText = array[e];
    bar[i + 1].innerText = pivot;
    let t = bar[e].style.height;
    bar[e].style.height = bar[i + 1].style.height;
    bar[i + 1].style.height = t;
    bar[e].style.backgroundColor = "aqua";
    bar[i + 1].style.backgroundColor = "yellow";
    await sleep(speedFactor);
    return (i + 1);
}


async function quickSort(array, s, e) {
    if (s > e) return;

    let q = await partition(array, s, e);

    await quickSort(array, s, q - 1);
    await quickSort(array, q + 1, e);


}

async function merge(a, s, e) {
    let bar = document.getElementsByClassName("bar");
    let mid = Math.floor((s + e) / 2);
    let len1 = mid - s + 1;
    let len2 = e - mid;

    let first = new Array(len1);
    let second = new Array(len2);
    let index = s;
    for (let i = 0; i < len1; i++) {
        first[i] = a[index++];
        bar[index - 1].style.backgroundColor = "red";
    }


    index = mid + 1;
    for (let i = 0; i < len2; i++) {
        second[i] = a[index++];
        bar[index - 1].style.backgroundColor = "blue";

    }
    await sleep(speedFactor);


    let i = 0;
    let j = 0;
    index = s;
    while (i < len1 && j < len2) {
        if (first[i] < second[j]) {
            a[index++] = first[i++];
            bar[index - 1].style.height = a[index - 1] * heightFactor + "px";
            bar[index - 1].innerText = a[index - 1];
        }
        else {
            a[index++] = second[j++];
            bar[index - 1].style.height = a[index - 1] * heightFactor + "px";
            bar[index - 1].innerText = a[index - 1];
        }
        bar[index - 1].style.backgroundColor = "yellow";
    }

    while (i < len1) {
        a[index++] = first[i++];
        bar[index - 1].style.height = a[index - 1] * heightFactor + "px";
        bar[index - 1].innerText = a[index - 1];
        bar[index - 1].style.backgroundColor = "yellow";
    }

    while (j < len2) {
        a[index++] = second[j++];
        bar[index - 1].style.height = a[index - 1] * heightFactor + "px";
        bar[index - 1].innerText = a[index - 1];
        bar[index - 1].style.backgroundColor = "yellow";
    }
    await sleep(speedFactor);



}

async function mergeSort(a, s, e) {

    if (s >= e) return;

    let mid = Math.floor((s + e) / 2);

    await mergeSort(a, s, mid);
    await mergeSort(a, mid + 1, e);

    await merge(a, s, e);


}
