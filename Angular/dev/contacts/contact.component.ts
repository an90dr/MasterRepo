import {Component} from "angular2/core";

@Component({
    selector: "contact",
    template: `
    
        <input [(ngModel)]="contact.firstName" type="text">
        <div>
        
            Phone No: {{contact.phone}}<br/>
            Email: {{contact.email}}

        </div>
    `,
    inputs: ["contact"]
})

export class SingleContactComponent{

 public contact = {}

}

