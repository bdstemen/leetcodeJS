
 var reverseKGroup = function(head, k) {
  let revList = revListEnd = poppedNode = null;
  let chunk = head;
  let counter = 0;
  let nodeArray = [];

  while (head) {
      counter = 0;

      while (head && counter < k) {
          counter++;
          head = head.next;
      }

      if (counter === k) {
          while (nodeArray.length < k) {
              nodeArray.push(chunk);
              chunk = chunk.next;
              nodeArray[nodeArray.length - 1].next = null;
          }

          while (nodeArray.length) {
              poppedNode = nodeArray.pop();

              if (!revList) revList = poppedNode;
              else revListEnd.next = poppedNode;

              revListEnd = poppedNode;
          }
      } else {
          if (!revList) revlist = chunk;
          else revListEnd.next = chunk;
      }
  }

  return revList
};

// optimized solution
var reverseKGroup = function(head, k) {
    let revList = null;
    let revChunk = true;
    let pre = null;
    let next = null;
    let counter = 0;

    while (revChunk) {
        if (counter === k) {
            if (!revList) revList = pre;
            else end.next = pre;
            while (pre.next) {
                pre = pre.next;
            }
            end = pre;
            pre = null;
            counter = 0;
            revChunk = nextChunkIsValid(head, k);
        } else {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
            counter++;
        }
    }

    end.next = head;

    return revList;
};

var nextChunkIsValid = function(head, k) {
    let chunkHead = head;
    let chunkCounter = 0;
    while (chunkHead) {
        chunkHead = chunkHead.next;
        chunkCounter++;
        if (chunkCounter === k) return true;
    }
    return false;
}