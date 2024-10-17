function send(event) {

    event.preventDefault();

    const place = document.querySelector('place').value;

    const clave = AIzaSyBdeVgJYQ3fYfUTwqaSxWIy0pGpQ74SnTE;

    const link = new url('https://www.google.es/maps/?hl=es');

    fetch(link)
        .then(response => {
            if (!response.ok) {// devuelve una promesa que se resuelve con response
                throw new Error('error en la red');
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
        })

        .catch(error => {
            console.error('Algo salió mal:', error); 
        })
}

