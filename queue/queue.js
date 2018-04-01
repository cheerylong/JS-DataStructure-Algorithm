let Queue = (function () {

    const items = new WeakMap();

    class Queue {

        constructor () {
            items.set(this, []);
        }

        enqueue(element) {
            let item = items.get(this);
            item.push(element);
        }

        dequeue() {
            let item = items.get(this);
            let first = item.shift();
            return first;
        }

        front() {
            let q = items.get(this);
            return q[0];
        }

        isEmpty(){
            return items.get(this).length == 0;
        }

        size(){
            let q = items.get(this);
            return q.length;
        }

        clear(){
            items.set(this, []);
        }

        print(){
            console.log(this.toString());
        }

        toString(){
            return items.get(this).toString();
        }
    }
    return Queue;
})();
