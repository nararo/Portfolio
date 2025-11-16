import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  navigationList: any[] = [];

  @Output() themeChange = new EventEmitter<string>();
  currentTheme: string = 'light-mode';
  @Output() languageChange = new EventEmitter<string>();
  currentLanguage: string = 'ES';

  constructor(private navigationServive: NavigationService) {}

  ngOnInit(): void {
    this.navigationServive.getNavigation().subscribe((data) => {
      this.navigationList = data;
    });
  }

  toggleTheme() {
    this.currentTheme =
      this.currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
    this.themeChange.emit(this.currentTheme);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'ES' ? 'EN' : 'ES';
    this.languageChange.emit(this.currentLanguage);
  }
}
