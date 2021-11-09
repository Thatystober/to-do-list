import { Component, OnInit } from '@angular/core';
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

  addItem(name: string, checked: boolean) : void{ 
    if(!name){
      console.log('Não pode inserir');
    }else {
      this.itemObjs = {name: name, check: checked};
      this.itens.push(this.itemObjs);
      localStorage.setItem('item', JSON.stringify(this.itens));
    }
 } 
 
  exists(){
    if(localStorage.getItem('item')){
      const ls = localStorage.getItem('item') || '[]';
      const list = JSON.parse(ls);
      
      list.forEach((el: any) => {
        this.addItem(el.name, el.check);
      });
    }
  }

  // reciver(teste: any){
  //   console.log(teste);
  // }


}
