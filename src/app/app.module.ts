import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// import { QB } from 'quickblox';

import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientService } from './service/client.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './common/guard/auth.guard';
import { AuthService } from './common/guard/auth.service';
import { AppRoutingModule } from './app-routing.module';
// import { LoginComponent } from './login/login.component';
// import { SidebarComponent } from './common/layout/sidebar/sidebar.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatbotModule } from './dashboard/chatbot/chatbot.module';

@NgModule({
  declarations: [
    AppComponent,
    // ClientlistComponent,
    // LoginComponent,
    // SidebarComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ChatbotModule
  ],
  providers: [ClientService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
