import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {
  hero = {
    name: '',
    power: 0,
    image: '',
  };

  heros: any[] = [];

  ajout() {
    this.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      image: '',
    }
    console.log(this.heros);
  }


  constructor() {}

  ngOnInit(): void {}
}
