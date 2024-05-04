import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
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
