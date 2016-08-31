import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<h1>String Interpolation</h1>
    <app-databinding></app-databinding>
`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
