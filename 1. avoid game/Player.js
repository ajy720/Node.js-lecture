class Player{
    constructor(){
        this.x;
        this.y = 580;
        this.speed = 1;
        this.width = 10;
        this.height = 20;
        this.color = "rgb(3,3,3)";

        this.code = [false, false];
        document.addEventListener("keydown", (e) => {
            if(e.code == "ArrowLeft") this.code[0] = true;

            if(e.code == "ArrowRight")this.code[1] = true;
        });

        document.addEventListener("keyup", (e) =>{
            if(e.code == "ArrowLeft") this.code[0] = false;

            if(e.code == "ArrowRight")this.code[1] = false;
        });


    }

    setValue(x){
        this.x = x;
    }

    render(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = "#ddd";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    update(){
        if(this.code[0]) this.x -= this.speed;
        if(this.code[1]) this.x += this.speed;

        if(this.x < 0) this.x = 0;
        if(this.x > 390) this.x = 390;
    }
}
