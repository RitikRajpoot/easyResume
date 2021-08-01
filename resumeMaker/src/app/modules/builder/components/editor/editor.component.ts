import { Component, HostListener, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  themeColor = '#0b7af3';
  colorDropdownOpen = false;
  fontList =
  [
    {
      label: 'Poppins',
      value: 'poppins,sans-serif'
   },
    {
      label: 'Karla',
      value: 'Karla'
    },
    {
      label: 'Inconsolata',
      value: 'Inconsolata'
    },
    {
      label: 'Nunito',
      value: 'Nunito'
    },
    {
      label: 'Merriweather',
      value: 'Merriweather'
    },
    {
      label: 'Fira Sans',
      value: 'Fira Sans'
    },
    {
      label: 'Saira Semi Condensed',
      value: 'Saira Semi Condensed'
    }
  ];

  fontFamily = 'poppins,sans-serif';

  fontSize = {
    value: 'small',
  };

  constructor() { }

  ngOnInit(): void {
  }

  openColorDropdown(): void {
    this.colorDropdownOpen = !this.colorDropdownOpen;
  }
  closeOutsideSide(): void {
    this.colorDropdownOpen = false;
  }

  changeColor(color: string): void {
    this.themeColor = color;
  }

  getThemeColor(): string {
    return this.themeColor;
  }

  fontChanged(newFont: string): void {
    this.fontFamily = newFont;
  }

  fontSizeChanged(size: string): void {
    this.fontSize.value = size;
  }
}
