import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/service/crypto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-crypto-processing',
  templateUrl: './crypto-processing.component.html',
  styleUrls: ['./crypto-processing.component.scss']
})
export class CryptoProcessingComponent implements OnInit {

  constructor(private cryptoService: CryptoService, private route:ActivatedRoute) { }
  orderId: string = '';

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.orderId = paramMap.get('orderId')!;
    })
    this.cryptoService.confirmOrder(this.orderId).subscribe(
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
