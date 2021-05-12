import { Injectable } from '@angular/core';
import { Modello } from './modello.model';

@Injectable()
export class StatoService {
  // se far partire il confronto tra due veicoli o no
  confronto: boolean;
  contatore: Array<Modello>;
  constructor() {
    this.confronto = false;
    this.contatore = Array(0);
  }
  aggiungiConfronto(modello: Modello) {
    this.contatore.push(modello);
  }
  rimuoviConfronto(modello: Modello) {
    let i = this.contatore.indexOf(modello);
    if (i < this.contatore.length) this.contatore.splice(i, 1);
  }
  getContatore() {
    return this.contatore;
  }

  setContatoreTrue(): boolean {
    this.confronto == true;
    return this.confronto;
  }
}
