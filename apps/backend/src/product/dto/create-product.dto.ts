// /apps/backend/src/product/dto/create-product.dto.ts
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  stockCode: string;

  @IsString()
  supplierCode: string;

  @IsString()
  categories: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
