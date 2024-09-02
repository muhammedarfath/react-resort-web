import React from "react";
import owner from "../../assets/owner.jpeg";
import person2 from "../../assets/person2.jpeg"; 
import person3 from "../../assets/person3.jpeg"; 

const people = [
  {
    name: "Ivan Joseph",
    description:
      "Ivan Araujo, a former senior officer in the Kerala Police Service, retired in 2021 and decided to spend the rest of his time in the hospitality industry. In Alleppey district, Kerala, the incredible backwaters, traditional snake boats, beautiful beaches, houseboats, and Shikara boat rides are the main tourist attractions, along with old temples and churches. Mr. Ivan also constructed a new seaview resort on the beach and named it 'The Sea Beach Resort.'",
    image: owner,
  },
  {
    name: "Siva Kumar Pavalam",
    description:
      "Mr. Siva Kumar Pavalam, managing partner of Pavalam Tyres, has led the company to significant success in Kerala and Tamil Nadu's tyre distribution industry. His international exposure and industry expertise have been recognized with his selection by BPCL for a 15-day study program at IIM Bangalore. He is also the state president of the Tyre Dealers Association and a member of the Goodyear Chairman’s Club and the Michelin Dealer Association.",
    image: person2,
  },
  {
    name: "Peter Cherian",
    description:
      "Mr. Peter Cherian, with a B.Tech in Electrical Engineering and an MBA in Marketing and HR, has held leadership roles at Tata Consultancy Services, HCL Technologies, and Maersk Data Europe. He was the Director of HR at Intergraph Corporation in India and the US, and currently serves as an advisor at DivIHN Integration, USA, while also being a guest faculty member at NIT Himachal Pradesh.",
    image: person3,
  },
 
];

function Profile() {
  return (
    <div className="mt-40 w-full mx-auto flex flex-col gap-10">
      {people.map((person, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex items-center justify-center">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-auto md:w-3/4 lg:w-2/3"
            />
          </div>
          <div className="w-full md:w-2/3 flex items-start gap-5 justify-start flex-col p-4 md:pl-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-start">
              {person.name}
            </h1>
            <span className="text-sm md:text-base lg:text-lg text-start">
              {person.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
