import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hauser } from '../häuser';
import { HauserNEU } from '../hauser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-hauser',
  templateUrl: './hauser.component.html',
  styleUrls: ['./hauser.component.css']
})
export class HauserNEUComponent implements OnInit {
  users:any;
  constructor( private router: Router,
    private activatedRoute: ActivatedRoute,
    private userData:UserDataService) {
      this.userData.users().subscribe((data)=>{
        console.warn("data",data);
        this.users=data;
      })
     }

  bild1:string = 'assets/Images/Häuser/Haus1.jpg';
  bild2:string = 'assets/Images/Häuser/Haus2.jpg';
  bild3:string = 'assets/Images/Häuser/Haus3.jpg';
  bild4:string = 'assets/Images/Häuser/Haus4.jpg';
  hausers = HauserNEU;

  ngOnInit(): void {
    {
      var id = this.activatedRoute.snapshot.paramMap.get('id');
      var HausById = HauserNEU.find(x => x.id ==id)!;

      }
  }

}
