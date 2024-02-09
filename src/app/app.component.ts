import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const currentPath = this.router.url; // Get the current route path
    if (currentPath === '/') {
      this.router.navigateByUrl('/about_me'); // Redirect to '/about_me' if the current path is '/'
    }
    // Add the fade-in class after a delay (for example, 500ms after component loads)
    setTimeout(() => {
      const element = document.querySelector('.fade-in');
      if (element) {
        element.classList.add('fade-in-active');
      }
    }, 200);
  }
}
