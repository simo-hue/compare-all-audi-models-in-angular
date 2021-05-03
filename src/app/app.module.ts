import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VisualizzaModelliComponent } from './visualizza-modelli/visualizza-modelli.component';
import { ConfrontoComponent } from './confronto/confronto.component';
import { ElencoModelliService } from './common/elenco-modelli.service';

import { LoginService } from './common/login.service';
import { StatoService } from './common/stato.service';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const LISTA_ROUTER = [
  {path:''  ,component:LoginComponent},
  {path:'benvenuto'  ,component:BenvenutoComponent},
  {path:'visualizza'  ,component:VisualizzaModelliComponent},
  {path:'confronto'  ,component:ConfrontoComponent}
  
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, 
    RouterModule.forRoot(LISTA_ROUTER) ],
  declarations: [ AppComponent, VisualizzaModelliComponent, ConfrontoComponent, BenvenutoComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ElencoModelliService, StatoService, LoginService]
})
export class AppModule { }
