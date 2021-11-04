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
    
  }

  checkedItem(e: any){
    const itemCheck = this.itemObj;
    const checked = e.target.checked;

    const ls = localStorage.getItem('item') || '[]';
    const list = JSON.parse(ls);

    list.forEach((e: any, index: any) => {
      if(e.name == itemCheck.name){
        // console.log(itemCheck);
        // console.log(index);

        list.splice(index, 1, {name: itemCheck.name, check: checked});
        console.log(list);

      }
    });
  }
} 
