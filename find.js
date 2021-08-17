
function findwords(rows, letters, soup) {
    if (!Number.isInteger(rows) || rows < 0 || isNaN(rows)) {
        throw new Error('Rows parameter must be a valid number');    
    }

    if (!Number.isInteger(letters) || letters < 0 || isNaN(letters)) {
        throw new Error('Letters parameter must be a valid number');
    }

    if(Array.isArray(soup)){
        if (!soup.length) {
            throw new Error('Soup parameter is not able to be empty');
        }   
        if (soup.length != rows) {
            throw new Error('Soup parameter mismatch with rows');
        }           
        if (soup.some(value => { return !Array.isArray(value)})) {
            throw new Error('Soup parameter must be only of Arrays');
        }
        if (soup.some(value => { return value.length != letters})) {
            throw new Error('Letters parameter mismatch with soup array');
        }
        if (soup.some(value => { 
            if (value.some(letter => { return typeof letter != 'string' })) {
                throw new Error('Must only be letters in the soup!');
            }
            if ( value.some(letter => { return !letter.match(/[A-Z]/i)})) {
                throw new Error('Soup must have valid letters');
            }
            if ( value.some(letter => { return letter.length > 1})) {
                throw new Error('Soup must have one letter per character');
            }
         }));         

    }else{
        throw new Error('Soup parameter must be an Array');
    }


    let oieMatchs = 0;

    for (let row = 0; row < rows; row++) {

        for (let letter = 0; letter < letters; letter++) {
            if (soup[row][letter].toUpperCase() === "O") {

                if (soup[row][letter+1] != undefined && soup[row][letter+1].toUpperCase() === "I") {
                    if (soup[row][letter+2] != undefined && soup[row][letter+2].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("der");
                    }
                } //right

                if (soup[row+1] != undefined && soup[row+1][letter+1] != undefined && soup[row][letter+1].toUpperCase() === "I") {
                    if (soup[row+2] != undefined && soup[row+2][letter+2] != undefined && soup[row][letter+2].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("derabajo");
                    }
                }//lower right

                if (soup[row-1] != undefined && soup[row-1][letter+1] != undefined && soup[row][letter+1].toUpperCase() === "I") {
                    if (soup[row-2] != undefined && soup[row-2][letter+2] != undefined && soup[row][letter+2].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("derarriba");
                    }
                }//upper right

                if (soup[row+1] != undefined && soup[row+1][letter-1] != undefined && soup[row][letter+1].toUpperCase() === "I") {
                    if (soup[row+2] != undefined && soup[row+2][letter-2] != undefined && soup[row][letter+2].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("izaba");
                    }
                }//lower left

                if (soup[row-1] != undefined && soup[row-1][letter-1] != undefined && soup[row][letter+1].toUpperCase() === "I") {
                    if (soup[row-2] != undefined && soup[row-2][letter-2] != undefined && soup[row][letter+2].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("izari");
                    }
                }//upper left

                if (soup[row-1] != undefined && soup[row-1][letter].toUpperCase() === "I") {
                    if (soup[row-2] != undefined && soup[row-2][letter].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("arriba");
                    }
                } // up

                if (soup[row+1] != undefined && soup[row+1][letter].toUpperCase() === "I") {
                    if (soup[row+2] != undefined && soup[row+2][letter].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("abajo");
                    }
                } // down

                if (soup[row][letter-1] != undefined && soup[row][letter-1].toUpperCase() === "I") {
                    if (soup[row][letter-2] != undefined && soup[row][letter-2].toUpperCase() === "E") {
                        oieMatchs++;
                        console.log("izquierda");
                    }
                } // left
            }
                   
        }
        
    }
    
    return oieMatchs
}

//example call
console.log(`MATCHES = ${findwords(3,3,[["O","I","E"],["I","i","E"],["E","I","E"]])}`);