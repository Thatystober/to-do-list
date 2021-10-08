import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itens: any[]= [];
  constructor() { }

  ngOnInit(): void {
    
  }

  addItem(item: string) : void{
    this.itens.push({id:this.itens.length, name:item});
    console.warn(this.itens);

  }

}
