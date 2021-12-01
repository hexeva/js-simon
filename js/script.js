// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// 1--- creo 5 alert. Ogni alert genererà un numero random. 
        // creo un array vuoto dove andrò a salvare i 5 numeri casuali
        const randomNumbersArray = [];
        // creo un array per i numeri scelti dall'utente
        const userNumberArray =[];
        // creo array per numeri indovinati
        const rightNumbers =[];
        
        let randomNumbers;

        for(let i = 0; i < 5; i++){
          randomNumbers = getRndInteger(1,100);
          const message = alert('Numeri estratti: ' + randomNumbers);
          randomNumbersArray.push(randomNumbers);
        }
        //  console.log(randomNumbersArray);


// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

    // in questo caso avrò bisogno di una timing function di tipo SET TIMEOUT

    const clock = setTimeout(numberRequest,3000);
    

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    
    


    // FUNZIONI
    // funzione di callback per il timing ---- per 5 volte, dopo il tempo trascorso chiederò all'utente(tramite prompt) di inserire i numeri visualizzati
       
    function numberRequest (){
       
        randomNumbersArray.forEach((element,index) => {
             const userRequest = parseInt(prompt('dimmi i numeri'));
            //  console.log(userRequest);
            userNumberArray.push(userRequest);
            
        
         });

           //  per ogni elemento inserito dall'utente che corrisponde ai numeri random, li pusho in un nuovo array 
        userNumberArray.forEach((element,index) => {
            // console.log(element);
        
            if(randomNumbersArray.includes(element)){
                rightNumbers.push(element);
            }
        });
        console.log(rightNumbers);

        let message;
        let arrayLenght = rightNumbers.length;
        
        console.log(arrayLenght);
         rightNumbers.forEach((element,index,array) =>{

            

            if(arrayLenght == 0){
            
            
                message = alert(`hai indovinato ${arrayLenght} numeri`);
    
             } else if(arrayLenght > 0){
                message = alert(`hai indovinato ${arrayLenght} numeri : ${element}`);
    
            
             };
             

         });

       


    };
    // fine funzione
   

    
    


        


// funzione numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }