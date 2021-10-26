import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // item_obj = {nome: String, check: Boolean};
  itens: any[]= [];

  constructor() { }

  ngOnInit(): void {
    this.exists();
  }

  addItem(item: string) : void{ 
    if(!item){
      console.log('Não pode inserir');
    }else {
      const item_obj = {name: item, check: false};
      this.itens.push(item_obj);
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

  checkedItem(){
    
  }
}
