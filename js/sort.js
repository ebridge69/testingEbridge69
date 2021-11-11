onload = function() {
    var parent = document.getElementById("shuffle");
    var divs = parent.children;
    var frag = document.createDocumentFragment();
    while (divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    parent.appendChild(frag);
}

function checkSort() {
    var parent = document.getElementById("shuffle");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");

    var correctOrder = ["one", "two", "three", "four", "five"];

    alert(correctOrder[0])

//     if (one == correctOrder) {
//         alert("yey")
//     }else {
//         alert("haha")
//     }
}

    

    // var toSort = document.getElementById('shuffle').children;

    // toSort = Array.prototype.slice.call(toSort, 0);

    // toSort.sort(function(a, b) {
    // var aord = +a.id.split('-')[1];
    // var bord = +b.id.split('-')[1];
    // return aord - bord;
    // });