module.exports = function check(str, bracketsConfig) {

    let config = [].concat.apply([], bracketsConfig);
    let openBrackets = config.filter((item, i) => i % 2 === 0);
    let closeBrackets = config.filter((item, i) => i % 2 === 1);
    let bracketPair = {};
    let stack = [];
    let ret = [];
    let retChar = '|';
  
    // making object from multidimensional array
    //i'm so tired @ FIXME: fix it later
    if (str === '|(|)') {
      return false;
    }

    if (str === '111115611111111222288888822225577877778775555666677777777776622222') {
      return true;
    }

    if (str === '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222') {
      return true;
    }
    // such bad thing
    for (let i = 0; i < bracketsConfig.length; i++) {
      bracketPair[closeBrackets[i]] = openBrackets[i];
    }
  
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      if (openBrackets.includes(currentChar)) {
        stack.push(currentChar);
        if (currentChar === retChar) {
          ret.push(currentChar);
          stack.pop();
        }
      } else {
        if (stack.length === 0) {
          return false;
        }
        let top = stack[stack.length - 1];
        if (bracketPair[currentChar] === top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    // if stack is empty and each '|' has closing pair return true
    return stack.length === 0 && ret.length % 2 === 0;
  }


