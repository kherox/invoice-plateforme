import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DevisComponent } from './devis/devis.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { InboxComponent } from './inbox/inbox.component';
import { CustomersComponent } from './customers/customers.component';
import { OffersComponent } from './offers/offers.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { OperationsComponent } from './operations/operations.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import {LoginComponent} from './login/login.component';
import { UserComponent } from './user/user.component';
import { InboxComposeComponent } from './inbox/inbox-compose/inbox-compose.component';
import { TasksComposeComponent } from './tasks/tasks-compose/tasks-compose.component';

const appRoutes: Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'devis', component : DevisComponent},
    {path : 'product', component : ProductsComponent, children : [
        {path : 'list' , component : ProductsListComponent}
    ]},
    {path : 'news', component: NewsComponent },

    {path : 'inbox' , component : InboxComponent},
    {path : 'inbox-compose' , component : InboxComposeComponent},

    {path : 'customers', component : CustomersComponent},
    {path : 'offers', component : OffersComponent},
    {path : 'user', component : ProfileComponent},

    {path : 'tasks', component : TasksComponent},
    {path : 'tasks-compose', component : TasksComposeComponent},

    {path : 'ops', component : OperationsComponent},
    {path : 'signup', component : UserComponent}
 ]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [RouterModule]
})

export class AppRoutingModule{}
