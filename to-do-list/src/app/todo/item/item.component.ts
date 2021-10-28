import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  constructor() { }
  @Input() item_obj: any = {name: String, check: Boolean};
  @Input() itens: any[] = [];

  itens2: any[] = [];
  ngOnInit(): void {
    
  }

  checkedItem(e: any){
    console.log(e.target.checked); // true/false
    e.target.checked;

    // if(e.target.checked == true){
      this.item_obj = {name: '', check: e.target.checked}
      console.log(this.item_obj);
      
    // }else{
    //   this.item_obj = {name: '', check: e.target.checked}
    // }
  }

  
} 
