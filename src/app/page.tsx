import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <Input />
      <Button variant="primary" size="lg">
        Click Me
      </Button>
      <Button variant="destructive" size="sm">
        Delete
      </Button>
      <Button variant="outline" size="icon">
        Icon
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button asChild>
        <a href="https://example.com" className="text-blue-500">
          Go to Example
        </a>
      </Button>
      <Button variant="teritary">Tertiary</Button>
    </div>
  );
}
