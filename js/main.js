let bird = document.getElementById("bird");
let background = document.getElementById("container");
let birdY = 50;
let loseBool = false;
let birdInclinaison = 0;


function gravity(){

    if(birdY<95 && loseBool === false){
        birdY+=0.2;
        bird.style.top = birdY + 'vh';
        inclinaisonG();
    }

    if(birdY>=95)
        lose();

}

function jump(){

    document.addEventListener('click',function (){
        if (birdY>10 && loseBool === false){
            birdY-=16;
            bird.style.top = birdY + 'vh';
            inclinaison();
        }
        else{
            lose();
        }
    });

}

function inclinaison(){
        if(birdInclinaison > -45){
            birdInclinaison -= 30;
            bird.style.transform = 'rotate('+birdInclinaison+'deg)';
        }
}

function inclinaisonG(){
    if(birdInclinaison < 90){
        birdInclinaison += 0.20;
        bird.style.transform = 'rotate('+birdInclinaison+'deg)';
    }
}


function generatePipe(){

    let pipeX = 100;
    let pipeH = 33;
    let pipeHD = 40;
    let randomNb = Math.random() * (20 - (-20)) + (-20);

    if (loseBool === false){
        const pipe = document.createElement('div');
        pipe.style.height = pipeH-randomNb + 'vh';
        pipe.classList.add('pipe');
        document.getElementById('container').appendChild(pipe);
        const pipeD = document.createElement('div');
        pipeD.style.height = pipeHD+randomNb + 'vh';
        pipeD.classList.add('pipeD');
        document.getElementById('container').appendChild(pipeD)


        setInterval(function (){
            if (loseBool === false){
                pipeX -= 0.7;
                pipe.style.left = pipeX + 'vw';
                pipeD.style.left = pipeX + 'vw';

                if(birdY <= pipeH-randomNb && pipeX<=50 && pipeX>=40){
                    lose();
                }
                if(birdY >= 100-(pipeHD+randomNb+5) && pipeX<=50 && pipeX>=40){
                    lose();
                }
                if(pipeX===-7){
                    document.getElementById('container').removeChild(pipe);
                    document.getElementById('container').removeChild(pipeD);
                }
            }
        },100);
    }

    setTimeout(generatePipe,3000);

}



function lose(){
        loseBool = true;
         background.style.animationPlayState = "paused";
}


function start(){

        jump();
        setInterval(gravity,2.8);
        generatePipe();






}



start();