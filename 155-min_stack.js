var MinStack = function() {
  this.stack = [];
  this.length = 0;
  this.minIndex = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  if (this.minIndex.length && val < this.stack[this.minIndex[this.minIndex.length - 1]]) {
      this.minIndex.push(this.length);
  } else if (this.minIndex.length === 0) {
      this.minIndex.push(0)
  }

  this.stack[this.length] = val;
  this.length++;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.length--;

  if (this.minIndex[this.minIndex.length - 1] === this.length) {
      this.minIndex.pop();
  }

  let temp = this.stack[this.length];
  this.stack[this.length] = undefined;
  return temp;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.minIndex[this.minIndex.length - 1]];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/