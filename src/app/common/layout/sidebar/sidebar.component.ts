import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ClientService } from '../../../service/client.service';
import { Subscription } from 'rxjs/Subscription';
import { Client } from '../../../model/client.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  subscription: Subscription;

  clients: Array<Client> = [];

  selectedClient: Client = null;

  constructor( private service: ClientService ) {

  }

  ngOnInit() {
    console.log('sidebar onInit');
      this.subscription = this.service.getRoster().subscribe( roster => {
        console.log('subcription! ... ');
          const keys = Object.keys( roster['roster'] );

          for ( let i = 0; i < keys.length; i++ ) {
              this.clients.push( new Client( keys[i] ) );
              console.log( roster['roster'][keys[i]] );
          }
      } );
  }

  // ngOnDestroy() {
  //     this.subscription.unsubscribe();
  // }

  selectClient( selectedId: string ) {
      this.selectedClient = this.clients[0];
      this.service.setSelectedClient(this.clients[0]);
  }
}
