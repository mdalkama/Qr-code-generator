let qrInputs = document.getElementById('qrInput');
let qrButtons = document.getElementById('qrButton');
let qrImages = document.getElementById('qrImage')

qrButtons.addEventListener('click', () =>{
    let inputValue = qrInputs.value;
    if(!inputValue){
        alert("Please give some inputs");
        return;
    }
    else{
        qrImages.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    }
});