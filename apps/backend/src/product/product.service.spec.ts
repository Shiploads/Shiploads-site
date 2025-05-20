import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ProductService', () => {
  let service: ProductService;
  let createdProductId: number | undefined;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, PrismaService],
    }).compile();
    service = module.get<ProductService>(ProductService);
  });

  afterAll(async () => {
    if (createdProductId) {
      await service.remove(createdProductId);
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a product', async () => {
    const product = await service.create({
      name: 'Widget',
      price: 10,
      stockCode: 'W001',
      supplierCode: 'SUP1',
      categories: 'Category1',
      imageUrl: '',
      description: 'Test widget',
    });
    createdProductId = product.id;
    expect(product).toHaveProperty('id');
    expect(product.name).toBe('Widget');
  });

  it('should find all products', async () => {
    const products = await service.findAll();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('should find one product', async () => {
    if (!createdProductId) return;
    const product = await service.findOne(createdProductId);
    expect(product).toBeDefined();
    expect(product?.id).toBe(createdProductId);
  });
  it('should update a product', async () => {
    if (!createdProductId) return;
    const updated = await service.update(createdProductId, {
      name: 'Updated Widget',
    });
    expect(updated.name).toBe('Updated Widget');
  });
  it('should delete a product', async () => {
    if (!createdProductId) return;
    const deleted = await service.remove(createdProductId);
    expect(deleted).toHaveProperty('id');
    // Verify it is gone
    const gone = await service.findOne(createdProductId);
    expect(gone).toBeNull();
    createdProductId = undefined;
  });
});
