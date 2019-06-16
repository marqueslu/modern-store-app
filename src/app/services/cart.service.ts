import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class CartService{

    public items: any[] = [];
    cartChange: Observable<any>;
    CartChangeObserver: Observer<any>;

    constructor() {
        this.cartChange = new Observable((observer: Observer<any>) => {
            this.CartChangeObserver = observer;
        });
    }

    addItem(item){
        this.items.push(item);
        this.CartChangeObserver.next(this.items);
    }

}