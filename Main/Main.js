var botonCV =document.querySelector("#gooey-button");

botonCV.addEventListener("click",()=>{

    const downloadInstance = document.createElement("a");
    downloadInstance.href = 'https://crisrmrz.github.io/Portfolio/CV.pdf';

    downloadInstance.target = "_blank";
    downloadInstance.download = "CV";

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);

});







var bounceIn = anime({
    targets: '.letter__part',
    translateY: {
                  value: [-30, 0],
                  duration: 900,
          delay: 1000,
                  elasticity: 600,
                  easing: 'easeOutElastic'
              },
              opacity: {
                  value: [0, 1],
                  duration: 300,
                  easing: 'linear',
          delay: 1000
              }
    });
  
  var lineDrawing = anime({
    targets: '.color-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1000,
    loop: false,
    direction: 'alternate',
  });
  
  var lineDrawing = anime({
    targets: '.color-3',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1200,
    loop: false,
    direction: 'alternate',
  });
  
  var lineDrawing = anime({
    targets: '.color-2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1400,
    loop: false,
    direction: 'alternate',
  });
