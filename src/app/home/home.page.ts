import { Component } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

n1:number;
n2:number;
nR:number;

  constructor() {}

  Calculadora()
  {
    this.nR = this.n1 * this.n2;
  }

}
