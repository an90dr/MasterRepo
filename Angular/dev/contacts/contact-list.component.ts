import {Component} from "angular2/core";
import {SingleContactComponent} from "./contact.component";

@Component({
    selector: "contact-list",
    template: `
         <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)" 
                [class.clicked]="selectedContact === contact">{{contact.firstName}} {{contact.lastName}}
                
            </li>
        </ul>
        <contact [contact]="selectedContact "></contact>
    `,
    directives: [SingleContactComponent],
    styleUrls: ['src/css/mycomponent.css']
})

export class ContactListComponent{

       public contacts = [{firstName: "Andreas", lastName: "Hadj", phone: "1234", email: "a@a.com"},
                        {firstName: "John", lastName: "John", phone: "12345678", email: "j@j.com"},
                        {firstName: "George", lastName: "G", phone: "123444", email: "g@g.com"},
                        {firstName: "Nik", lastName: "Nik", phone: "54321", email: "n@n.com"}];
    
    public selectedContact = this.contacts[0];
    
    onSelect(contact){
        this.selectedContact = contact;
    }

}

