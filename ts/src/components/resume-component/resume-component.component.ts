import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.scss']
})
export class ResumeComponentComponent implements OnInit {

  constructor() { }

  activeResume: boolean = false;

  ngOnInit(): void {
  }

  isActiveResume(): void {
    this.activeResume = true;
  }

}
