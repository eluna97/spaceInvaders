
let limArriba=50;
let limIzquierda=innerWidth/6
let limDerecha=(innerWidth/3)*2;
let LimAbajo=innerHeight-100;
let ancho=55;
let largo=55;
let speed=0.5;
let lives=2;
 
let enemigoFilas=6;
let enemigosColumnas=4;

let jugador = new player(LimAbajo,limIzquierda,limDerecha,largo,ancho);

var arrayEnemigos = new Array(enemigosColumnas);
for(let i = 0;i<enemigosColumnas;i++){
    
    arrayEnemigos[i]= new Array(enemigoFilas);
    for(let j = 0;j<enemigoFilas;j++){
        arrayEnemigos[i][j]=new enemy(i,j,limArriba,limIzquierda,limDerecha,largo,ancho,speed,LimAbajo);
    }
}

class Game{
    constructor(){
        
        
    }
    
    display(){
        //fondo del juego
        fill("black");
        rect(limIzquierda,limArriba,(limDerecha-limIzquierda),LimAbajo);
        
        for(let i = 0;i<enemigosColumnas;i++){
            for(let j = 0;j<enemigoFilas;j++){
                arrayEnemigos[i][j].display();
            }
        }

        jugador.display();
        this.validarDisparo();
        
       
    }

    collisionEnemigo(){
        for(let i = 0;i<enemigosColumnas;i++){
            for(let j = 0;j<enemigoFilas;j++){
                arrayEnemigos[i][j].setSpeed();
            }
        }
    }

    moveDown(){
        for(let i = 0;i<enemigosColumnas;i++){
            for(let j = 0;j<enemigoFilas;j++){
                arrayEnemigos[i][j].moveColumn();
            }
        }
    }

    reset(){
        for(let i = 0;i<enemigosColumnas;i++){
            for(let j = 0;j<enemigoFilas;j++){
                arrayEnemigos[i][j].restart();
            }
        }
        lives--;
        if(lives==0){
            for(let i = 0;i<enemigosColumnas;i++){
                for(let j = 0;j<enemigoFilas;j++){
                    arrayEnemigos[i][j].stop();
                }
            }
        }
    }

    validarDisparo(){

        if(jugador.getDisparo()==1){
            if(bala.getY()<=limArriba||this.dañoEnemigo()==true){
                jugador.setDisparo(0);
            }
        }
    }

    dañoEnemigo(){
        let daño=false;
       

        for(let i = 0;i<enemigosColumnas;i++){
            for(let j = 0;j<enemigoFilas;j++){
                daño=this.validarDaño(arrayEnemigos[i][j].getVivo(),arrayEnemigos[i][j].getX(),arrayEnemigos[i][j].getY(),arrayEnemigos[i][j].getAncho(),arrayEnemigos[i][j].getLargo());
                if(daño==true){
                    arrayEnemigos[i][j].setVivo(false);
                    return true;
                }
            }
        }

        return daño;
    }

    validarDaño(vivo,enemigoX,enemigoY,ancho,largo){
        if(vivo==true){
            if(bala.getX()>=enemigoX && bala.getX()<=enemigoX+ancho && bala.getX()+bala.getAncho()>=enemigoX && bala.getX()+bala.getAncho()<=enemigoX+ancho){
                if(bala.getY()>=enemigoY && bala.getY()<=enemigoY+largo && bala.getY()+bala.getLargo()>=enemigoY && bala.getY()+bala.getLargo()<=enemigoY+largo){
                return true; 
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}
