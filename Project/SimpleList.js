export default class SimpleList {
    constructor() {
        this._start = null;
    }

    add(node, position) {
        if (this.query(node.code) === -1) {
            if (this._isAValidPosition(position)) {
                let aux = this._start;

                if (position === 0)
                    position = this._totalNodes() + 1;//Put at the end

                if (position != 1) {
                    while (position > 2) {
                        aux = aux.next;
                        position--;
                    }
                    node.next = aux.next;
                    aux.next = node;
                } else {//Go to the beginning
                    node.next = this._start;
                    this._start = node;
                }

                return true;
            } else
                return false;
        } else {
            return false;
        }
    }

    query(code) {
        let aux = this._start;
        let objectFound = -1;
        while (aux != null && objectFound === -1) {
            if (aux.code === code)
                objectFound = aux;
            aux = aux.next;
        }

        return objectFound;
    }

    delete(code) {
        let isDeleted = false;
        if (this.query(code) != -1) {
            if (this._start.code != code) {
                let aux = this._start;
                while (aux.next != null && isDeleted === false) {
                    if (aux.next.code === code) {
                        aux.next = aux.next.next;
                        isDeleted = true;
                    } else
                        aux = aux.next;
                }
            } else {
                if (this._start.next != null)
                    this._start = this._start.next
                else
                    this._start = null;
                return true;
            }
        }
        return isDeleted;
    }

    report() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = string + '<br>' + aux.toString();
            aux = aux.next;
        }
        return string;
    }

    reverseReport() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = aux.toString() + '<br>' + string;
            aux = aux.next;
        }
        return '<br>' + string;
    }

    _isAValidPosition(position) {
        if (position >= 0) {
            if (position <= this._totalNodes() + 1)
                return true;
            else
                return false;
        } else
            return false;
    }

    _totalNodes() {
        let totalNodes = 0;
        let aux = this._start;
        while (aux != null) {
            totalNodes++;
            aux = aux.next;
        }

        return totalNodes;
    }
}