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
  failedEmail = true;
  failedCode = true
  failedPassword = true

  constructor(private webShopService:WebshopService,private authService:AuthService) { }

  ngOnInit(): void {
  }
  

  login(){
    console.log(this.loginData);
    this.checkInput()

    if(!this.failedCode || !this.failedEmail || !this.failedPassword){
      return
    }

    this.webShopService.login(this.loginData).subscribe(data=>{
      console.log(data.token);
      console.log(data.shopId);
      this.authService.saveAccessTokenToLocalStorage(data.token);
      localStorage.setItem('shopId',data.shopId);
      console.log(localStorage.getItem('shopId'));
      location.replace('/profile');
    },
    err => { 
      alert("Invalid credentials!")
    })
  }

  checkInput(){ 
    let pattern = new RegExp('^[0-9]{1,6}$')
    let patternEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$')
    let patternPass = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*.,?:;<>=`~\\]\x22\x27\(\)\{\}\|\/\[\\\\?]).{8,}$')

    if(!pattern.test(this.loginData.code)){
      this.failedCode = false
    }
    else{
      this.failedCode = true
    }

    if(!patternEmail.test(this.loginData.mail)){
      console.log("sdasda")
      this.failedEmail = false;
    }
    else{
      this.failedEmail = true;
    }

    if(!patternPass.test(this.loginData.password)){
      this.failedPassword = false;
    }
    else{
      this.failedPassword = true;
    }

  }

}
