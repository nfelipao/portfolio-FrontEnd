import { Component } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  faGithub = faGithub;
  faMailBulk = faMailBulk;
  faTwitter = faTwitter;
  faLocationDot = faLocationDot;
}
