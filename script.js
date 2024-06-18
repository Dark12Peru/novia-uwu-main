let isEarlyClick = false;
let timeoutIds = [];
let noButtonMoving = false;
let preventYesButtonGrowth = false;

timeoutIds.push(setTimeout(function() {
    document.getElementById('gifContainer').style.display = 'block';

    
    timeoutIds.push(setTimeout(function() {
        document.getElementById('gifContainer').style.display = 'none';
        document.getElementById('sadGifContainer').style.display = 'block';

        
        timeoutIds.push(setTimeout(function() {
            document.getElementById('sadGifContainer').style.display = 'block';

            
            timeoutIds.push(setTimeout(function() {
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'block';
                
                timeoutIds.push(setTimeout(function() {
                    document.getElementById('sadGifContainer1').style.display = 'block';

                    
                    timeoutIds.push(setTimeout(function() {
                        document.getElementById('sadGifContainer1').style.display = 'none';
                        document.getElementById('sadGifContainer2').style.display = 'block';
                    
                        timeoutIds.push(setTimeout(function() {
                            document.getElementById('sadGifContainer2').style.display = 'block';
                            
                        }, 2500));
                    }, 2500));
                }, 2500));
            }, 2500));
        }, 2500));
    }, 2500));
}, 0));

let yesButtonGrowing = false;
let mouseInsideNoBtn = false;

document.getElementById('noBtn').addEventListener('mouseenter', function() {
   mouseInsideNoBtn = true;
   preventYesButtonGrowth = true;
   moveNoButton();
});

document.getElementById('noBtn').addEventListener('mouseleave', function() {
    mouseInsideNoBtn = false;
});

function moveNoButton() {
    if (!mouseInsideNoBtn) {
        return;
    }

    document.getElementById('noBtn').classList.add('disabled');

    var posX = Math.random() * (window.innerWidth - 200); 
    var posY = Math.random() * (window.innerHeight - 50); 

    document.getElementById('noBtn').style.position = 'absolute';
    document.getElementById('noBtn').style.transition = 'all 0.5s'; 
    document.getElementById('noBtn').style.left = posX + 'px';
    document.getElementById('noBtn').style.top = posY + 'px';

    setTimeout(function() {
        moveNoButton();
        document.getElementById('noBtn').classList.remove('disabled');
    }, 500);
}

document.getElementById('siBtn').addEventListener('click', function() {

      isEarlyClick = true;

      for (let id of timeoutIds) {
          clearTimeout(id);
      }
  
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Oh Sí! Sabía que ibas a decir que sí <br> Feliz primer día de novios!';

   setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});

document.getElementById('noBtn').addEventListener('click', function(event) {
    if (isMobile()) {
        event.preventDefault();
    }
});

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}