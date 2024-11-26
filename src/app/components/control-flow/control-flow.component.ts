import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
    isDiv1Visible: boolean = true;

    cityList: string[]= ["pune","Nagpur","chandrapur","hydrabad"]

    studentInfo : any[] =[
      {name : "rohan", phoneNumber: "1234546623", email : "rohan@gmail.com"},
      {name : "minal", phoneNumber: "12345566563", email : "minal@gmail.com"},
      {name : "ziva", phoneNumber: "1222222222", email : "ziva@gmail.com"},
      {name : "reo", phoneNumber: "4444444444", email : "reo@gmail.com"},
      {name : "leo", phoneNumber: "675767575676", email : "leo@gmail.com"},
      {name : "mehak", phoneNumber: "5453545334", email : "mehak@gmail.com"},
      {name : "rose", phoneNumber: "8787787778", email : "rose@gmail.com"},
      {name : "gg", phoneNumber: "8989898998", email : "gg@gmail.com"},
    ]

    showHidediv1(isShow: boolean){
        this.isDiv1Visible= isShow;
    }
}
