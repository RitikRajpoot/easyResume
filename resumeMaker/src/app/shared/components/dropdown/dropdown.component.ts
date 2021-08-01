import { Component, Input, OnInit } from '@angular/core';
import { DropdownList } from '../../models/dropdown-list.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  colorDropdownOpen = false;

  constructor() { }

  ngOnInit(): void {
  }
  openColorDropdown(): void {
    this.colorDropdownOpen = !this.colorDropdownOpen;
  }

}
