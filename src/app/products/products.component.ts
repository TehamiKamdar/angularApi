import { Component, AfterViewInit } from "@angular/core";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  stock: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements AfterViewInit {
  products: Product[] = [
    {
      id: 1,
      title: "iPhone 11 Pro Max",
      description: "The Apple 11 Pro Max in Silver are premium over-ear phones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
      category: "mobile",
      price: 1099,
      discount: 0.1,
      stock: 9,
      image: "https://media.istockphoto.com/id/1182972376/photo/apple-iphone-11-pro-on-a-white-background.jpg?s=612x612&w=0&k=20&c=9QsHVqQ40UBjlPbEsN6CnX5fEe-q3nFrd50-m2_9cpw="
    },
    {
      id: 2,
      title: "iPhone 12 Pro Max",
      description: "The Apple 12 Pro Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
      category: "mobile",
      price: 1149,
      discount: 0.1,
      stock: 7,
      image: "https://via.placeholder.com/150" // Replace with a proper URL
    }
  ];

  ngAfterViewInit() {
    const cl = document.getElementsByClassName('part-1');
  for (let i = 0; i < cl.length; i++) {
    const product = this.products[i]; // Get the corresponding product
    if (product) {
      (cl[i] as HTMLElement).style.backgroundImage = `url('${product.image}')`;
      (cl[i] as HTMLElement).style.backgroundSize = `cover`;
    }
  }
}
}
