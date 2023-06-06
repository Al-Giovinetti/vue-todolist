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
            ]
                
        
            
        }
    },
    methods: {
        delateItemInList(index){
            this.valigia.splice(index,1)
        }
        

    },
    //mounted

}).mount("#app");


