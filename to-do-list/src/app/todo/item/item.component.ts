import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  constructor() { }
  @Input() itemObj: any;

  ngOnInit(): void {
    if(this.itemObj.check == true){
      const check = window.document.querySelector(".check");
    
    }
  }

  checkedItem(e: any){
    const itemCheck = this.itemObj;
    const checked = e.target.checked;

    const ls = localStorage.getItem('item') || '[]';
    const list = JSON.parse(ls);

    list.forEach((e: any, index: any) => {
      if(e.name == itemCheck.name){
        list.splice(index, 1, {name: itemCheck.name, check: checked});
        console.log(list);

        localStorage.setItem('item', JSON.stringify(list));
      }
    });
    

  }
} 
