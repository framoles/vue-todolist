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
            this.toDo.push({ text: this.textValue, done: false });
            this.textValue = "";
        },
        removeTodo(index) {
            console.log(index);
            this.toDo.splice(index, 1);
        },
        changeDone(item) {
            if (item.done) { item.done = false }
            else { item.done = true }
        },
    }
})