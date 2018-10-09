import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'users', component: UsersComponent, children: [
			{ path: ':id/:name', component: UserComponent }
		]
	},
	{
		path: 'servers',
		// a route levédése
		// canActivate: [AuthGuard],
		// csak a gyerekek levédése
		canActivateChild: [AuthGuard],
		component: ServersComponent,
		children: [
			{ path: ':id', component: ServerComponent },
			{ path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
		]
	},
	{ path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	// megmondjuk mit ajánl ki
	exports: [RouterModule]
})
export class AppRoutingModule {

}
