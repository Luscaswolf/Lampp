import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username:string = '';
  password:string = '';
  constructor(private router: Router) {}

  ngOnInit(){

  }
  //Funcão que valida se o usuario é permitido ou não
  validateLogin(){
    if (!this.username || !this.password) {
      alert('Por favor, preencha todos os campos de login.');
 
    }else if (this.username == "adm" && this.password == "123") {
      this.router.navigate(['/contatos']);

    } else {
      alert('Usuário ou senha inválidos. Tente novamente.');
    }
  }
  }

