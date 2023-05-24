import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username:string = '';
  password:string = '';
  constructor() {}

  ngOnInit(){

  }

  validateLogin(){
    // console.log((this.username))
    // console.log((this.password))
    if (!this.username || !this.password) {
      alert('Por favor, preencha todos os campos de login.');
      
    }else if (this.username == "adm" && this.password == "123") {
      alert('Login bem-sucedido!');
      // Redirecionar
    } else {
      alert('Usuário ou senha inválidos. Tente novamente.');
    }
  }
  }

