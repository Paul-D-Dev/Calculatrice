import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculatrice-component',
  templateUrl: './calculatrice-component.component.html',
  styleUrls: ['./calculatrice-component.component.scss']
})
export class CalculatriceComponentComponent implements OnInit {
  a: string; // number si input text ='number'
  b: string;
  result: number;
  btnClicked: boolean;

  constructor() { }

  ngOnInit() {
  }

  multiplicate(): number {
    return this.result = parseInt(this.a, 10) * parseInt(this.b, 10); // car input text = "text" si on avait mis number
    // par besoin de parseInt
  }
  addition(): number  {
    return this.result = parseInt(this.a, 10) + parseInt(this.b, 10);
  }
  sous(): number  {
    return this.result = parseInt(this.a, 10) - parseInt(this.b, 10);
  }
  division(): number {
    return this.result = parseInt(this.a, 10) / parseInt(this.b, 10);
  }
  changeColor(event) {
    this.btnClicked = event;
  }
}
