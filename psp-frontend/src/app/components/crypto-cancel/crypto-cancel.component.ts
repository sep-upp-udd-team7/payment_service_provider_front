import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from 'src/app/service/crypto.service';

@Component({
  selector: 'app-crypto-cancel',
  templateUrl: './crypto-cancel.component.html',
  styleUrls: ['./crypto-cancel.component.scss']
})
export class CryptoCancelComponent implements OnInit {

 
  constructor(private cryptoService: CryptoService, private route:ActivatedRoute) { }
  orderId: string = '';

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.orderId = paramMap.get('orderId')!;
    })

    this.cryptoService.cancelOrder(this.orderId).subscribe(
      (data) => {
        console.log(data);
        if (data.success) {
          window.location.href = data.url 
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
