import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit() {
    this.changeLanguageEn();
  }

  isMenuOpen: boolean = false;
  menuImages: string[] = [
    "./../../../assets/img/burger/1.svg",
    "./../../../assets/img/burger/2.svg",
    "./../../../assets/img/burger/3.svg",
    "./../../../assets/img/burger/4.svg",
    "./../../../assets/img/burger/5.svg"
  ];
  currentImageIndex: number = 0;
  isRotating: boolean = false;

  toggleMenu() {
    const menu = document.getElementById('menu');
    const body = document.getElementsByTagName('body')[0];
    if (menu) {
      this.isMenuOpen = !this.isMenuOpen;
      menu.style.display = this.isMenuOpen ? 'flex' : 'none';
      if (this.isMenuOpen) {
        body.classList.add('no-scroll');
        this.rotateImages();
      } else {
        body.classList.remove('no-scroll');
        this.stopRotation();
        this.currentImageIndex = 0;
      }
    }
  }

  scrollToSection(section: string | null) {
    if (section) {
      document.getElementById(section)?.scrollIntoView();
    } 
  }

  rotateImages() {
    this.isRotating = true;
    const interval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.menuImages.length;
      if (this.currentImageIndex === this.menuImages.length - 1 && this.isRotating) {
        clearInterval(interval);
      }
    }, 40);
  }

  stopRotation() {
    this.isRotating = false;
  }

  changeLanguageDe() {
    this.translate.use('de');
    this.setLanguageStyle('de');
  }

  changeLanguageEn() {
    this.translate.use('en');
    this.setLanguageStyle('en');
  }

  private setLanguageStyle(lang: string) {
    const deSpan = document.getElementById('de');
    const enSpan = document.getElementById('en');

    if (deSpan && enSpan) {
      if (lang === 'de') {
        deSpan.style.fontWeight = 'bold';
        deSpan.style.color = '#FF9900';
        enSpan.style.fontWeight = 'normal';
        enSpan.style.color = 'inherit';
      } else if (lang === 'en') {
        enSpan.style.fontWeight = 'bold';
        enSpan.style.color = '#FF9900';
        deSpan.style.fontWeight = 'normal';
        deSpan.style.color = 'inherit';
      }
    }
  }

}
