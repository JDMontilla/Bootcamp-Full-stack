class Stack{
constructor(){
    this.Stack = [];
}

push(element) {
    this.Stack.push(element);
    return this.Stack;
}

pop (){
    return this.Stack.pop();
}

peek() {
    return this.Stack[this.Stack.length - 1];
}

size(){
    return this.Stack.length;
}

print(){
    console.log(this.Stack);
    }
}

const stack = new Stack();
console.log(stack.size());
console.log(stack.push('John Cena'));