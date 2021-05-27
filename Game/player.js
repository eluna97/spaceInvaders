let bala = new weapon();
class player{
    constructor(LimAbajo,limIzquierda,limDerecha,largo,ancho){
    
        this.limIzquierda=limIzquierda;
        this.limDerecha=limDerecha;
        this.yInicial=LimAbajo-55;
        this.xInicial=limIzquierda+((limDerecha-limIzquierda)/2)
        this.largo=largo;
        this.ancho=ancho;
        this.posicion();
        this.disparo= 0;
    }
    display(){
        image(imgJugador,this.x, this.y, this.ancho, this.largo);
     
        this.move();
        this.disparado();

    }

    posicion(){
       this.y=this.yInicial;
       this.x=this.xInicial;
    }

    move(){
        if (keyIsDown(LEFT_ARROW)) {
            this.x+=-5;
        } 
        if (keyIsDown(RIGHT_ARROW)) {
            this.x+=5;
        }
        if(keyIsDown(UP_ARROW)){
            this.disparar();
        }
        this.collision();
    }

    collision(){
        if(this.x<=this.limIzquierda){
            this.x=this.limIzquierda;
        }else if(this.x>=this.limDerecha-this.ancho){
            this.x=this.limDerecha-this.ancho;
        }
    }

    disparar(){
        if(this.disparo==0){
            bala.disparado(this.x,this.y,this.ancho);
            this.disparo=1;
            print(this.disparo);
        }
        

    }
    disparado(){
       
        if(this.disparo==1){
            
            bala.display();
        }
    }

    getDisparo(){
        return this.disparo;
    }

    setDisparo(disparo){
        this.disparo=disparo
    }
}