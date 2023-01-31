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

  constructor(private webShopService:WebshopService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.finishedSignup = false
  }

  submit(){
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

}
