import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: `
    <button (click)="onClicked()">Click me</button>
`,
  styleUrls: []
})
export class EventBindingComponent implements OnInit {

  @Output clicked = new EventEmitter<string>();


  onClicked() {
    this.clicked.emit("It works!");
  }

  constructor() { }

  ngOnInit() {
  }

}
