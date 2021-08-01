import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  languageList = [{label: 'English', id: 'en'}, {label: 'French', id: 'fr'}];
  type = 'text';

  homeForm: FormGroup = this.fb.group({
    language: { value: 'en', id: 'en'}
  });

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  navigateToBuilder(): void {
    this.router.navigate(['/builder']);
  }
}
