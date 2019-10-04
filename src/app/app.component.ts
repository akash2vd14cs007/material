import { Component } from '@angular/core';

//...
// import { TooltipConfig } from 'ng-bootstrap/tooltip';
import { sideNavAnimation, sideNavContainerAnimation } from './sidenav.animations';

//...


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [sideNavAnimation, sideNavContainerAnimation]
})

export class AppComponent {

  // isOpen = true;

  // toggle() {
  //    this.isOpen = !this.isOpen;
  //  }

//...
xpandStatus=true;
public collapsed = false;
}

// export function getAlertConfig(): TooltipConfig {
//   return Object.assign(new TooltipConfig(), {
//     placement: 'right',
//     container: 'body'
//   });

