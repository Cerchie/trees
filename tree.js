/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  findDFS(val){

    const toVisitStack = [this];

    while(toVisitStack.length){
        const current = toVisitStack.pop()

        if(current.val === val){
            return current;
        } 

        for(let child of current.children){
            toVisitStack.push(child)
        }
    }
}

findBFS(val){

    const toVisitQueue = [this];

    while(toVisitQueue.length){
        const current = toVisitStack.shift()

        if(current.val === val){
            return current;
        } 

        for(let child of current.children){
            toVisitQueue.push(child)
        }
    }
}

sumValues(){

  const toVisitQueue = [this];

  while(toVisitQueue.length){
      const current = toVisitStack.shift()
      const count = 0;
      for(let child of current.children){
          count = count + child.val;
          toVisitQueue.push(child)
      }
     
  }
}
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let total = 0;

    function evenSumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values if even
        if (child.val % 2 == 0)
        {
          total += 1;
        }
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          evenSumHelper(child);
        }
      }
    }
    evenSumHelper(this.root);
    return total;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let total = 0;

    if (this.root.val > lowerBound){
      total += 1;
    }
    function sumHelper(node) {

      // go through all the children for a Node
      for (let child of node.children) {

        // count all values greater than lowerBound
        if (child.val > lowerBound)
       {total += 1}
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }
}


module.exports = { Tree, TreeNode };
