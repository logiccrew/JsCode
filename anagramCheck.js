const anagramCheck = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequency = {};

    for (const char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!frequency[char]) {
            return false;
        }

        frequency[char]--;
    }

    return true;
};

console.log(anagramCheck("geeks", "keegs")); // true
console.log(anagramCheck("aab", "abb"));     // false
console.log(anagramCheck("listen", "silent"));// true