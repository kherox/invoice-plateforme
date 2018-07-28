import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DevisComponent } from './devis/devis.component';
import { DevisItemComponent } from './devis/devis-item/devis-item.component';
import { DevisDetailComponent } from './devis/devis-detail/devis-detail.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app.routing.module';
import { NewsComponent } from './news/news.component';
import { InboxComponent } from './inbox/inbox.component';
import { TasksComponent } from './tasks/tasks.component';
import { CustomersComponent } from './customers/customers.component';
import { OffersComponent } from './offers/offers.component';
import { ProfileComponent } from './profile/profile.component';
import { OperationsComponent } from './operations/operations.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { InvoiceService } from './shared/services/invoice.service';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerItemComponent } from './customers/customers-list/customer-item/customer-item.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { InboxComposeComponent } from './inbox/inbox-compose/inbox-compose.component';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { InboxItemComponent } from './inbox/inbox-item/inbox-item.component';
import { InboxDetailComponent } from './inbox/inbox-detail/inbox-detail.component';
import { TasksComposeComponent } from './tasks/tasks-compose/tasks-compose.component';
import { TasksDetailComponent } from './tasks/tasks-detail/tasks-detail.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DevisComponent,
    DevisItemComponent,
    DevisDetailComponent,
    ProductsComponent,
    NewsComponent,
    InboxComponent,
    TasksComponent,
    CustomersComponent,
    OffersComponent,
    ProfileComponent,
    OperationsComponent,
    ProductsListComponent,
    LoginComponent,
    UserComponent,
    CustomersListComponent,
    CustomerItemComponent,
    CustomerDetailComponent,
    InboxComposeComponent,
    InboxListComponent,
    InboxItemComponent,
    InboxDetailComponent,
    TasksComposeComponent,
    TasksDetailComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
