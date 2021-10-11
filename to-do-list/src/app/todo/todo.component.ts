import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemComponent } from './item/item.component'; 


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
    if(!item){
      console.log('não');
    } else {
      this.itens.push({id:this.itens.length, name:item});
      console.warn(this.itens);
    }
  }
}
