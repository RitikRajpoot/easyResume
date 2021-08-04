import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() idDisabled = false;
  @Input() value = true;
  @Input() themeColor = '#0b7';
  @Input() label = 'Label Here';
  @Input() labelSize = 'small';
  @Input() id = 'default';
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clicked(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }

}
