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
            if (this.textValue.length > 0) {
                this.toDo.push({ text: this.textValue, done: false });
            }
            else { alert("Empty value! Insert a text"); }
            this.textValue = "";
        },
        removeTodo(index) {
            this.toDo.splice(index, 1);
        },
        changeDone(item) {
            if (item.done) { item.done = false }
            else { item.done = true }
        },
    }
})