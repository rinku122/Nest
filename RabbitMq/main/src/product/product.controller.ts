import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  all() {
    return this.productService.all();
  }

  @EventPattern('product_created')
  async hello(dto: CreateProductDto) {
    return this.productService.create(dto);
  }
}
