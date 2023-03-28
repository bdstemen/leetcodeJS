// initial solution
var isIsomorphic = function(s, t) {
    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {
        if ((mapST.hasOwnProperty(s[i]) && mapST[s[i]] !== t[i]) || (mapTS.hasOwnProperty(t[i]) && mapTS[t[i]] !== s[i])) {
            return false;
        }
        mapST[s[i]] = t[i];
        mapTS[t[i]] = s[i];
    }
    return true;
};

// different solution
var isIsomorphic = function(s, t) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            if (map[s[i]] !== t[i]) return false;
        } else {
            map[s[i]] = t[i]
        }
    }
    let vals = Object.values(map);
    let valsSet = new Set(vals);
    return vals.length === valsSet.size;
};

// both solutions are O(n), I think the first one is more readable