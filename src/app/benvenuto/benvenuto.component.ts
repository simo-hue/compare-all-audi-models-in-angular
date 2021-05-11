import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ElencoModelliService } from '../common/elenco-modelli.service';
import { LoginService } from '../common/login.service';
import { Modello } from '../common/modello.model';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrls: ['./benvenuto.component.css']
})
export class BenvenutoComponent implements OnInit {

  modelli: Modello[];
  constructor(private mioServ: LoginService, private elencoModelli: ElencoModelliService, private elencoRoute : Router) { }

  ngOnInit() {
    if (!this.mioServ.getAutentica())
      //redirect
      this.elencoRoute.navigate(['/']);  
    this.modelli = this.elencoModelli.elenco;
  }

}