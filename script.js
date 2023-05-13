const app = Vue.createApp({
    data() {
        return{
            tooShort: false,
            arrTodo: [
                {
                    text: "Comprare il pane",
                    done: false
                },
                {
                    text: "Comprare i pomodori",
                    done: false
                },
                {
                    text: "Andare in palestra",
                    done: false
                },
                {
                    text: "Stendere i panni",
                    done: false
                },
                {
                    text: "Lavare i piatti",
                    done: false
                },
                {
                    text: "Spazzare la camera",
                    done: false
                },
                {
                    text: "Pagare la bolletta",
                    done: false
                },
                
            ],
            newTodo: "",
            
        }
    },
    methods: {
        deleteTodo(i){
            this.arrTodo.splice(i,1)
        },
        addTodo(){
            if (this.newTodo.length >= 6){
                this.arrTodo.unshift({
                    text: this.newTodo,
                    done: false
                })
                this.newTodo.trim() = " "
                this.tooShort = false
            } else {
                this.tooShort = true
            }    
        },
        doIt(i){
            this.arrTodo[i].done = !this.arrTodo[i].done
        }
    }

})

app.mount('#root')