axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function (response) {
    const result = response.data;

    console.log(response.data.response);
    
    
    for (let i = 0; i < 10; i++) {
        const email =response.data.response; // Otteniamo l'email corrente dall'array
        console.log(`Email ${i + 1}: ${email}`); // Stampiamo l'email corrente e il suo indice
      }
    });


// Che cosa ho fatto?
// 1. Ho copiato l'URL da cui estrapolare i dati, in questo caso le email di Boolean.
// 2. Ho seguito la sintassi che prevede un 'then', 'poi', creo la funzione 'response'.
// 3. Richiamo i dati con response.data e in  console.log mando a schermo una email generata dal sistema.
// 4. NOTA: In console.log avevo scritto response.email è il browser mi restituiva un undefined, allora ho fatto un respinde.data che visualizzava, tra le altre informazioni, una email alla voce response, per cui ho corretto il console.log in response.data.response (esattamenta la raccomandazione di Gianlcua questa mattina).