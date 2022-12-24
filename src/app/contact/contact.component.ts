import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = 'Dhouha';
  surname = 'Aouididi';
  Age = 22;
  thedate = Date();
  Description = "Tall blonde motivated and cheerfull";
  numero ='27938978';
  imgurl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9UUAgpabprzLjce-wpnM5Rpod45PUpC5W2OHWv9ldQ&s";
  snap = 9;
  lienurl ="https://getbootstrap.com/docs/5.2/components/navbar/";

  constructor() { }

  ngOnInit(){

  }
  OnAddSnap() {
    this.snap++
  }

  change () {
    this.name = "Baylacene";
    this.Description = "one of the bestest";
  }
  text ="";


}
