import {Component} from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  
  toppingList: any = [
    {value: 'extra_cheese', label:'Extra cheese'},
    {value:'mushroom', label:'Mushroom'},
    {value:'onion', label:'Onion'},
    {value:'pepperoni', label:'Pepperoni'},
    {value:'sausage', label:'Sausage'},
    {value:'tomato', label:'Tomato'}
  ];

  toppingList$: Observable<any>;

  

  selectedObjects : any[];

  selectedObjectsFromArray: any;

  constructor(){}

  ngOnInit() {


    this.toppingList$ = of(this.toppingList).pipe(delay(2500));

		this.selectedObjects = [{value:'tomato', label:'Tomato'}]; 
    
    this.selectedObjectsFromArray = ['tomato', 'sausage']
	}

  comparer(o1: any, o2: any): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.label === o2.label : o2 === o2;
  }
}
