
import {Component} from "angular2/core";

@Component({
    selector: "contactComponent",
    template: `<h3 (click)="onSelect()" [class.clicked]="showDetail">{{contact.firstName}} {{contact.lastName}}</h3>
                <input [(ngModel)]="contact.firstName" type="text">
                <div *ngIf="showDetail">Phone No: {{contact.phone}}<br/>
                    Email: {{contact.email}}
                 </div>
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class ContactComponent {
        
    public contact = {firstName: "Andreas", lastName: "Hadj", phone: "1234", email: "a@a.com"};
    public showDetail = false;
    
    onSelect(){
        this.showDetail = true;
    }
}