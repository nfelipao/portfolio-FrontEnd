import { Component } from '@angular/core';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {
  faCalendar = faCalendar;
}
