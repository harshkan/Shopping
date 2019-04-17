import { Component } from '@angular/core';
import { IProduct} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  imageWidth:string = '16em';
  imageHeight:string = '10em';
  imageMargin:string = '1.25em';
  pageTitle = "Product Category"

  products: IProduct[] = [    
        {
            "productCategory": "Television",
            "imageUrl": "https://www.corning.com/content/dam/corning/media/worldwide/csm/images/3A--CDT--Televisions.jpg/jcr:content/renditions/retina_720.jpg"
        },
        {
            "productCategory": "Mobile Phone",
            "imageUrl": "https://i2.wp.com/wikkimedia.com/wp-content/uploads/2018/01/Screenshot_5.png?resize=692%2C406"
        },
        {    "productCategory": "Laptop",
            "imageUrl": "https://cdn.mos.cms.futurecdn.net/F3WdK8hLZaV2Ey4qcffCqU.jpg"
        },
         {  "productCategory": "Tablet",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLIcKJwFlMpi8G4Eoc2_AHCwf5gnIjQQoatMqH4Jlq4SZc_zj"
         }
    ];

    categorySelected() {
//<TODO> on click 
    }
}
