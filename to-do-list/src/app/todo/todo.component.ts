import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
    const todoList = [
      {todo: 'Ir ao mercado', done: false},
      {todo: 'Reunião', done: false},
      {todo: 'Levar o lixo para fora', done: false},
      {todo: 'Fazer o jantar', done: false}
      ]
  }

}
