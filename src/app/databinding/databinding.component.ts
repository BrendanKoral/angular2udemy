import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: `
  {{stringInterpolation}}!!!
  {{numberInterpolation}}
  
  <h1>Property Binding 1</h1>
    <input type="text" value="{{stringInterpolation}}">
    
    <h1>Property Binding 2</h1>
    <input type="text" [value]="stringInterpolation">
    
    <p [ngClass]="{testMe: onResult()}">Is this styled?</p>
    <p [ngStyle]="{color: 'blue'}">HOW ABOUT THIS THOUGH???</p>
`,
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;

  onResult(){
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
