var TrieNode = function() {
  this.children = {};
  this.endOfWord = false;
};

var Trie = function() {
  this.root = new TrieNode();
};

/**
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let curr = this.root;

  for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!curr.children[char]) {
          curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
  }
  curr.endOfWord = true;
};

/**
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let curr = this.root;

  for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!curr.children[char]) {
          return false;
      }
      curr = curr.children[char];
  }
  return curr.endOfWord;
};

/**
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root;

  for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!curr.children[char]) {
          return false;
      }
      curr = curr.children[char];
  }
  return true;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/