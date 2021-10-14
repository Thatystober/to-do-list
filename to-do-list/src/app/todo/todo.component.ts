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
    this.exists();
  }

  addItem(item: string) : void{ 
    this.itens.push(item);
    localStorage.setItem('item', JSON.stringify(this.itens));
 } 
 
  exists(){
    if(localStorage.getItem('item')){
      const ls = localStorage.getItem('item') || '[]';
      const list = JSON.parse(ls);

      list.forEach((el: string) => {
        this.addItem(el);
      });
    }
  }
}
