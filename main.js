let net;

const imgEl = document.getElementById('img');

async function app(){

    net = await mobilenet.load();

    var result = await net.classify(imgEl);
    displayImagePrediction();
}

imgEl.onload = async function(){
    displayImagePrediction();
}

async function displayImagePrediction(){
    try{
        result = await net.classify(imgEl);
        const elementoTable = document.createElement("tbody");
        for (f = 0; f < 3; f++) {
            var elementoTR = document.createElement("tr");
            for (c = 0; c < 1; c++) {
                var elementoTD = document.createElement("td");
                elementoTD.innerHTML=result[f].className;
                elementoTR.appendChild(elementoTD);
            }
            for (c = 0; c < 1; c++) {
                const porcentaje = Math.round(result[f].probability*100) + "%"
                var elementoTD = document.createElement("td");
                elementoTD.innerHTML=porcentaje;
                // elementoTD.innerHTML=result[f].probability;
                elementoTR.appendChild(elementoTD);
            }
            elementoTable.appendChild(elementoTR);
        }
        elementoTable.id="del"
        document.getElementById("tablePrediction").appendChild(elementoTable);
    }catch(error){

    }
};

count = 0;

async function cambiarImagen(){
    count = count + 1 
    imgEl.src = "https://picsum.photos/200/300?random=" + count;
    const element = document.getElementById("del")

    var d = document.getElementById("tablePrediction");
    var d_nested = document.getElementById("del");
    var throwawayNode = d.removeChild(d_nested);
}

app();
