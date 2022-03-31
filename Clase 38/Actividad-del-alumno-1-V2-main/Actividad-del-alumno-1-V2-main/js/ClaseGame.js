class ClaseGame{
    constructor(){

    }

    display(){

    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state

        })
    }
     async start(){
        if(gameState===0){
            player1=new ClasePlayer()
            var PlayerCountRef = await database.ref("playerCount").once("value")
            if(PlayerCountRef.exists()){
                playerCount = PlayerCountRef.val()
                player1.getCount()
            }
           
            form1=new ClaseForm()
            form1.display()
        }

        coche1 = createSprite(100,300,40,40)
        coche2 = createSprite(200,300,40,40)
        coche3 = createSprite(300,300,40,40)
        coche4 = createSprite(400,300,40,40)
        cocheMatriz=[coche1,coche2,coche3,coche4]

    }
    play(){
        form1.hide()
        if(allPlayer!==undefined){
            var index = 0 
            var x = 0 
            var y 
            for(var i in allPlayer){
                index+=1 
                x+=200
                y=displayHeight-allPlayer[i].distance 
                cocheMatriz[index-1].x = x
                cocheMatriz[index-1].y = y
                if(index===player1.index){
                    cocheMatriz[index-1].shapeColor="red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cocheMatriz[index-1].y
                    

                        
                }
            }
        }
                if(keyDown(UP_ARROW)  && player1.index !== null){
                    player1.distancia+= 10
                    player1.update()
                  
                }

                drawSprites()


    }




}