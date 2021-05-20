import { Component, Input, OnInit } from '@angular/core';
import { Modello } from '../common/modello.model';
import { ElencoModelliService } from '../common/elenco-modelli.service';
import { StatoService } from '../common/stato.service';
import { LoginService } from '../common/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-visualizza-modelli',
  templateUrl: './visualizza-modelli.component.html',
  styleUrls: ['./visualizza-modelli.component.css']
})
export class VisualizzaModelliComponent implements OnInit {
  @Input() mioModello: Modello;
  elencoModelli: Modello[];
  corrente: number;

  constructor(
    private elencoServ: ElencoModelliService,
    private servizio: StatoService,
    private login: LoginService
  ) {}

  ngOnInit() {
    this.corrente = 0;
    this.elencoModelli = this.elencoServ.elenco;
    this.servizio.contatore = Array(0);
  }

  addConfronto(modello: Modello) {
    if (this.servizio.contatore.indexOf(modello) == -1) { //se non trova il modello nell'array
      if (
        this.servizio.contatore.length >= 0 &&
        this.servizio.contatore.length < 2
      ) {
        this.servizio.contatore.push(modello);
      } else if (this.servizio.contatore.length == 2) {
        this.servizio.setContatoreTrue();
      }
    } else { //se invece lo trova
      swal.fire('INFORMAZIONE', 'Il veicolo selezionato è già stato aggiunto', 'info')
    }
  }

  remConfronto(modello: Modello) {
    let i = this.servizio.contatore.indexOf(modello);
    if (i != -1) { //se il modello è trovato
      this.AzzeraContatore();
    } else {
      swal.fire('ERRORE', 'Non si può eliminare un veicolo se prima non è stato aggiunto', 'error')
    }
  }

  AzzeraContatore() {
    this.servizio.contatore = Array(0);
  }

  tornaLogin(dato: boolean) {
    this.login.setAutentica(dato);
  }
  
  getContatoreLength() {
    return this.servizio.contatore.length;
  }
}
