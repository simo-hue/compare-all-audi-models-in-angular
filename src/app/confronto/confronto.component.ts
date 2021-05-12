import { Component, Input, OnInit } from '@angular/core';
import { ElencoModelliService } from '../common/elenco-modelli.service';
import { Modello } from '../common/modello.model';
import { StatoService } from '../common/stato.service';

@Component({
  selector: 'app-confronto',
  templateUrl: './confronto.component.html',
  styleUrls: ['./confronto.component.css']
})
export class ConfrontoComponent implements OnInit {
  elencoModelli: Array<Modello>;
  corrente: number;

  constructor(private serv: StatoService) {
    this.elencoModelli = Array();
    this.corrente = 0;
    this.elencoModelli = this.serv.contatore;
    console.log(this.elencoModelli);
  }

  ngOnInit() {}
}
