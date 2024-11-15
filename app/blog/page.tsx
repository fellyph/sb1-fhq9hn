import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-12">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Blog</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore our latest articles and insights.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Sample blog post cards - in a real app, these would be dynamically generated */}
        {[1, 2, 3].map((i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <CardTitle>Sample Blog Post {i}</CardTitle>
              <CardDescription>March {i}, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is a sample blog post description. In a real application, this would
                be populated with actual content from your CMS.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}