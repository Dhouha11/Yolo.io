import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  Resume = 'Developpeur full stack';
  user = {
    nom :'fathi',
    age :17,
    jour :new Date(),
    imgurl:"",

  }
  display = true;
  imgurl1="https://imgv3.fotor.com/images/homepage-feature-card/Fotor-image-cropper.jpg";

  constructor() { }

  ngOnInit(): void {
  }
  myname="";
  do() {
    this.user.nom= this.myname;
  }


}
