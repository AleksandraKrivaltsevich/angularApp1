import {Component, inject} from '@angular/core';
import {SvgComponent} from '../svg-icon/svg-icon.component';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {SubscriberCardComponent} from './subscriber-card/subscriber-card.component';
import {RouterLink} from '@angular/router';
import {ProfileService} from '../../date/services/profile.service';
import {ImgUrlPipe} from '../../helpers/pipes/img-url.pipe';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgComponent,
    NgForOf,
    SubscriberCardComponent,
    RouterLink,
    NgIf,
    AsyncPipe,
    JsonPipe,
    ImgUrlPipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService)

  subscribers$ = this.profileService.getSubscribersShortsList()

  me = this.profileService.me

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: ''
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: 'chat'
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search'
    }
  ]

  ngOnInit() {
    firstValueFrom(this.profileService.getMe())
  }
}
