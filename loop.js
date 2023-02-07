var roastGiven = 0;

while (roastGiven <= 7) {
    console.log('roast den');
    console.log(roastGiven);
    roastGiven++;
}



// find all even number
var number = 2;

while (number <= 10) {
    console.log(number);
    number += 2;
}




// find all odd number 
var number = 1;

while (number <= 10) {
    console.log(number);
    number +=2;
}






// for is the short version of while
for (var i = 0; i < 7; i += 2) {
    console.log(i);
}






// find element of an array by i index
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41];

for (var i = 0; i < 7; i++) {
    var number = numbers[i];
    console.log(number);
}

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
}

var myItems = ['bottle', 'mouse', 'sunglass', 'pen'];

for (var i = 0; i < myItems.length; i++) {
    var item = myItems[i];
    console.log(item);
}




// break the loop
for (var i = 1; i < 20; i++) {
    console.log(i);
    if (i > 10) {
        break;
    }
}




var myItems = ['bottle', 'mouse', 'sunglass', 'pen'];

// break means stop
for (var i = 0; i < myItems.length; i++) {
    var item = myItems[i];
    if (item == 'sunglass') {
        break;
    }
    console.log(item);
}

// continue means skip
for (var i = 0; i < myItems.length; i++) {
    var item = myItems[i];
    if (item == 'mouse') {
        continue;
    }
    console.log(item);
}





// reverse way loop
for (var i = 10; i > 1; i--) {
    console.log(i);
}