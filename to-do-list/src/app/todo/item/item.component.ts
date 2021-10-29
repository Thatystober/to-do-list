import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  constructor() { }
  @Input() itemObj: any;
  // @Output() checked = new EventEmitter;

  ngOnInit(): void {
    
  }

  checkedItem(e: any){
    // console.log(e.target.checked); // true/false
    // console.log(this.itemObj)
    var teste = this.itemObj;
    
    if(e.target.checked === true){
      const ls = localStorage.getItem('item') || '[]';
      const list = JSON.parse(ls);
      
      list.forEach(function(e: any){
        if(e.name == teste.name)
        {
          console.log(teste);
          localStorage.removeItem('item');
        }else{
          //console.log("false");
        }
        
      });



    }else{

    }
  }

  
} 
