import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 72; // Adjust for fixed header
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      this.router.navigate(['/build']).then(() => {
        setTimeout(() => this.scrollToSection(sectionId), 100);
      });
    }
    this.isMobileMenuOpen = false; // Close mobile menu after clicking
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
