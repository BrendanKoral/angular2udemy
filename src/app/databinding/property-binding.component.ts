import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: `
  
  Property binding is set to: {{result}}
`,
  styleUrls: []
})
export class PropertyBindingComponent implements OnInit {

  @Input() result: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
