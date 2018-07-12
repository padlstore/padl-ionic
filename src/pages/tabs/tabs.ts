import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MessagesPage } from '../messages/messages';
import { CameraPage } from '../camera/camera';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTabRoot = HomePage;
  messagesTabRoot = MessagesPage;
  cameraTabRoot = CameraPage;
  notificationsTabRoot = NotificationsPage;
  profileTabRoot = ProfilePage;

  constructor() {

  }
}
