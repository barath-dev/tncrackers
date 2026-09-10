import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import CategoryPageContent from "@/components/products/CategoryPageContent";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[category]">
): Promise<Metadata> {
  const { category: slug } = await props.params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category not found — TNCrackers" };
  }

  return {
    title: `${category.name} — TNCrackers`,
    description: category.description,
  };
}

export default async function CategoryPage(props: PageProps<"/products/[category]">) {
  const { category: slug } = await props.params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return <CategoryPageContent categorySlug={category.slug} products={products} />;
}
