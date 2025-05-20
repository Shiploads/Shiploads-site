// /apps/backend/src/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  async create(data: CreateProductDto) {
    return this.prisma.product.create({
      data,
      // If you want to return only safe fields, use select: {...}
    });
  }

  // READ ALL
  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  // READ ONE
  async findOne(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  // UPDATE
  async update(id: number, data: Partial<Product>): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  // DELETE
  async remove(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
