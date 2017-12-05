class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {
        if (this.left === null) {
            this.left = node;
            this.left.parent = this;
        }
        else if (this.right === null) {
            this.right = node;
            this.right.parent = this;
        }
    }

    removeChild(node) {
        if (this.left.data === node.data && this.left.priority === node.priority) {
            this.left.parent = null;
            this.left = null;

        }
        else if (this.right.data === node.data && this.right.priority === node.priority) {
            this.right.parent = null;
            this.right = null;
        }
        else {
            throw new Error();
        }
    }

    remove() {
        if (this.parent !== null) {
            this.parent.removeChild(this)
        }
    }

    swapWithParent() {
        if (this.parent !== null) {

            let parent = this.parent;
            let left = this.parent.left;
            let right = this.parent.right;
            let chright = this.right;
            let chleft = this.left;
            let grandpa = this.parent.parent;


            if (grandpa !== null) {
                grandpa.removeChild(parent);
                grandpa.appendChild(this);
            }
            else {
                this.parent = null;
            }

            parent.left = null;
            parent.right = null;
            parent.parent = null;

            if (left === this) {
                this.left = null;
                this.appendChild(parent);
                if(right !== null) {
                    this.right = right;
                    this.right.parent = this;
                }
            }
            else {
                this.right = null;
                this.appendChild(parent);
                this.left = left;
                this.left.parent = this;
            }

            if (chleft !== null) {
                parent.appendChild(chleft);
                if (chright !== null) {
                    parent.appendChild(chright);
                }
            }

            //     parent.left = null;
            //     parent.right = null;
            //     if (child.left !== null) {
            //         parent.appendChild(child.left);
            //         if (child.right !== null) {
            //             parent.appendChild(child.right);
            //         }
            //     }
            //     if (temp.left === this) {
            //         this.left = null;
            //         this.appendChild(parent);
            //         this.right = temp.right;
            //     }
            //     if (temp.right === this) {
            //         this.right = null;
            //         this.left = temp.left;
            //         this.appendChild(parent);
            //     }
            //
            //     if (grandpa === null) {
            //         this.parent = null;
            //     }
            //     else {
            //         if (grandpa.left === temp) {
            //             grandpa.left = null;
            //             grandpa.appendChild(this);
            //         }
            //         else if (grandpa.right === temp) {
            //             grandpa.right = null;
            //             grandpa.appendChild(this);
            //         }
            //     }
            //
            // }


            // if (parent.left === this) {
            //     this.left = parent;
            //     this.right = parent.right;
            //     this.left.parent = this;
            //     if(this.left.left !== null) {
            //         this.left.left.remove();
            //         this.left.appendChild(child.left);
            //     }
            //     else {
            //         this.left.left = null;
            //     }
            //     if(this.left.right !== null) {
            //         this.left.right.remove();
            //         this.left.appendChild(child.right);
            //     }
            // }
            // else {
            //     this.right = parent;
            //     this.left = parent.left;
            //     this.right.parent = this;
            //     if(this.right.left !== null) {
            //         this.right.left.remove();
            //         this.right.appendChild(child.left);
            //     }
            //     else {
            //         this.right.left = null;
            //     }
            //     if(this.right.right !== null) {
            //         this.right.right.remove();
            //         this.right.appendChild(child.right);
            //     }
            // }
            // this.parent = grandpa;


            // let temp = new Node(this.parent.data, this.parent.priority);
            // temp.parent = this.parent.parent;
            // temp.left = this.left;
            // temp.right = this.right;
            // if(this.parent.left === this) {
            //     if(this.parent.right !== null) {
            //         this.right = this.parent.right;
            //         this.right.parent = this;
            //     }
            //     this.left = this.parent;
            //     this.parent.parent = this;
            // }
            // if(this.parent.right === this) {
            //     if(this.parent.left !== null) {
            //         this.left = this.parent.left;
            //         this.left.parent = this;
            //     }
            //     this.right = this.parent;
            //     this.parent.parent = this;
            // }
            //
            // this.parent.data = this.data;
            // this.parent.priority = this.priority;
            // this.parent.left = temp.left;
            // this.parent.right = temp.right;
            // this.parent = temp.parent;
            // this.data = temp.data;
            // this.priority = temp.priority;
        }
    }

}



module.exports = Node;