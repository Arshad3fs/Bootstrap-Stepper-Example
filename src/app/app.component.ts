import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  public progressbarWidth = "25%";
  public progressbarText = "Step 1 of 4";  

  handleStepChange = (step) => {
    this.progressbarWidth = (parseInt(step) / 4) * 100 + "%";
    this.progressbarText = "Step " + step + " of 5";    
  }    
}
