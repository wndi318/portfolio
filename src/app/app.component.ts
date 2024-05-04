import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { MainContentComponent } from './main-content/main-content.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    FooterComponent,
    HttpClientModule,
    MainContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'Steffen Winter';
}
