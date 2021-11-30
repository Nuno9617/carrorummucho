class Form{
    constructor(){
        this.input = createInput("Nombre");
        this.button = createButton("Jugar");
        this.reset = createButton("reiniciar");
        this.gretting = createElement('h3');
        this.title = createElement('h2');
    }

    hide(){
     this.gretting.hide();
     this.button.hide();
     this.input.hide();
     this.title.hide(); 
    }

    display(){
        this.title.html("Juego de Carreras de AutoBots");
        this.title.position(displayWidth/2-50,0);

        this.reset.position(displayWidth-100,20);

        this.input.position(displayWidth/2-40,displayHeight/2-80),
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.gretting.html("hola "+player.name);
            this.gretting.position(displayWidth/2-70,displayHeight/4)
        })
        this.reset.mousePressed(()=>{
         player.updateCount(0);
         game.update(0);
         player.updateCarsAtEnd(0);
         
        });
    }
 }