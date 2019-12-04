'use strict';

// Problem Description at -> https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // First approach
    let count = 0;
    for (let i = 0; i < J.length; i++) {
<<<<<<< HEAD
        count += [...S].reduce((a, c) => {
            return (J[i] == c) ? ++a : a;

        }, 0);
=======
        count += [...S].reduce((a, c) => (J[i] == c) ? a + 1 : a, 0);
>>>>>>> b9a8ac7658857e5fbfe29c7fefaea39100f44a7c
    }
    
    return count;
};

// var numJewelsInStones = function(J, S) {
//     // Second approach
//     let count = 0;
//     for (let i = 0; i < J.length; i++) {
//         for (let j = 0; j < S.length; j++) {
//             if (J[i] == S[j]) {
//                 count++;
//             }
//         }
//     }
    
//     return count;
// };


console.log(numJewelsInStones('aA', 'aAAbbbb'));  // 3
console.log(numJewelsInStones('ebd', 'bbb'));  // 3
