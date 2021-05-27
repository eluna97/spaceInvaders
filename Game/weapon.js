class weapon{
    constructor(){
        this.x=0;
        this.y=0;
        this.ancho=20;
        this.largo=20;
    }


    display(){
        image(imgWeapon,this.x, this.y, this.ancho, this.largo);

       this.move();
       
    }

   

    move(){
        this.y-=10;
    }

    disparado(x,y,ancho){
        this.y=y;
        this.x=x+(ancho/2);
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