var database, playerCount=0,gameState=0, player1,form1,game1
var allPlayer,coche1,coche2,coche3,coche4,cocheMatriz,distancia= 0 



function setup(){
    database=firebase.database()
    createCanvas(windowWidth-20,windowHeight)
    game1= new ClaseGame()
    game1.getState()
    game1.start()


}

function draw(){
    background("yellow")
    if(playerCount===4){
        game1.update(1)

    }
    
    if(gameState===1){
        game1.play()
    }

  
}


