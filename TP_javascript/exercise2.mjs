"use strict";

export function wcount(t){
    let mots = t.split(" ");
    let count = {};

    let i = 0;

    while (i < mots.length){
        let motCourant = mots[i];
        if (count[motCourant]){
            count[motCourant]++;
        }
        else{
            count[motCourant] = 1;
        }

        i++;
    }

    return count;
        
}

export class WList{

    constructor (input ){
        this.input = input;
    }

    getWords(){

        let mots = this.input.split(" ");
        let motsSansDuplicat = [];
        for (let i = 0; i < mots.length; i++){
            let yet = false;
            for (let t = 0; t< motsSansDuplicat.length && yet === false; t++){
                if(mots[i] === motsSansDuplicat[t]){
                    yet = true;
                }
            }
            if (yet === false){
                motsSansDuplicat.push(mots[i]);
            }
        }

        let motsSorted = motsSansDuplicat.sort();

        return motsSorted;

    }

    maxCountWord(){

        let count = wcount(this.input);
        let mots = this.getWords();
        let motMax = "";
        let maxCount= 0;
        
        for (let i = 0; i < mots.length; i++) {
            let motCourant = mots[i];
            if (count[motCourant] > maxCount) {

                maxCount = count[motCourant];
                motMax = motCourant;
            } 
            else if (count[motCourant] === maxCount && motCourant < motMax) {
               
                motMax = motCourant;
            }
        }

        return motMax;
    }


    minCountWord(){
        let count = wcount(this.input);
        let mots = this.getWords();
        let motMin = mots[0];
        let minCount = count[mots[0]];
        
        for (let i = 1; i < mots.length; i++) {
            let motCourant = mots[i];
            
            if (count[motCourant] < minCount) {

                minCount = count[motCourant];
                motMin = motCourant;
            } 
            else if (count[motCourant] === minCount && motCourant < motMin) {
               
                motMin = motCourant;
            }
        }

        return motMin;

    }


    getCount(word){
        
        let count = 0;
        let mots = this.input.split(" ");
        for (let w of mots) {
            if (w === word) {
                count++;
            }
        }
    return count;
    }

    applyWordFunc(f) {
        return this.getWords().map(f);
    }

}
