function LinkedList() {

    let node = function(element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null

    this.append = function(element) {
        let newNode = new node(element)
        let current
        if (head === null) {
            head = newNode
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        length++
    }

    this.insert = function(position, element) {
        let newNode = new node(element)
        let current = head
        let preEle
        if (position > -1 && position < length) {
        	if (position === 0) {
        		head = newNode
        		newNode.next = current
        	} else {
        		let index = 0
        		while (index < position) {
        			preEle = current
        			current = current.next
        			index++
        		}
        		preEle.next = newNode
        		newNode.next = current
        	}
        	length++
        	return true
        } 
        return false
    }

    // 移除元素
    this.removeAt = function(position) {
        let current = head
        let preEle
        if (position > -1 && position < length) {
            if (position === 0) {
                // 让下一项成为head
                head = current.next

            } else {
                let index = 0
                while (index < position) {
                    preEle = current
                    current = current.next
                    index++
                }
            }
            length--
        }
        return null
    }

    this.remove = function(element) {
    	let index = this.indexOf(element)
    	this.removeAt(index)
    }

    this.indexOf = function(element) {
    	let current = head
    	let index = 0
    	while(index < length) {
    		if (element === current.element) {
    			return index
    		}
    		index++
    		current = head.next
    	}
    	return -1
    }

    this.isEmpty = function() {
    	return length === 0
    }
    this.size = function() {
        return length;
    }
    this.getHead = function() {
    	return head
    }
    this.toString = function() {

    	let current = head
    	let resStr = ''
    	let index = 0
    	while(index < length) {
    		resStr += current.element ? current.element : ''
    		current = head.next
    	}

    	return resStr
    }
    this.print = function() {
    	console.log(this.toString())
    }

}
