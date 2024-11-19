import Image from "next/image";
import par1 from "@/app/images/Paratha/Plain Paratha.png";
import par2 from "@/app/images/Paratha/arabic-paratha_15498 (1).png";
import par3 from "@/app/images/Paratha/Chicken Paratha.png";
import par4 from "@/app/images/Paratha/Kulcha Paratha.png";
import par5 from "@/app/images/Paratha/BBQ Paratha.png";

import par6 from "@/app/images/Coffee and Tea/Milk Tea.png";
import par7 from "@/app/images/Coffee and Tea/Malai Tea.png";
import par8 from "@/app/images/Coffee and Tea/Cinnamon Tea.png";
import par9 from "@/app/images/Coffee and Tea/kashmiri tea (1).png";
import par10 from "@/app/images/Coffee and Tea/cinammon tea  (2).png";

import par11 from "@/app/images/Coffee and Tea/cappuccino.jpg";
import par12 from "@/app/images/Coffee and Tea/dark-roast-coffee.jpg";
import par13 from "@/app/images/Coffee and Tea/espresso-macchiato.jpg";
import par14 from "@/app/images/Coffee and Tea/espresso.jpg";
import par15 from "@/app/images/Coffee and Tea/lattec.webp";

import par16 from "@/app/images/Snacks/French Freies.png";
import par17 from "@/app/images/Snacks/Cheese balls.jpg";
import par18 from "@/app/images/Snacks/Loaded Nachos.webp";
import par19 from "@/app/images/Snacks/Mozorella Sticks.png";
import par20 from "@/app/images/Snacks/Chicken Wings.png";

import par21 from "@/app/images/Snacks/Channa Chat.png";
import par22 from "@/app/images/Snacks/Mini Pizzas.webp";
import par23 from "@/app/images/Snacks/Pakora.png";
import par24 from "@/app/images/Snacks/Pani Poori.png";
import par25 from "@/app/images/Snacks/Samosa.png";

import par26 from "@/app/images/Snacks/Sandwich.png";
import par27 from "@/app/images/Snacks/Vegetable Sandwich.jpg";
import par28 from "@/app/images/Snacks/Vegetable roll.png";
import par29 from "@/app/images/Snacks/burritos.webp";
import par30 from "@/app/images/Snacks/nuggets.png";

import par31 from "@/app/images/Soups and Dumplings/Chicken-and-Sweetcorn-Soup-square-FS.webp";
import par32 from "@/app/images/Soups and Dumplings/hot.jpg";
import par33 from "@/app/images/Soups and Dumplings/Dumplings.jpg";

import d1 from "@/app/images/Dessert/Brownies.jpg"
import d2 from "@/app/images/Dessert/Cheese Cake.jpg"
import d3 from "@/app/images/Dessert/muffins.jpg"
import d4 from "@/app/images/Dessert/Macarons.jpg"
import d5 from "@/app/images/Dessert/Waffles.jpg"

import j1 from "@/app/images/Juice and Extras/Coke-500ml.jpg"
import j2 from "@/app/images/Juice and Extras/1 Liter colddrink.jpg"
import j3 from "@/app/images/Juice and Extras/Sting.jpg"
import j4 from "@/app/images/Juice and Extras/Orange-Juice-1-of-1.jpeg"
import j5 from "@/app/images/Juice and Extras/Apple Juice.jpg"

import j6 from "@/app/images/Juice and Extras/1.5 water.webp"
import j7 from "@/app/images/Juice and Extras/s water.jpg"
import j8 from "@/app/images/Juice and Extras/Strawberry Milk Shake.jpg"
import j9 from "@/app/images/Juice and Extras/Mango Milk Shake.jpg"
import j10 from "@/app/images/Juice and Extras/Choclate Milk Shake.jpg"

import j11 from "@/app/images/Juice and Extras/Mint Chutney.jpg"
import j12 from "@/app/images/Juice and Extras/Garlic Mayo.jpg"
import j13 from "@/app/images/Juice and Extras/Raita.jpg"
import j14 from "@/app/images/Juice and Extras/Tamarind (Imli) Sauce.jpg"
import j15 from "@/app/images/Juice and Extras/BBQ Sauce.jpg"
// __________________________//

const FiveDivs = () => {
  return (
   
    <div className="p-4">
      {/* Heading */} <br></br> <br></br><br></br>
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-800 underline">
        Our Delicious Parathas
      </h1>
      <br></br>
      {/* Five Divs */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par1} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Plain Paratha</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par2} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Potato Paratha</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par3} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Chicken Paratha</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par4} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Kulcha Paratha</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800  text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={par5} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">BBQ Paratha</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800 hover:scale-105">
        Add to Cart
      </button></div>
      </div>

      <br></br>
      <div className="p-4">
      {/* Tea*/}
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-800 underline">
       Tasty Tea
      </h1>
<br></br>
      {/* Tea */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par6} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Milk Tea</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par7} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Malai Tea</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par8} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Cinnamon Tea </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par9} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Kashmiri Tea </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={par10} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Green Tea</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>
      </div>
    </div>

  



<br></br>
    <div className="p-4">
      {/* Coffee*/}
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-800 underline">
      Coffee, Pure Bliss
      </h1>
      <br></br>
      {/* Five Divs */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par11} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Cappuccino</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par12} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Dark Roast Coffee</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par13} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Espresso Macchiato</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par14} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Espresso</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={par15} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Latte</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>
      </div>
    </div>

<br></br>
<div className="p-4">
      {/* Soup And Dumplings*/}
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-800 underline">
      Soup And Dumplings
      </h1>

      <br></br>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par31} alt="Image 1" className="w-full h-44 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Chicken Corn Soup</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par32} alt="Image 2" className="w-full h-44  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Hot And Sour Soap</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par33} alt="Image 3" className="w-full h-44 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Dumplings </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

      <br></br>
      </div>
    </div>
    <div className="p-4">
      {/* Desert*/}<br></br>
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-800 underline">
      Delightful Desert/Baked Goods
      </h1>
<br></br>
      {/* Desert */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={d1} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Brownies</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button> </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={d2} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Cheese Cake</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={d3} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Muffins</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={d4} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Macrons </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={d5} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Waffles</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>
      </div>
      
    </div>

<br></br>





    <div className="p-4">
      {/* Heading */}<br></br>
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-800 underline" >
       Fast Food And Snacks
      </h1>

      <br></br>


      {/* Fast Food*/}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par16} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">French Fries</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par17} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Cheese Balls</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par18} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Loaded Nachos</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par19} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Mozzarella Sticks</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={par20} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Chicken Wings</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>
      </div>

      <div className="p-4">
    
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par21} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Chana Chat</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button> </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par22} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Mini Pizza </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par23} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Pakoras</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par24} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Pani Puri</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={par25} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Samosa</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>
        </div>
    </div>

    <div className="p-4">
      
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par26} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Club Sandwich </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par27} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Vegetable Sandwich</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par28} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Vegetable Roll</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={par29} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Burrittos</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button></div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={par30} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Chicken Nuggets</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
          <button className="mt-2 px-4 py-2 bg-orange-800 text-white rounded-lg transition duration-300 transform hover:bg-blue-800  hover:scale-105">
        Add to Cart
      </button>
        </div>



<br></br>


        



      </div>

</div>
      
<div className="p-4">
      {/* Juices And Extras */}<br></br>
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-800 underline">
      Juices , Cold Drinks, Extras
      </h1>
<br></br>
      {/* Juices , Cold Drinks, Extras*/}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j1} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">500 ml Cold Drink</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j2} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">1 Liter Cold Drink</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j3} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Sting</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j4} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Orange Juice</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={j5} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Apple Juice</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>
      </div>
    </div>
      
    <div className="p-4">
      
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j6} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">1.5 Liter Water Bottle</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j7} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Small Water Bottle</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j8} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Strawberry Milk Shake</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j9} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Mango Milk Shake </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={j10} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Chocolate Milk Shake</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>
      </div>
    </div>


    <div className="p-4">
      
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j11} alt="Image 1" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Mint Chutney</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j12} alt="Image 2" className="w-full h-32  object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Garlic Mayo</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j13} alt="Image 3" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Raita </h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:bg-stone-200">
          <Image src={j14} alt="Image 4" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">Tamrind (Imly) Sauce</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>

        <div className="flex-1 min-w-full sm:min-w-[200px] md:min-w-[150px] lg:w-1/5 bg-stone-100 p-4 rounded-lg text-white text-center shadow-md transform transition duration-300 hover:scale-105 hover:stone-200">
          <Image src={j15} alt="Image 5" className="w-full h-32 object-cover rounded-md mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-300">BBQ Sauce</h2>
          <p className="text-m text-black font-bold hover:text-blue-600 transition-colors duration-300">Price:Rs___</p>
        </div>
      </div>
    </div>

    
    </div>


    </div>





    
  );
};

export default FiveDivs;
