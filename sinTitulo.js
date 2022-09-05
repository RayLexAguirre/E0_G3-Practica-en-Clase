"use strict";

export default class NomPendiente{
    

    invertirCiclo(){
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let comodin = array[array.length -1];
        
        array.splice(comodin, 1)
        array.push(comodin);
        console.log(array);
    }
    


}