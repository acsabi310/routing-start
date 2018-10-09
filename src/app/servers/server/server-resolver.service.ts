import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

//  creating type
interface Server {name: string; id: number; status: string; }

@Injectable()
export class ServerResolver implements Resolve<Server> {

	constructor(private serversService: ServersService) {}

	resolve(route: ActivatedRouteSnapshot, state?: RouterStateSnapshot):
		Observable<Server> | Promise<Server> | Server {
			return this.serversService.getServer(+route.params['id']);
	}
}
