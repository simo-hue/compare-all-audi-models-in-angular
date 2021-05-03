import { Component, Input, OnInit } from '@angular/core';
import { Modello } from '../common/modello.model';
import { StatoService } from '../common/stato.service';

@Component({
  selector: 'app-confronto',
  templateUrl: './confronto.component.html',
  styleUrls: ['./confronto.component.css']
})
export class ConfrontoComponent implements OnInit {

  @Input() mioModello: Modello;
  autorizzato: boolean;

  constructor(private servizio: StatoService) {}

  ngOnInit() {
  }

}