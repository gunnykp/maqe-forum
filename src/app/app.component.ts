import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForumPostComponent } from './forum-post/forum-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ForumPostComponent],
  template: '<app-forum-post></app-forum-post>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'maqe-forum';
}
