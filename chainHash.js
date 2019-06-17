'use strict';
class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }


  set(item) {
    let key = this._hashString(item);
    let node = new Node(item);
    if (this._hashTable[key]) {
      node.next = this._hashTable[key];
    }
    this._hashTable[key] = node;
  }

  get(key) {
    let hash = this._hashString(key);
    if (!this._hashTable[hash]) return null;
    let chain = this._hashTable[hash];
    if (chain.hasOwnProperty(key)) {
      return chain[key];
    }
    return null;
  }

  remove(item) {
    let key = this._hashString(item);
    if (this._hashTable[key]) {
      if (this._hashTable[key].data === item) {
        this._hashTable[key] = this._hashTable[key].next;
      } else {
        let current = this._hashTable[key].next;
        let prev = this._hashTable[key];
        while (current) {
          if (current.data === item) {
            prev.next = current.next;
          }
          prev = current;
          current = current.next;
        }
      }
    }
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure has is unsigned - meaning non-negtive number. 
    return hash >>> 0;
  }
}

module.exports = HashMap;








class _Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(newItem, beforeItem) {
    if (this.head === null) {
      this.insertFirst(newItem);
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.val !== beforeItem) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      this.insertLast(newItem);
      return;
    }

    const tempNode = new _Node(newItem, currNode);

    prevNode.next = tempNode;
  }

  insertAfter(newItem, afterItem) {
    if (this.head === null) {
      this.insertFirst(newItem);
      return;
    }

    let currNode = this.find(afterItem);

    if (currNode === null) {
      this.insertLast(newItem);
      return;
    }

    const tempNode = new _Node(newItem, currNode.next);

    currNode.next = tempNode;
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let currPosition = 1;

    while (currPosition < position - 1) {
      currNode = currNode.next;
      currPosition++;
    }

    const tempNode = new _Node(item, currNode.next);

    currNode.next = tempNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.val === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.val !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.val !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}