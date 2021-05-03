import { Injectable } from '@angular/core';

@Injectable()
export class StatoService {
  // se far partire il confronto tra due veicoli o no
  confronto: boolean;
  contatore: number;
  constructor() {
    this.confronto = false;
    this.contatore = 0;
   }

  getConfronto(): boolean{
     return this.confronto;
   }

   incContatore(){
     this.contatore +=1;
     return this.contatore;
   }

   decContatore(){
     this.contatore -=1;
     return this.contatore;
   }

   getContatore(){
     return this.contatore;
   }

   setContatoreTrue(): boolean{
     this.confronto == true;
     return this.confronto;
   }
}