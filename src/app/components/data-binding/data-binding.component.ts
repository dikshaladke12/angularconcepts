import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    name : string =" diksha ladke ";
    age : number = 22
    myinputType : string ="date";

    //two way data binding
    name1: string ="";

    showMessage(){
      alert('this is event binding')
    }

    
    onStateChange(event : any){
      alert("state changed: -"+event.target?.['value'])
    }
}
