"use strict";

export default class dado{

    constructor(){
        this.total=[0,0,0,0,0,0];
    }
    
    count(){
        let D1 = 0;
        let D2 = 0;
        let D3 = 0;
        let D4 = 0;
        let D5 = 0;
        let D6 = 0;

        for(let i = 0; i < 100; i++){
            let dado = Math.ceil(Math.random() * 6);

            if(dado === 1){
                D1++;
            } else if(dado === 2){
                D2++;
            } else if(dado === 3){
                D3++;
            } else if(dado === 4){
                D4++;
            } else if(dado === 5){
                D5++;
            } else if(dado === 6){
                D6++;
            } 
        }

        return `1=${D1}, 2=${D2}, 3=${D3}, 4=${D4}, 5=${D5}, 6=${D6}, Total=${D1+D2+D3+D4+D5+D6}`
    }
    /*
    jugar(){
        for(let i = 0; i<100; i++){
            let tirada = Math.floor(Math.random()*6 + 1);
            let jugada = this.total[tirada-1];
            let sumar = jugada + 1;
            this.total[tirada-1].push(sumar);
        }
        return this.total;
    }
*/
/*
    demostracion(){
    
        for(let i = 0; i < 100; i++){
            let d = d1.lanzar()+d1.lanzar();
            noteBook[d-2]++;
        }
        
        for (let i=0;i<6;i++){
        console.log( (i+1) , noteBook[i]);   
        }
        
        let resultado2 = "Cara 2 =" + noteBook[1];
        let resultado3 = "Cara 3 =" + noteBook[2];
        let resutado4 = "Cara 4 =" + noteBook[3];
        let resultado5 = "Cara 5 =" + noteBook[4];
        let resultado6 = "Cara 6 =" + noteBook[5];
        
        console.log(resultado1);
        console.log(resultado2);
        console.log(resultado3);
        console.log(resultado4);
        console.log(resultado5);
        console.log(resultado6);
        
        
        const getRandomInt = (x) => {
                let result = 0;
                result = Math.floor((Math.random() * x) + 1);
                return result;
        };

            const dice = () => {
            let dice = [0,0,0,0,0,0]
            let diceRoll = 0;
            for (let i = 1; i <= 100; i++) {
                diceRoll = getRandomInt(6);
                
                if(diceRoll==1){

                    switch (diceRoll) {
                        case 1:
                            dice[0]++
                            break;
                        case 2: 
                            dice[1]++
                            break;
                        case 3:
                            dice[2]++
                            break;
                        case 4:
                            dice[3]++
                            break;
                        case 5:
                            dice[4]++
                            break;
                        case 6:
                            dice[5]++
                            break;
                    
                        default:
                            break;
                    }

                }
                
            }
            
            console.log("Dado: " + dice)
            console.log("Numero de unos: " + dice[0]++)
            console.log("Numero de dos: " + dice[1]++)
            console.log("Numero de tres: " + dice[2]++)
            console.log("Numero de cuatro: " + dice[3]++)
            console.log("Numero de cinco: " + dice[4]++)
            console.log("Numero de seis: " + dice[5]++)

        }
    }
*/
}
