import Image from "next/image";
import venueImg from "@/app/images/Services/p56w-listing.jpg"; 
import entertainmentImg from "@/app/images/Services/entertainment.jpg"; 
import parkingImg from "@/app/images/Services/parking.jpg"; 
import venuePartyImg from "@/app/images/Services/guest dinning.jpg"; 

export default function Services() {
  return (
    <section className="services font-baloo">
      {/* Header Section */}
      <div
        className="relative min-h-screen bg-cover bg-center p-6 flex items-center justify-center"
        style={{ backgroundImage: `url(${venueImg.src})` }}
      >
        <div className="pic-area-text bg-gray-700 bg-opacity-50 p-6 rounded">
          <h2 className="text-5xl font-bold text-white">Take A Look At Our</h2>
          <h1 className="text-5xl font-bold mt-2 text-white">Amazing Services!</h1>
          <center><h3 className="text-2xl font-semibold mt-2 text-white">Your home away from home.</h3></center>
        </div>
      </div>

      {/* Services Section */}
      <div className="main-area text-center py-10 space-y-12">
        {/* Entertainment Section */}
        <div className="section-area flex flex-col md:flex-row items-center bg-gray-800 text-white p-6 rounded-lg">
          <div className="box-text md:w-1/2 space-y-4">
            <h1 className="text-3xl font-semibold">Entertainment</h1>
            <p className="text-lg">
              Need something to read? Check out our bookshelf for the hottest
              Karachi Bestsellers. Enjoy daily newspapers, a TV on all day, free Wi-Fi,
              and events from karaoke to concerts by our local school band!
            </p>
          </div>
          <div className="box-img md:w-1/2 mt-4 md:mt-0">
            <Image src={entertainmentImg} alt="Entertainment" width={400} height={300} className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Parking Section */}
        <div className="section-area flex flex-col md:flex-row items-center bg-indigo-900 text-white p-6 rounded-lg">
          <div className="box-text md:w-1/2 space-y-4">
            <h1 className="text-3xl font-semibold">Day & Night Parking</h1>
            <p className="text-lg">
              Customers have 24/7 parking access as long as they are signed up on our email list.
              First-come-first-serve, so be quick!
            </p>
          </div>
          <div className="box-img md:w-1/2 mt-4 md:mt-0">
            <Image src={parkingImg} alt="Parking" width={400} height={300} className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Venue Section */}
        <div className="section-area flex flex-col md:flex-row items-center bg-orange-700 text-white p-6 rounded-lg">
          <div className="box-text md:w-1/2 space-y-4">
            <h1 className="text-3xl font-semibold">Venue for Parties</h1>
            <p className="text-lg">
              We can host parties, provide food, music, games, and more! Make your celebrations unforgettable with us.
            </p>
          </div>
          <div className="box-img md:w-1/2 mt-4 md:mt-0">
            <Image src={venuePartyImg} alt="Venue" width={400} height={300} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
