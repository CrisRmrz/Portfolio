var botonCV =document.querySelector(".botonCV");

botonCV.addEventListener("click",()=>{

    const downloadInstance = document.createElement("a");
    downloadInstance.href = 'http://localhost:5500/CrisRmrzPortfolio/CV.pdf';

    downloadInstance.target = "_blank";
    downloadInstance.download = "CV";

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);

});
