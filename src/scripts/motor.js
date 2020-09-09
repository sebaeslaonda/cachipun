const myhand = document.getElementById('uphoto');
const himhand = document.getElementById('himphoto');
const hand = document.getElementById('hand');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const scoreu = document.getElementById('you');
const scorehim = document.getElementById('he');

let scoreuIN = 0;
let scorehimIN = 0;

const vs = document.getElementById('vs');
let ho = [hand, rock, scissors];
let pass = true;

let chose;
let choseRandom;
let hoveron = true;


function hover(pos) {
    pos.addEventListener('mouseover', () => {
        pos.style.transition = '.3s'
        pos.style.transform = 'scale(1.2)';
    });
    pos.addEventListener('mouseleave', () => {
        pos.style.transition = '.3s'
        pos.style.transform = 'scale(1)';
    });
};
if (hoveron) {
    for (i = 0; i < 3; i++) {
        hover(ho[i]);
    }
}
hand.addEventListener('click', () => {
    if (pass) {
        hand.classList.add('bacsd');
        myhand.src = 'src/img/hand.png';
        vs.style.color = "red";
        chose = 1;
        removeS();
    }
});

rock.addEventListener('click', () => {
    if (pass) {
        rock.classList.add('bacsd');
        myhand.src = 'src/img/rock.png';
        vs.style.color = "red";
        chose = 2;
        removeS();
    }
});

scissors.addEventListener('click', () => {
    if (pass) {
        scissors.classList.add('bacsd');
        myhand.src = 'src/img/scissors.png';
        vs.style.color = "red";
        chose = 3;
        removeS();
    }
});


function removeS() {
    hand.classList.remove('s1');
    rock.classList.remove('s2');
    scissors.classList.remove('s3');
    pass = false;
    random();
}

async function random() {
    let him = Math.floor(Math.random() * (4 - 1)) + 1;
    let f = 1;
    let ff = 1;
    let loop = setInterval(() => {
        switch (ff) {
            case 1:
                himhand.src = 'src/img/hand.png'
                break;
            case 2:
                himhand.src = 'src/img/rock.png'
                break;
            case 3:
                himhand.src = 'src/img/scissors.png';
                ff = 0;
                break;
        };
        ff += 1;
        f += 1;
        if (f == 15) {
            clearInterval(loop);
            play(him)
        }
    }, 130);
}

function play(r) {
    let win;
    switch (r) {
        case 1:
            himhand.src = 'src/img/hand.png';
            choseRandom = 1;
            break;
        case 2:
            himhand.src = 'src/img/rock.png';
            choseRandom = 2;
            break;
        case 3:
            himhand.src = 'src/img/scissors.png';
            choseRandom = 3;
            break;
    };

    if ((chose == 1 && choseRandom == 2) || (chose == 2 && choseRandom == 3) || (chose == 3 && choseRandom == 1)) {
        msg('You Win', '#11794E',1);
    } else if ((chose == 1 && choseRandom == 3) || (chose == 2 && choseRandom == 1) || (chose == 3 && choseRandom == 2)) {
        msg('You Lose','#791811',2);
    } else {
        msg('Tie','#AF2C85',3);
    }
}


function msg(msg, color,x) {
    let count = 0;
    let timeout = setInterval(() => {
        count += 1;
        if (count == 4) {
            Swal.fire({
                html:`<span style="color:#fff">${msg}<span>`,
                background: `${color}`,
                showConfirmButton: false,
                confirmButtonColor: '#1C8D98',
            }).then((result) => {
                if (!result.isConfirmed) {
                    clear(x);
                }
            })
        };
    }, 300);

}

function clear(x) {
    if(x==1){
        scoreuIN +=1;
        scoreu.innerHTML = String(scoreuIN);
    }else if(x==2){
        scorehimIN +=1;
        scorehim.innerHTML = String(scorehimIN);
    }
    chose = 0;
    choseRandom = 0;
    myhand.src = '';
    himhand.src = '';
    vs.style.color='aliceblue';
    hand.classList.remove('bacsd');
    rock.classList.remove('bacsd');
    scissors.classList.remove('bacsd');
    pass = true;
}