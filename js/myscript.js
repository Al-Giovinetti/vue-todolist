const { createApp } = Vue

createApp({
    data() {
        return {
            valigia : [
                {
                    item: "mettere mutanda",
                    done: true
                },
                {
                    item: "mettere calzini",
                    done: false
                },
                {
                    item: "mettere pantaloni",
                    done: false
                },
                {
                    item: "mettere maglia",
                    done: true
                },
                {
                    item: "mettere cappello",
                    done: true
                },
            ],
            newItem : " "
      
        }
    },
    methods: {
        delateItemInList(index){
            this.valigia.splice(index,1)
        },
        addNewItem(newItem){
            let newElement = {
                item: newItem,
                done: false
            } 
            if(newItem != " "){
                this.valigia.push(newElement)
                this.newItem =" "  
            }else{
                alert("campo inserimento vuoto")
            }    
        },
        invertDone(index){
            alert("Stai cambiano lo stato dell' elemento")
            if(this.valigia[index].done == false){
                this.valigia[index].done = true
            }else{
                if(this.valigia[index].done == true){
                    this.valigia[index].done = false
                }
            }
        }
        

    },
    //mounted

}).mount("#app");


