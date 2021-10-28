import { Component, Input, OnInit } from '@angular/core';


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
    console.log(e.target.checked); // true/false
    console.log(this.itemObj)

    if(e.target.checked == true){
      // localStorage.removeItem(this.itemObj);
      // localStorage.setItem('item', )
    }else{

    }
  }

  
} 
