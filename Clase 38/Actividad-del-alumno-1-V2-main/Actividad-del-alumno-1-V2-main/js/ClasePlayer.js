class ClasePlayer{
    constructor(){
        this.index = null
        this.name = null
        this.distancia = 0
    }

    display(){

    }

    getCount(){
        var playerCountRef= database.ref("playerCount")
        playerCountRef.on("value",(data)=>{
            playerCount=data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    update(){
        var playerIndex="jugador"+this.index 
        database.ref(playerIndex).set({
            nombre:this.name,
            distance: this.distancia
        })
    }




}