




// let window0 = window.open('','','');
// window0.opener.document.write('some window text');

// let iframe0 = document.createElement('iframe');
// iframe0.src = 'iframe0.html'; 
// document.body.appendChild(iframe0);
// iframe0.onload = function(){
//     let iframeDoc = iframe0.contentDocument || iframe0.contentWindow.document;
//     iframeDoc.write('some text');
// }


let iframe1 = document.createElement('iframe');
iframe1.src = 'iframe0.html'; // Asegúrate de que existe
document.body.appendChild(iframe1); // se añade el iframe al cuerpo del documento
iframe.onload = function() { //cargamos el iframe
    let iframeDoc = iframe1.contentDocument || iframe1.contentWindow.document;
    console.log(iframeDoc.body.innerHTML);
};
