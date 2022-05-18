var botonCV =document.querySelector("#gooey-button"");

botonCV.addEventListener("click",()=>{

    const downloadInstance = document.createElement("a");
    downloadInstance.href = 'https://crisrmrz.github.io/Portfolio/CV.pdf';

    downloadInstance.target = "_blank";
    downloadInstance.download = "CV";

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);

});
