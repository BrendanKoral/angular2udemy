import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: `
  {{stringInterpolation}}!!!
  {{numberInterpolation}}
`,
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;

  constructor() { }

  ngOnInit() {
  }

}
