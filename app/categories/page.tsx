import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const categories = [
  { name: "Technology", count: 12 },
  { name: "Design", count: 8 },
  { name: "Development", count: 15 },
  { name: "Tutorial", count: 10 },
  { name: "News", count: 6 },
  { name: "Opinion", count: 4 },
];

export default function CategoriesPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-12">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Categories
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Browse articles by topic.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.count} articles</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}