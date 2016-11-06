import { Component } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'todo-app',
    templateUrl: "/app/todo.component.html"
})

export class TodoComponent {

    newTodo: string;
    todos: Todo[];
    todoObj: Todo;

    constructor() {
        this.newTodo = '';
        this.todos = [];
    }

    addTodo(event) {
        this.todoObj = {
            title: this.newTodo,
            completed: false
        }
        this.todos.push(this.todoObj);
        this.newTodo = '';
        event.preventDefault();
    }

    deleteTodo(index) {
        this.todos.splice(index,1);
    }
}