import { Component, Input, OnInit, Output } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  itens: any[]= [];
  itemObjs: any = {name: String, check: Boolean};

  constructor() { }

  ngOnInit(): void {
    this.exists();
  }

  addItem(item: string) : void{ 
    if(!item){
      console.log('Não pode inserir');
    }else {
      this.itemObjs = {name: item, check: Boolean};
      this.itens.push(this.itemObjs);
      localStorage.setItem('item', JSON.stringify(this.itens));
    }
 } 
 
  exists(){
    if(localStorage.getItem('item')){
      const ls = localStorage.getItem('item') || '[]';
      const list = JSON.parse(ls);

      list.forEach((el: any) => {
        this.addItem(el.name);
      });
    }
  }

}
