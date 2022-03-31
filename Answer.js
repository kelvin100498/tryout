// let anagram = 'aaz, zza';
// let anagramPisah =anagram.split(',');

// function anagramCheck(a, b) {
//   let panjangA = a.length;
//   let panjangB = b.length;

//   if (panjangA !== panjangB) {
//     return false;
//   }
//   let string1 = a.split('').sort().join('');
//   let string2 = b.split('').sort().join('');
  

//   if (string1 === string2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(anagramCheck('nagram', 'nagaram'));

// let a= 10
// let b = 5

// a = a + b   
// b = a - b
// a = a - b

//TO kedua
//Cases :
//- create a function that accept single parameter. the parameter will be an array of integer
//- your function should be able to count the unique value inside the array
//- examples:
// - `countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))` => 7
//- `countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]))` => 4
//- `countUniqueValues([]))` => 0

// const Unik = (a) => {
//   let test = [...new Set(a)].length
//   return test
// };

// console.log(Unik([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

const Unik = (a) => {
  for (let i = 0; i <= a.length; i++) {
    if (a.indexOf(a[i]) === i) {
      console.log(a[i]);
    }
  }
};
console.log(Unik([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));




