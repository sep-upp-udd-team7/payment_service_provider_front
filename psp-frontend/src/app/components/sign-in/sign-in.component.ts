import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/Login';
import { WebshopService } from '../../service/webshop.service';
import {AuthService} from '../../service/auth.service'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginData:Login={
    mail: '',
    password: '',
    code: ''
  }
  constructor(private webShopService:WebshopService,private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginData);
    this.webShopService.login(this.loginData).subscribe(data=>{
      console.log(data.token);
      console.log(data.shopId);
      this.authService.saveAccessTokenToLocalStorage(data.token);
      localStorage.setItem('shopId',data.shopId);
      console.log(localStorage.getItem('shopId'));
      location.replace('/profile');
    })
  }

}
