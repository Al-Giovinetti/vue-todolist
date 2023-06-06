const { createApp } = Vue

createApp({
    data() {
        return {
            valigia : [
                {
                    item: "mutanda",
                    done: true
                },
                {
                    item: "calzini",
                    done: false
                },
                {
                    item: "pantaloni",
                    done: false
                },
                {
                    item: "maglia",
                    done: true
                },
                {
                    item: "cappello",
                    done: true
                },
            ]
                
        
            
        }
    },
    methods: {
        

    },
    //mounted

}).mount("#app");


