class MyArray{
    constructor(){
        this.length =0;
        this.data ={};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    

    shiftItems(index){
        for(let i=index; i<this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

    delete(index){
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }

    unShift(item){
        for(let i=this.length;i>0;i--){
            this.data[i]=this.data[i-1];
        }
        this.data[0]=item;
        this.length++;
        return this.length;
    }

    shift(){
        const firstItem = this.data[0];
        this.shiftItems(0);
        return firstItem;
    }

    insert(index, item) {
        if (index < 0 || index >= this.length) {
           
            return false;
        }
        
        for (let i = this.length - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = item; 
        this.length++;
        return true;
    }

    indexOf(item){
        for(let i =0; i<this.length;i++){
            if(this.data[i]===item){
                return i;
            }
        }
        return -1;
    }

    slice(start,end){
        start = start || 0;
        end = end || this.length; 
        const newArray = new MyArray();
        for(let i =start; i<end; i++){
            newArray.push(this.data[i]);
        }
        return newArray;
    }


    reverse() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            const temp = this.data[i];
            this.data[i] = this.data[this.length - 1 - i];
            this.data[this.length - 1 - i] = temp;
        }
    }



    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this.data[i], i, this);
        }
    }

    map(callback) {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(callback(this.data[i], i, this));
        }
        return newArray;
    }


    filter(callback) {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if (callback(this.data[i], i, this)) {
                newArray.push(this.data[i]);
            }
        }
        return newArray;
    }


    reduce(callback, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : this.data[0];
        let startIndex = initialValue !== undefined ? 0 : 1;
        for (let i = startIndex; i < this.length; i++) {
            accumulator = callback(accumulator, this.data[i], i, this);
        }
        return accumulator;
    }


    copy() {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(this.data[i]);
        }
        return newArray;
    }

    isEmpty(){
        return this.length===0;
    }

    clear(){
        this.data={};
        this.length=0;
    }

    toString(){
        return Object.values(this.data).toString();
    }
}
const myArray = new MyArray();
myArray.push(6);
myArray.push(7);
myArray.push(8);
// console.log("Array: ",myArray);
// console.log("item at index 1: ",myArray.get(1));
// console.log(myArray.pop());
// console.log("Array: ",myArray);
// myArray.shiftItems(1);
// console.log("Array: ",myArray);
// myArray.delete(1);
// console.log("Array: ",myArray);

// myArray.unShift(4);
// console.log("Array: ",myArray);

// console.log(myArray.shift());
// console.log("Array: ",myArray);

// console.log(myArray.indexOf(5));

// console.log(myArray.isEmpty());

// myArray.clear();
// console.log("Array: ",myArray);

// console.log(myArray.toString());
// console.log("Array: ",myArray);

// console.log(myArray.insert(1,4));
// console.log("Array: ",myArray);

// myArray.reverse();
// console.log(myArray);

// const copyArr = myArray.copy();
// console.log(copyArr);

// myArray.forEach(item => console.log(item *3));

// console.log(myArray.slice(1,2));

// console.log(myArray.map(item => item*5));

// console.log(myArray.filter(item => item > 7));

// console.log(myArray.reduce((acc,curr) => acc+curr, 0));