import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent {
    password2: string = "";
    password: string = "";

    mensajePass: string = "";

    modificarLogin(){
      console.log("valid", this.password);
      if(!this.password || !this.password2){
        this.mensajePass = "Not introduced password"
        return;
      }
      
      if(this.password === this.password2){
        this.mensajePass = "Password Updated"
      }else {
        this.mensajePass = "Password is not equal"
      }
    }

}
