import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private age: number;
  private email: string;

  constructor() {

  }

  ngOnInit() {
    this.name = 'Kongpob Kunchanuan';
    this.age = 39;
    this.email = 'k.kunchanuan@hotmail.com';
  }

}
