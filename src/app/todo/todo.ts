import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-todo',
  imports: [MatCard, MatCardTitle, MatCardContent,MatButton],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

}
