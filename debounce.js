const debounce = (func, delay, immediate = false) => {

    let timer

    return function (...args) {
        const callNow = immediate && !timer
        timer = setTimeout(() => {
            if (!immediate) {
                func.apply(this, args);
            }
            timer = null;
        }, delay);
        if (callNow) {
            func.apply(this, args);
        }
    }

}

const logMessage = (msg) => {
  console.log("Executed:", msg, "at", new Date().toLocaleTimeString());
};

const debouncedFn = debounce(logMessage, 2000);

// simulate rapid calls
debouncedFn("A");
setTimeout(() => debouncedFn("B"), 200);
setTimeout(() => debouncedFn("C"), 800);