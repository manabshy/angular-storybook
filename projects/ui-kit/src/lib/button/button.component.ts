import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'onsi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  text = '';
  @Output()
  onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
