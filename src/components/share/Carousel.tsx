import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Carousels = () => {
  const content = [
    {
      Ima: "https://i.ibb.co/TB4Tzn4/Colorful-Brush-Fitness-Facebook-Cover-1.png",
    },
    { Ima: "https://i.ibb.co/HYTjzqN/Bodybuilder-Fitness-Club-Black-Logo.png" },
  ];

  return (
    <Carousel className="max-w-[1250px] max-h-full mx-auto   ">
      <CarouselContent>
        {content.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=" max-h-auto">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <img src={item.Ima} alt={`allImage${index+1}`} className="h-full w-full object-fill " /> */}
                  <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                      <img
                        src={item.Ima}
                        alt={`allImage${index + 1}`}
                        className="h-full w-full object-fill "
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" hidden lg:block " />
      <CarouselNext className="hidden lg:block" />
    </Carousel>
  );
};

export default Carousels;
