import { formattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  itens: any[]= [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: string) : void{ 
    
    this.itens.push(item);
    console.warn(this.itens);
    localStorage.setItem(JSON.parse('item', this.itens));
 } 

  // view(){
    
    
  //   // this.itens.push(JSON.stringify(`${this.itens}`));
   
   

  //   return localStorage.getItem('item');

  // }
}
