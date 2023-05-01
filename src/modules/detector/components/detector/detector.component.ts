import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-detector',
  templateUrl: './detector.component.html',
  styleUrls: ['./detector.component.less']
})
export class DetectorComponent implements OnInit {
  newsInput = new FormControl('');
  showResult = false;
  isTrue:boolean = true;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.showResult=false;
    this.api.detect(this.newsInput.value).subscribe((val:{isTrue:boolean})=>{
      this.showResult = true;
      this.isTrue=val.isTrue;
    });
  }

}
