import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { ChatbotComponent } from './chatbot/chatbot.component';
import { SidebarComponent } from '../common/layout';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        SidebarComponent
    ]
})
export class DashboardModule { }
