"use strict";

export default class pagoTrabajo{

    sueldo(){
        
        let sueldo = 1000

        if (sueldo >= 0)
            if (sueldo <= 1000) {
                return (sueldo = sueldo + sueldo * 0.15);
            } else if (sueldo <= 1200) {
                return (sueldo = sueldo + sueldo * 0.12);
            } else if (sueldo <= 1400) {
                return (sueldo = sueldo + sueldo * 0.10);
            } else if (sueldo <= 1500) {
                return (sueldo = sueldo + sueldo * 0.08);
            } else if (sueldo < 1500) {
                return (sueldo = sueldo + sueldo * 0.5);
            }
            
    }

}