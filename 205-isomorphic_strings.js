// initial solution
var isIsomorphic = function(s, t) {
    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {
        if (mapST.hasOwnProperty(s[i]) || mapTS.hasOwnProperty(t[i])) {
            if (mapST[s[i]] !== t[i] || mapTS[t[i]] !== s[i]) return false;
        } else {
            mapST[s[i]] = t[i];
            mapTS[t[i]] = s[i];
        }
    }
    return true;
};

// slightly refined solution
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