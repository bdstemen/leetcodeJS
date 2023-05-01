// waits until there has been a 0.5 s delay before running callback
const debounce = function(cb, delay = 500) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args)
    }, delay);
  }
}

// runs immediately when the function is called
const throttle = function(cb, delay = 500) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (!waitingArgs) {
      shoultWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay)
  }
}