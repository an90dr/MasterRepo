import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World123!</p>
        <h2> Now comes the second Component</h2>
        <my-component></my-component>
    `,
    directives: [MyComponentComponent]
})
export class AppComponent {

}