class ClaseForm{
    constructor(){
         this.title=createElement("h1")
         this.input=createInput("Pon tu nombre aqui")
         this.button=createButton("Play") 
         this.bienvenidos=createElement("h1")
    }
    hide(){
        this.title.hide()
        this.bienvenidos.hide()
        this.input.hide();
        this.button.hide();
    }


    display(){
       
        this.title.html("Carrera Explosiva")
        this.title.position(width/2.5,height-700)
        
        this.input.position(width/2.35,height-600)
        
        this.button.position(width/2.19,height-500)
       
        this.button.mousePressed(
            ()=>{
                this.input.hide();
                this.button.hide();
                player1.name=this.input.value()
                playerCount+=1
                player1.index=playerCount
                player1.update()
                player1.updateCount(playerCount)
                this.bienvenidos.html("Bienvenido " +player1.name)
                this.bienvenidos.position(width/2.35,height-600)
            }
        )
    }
}

