import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @Inject('PRODUCT_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  async all(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const product = await this.productRepository.save(dto);
    this.client.emit('product_created', product);
    return product;
  }

  async get(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateProductDto): Promise<any> {
    return await this.productRepository.update(id, dto);
  }

  async delete(id: number): Promise<any> {
    return await this.productRepository.delete({ id });
  }
}
