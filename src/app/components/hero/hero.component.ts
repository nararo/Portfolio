import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-hero',
  imports: [ContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
