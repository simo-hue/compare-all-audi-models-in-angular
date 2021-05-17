import { Injectable } from '@angular/core';
import { Modello } from './modello.model';

@Injectable()
export class StatoService {
  // se far partire il confronto tra due veicoli o no
  confronto: boolean;
  // ArrayList di oggetti che andrà a contenere i due veicoli selezionati dall utente per confrontarli
  contatore: Array<Modello>;
  constructor() {
    this.confronto = false;
    this.contatore = Array(0);
  }
  // Aggiunge il modello selezionato all ArrayList di oggetti 
  aggiungiConfronto(modello: Modello) {
    this.contatore.push(modello);
  }
  // Rimuove il modello selezionato dall ArrayList di oggetti 
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
