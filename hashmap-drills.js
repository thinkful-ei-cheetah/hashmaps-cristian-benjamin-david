'use strict';

const HashMap = require('./hashmap');

function main() {
  const lotr = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set('hobbit', 'bilbo');
  lotr.set('hobbit', 'frodo');
  lotr.set('wizard', 'gandolf');
  lotr.set('human', 'aragon');
  lotr.set('elf', 'legolas');
  lotr.set('maiar', 'the necromancer');
  lotr.set('maiar', 'sauron');
  lotr.set('ringbearer', 'gollum');
  lotr.set('ladyoflight', 'galadriel');
  lotr.set('halfelven', 'arwen');
  lotr.set('ent', 'treebeard');

  // console.log(lotr);

  // console.log(lotr.get('maiar'));
  // console.log(lotr.get('hobbit'));

  // console.log(duplicates('google all that you think can think of'));
}

function duplicates(str) {
  let dupHash = new Map();
  let ansStr = '';

  for (let i = 0; i < str.length; i++) {
    
    if (!dupHash.has(str[i])) {
      dupHash.set(str[i]);
      ansStr += str[i];
    }
  }

  return ansStr;
}

function palindrome(str) {
  let palHash = new Map();
  let pairCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (!palHash.has(str[i])) {
      palHash.set(str[i])
    } else {
      pairCounter++
      palHash.delete(str[i])
    }

  }

  if (str.length % 2 === 0) {
    return pairCounter === str.length/2
  } else {
    return pairCounter === (str.length/2) - .5
  }
}


main();

// 1. yes
// sauron, frodo
// there is only one value returned for each of the keys.
// capacity is 24 because our max load ratio was exceeded and a resize was triggered.


//2. This function shows us that multiple .set()s using the same key will override the previously set() values.

