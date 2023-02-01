import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Registration } from '../../model/Registration';
import { WebshopService } from '../../service/webshop.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationData:Registration={
    name: '',
    mail: '',
    password: '',
    successUrl: '',
    cancelUrl: '',
    returnUrl: '',
    using2FA : true

  }
  finishedSignup = false;
  qrCode :any  = "";
  failedEmail = true;
  failedPassword = true

  constructor(private webShopService:WebshopService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.finishedSignup = false
  }

  submit(){

    this.checkInput()

    if(!this.failedEmail || !this.failedPassword){
      return
    }

    this.webShopService.registerShop(this.registrationData).subscribe((data)=>{
      if(this.registrationData.using2FA){ 
        this.qrCode = data.qrCode 
      }
      alert('Registration is successfull!!!\n You will get your secret data for comunication with PSP.');
      alert(`Keep safe this data:\nClinetId:${data.shopId}\nClientSecreate:${data.shopSecret}`)
      //window.location.replace('');
      //window.location.reload()
      

      this.finishedSignup = true;
    })
  }

  login(){
    this.router.navigate(['/login'])

  }


  checkInput(){ 
    let patternEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$')
    let patternPass = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*.,?:;<>=`~\\]\x22\x27\(\)\{\}\|\/\[\\\\?]).{8,}$')

  

    if(!patternEmail.test(this.registrationData.mail)){
      this.failedEmail = false;
    }
    else{
      this.failedEmail = true;
    }

    if(!patternPass.test(this.registrationData.password)){
      this.failedPassword = false;
    }
    else{
      this.failedPassword = true;
    }

  }

}
