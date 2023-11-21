
const handlingChange = {

    data() {
        return {
            todoList: [],
            newTodo: {
                done: false
            }
        }
    },

    methods: {
        addTodo: function () {
            if (this.newTodo.task) {
                this.todoList.push(this.newTodo);
                this.newTodo = {
                    done: false
                };

                localStorage.setItem("todos", JSON.stringify(this.todoList));
            } else {
                alert("Você precisa nomear a tarefa para continuar.");
            }
            
        },
        clearList: function() {
            this.todoList = []
        }
    },
    created() {
        this.todoList = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todoList;
    },
    updated() {
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    }

};

Vue.createApp(handlingChange).mount('#app');