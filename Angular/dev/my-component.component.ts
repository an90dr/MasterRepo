import {Component} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector: 'my-component',
    template:`
       Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'red': '' ">{{name}}</span> and this is my first
       Angular 2 Component.
       <br>
       <br>
       <span [class.is-awsome]="inputElement.value === 'yes'"> Is it awsome? </span>
       <input type="text" #inputElement (keyup)="0">
        <br>
       <br>
       <button [disabled]="inputElement.value !== 'yes'">Only Enabled If yes was entered</button>
       <test></test>
    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]
})
export class MyComponentComponent{
    name = 'Andr'
}
