import Link from "next/link";
import { Coffee } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/generic/container";

const Home = () => {
  return (
    <Container>
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-lg rounded-lg border p-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to Cloud Cafes</h1>

          <Button asChild className="mt-4">
            <Link href="/dashboard">
              <Coffee className="mr-2 h-4 w-4" />
              Go To Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
