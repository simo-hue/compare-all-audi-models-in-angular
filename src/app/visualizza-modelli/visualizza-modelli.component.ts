import { Component, Input, OnInit } from '@angular/core';
import { Modello } from '../common/modello.model';
import { ElencoModelliService } from '../common/elenco-modelli.service';
import { StatoService } from '../common/stato.service';


  @Component({
  selector: 'app-visualizza-modelli',
  templateUrl: './visualizza-modelli.component.html',
  styleUrls: ['./visualizza-modelli.component.css']
})

export class VisualizzaModelliComponent implements OnInit {

  @Input() mioModello: Modello;
  elencoModelli : Modello[];
  corrente : number;
  contatore : number;

  constructor(private elencoServ : ElencoModelliService, private servizio: StatoService) {}

  ngOnInit() {
    this.corrente = 0;
    this.elencoModelli = this.elencoServ.elenco;
    this.contatore = 0;
  }
  
  addConfronto(){
    if(this.contatore >= 0 && this.contatore < 2){
      this.contatore += 1;
      console.log(this.contatore);
    }
    else if(this.contatore == 2){
      this.servizio.setContatoreTrue();
    }
  }

  remConfronto() {
    if(this.contatore > 0)
      this.contatore -= 1;
    console.log(this.contatore);
  }

  AzzeraContatore(){
    this.contatore = 0;
  }

}