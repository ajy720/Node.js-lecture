let gc;

class App{
    constructor(){
        this.cList = [];
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.frame;
        this.settime;
        this.playtime;

        this.startBtn = document.querySelector("#gameStart");
        this.startBtn.addEventListener("click", () =>{
            this.start();
        });

        this.player = new Player();
    }

    update(){
        this.cList.forEach(x => x.update());
        this.player.update();
        
        this.cList.forEach(x => {
            if(x.checkCollision(this.player.x + 5, this.player.y + 10, 5)){
                alert('게임 오버\n플레이 타임 : ' + this.playtime + '초', );
                clearInterval(this.frame);

                this.playtime = 0;
                clearInterval(this.settime);
            }
        });
    }

    render(){
        this.cList.forEach(x => x.render(this.ctx));
        this.player.render(this.ctx);
    }

    makeCircle(){
        let c = new Circle();
        this.cList.push(c);
    }

    start(){
        this.cList = [];
        this.player.setValue(195);
        for(let i=0;i<30;i++){
            this.makeCircle();
        }
        
        clearInterval(this.frame);
        this.frame = setInterval(() => {
            this.ctx.clearRect(0, 0, 400, 600);
            this.update();
            this.render();
        }, 1000/144);

        this.playtime = 0;
        clearInterval(this.settime);
        document.getElementById('playtime').innerHTM = this.playtime;
        this.settime = setInterval(() =>{
            document.getElementById('playtime').innerHTML = ++this.playtime;
        }, 1000);

    }
}
//10.114.52.99:9090

window.addEventListener("load", ()=>{
    let app = new App();
});

/*
    플레이한 시간이 우측에 표시될 수 있도록 (게임 시작과 오버에 따라 알맞게) VV
    게임 오버 시 두발이 동시에 맞았어도 한번만 메세지가 뜨게 
*/