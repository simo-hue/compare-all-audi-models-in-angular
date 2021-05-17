import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {

//dice se l'utente ha insaerito le credenziali corrette(autenticato=TRUE) o meno(autenticato=FALSE)
  autentica : boolean;

  constructor() { 
    this.autentica = false;
  }

  setAutentica(dato:boolean)
  {
    this.autentica = dato;
  }

  getAutentica():boolean
  {
    return this.autentica;
  }
}