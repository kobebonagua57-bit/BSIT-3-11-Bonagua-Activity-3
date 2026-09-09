import { Injectable } from '@angular/core';
import { Me } from '../attributes/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  private readonly profile: Me = {
    id: 1,
    name: 'Janseph Kobe Bonagua',
    username: '@Jkbonagua',
    email: 'jansephkobebonagua@gmail.com',
    address: 'Venezuela, Philippines',
    image: 'assets/profile/me.jpg'
  };

  getMe(): Me {
    return this.profile;
  }
}