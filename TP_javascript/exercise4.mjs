"use strict";


import {Stud, FrStdt} from "./exercise3.mjs";
import fs from 'fs';

export class Promo{
    constructor(){
        this.students= [];
    }

    add(Student){
        this.students.push(Student);
    }

    size(){
        return this.students.length;
    }

    get(i){
        return this.students[i];
    }

    print(){
        for ( let i = 0; i < this.students.length; i++){
            console.log(this.student[i].toString());
        }
    }

    write(){
        return JSON.stringify(this);
    }

    read(str){
        const data = JSON.parse(str); 

        for (let studentData of data){ 
            let student; 

            if(studentData.nationality){
                student = new FrStdt(studentData.lastName, studentData.firstName, studentData.id, studentData.nationality);
            }
            else{
                student = new Stud(studentData.lastName, studentData.firstName, studentData.id);
            }

            this.add(student); 
        }
    }


    saveToFile(fileName){
        let fs = require('fs');
        fs.writeFileSync(fileName, this.write());
    }

    readF(fileName){
        let fs = require('fs');
        let string = fs.readFileSync(fileName, 'utf-8');
        return this.read(string);

    }
    
}