let num = prompt('Enter a three digit number');

while (num.length != 3 || isNaN(num)) {
   alert('Number is not correct');
   num = prompt('Enter a three digit number');
}

a = num[0];
b = num[1];
c = num[2];

if (a === b || a === c || b === c) {
    alert('yes');
} else {
    alert('no');
}

