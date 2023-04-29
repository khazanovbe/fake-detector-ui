import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detector',
  templateUrl: './detector.component.html',
  styleUrls: ['./detector.component.less']
})
export class DetectorComponent implements OnInit {
  newsInput = new FormControl('');
  isTrue:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
