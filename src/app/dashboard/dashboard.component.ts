import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuickbloxService } from '../service/quickblox.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [QuickbloxService]
})

export class DashboardComponent implements OnInit {

  onConnect;

  constructor( public router: Router, qbs: QuickbloxService ) {
    // this.onConnect = qbs.onConnect();
  }

  ngOnInit() {
    if ( this.router.url === '/' ) {
      this.router.navigate(['/login']);
    }
  }

}
