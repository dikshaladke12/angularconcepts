import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

export const routes: Routes = [
    {
        path : 'user-page',
        component: UserComponent
    },
    {
        path: "admin-page",
        component: AdminComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    }
];
