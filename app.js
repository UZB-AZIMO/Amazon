// {1-masala
   
// try {
//         function onlyNumbers(array) {
//             return array.filter(i => i > 0)
//         }
//         console.log( onlyNumbers([-5, 6, 3, -3, false]) );
//             console.log(onlyNumbers([-12, 6, 3, -3, 5, 7, false]));
//             console.log(onlyNumbers([-12, 6, 3, -3, 5, false]));
//     } catch (error){
//         console.error("xato bor");
//     }

// }

// {2-masala

// function tenth(son){
//         return Math.floor (son / 10 ) % 10
//         }
//         console.log(tenth(123));
//         console.log(tenth(4568));
    
// }

// {3-masala

// {
//     function binary(son) {
//         if (son=== 1) return ` ${son} true`;
//         if (son === 0) return ` ${son} false`;
//         return `${son} bunday kun yo'q`;
//     }

//     console.log(binary(1));
//     console.log(binary(0));
//     console.log(binary(7));
// }

// }


// {4-masala

// {
//         function card(number, trueFalse) {
//             if (trueFalse) return number;
//             return number.slice(0, 4) + " **** **** **" + number.slice(-2);
//         }
//         console.log(card("8600 1234 5651 2589", true));
//         console.log(card("8600 5464 2332 4589", false));
//     }

// }

// {5-masala

// {
//     {
//         function checkPassword(str){
//             return `${str === "123456hello"}`
//         }
//         console.log(checkPassword(("123456")));
//         console.log(checkPassword(("123456hello")));
//     }
// }

// }

// {6-masala
 
// try {
//      function camelCase(str) {
//          return str.toLowerCase()
//                           .split(`-`)
//                    .map((text, index) => {
//                      if (index === 0) {
//                          return text;
//                      }
//                      return text.charAt(0). toUpperCase() + text.slice(1);
//                    })
//                    .join(``);
//      }
//      console.log(camelCase("kabab-case"));
//      console.log(camelCase("lorem-ipsum-dolor"));
//  } catch (error) {
//      console.error("xato bor");
//  }
 
// }

// {7-masala

// {
//         function bigAndSmall(str) {
//             let numbers = str.split(' ').map(Number);
//             let max = Math.max(...numbers);
//             let min = Math.min(...numbers);
//             return `${max} ${min}`;
//         }
    
//         console.log(bigAndSmall("1 2 3 4 5"));
//         console.log(bigAndSmall("5 25 33 44"));
//     }

// }