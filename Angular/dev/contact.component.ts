
import {Component} from "angular2/core";
import {ContactListComponent} from "./contacts/contact-list.component";

@Component({
    selector: "contactComponent",
    template: ` 
       <contact-list></contact-list>
    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [ContactListComponent]
})

export class ContactComponent {
        
 
}