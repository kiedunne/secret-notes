
const before = function(beforeFunc) {
  try {
    beforeFunc();
  } catch {
    throw new Error('Function has exception in before');
  }
};

const describe = function(desc, testFunc) {
  try {
    testFunc();
  } catch {
    throw new Error('Function has exception in describe');
  }
};

const it = function(desc, testFunc) {
  try {
    testFunc();
  } catch {
    throw new Error('Function has exception at it');
  }
};

const toEqual = function(actual, expected) {
    if(expected === actual) {
      console.log("Equal passed!", { type: "Test passed", details: {actual: actual, expected: expected} });
    } else {
      throw new Error('Not equal');
      console.log("Equal failed!", { type: "Test Failed", details: { actual: actual, expected: expected} });
    }
  };
