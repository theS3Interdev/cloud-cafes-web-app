import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/generic/container";
import { CreateCoffeeHouse } from "@/components/generic/create-coffee-house";
import { DisplayCoffeeHouse } from "@/components/generic/display-coffee-house";

const Home = () => {
  return (
    <Container>
      <div className="mx-auto mt-5 max-w-4xl p-5">
        <CreateCoffeeHouse />

        <Separator className="my-4" />

        <DisplayCoffeeHouse />
      </div>
    </Container>
  );
};

export default Home;
