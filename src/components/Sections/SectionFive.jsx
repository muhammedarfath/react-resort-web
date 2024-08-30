import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { FaUmbrellaBeach } from "react-icons/fa6";
import pool from "../../assets/pool.jpg";
import seat from "../../assets/one.jpg";
import beach from "../../assets/beach.jpg";
import food from "../../assets/foodarea.jpg";
import hall from "../../assets/hall.jpg";
import flat from "../../assets/flat.jpg";
import { Link } from "react-router-dom";
function SectionFive() {

  return (
    <div className="flex w-full flex-col items-center mt-40 gap-10 justify-center">
      <div className="flex flex-col items-center justify-center">
        <small className="text-xl">@beach resort</small>
        <h1 className="text-4xl">Our photo gallery</h1>
      </div>
      <div className="flex z-0 flex-wrap gap-4 justify-center p-7 lg:p-0">
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5  p-0">
          <CardBody className="p-0">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-96 h-96"
              src={pool}
            />
          </CardBody>
        </Card>
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5  p-0">
          <CardBody className="p-0">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-96 h-96"
              src={hall}
            />
          </CardBody>
        </Card>
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5  p-0">
          <CardBody className="p-0">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-96 h-96"
              src={beach}
            />
          </CardBody>
        </Card>
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5  p-0">
          <CardBody className="p-0">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-96 h-96"
              src={flat}
            />
          </CardBody>
        </Card>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-xl">Click And See More...</h1>
        </div>
        <Link to="/gallery">
          <div className="p-5 border rounded-full bg-white/50 backdrop-blur-lg cursor-pointer">
            <FaUmbrellaBeach className="text-black animate-zoom" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SectionFive;
