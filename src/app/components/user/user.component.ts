import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string
  age: number
  email: string
  address: Address
  hobbies: string[]
  hello: any

  constructor() {
   }

  ngOnInit() {
    this.name = "Mitch Lembke"
    this.age = 24
    this.address = {
      street: '812 Annlynn Court',
      city: 'St. Louis',
      state: 'MO.'
    },
    this.email = 'mitchell.lembke@gmail.com'
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music']
    this.hello = 'hello'
  }

  onClick(){
    this.hobbies = this.hobbies.concat('new hobby')
  }

  addHobby(hobby){
    console.log(hobby)
    this.hobbies.push(hobby)
    return false
  }

  deleteHobby(hobby){
    this.hobbies = this.hobbies.filter(h => h !== hobby)
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}
