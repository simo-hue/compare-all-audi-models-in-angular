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
    if (this.utente=="test" && this.pwd == "1234"){// imposto username e Password;
      this.mioServ.setAutentica(true);
      // Utilizzo sweetAlert2 che vuole come parametri 3 stringhe: il titolo dell' alert, la descrizione e il tipo dell' alert;
       swal.fire('LOGIN ESEGUITO CON SUCCESSO', 'Username e Password corretti', 'success');
      }
    else{
      this.mioServ.setAutentica(false);
      // Utilizzo sweetAlert2 che vuole come parametri 3 stringhe: il titolo dell' alert, la descrizione e il tipo dell' alert;
       swal.fire('LOGIN FALLITO', 'Username o Password errati, cliccare sul bottone di AIUTO', 'error');
    }  
  }
  
  //controllo se è autenticato;
  isAutenticato():boolean {
    return this.mioServ.getAutentica();
  }
  //btn help dove fornisce il suggerimento per accedere;
  alerta5() {
    swal.fire('INFORMAZIONI PER IL LOGIN', '✔️  Username: test ✔️  Password: 1234', 'info')
  }

}