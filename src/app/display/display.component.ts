import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public contacts: any;

  CustId: any;
  constructor(private myService: ContactService) { }

  public async ngOnInit(): Promise<void> {
    this.myService.onCustomerSelect.subscribe(value => {
      console.log('FROM Display Comp -----', value);
      this.CustId = value;
      if (this.CustId) {
        this.myService.getCustomersById(this.CustId).then(response =>{
          console.log(response)
        })
      }
    })
  }

}