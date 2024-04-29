import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  }

  mailTest = false;
  isMessageSent = false;

  post = {
    endPoint: 'http://steffen-winter.org/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.isMessageSent = true;
            setTimeout(() => {
              this.isMessageSent = false;
            }, 2000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.isMessageSent = true;
            setTimeout(() => {
              this.isMessageSent = false;
            }, 2000);
      ngForm.resetForm();
    }
  }

  scrollToSection(section: string | null) {
    if (section) {
      document.getElementById(section)?.scrollIntoView();
    } 
  }
}
