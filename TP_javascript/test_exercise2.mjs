"use strict";

import {wcount, WList} from "./exercise2.mjs";

console.log(wcount('fish bowl fish bowl fish')); // do more that one test per function

const myString = 'fish salut bowl fish bowl fish';
const myList = new WList(myString);

const minWord = myList.minCountWord();
console.log(minWord); // Output: 'just'