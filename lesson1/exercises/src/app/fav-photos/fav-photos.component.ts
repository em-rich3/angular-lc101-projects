import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://lh3.googleusercontent.com/proxy/gs8SOZSUclTymqe7OFDnIrRG8Vb5JgceaiQUqBm9iKTs7nODoQr-kvH3wasM1NYZquhdCQJBquAmDY5L6dw1VDDahQ';
  image3 = 'https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880298/I-Did-Nothing-Today_800x800_SEPS-1000x1000.jpg';

  constructor() { }

  ngOnInit() {
  }

}