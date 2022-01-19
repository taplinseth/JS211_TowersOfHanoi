'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (towerOrigin, towerDestination) => {

  //user moves block
  //check to make sure user move is allowed
  //only allow user to move smaller stone on top of larger stone or empty tower
  if (stacks[towerOrigin][stacks[towerOrigin].length -1] < stacks[towerDestination][stacks[towerDestination].length -1] || stacks[towerDestination] == 0) {
    stacks[towerDestination].push(stacks[towerOrigin].pop());
  } else {
    console.log("illegal move");  //user cannot stack larger stone ontop of smaller stone
  }
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (towerOrigin, towerDestination) => {

  // check to make sure user move is allowed
  // user cannot stack larger stone ontop of smaller stone
  // only allow user to move smaller stone on top of larger stone or empty tower
  if (stacks[towerOrigin][stacks[towerOrigin].length -1] < stacks[towerDestination][stacks[towerDestination].length -1] || stacks[towerDestination] == 0) {
    return true;
  } else {
    return false;
  }
  
}


// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {

  //check if all blocks are stacked onto tower 1 or 2
  if (stacks.b.length === 4 || stacks.a.length === 4) {
    console.log("You Win!"); //if user has won notify winner
    return true;
  } else {
    return false;
  }

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (towerOrigin, towerDestination) => {
  movePiece(towerOrigin, towerDestination);
  checkForWin();
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}