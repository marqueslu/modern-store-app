import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sub-menu',
    templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {
    public totalItems: number = 0;
    public user: string = '';

    constructor(private cartService: CartService, private router: Router) {
        this.cartService.cartChange.subscribe((data) => {
            console.log(data);
            this.totalItems = data.length;
        });

        const data = JSON.parse(localStorage.getItem('ms.user'));
        if (data) {
            this.user = data.name;
        }
    }


    ngOnInit() { }

    logout(){
        localStorage.clear();
        this.router.navigate(['/']);
    }
}
