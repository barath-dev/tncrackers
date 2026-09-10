import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import CategoryPageContent from "@/components/products/CategoryPageContent";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

// Categories are a fixed, known set. Without this, a bad slug still
// renders (streamed behind loading.tsx) and calls notFound() from inside
// the page component — but by then the response has already started
// with a 200 status, so the browser gets a "not found" page at HTTP 200.
// Rejecting unknown slugs here happens before any of that, at the
// routing layer, so unknown categories get a real 404.
export const dynamicParams = false;

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
