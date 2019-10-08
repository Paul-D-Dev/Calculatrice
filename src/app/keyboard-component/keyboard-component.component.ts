import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-keyboard-component',
  templateUrl: './keyboard-component.component.html',
  styleUrls: ['./keyboard-component.component.scss']
})
export class KeyboardComponentComponent implements OnInit {
btnClicked = false;
  @Output() btnClick = new EventEmitter<boolean>();
changeColor(): void {
  this.btnClicked = !this.btnClicked;
  this.btnClick.next(this.btnClicked);
  console.log(this.btnClicked);
}
constructor() { }

ngOnInit() {
}


}
