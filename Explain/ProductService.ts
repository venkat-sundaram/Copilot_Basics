import { PrismaClient } from '@prisma/client';

// Define the Products type
interface Products {
  id: number;
  name: string;
  categoryId: number;
  reviews?: Review[];
}

interface Review {
  id: number;
  date: Date;
  rating: number;
  comment: string;
}

const prisma = new PrismaClient();

export class ProductService {
/**
 * Retrieves all products belonging to a specific category.
 *
 * @param categoryId - The unique identifier of the product category
 * @returns Promise that resolves to an array of Product objects
 *
 * @example
 * const products = await getByCategoryName(5);
 * // Returns: [{id: 1, name: "Product 1", categoryId: 5}, ...]
 *
 * @throws {PrismaClientKnownRequestError} If database query fails
 * @see {@link https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany}
 */
  async getByCategoryName(categoryId: number, page = 1, pageSize = 10): Promise<Products[]> {
    return await prisma.products.findMany({
      where: { categoryId },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        reviews: {
          orderBy: { date: 'desc' },
          take: 5,
        },
      },
    });
  }
}