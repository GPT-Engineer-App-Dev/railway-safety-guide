import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-6">Welcome to Railway Safety Hub</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Discover essential information about railway safety and learn how to prevent network sabotage.
      </p>
      <Link to="/railway-sabotage-prevention">
        <Button size="lg">
          Learn About Railway Sabotage Prevention
        </Button>
      </Link>
    </div>
  );
};

export default Index;