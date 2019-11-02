//하늘에서 떨어지는 원형 쓰레기

class Circle {
    constructor(x, y, r){
        this.x;
        this.y;
        this.r;
        this.color;
        this.speed;

        this.setValue(x,y,r);
    }
    
    setValue(){
        this.x = Math.random() * 400;
        this.y = -20;
        this.r = Math.random() * 7 + 5;
        this.color = `rgba(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()}, 0.8)` //랜덤한 컬러
        this.speed = Math.random()*1+1; //랜덤한 속도
    }

    randomColor(){
        return Math.floor(Math.random() * 256);
    }

    render(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    update(){
        //Down as speed per 1 frame
        this.y += this.speed;

        if(this.y > 615){
            this.setValue();
        }
    }

    checkCollision(x, y, r){
        const p = Math.pow;
        const sqrt = Math.sqrt;
        let d = sqrt(p(this.x - x, 2) + p(this.y - y, 2));

        return d < this.r + r;
    }
}


// 표지 
// 내용
// 저자
// 출판사
// 가격
// 출판일