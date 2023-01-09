import { Component, OnInit } from '@angular/core';
import { WebshopService } from 'src/app/service/webshop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-success',
  templateUrl: './bank-success.component.html',
  styleUrls: ['./bank-success.component.scss']
})
export class BankSuccessComponent implements OnInit {
  returnUrl: string = '';
  shopId: string = '';

  constructor(
    private route: ActivatedRoute,
    private webShopService: WebshopService
  ) {}

  ngOnInit(): void {
  }


}
