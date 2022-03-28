const toDo = [{
    text: "Fare la spesa",
    done: false
}, {
    text: "Fare esercizio",
    done: true
}]

const app = new Vue({
    el: "#root",
    data: {
        textValue: "",
        toDo
    },
    methods: {
        checkDone(item) {
            if (item.done) { return "done" }
        },
        addTodo() {
            let text = this.textValue.trim();
            if (text.length > 0) {
                this.toDo.push({ text: text, done: false });
            }
            else { alert("Empty value! Insert a text"); }
            this.textValue = "";
        },
        removeTodo(index) {
            this.toDo.splice(index, 1);
        },
        changeDone(item) {
            item.done = !item.done
        },
        removeAll() {
            this.toDo = [];
        }
    }
})