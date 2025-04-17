import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-6xl">
          404 - Page Not Found
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button>
          <Link href="/">Go Back Home</Link>
        </Button>
      </main>
    </div>
  );
};

export default NotFound;
