import React, { Component } from 'react';
import './ImageGallery.css';
import Slider from 'react-slick';
import { Image } from '../Image/Image';
import { Icon } from '../Icon/Icon';

class ImageGallery extends Component {
	
	constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
	
	next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
	
	render() {
    var settings = {
			className: "ImageGallery",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
			centerMode: true,
      slidesToShow: 1,
			focusOnSelect: true,
			autoplay: true,
			autoplaySpeed: 10000,
			dotsClass: "dots"
    };
		
		const items = this.props.items.map((d, i) => 
			<div className="ImageGalleryItem" key={i}>
				<div className="ImageGalleryItemTitle">{d.title}</div>
				<Image className="ImageGalleryItemImage" name={d.image} format="png" width="600px"/>
				<div className="ImageGalleryItemDescription">{d.description}</div>
			</div>
		);
		
    return (
			<div>
				<Slider ref={c => (this.slider = c)} {...settings}>
					{items}
				</Slider>
				<Icon action={this.previous} name="left" top="550px" left="50px" size="60px"></Icon>
				<Icon action={this.next} name="right" top="550px" right="50px" size="60px"></Icon>
			</div>
    );
  }
}

export { ImageGallery };