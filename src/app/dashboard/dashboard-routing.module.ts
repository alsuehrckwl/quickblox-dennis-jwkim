import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../common/guard/auth.guard';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            {
                path: 'notice',
                loadChildren: './notifications/notifications.module#NotificationsModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'chatbot',
                loadChildren: './chatbot/chatbot.module#ChatbotModule',
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
