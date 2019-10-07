export default class SimpleList {
    constructor() {
        this._start = null;
        this._report = '';
    }

    get report() {
        this._updateReport();
        return this._report;
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
        let position = this._searchIndexByCode(code);
        if (position != -1) {
            for (let i = position; i < this._top; i++) {
                this._structure[i] = this._structure[i + 1];
            }
            this._structure[this._top] = undefined;
            this._top--;
            this._sortArray(this._structure);
            return true;
        } else
            return false;
    }

    reverseReport() {

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

    _updateReport() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = string + '<br>' + aux.toString();
            aux = aux.next;
        }
        this._report = string;
    }
}