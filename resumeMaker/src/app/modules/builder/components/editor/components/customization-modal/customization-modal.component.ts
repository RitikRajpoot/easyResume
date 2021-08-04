import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customization-modal',
  templateUrl: './customization-modal.component.html',
  styleUrls: ['./customization-modal.component.scss']
})
export class CustomizationModalComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
customizationForm: FormGroup = this.fb.group({
  picture: [{switchId:1, value: true}],
  profile: [{switchId:1, value: true}],

  address: [{switchId:1, value: false}],
  birthDate: [{switchId:1, value: false}],
  nationality: [{switchId:1, value: true}],
  maritalStatus: [{switchId:1, value: false}],

  email: [{switchId:1, value: true}],
  phoneNo: [{switchId:1, value: true}],
  website: [{switchId:1, value: false}],
  linkedIn: [{switchId:1, value: false}],
  facebook: [{switchId:1, value: false}],
  twitter: [{switchId:1, value: false}],
  github: [{switchId:1, value: false}],
  leetcode: [{switchId:1, value: false}],
  other: [{switchId:1, value: false}],

  name: [{switchId:1, value: true}],
  profession: [{switchId:1, value: true}],
  workEx: [{switchId:1, value: false}],
  education: [{switchId:1, value: true}],

  simple1: [{switchId:1, value: true}],
  simple2: [{switchId:1, value: false}],
  circle: [{switchId:1, value: false}],
  bars: [{switchId:1, value: false}],

  list1: [{switchId:1, value: true}],
  list2: [{switchId:1, value: false}],
 });
 
  togglePicture(event: boolean): void {
   
  }

  toggleProfile(event: boolean): void {
    
  }
  toggleNationality(event: boolean): void {

  }
  toggleAddress(event: boolean): void {

  }
  toggleBirthDate(event: boolean): void {

  }
  toggleMaritalStatus(event: boolean): void {

  }
  toggleEmail(event: boolean): void {
    
  }
  togglePhone(event: boolean): void {

  }
  toggleWebsite(event: boolean): void {

  }
  toggleLinkedIn(event: boolean): void {

  }
  toggleFacebook(event: boolean): void {

  }
  toggleTwitter(event: boolean): void {

  }
  toggleGithub(event: boolean): void {

  }

  toggleLeetCode(event: boolean): void {

  }
  toggleOthers(event: boolean): void {

  }
  toggleWorkEx(event: boolean): void {

  }
  toggleEducation(event: boolean): void {

  }

  toggleProfession(event: boolean): void {

  }
  toggleSimple1(event: boolean): void {

  }

  toggleSimple2(event: boolean): void {

  }
  toggleCircleSkills(event: boolean): void {

  }
  toggleBarSkills(event: boolean): void {

  }
  toggleList1(event: boolean): void {

  }
  toggleList2(event: boolean): void {

  }
}
