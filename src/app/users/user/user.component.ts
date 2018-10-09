import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
    user: { id: number, name: string };
    paramSubscription: Subscription

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.user = {
			id: this.route.snapshot.params['id'],
			name: this.route.snapshot.params['name']
		};

		// reactively bind route change,
		// hasznos ha ugyanazon a route-on változik az url
		this.paramSubscription = this.route.params.subscribe(
			(params: Params) => {
				this.user.id = params['id'];
				this.user.name = params['name'];
			}
		);
    }
	
	// a router observable-i megcsinálják, de ha sajátot írunk, 
	// mindig meg kell csinálni!!!
    ngOnDestroy() {
		this.paramSubscription.unsubscribe();
    }

}
