import { Component, OnInit } from '@angular/core';
import { ItemComponent } from './item/item.component'; 


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }


}
