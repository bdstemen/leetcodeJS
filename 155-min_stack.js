// initial solution
var MinStack = function() {
  this.stack = [];
  this.minIndex = [];
};

MinStack.prototype.push = function(val) {
  if (this.minIndex.length && val < this.stack[this.minIndex[this.minIndex.length - 1]]) {
      this.minIndex.push(this.stack.length);
  } else if (this.minIndex.length === 0) {
      this.minIndex.push(0)
  }

  this.stack.push(val);
};

MinStack.prototype.pop = function() {
  if (this.minIndex[this.minIndex.length - 1] === this.stack.length - 1) {
      this.minIndex.pop();
  }
  return this.stack.pop()
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.stack[this.minIndex[this.minIndex.length - 1]];
};



// cleaner solution
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function(val) {
  let minStackEmpty = !this.minStack.length;
  let hasNewMin = val <= this.top(this.minStack)

  if (hasNewMin || minStackEmpty) this.minStack.push(val);

  this.stack.push(val);
};

MinStack.prototype.pop = function(stack = this.stack, minStack = this.minStack ) {
  let pop = stack.pop();
  if (this.getMin() === pop) {
      minStack.pop();
  }
};

MinStack.prototype.top = function(stack = this.stack) {
  return stack.length ? stack[stack.length - 1] : null;
};

MinStack.prototype.getMin = function(minStack = this.minStack) {
  return this.top(minStack);
};
