import Image from "next/image";
import Rays from "../svg-components/Rays";

interface Card {
  id: number;
  title: string;
  description: string;
  paragraph: string;
  image: string;
}

const BlureCard = ({ card }: { card: Card }) => {
  return (
    <div className='relative bg-white/5 rounded-[40px] border-4 border-white/10 p-4 mb-15 lg:mb-0 overflow-hidden h-[400px] w-[300px] lg:w-[250px] xl:w-[300px]'>
      <div className="absolute top-0 scale-190">
        <Rays />
      </div>

      <div className="flex flex-col justify-center items-center content-between h-full">
        <div className="flex justify-center items-center mb-10">
          <Image src={card.image} alt={card.title} width={150} height={150} />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl font-bold">{card.title}</h1>
          <h3 className="text-white/60 text-sm text-shadow-lg">{card.description}</h3>
          <div className="flex flex-col justify-center items-center mt-6">
            <p className="text-white text-xl text-center">{card.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlureCard;