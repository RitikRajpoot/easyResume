import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() idDisabled = false;
  @Input() on = true;
  @Input() themeColor = '#0b7';
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clicked(): void {
    this.on = !this.on;
    this.valueChange.emit(this.on);
  }

}
