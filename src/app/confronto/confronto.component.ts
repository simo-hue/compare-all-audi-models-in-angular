import { Component, Input, OnInit } from '@angular/core';
import { ElencoModelliService } from '../common/elenco-modelli.service';
import { Modello } from '../common/modello.model';

@Component({
  selector: 'app-confronto',
  templateUrl: './confronto.component.html',
  styleUrls: ['./confronto.component.css']
})
export class ConfrontoComponent implements OnInit {

  @Input() mioModello: Modello;
  elencoModelli : Modello[];
  corrente : number;

  constructor(private elencoServ : ElencoModelliService) {
    this.corrente = 0;
    this.elencoModelli = this.elencoServ.elenco;
  }

  ngOnInit() {
  }

}