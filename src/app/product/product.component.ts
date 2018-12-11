import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>
  constructor() { }

  ngOnInit() {
    // ngOnInit 生命周期：组件被实例化之后调用
    this.products = [
      new Product(1, '商品1', 1, 2, '这是1商品', ['啊', '啊']),
      new Product(2, '商品2', 1, 2, '这是2商品', ['啊', '啊']),
      new Product(3, '商品3', 1, 2, '这是3商品', ['啊', '啊']),
      new Product(4, '商品4', 1, 2, '这是4商品', ['啊', '啊']),
      new Product(5, '商品5', 1, 2, '这是5商品', ['啊', '啊'])
    ]
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
  ) {
  }
}