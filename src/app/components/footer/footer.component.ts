import { Component, Input, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { NavigationService } from '../../services/navigation.service';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-footer',
  imports: [ContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  @Input() language: 'ES' | 'EN' = 'ES';

  navigationList: any[] = [];
  firstLine = '';
  secondLine = '';

  constructor(
    private navigationService: NavigationService,
    private footerService: FooterService
  ) {}

  ngOnInit(): void {
    this.navigationService.getNavigation().subscribe((data) => {
      this.navigationList = data;
    });
    this.footerService.getData().subscribe((data) => {
      this.firstLine = data.firstLine;
      this.secondLine = data.secondLine;
    });
  }
}
