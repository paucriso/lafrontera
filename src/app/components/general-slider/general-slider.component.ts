import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from './../../services/menu.service';
import Swiper, {Autoplay} from 'swiper';

@Component({
  selector: 'app-general-slider',
  templateUrl: './general-slider.component.html',
  styleUrls: ['./general-slider.component.css']
})
export class GeneralSliderComponent implements OnInit, AfterViewInit {
  mainSlider = [];
  public swiper: Swiper;
  
  constructor(private menuService: MenuService) {
    this.mainSlider = menuService.mainSlider;
    Swiper.use([Autoplay]);
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 3000,
        },
    });    
  }

  ngOnInit(): void {
  }

  onSlidePrev() {
    this.swiper.slidePrev();
  }

  onSlideNext() {
    this.swiper.slideNext();
    console.log('next');
  }

}
