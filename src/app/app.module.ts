import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		UsersComponent,
		ServersComponent,
		UserComponent,
		EditServerComponent,
		ServerComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [ServersService, AuthGuard, AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }