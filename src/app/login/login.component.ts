import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utente : String;
  pwd : String;


  constructor(private mioServ:LoginService) { }

  ngOnInit() {

  }

  autenticazione() {
    if (this.utente=="test" && this.pwd == "1234"){
      this.mioServ.setAutentica(true);
       swal.fire('LOGIN ESEGUITO CON SUCCESSO', 'Username o Password corretti', 'success');
      }
    else{
      this.mioServ.setAutentica(false);
       swal.fire('LOGIN FALLITO', 'Username o Password errati, cliccare sul bottone di AIUTO', 'error');
    }  
  }

  isAutenticato():boolean {
    return this.mioServ.getAutentica();
  }

  alerta5() {
    swal.fire('INFORMAZIONI PER IL LOGIN', 'Username: test - Password: 1234', 'info')
  }

}