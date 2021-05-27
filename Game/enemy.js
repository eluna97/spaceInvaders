let jump = 0;
let ronds =2;

class enemy{
    constructor(columna,fila,limArriba,limIzquierda,limDerecha,largo,ancho,speed, limAbajo){
    
        this.limIzquierda=limIzquierda+50;
        this.limDerecha=limDerecha;
        this.limArriba=limArriba+20;
        this.limAbajo=limAbajo-50;
        
        this.largo=largo;
        this.ancho=ancho;
        this.xInicial=this.limIzquierda+(this.ancho*fila);
        this.yInicial=this.limArriba+(largo*columna);
        this.posicion(columna,fila);

        this.speed=speed;

        this.vivo=true;
        
    }


    display(){

        this.validarVivo();
    }

    posicion(){
        this.y=this.yInicial;
         this.x=this.xInicial;
    }

    move(){
        this.x+=this.speed;
        this.collision();

    }

    collision(){
        
        if(this.x>this.limDerecha-95 || this.x<this.limIzquierda-20){
            juego.collisionEnemigo();
            jump++;
            if (jump == 2){
                juego.moveDown();
                jump=0;
            }
        }
        if(this.x<this.limIzquierda-20){
            this.x+=1.1;
        }
        if(this.y>this.limAbajo-35){
            juego.reset();
        }
        console.log(jump);
        
    }

    show(){
        console.log(this.x);
    }

    setSpeed(){
        this.speed*=-1;
    }

    moveColumn(){
        this.y+=35;
        if(this.speed>0){
            this.speed+=.1;
        }else{
            this.speed-=.1;
        }
    }

    restart(){
        ronds--;
        this.x= this.xInicial;
        this.y=this.yInicial;
        this.speed=.8;
    }

    stop(){
        this.speed=0;
    }


    //se valida si el enemigo esta vivo y asi se pinta su imagen
    validarVivo(){
        if(this.vivo==true){
            image(imgEnemigo,this.x, this.y, this.ancho, this.largo);
            this.move();
        }
    }

    //da el valor el valor de vivo
    getVivo(){
        return this.vivo;
    }
    
    //se cambia el valor de la variable "vivo"
    setVivo(vivo){
        this.vivo=vivo;
    }

    getX(){
        return this.x;
    }

    setX(x){
        this.x=x;
    }

    getY(){
        return this.y;
    }

    setY(y){
        this.y=y;
    }

    getAncho(){
        return this.ancho;
    }

    getLargo(){
        return this.largo;
    }

}



