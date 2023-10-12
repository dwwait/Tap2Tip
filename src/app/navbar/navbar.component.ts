import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
      
  }
  activeNav :boolean[]= [true,false,false,false,false,false];

  toggleActive(index:number){
    this.activeNav = [false,false,false,false,false,false];
    this.activeNav[index] = true;
  }
}
