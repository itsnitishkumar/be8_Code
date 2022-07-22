// ---------------------------------------------------
//exploring watch segment of chrome developer tools //
// ---------------------------------------------------

i=1;
k=10
for(let j=1; j<10; j++){
    console.log(i++)
    k--
}

// -----------------------------------
//solving sudhakar's doubt          //
// -----------------------------------

var a=Number( prompt('Enter 1st no'))
var b=Number(prompt('Enter 2nd no'))
var operator=Number(prompt('Enter any no'))

console.log(a, typeof a);
console.log(b,typeof b);
console.log(operator, typeof operator);

switch(operator){
    case 1:
        console.log('This is case 1')
        break;
    case '1':
        console.log('This is case 2')
        break;
}

// -----------------------------------
// PARAMESH DOUBT                   //
// -----------------------------------

var a
var b='A'
switch(b){
    case 'A': a+='10'
    break;
}
console.log(a);


//------------------------------------
// Question's to the learners       //
//------------------------------------

console.log(1+1);
console.log(1-1);
console.log(1+'11');
console.log(1-'1');
console.log(1+null);
console.log(1-null);
