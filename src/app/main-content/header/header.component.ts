import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scrollToSection(section: string | null) {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        const navbarHeight = document.querySelector('section')?.clientHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }
  
}
