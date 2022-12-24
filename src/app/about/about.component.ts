import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  user = {
    nom: 'titi',
    age: 25,
    job: ' model',
    pic: 'https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg',
    bg:'yellow',
    color:'blue',
    forme :'italic',

  };


  food = ['cookies', 'brownies', 'white chocolate'];

  done = '';
  students=[
    {esm:"ahmed",
     age:45,


  },
  {esm:"beda",
  age:35,

  },
  {esm:"didi",
  age:30,

  }
  ]
blue: any;


  constructor() {}

  ngOnInit(): void {}
  change() {
    this.user.nom = 'micha';
  }
  display = true;
}
