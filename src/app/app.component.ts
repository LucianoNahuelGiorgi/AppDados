import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = "../assets/img/dice1.png";
  dadoDerecha = "../assets/img/dice1.png";
  a = 0;
  b = 1;

  tirarDados(): void {
    this.a = Math.round(Math.random() * 5) + 1;
    this.b = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = "../assets/img/dice" + this.a + ".png";
    this.dadoDerecha = "../assets/img/dice" + this.b + ".png"
  }
}