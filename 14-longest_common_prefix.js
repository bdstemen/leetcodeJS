var longestCommonPrefix = function(strs) {
    return strs.reduce((prefix, str) => {
        let newPrefix = [];
        for (let i = 0; i < prefix.length; i++) {
            if (str[i] === prefix[i]) newPrefix.push(str[i]);
            else break;
        }
        return newPrefix;
    }, strs[0].split('')).join('');
};