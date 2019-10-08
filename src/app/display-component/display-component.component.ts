import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss']
})
export class DisplayComponentComponent implements OnInit {
  @Input() display: number;
  @Input() btnClick: boolean;

  constructor() { }

  ngOnInit() {
  }


}
