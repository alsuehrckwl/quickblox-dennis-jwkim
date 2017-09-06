import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [ AuthGuard ]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
