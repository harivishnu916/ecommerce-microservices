
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* ---------- DRESS IMAGES ---------- */
import dress1 from "../assets/dress1.jpg";
import dress2 from "../assets/dress2.jpg";
import dress3 from "../assets/dress3.jpg";
import dress4 from "../assets/dress4.jpg";
import dress5 from "../assets/dress5.jpg";
import dress6 from "../assets/dress6.jpg";
import dress7 from "../assets/dress7.jpg";
import dress8 from "../assets/dress8.jpg";
import dress9 from "../assets/dress9.jpg";
import dress10 from "../assets/dress10.jpg";

/* ---------- BAG IMAGES ---------- */
import bag1 from "../assets/bag1.jpg";
import bag2 from "../assets/bag2.jpg";
import bag3 from "../assets/bag3.jpg";
import bag4 from "../assets/bag4.jpg";
import bag5 from "../assets/bag5.jpg";
import bag6 from "../assets/bag6.jpg";
import bag7 from "../assets/bag7.jpg";

/* ---------- WATCH IMAGES ---------- */
import watch1 from "../assets/watch1.jpg";
import watch2 from "../assets/watch2.jpg";
import watch3 from "../assets/watch3.jpg";
import watch4 from "../assets/watch4.jpg";
import watch5 from "../assets/watch5.jpg";
import watch6 from "../assets/watch6.jpg";

/* ---------- MOBILE IMAGES ---------- */
import mobile1 from "../assets/mobile1.jpg";
import mobile2 from "../assets/mobile2.jpg";
import mobile3 from "../assets/mobile3.jpg";
import mobile4 from "../assets/mobile4.jpg";
import mobile5 from "../assets/mobile5.jpg";
import mobile6 from "../assets/mobile6.jpg";
import mobile7 from "../assets/mobile7.jpg";
import mobile8 from "../assets/mobile8.jpg";
import mobile9 from "../assets/mobile9.jpg";
import mobile10 from "../assets/mobile10.jpg";
import mobile11 from "../assets/mobile11.jpg";

/* ---------- LAPTOP IMAGES ---------- */
import laptop1 from "../assets/laptop1.jpg";
import laptop2 from "../assets/laptop2.jpg";
import laptop3 from "../assets/laptop3.jpg";
import laptop4 from "../assets/laptop4.jpg";
import laptop5 from "../assets/laptop5.jpg";

/* ---------- EARBUD IMAGES ---------- */
import earbud1 from "../assets/earbud1.jpg";
import earbud2 from "../assets/earbud2.jpg";
import earbud3 from "../assets/earbud3.jpg";
import earbud4 from "../assets/earbud4.jpg";
import earbud5 from "../assets/earbud5.jpg";
import earbud6 from "../assets/earbud6.jpg";
import earbud7 from "../assets/earbud7.jpg";
import earbud8 from "../assets/earbud8.jpg";

/* ---------- EARPHONE IMAGES ---------- */
import earphone1 from "../assets/earphone1.jpg";
import earphone2 from "../assets/earphone2.jpg";
import earphone3 from "../assets/earphone3.jpg";
import earphone4 from "../assets/earphone4.jpg";
import earphone5 from "../assets/earphone5.jpg";
import earphone6 from "../assets/earphone6.jpg";
import earphone7 from "../assets/earphone7.jpg";

/* ---------- DRESSES ---------- */
const dressItems = [
  { id: 1, name: "Men Suite", category: "DRESSES", price:"999",title:"TASVA Black Cotton Bundi | Ethnic WEAR | Black",
         variants: [

    "S",

    "L",

    "M",
    "XL",

  ],
 Neckstyle:"Round",
 Fittype:"Regular Fit",
 Closuretype:"Pull On",
 CountryofOrigin:"India",
    
    image: dress1 },
  { id: 2, name: "Couple Dress(trendy)", category: "DRESSES", price: 999,title:"Couple Matching Half Sleeve Shirt for Men & Tunic for Women | Stylish Ethnic Outfit Combo | for Couples",
             variants: [

    "S",

    "L",

    "M",
    "XL",

  ],
  Materialcomposition:"Cotton",
  Fittype:"Slim Fit",
  Style:"Regular",
  Careinstructions:"Machine Wash",
  CountryofOrigin:"India",

    
    image: dress2 },
  { id: 3, name: "Womens black long frock", category: "DRESSES", price: 699,title:" womens faux georgette regular fit embroidery print gown",
               variants: [
    "XL",
     "2XL",

  ],
  Materialcomposition:"Georgette",
  Sleevetype:"Short Sleeve",
  Length:"CalfLength",
  Pattern:"Solid",
  Style:"Anarkali",
   CountryofOrigin:"India",
    image: dress3 },
  { id: 4, name: "Women 3 pc set", category: "DRESSES", price: 799,title:"GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Pant & Dupatta | Ethnic Kurta Pant Dupatta Set for Women | Traditional Indian Wear Outfit",
                 variants: [

    "S",

    "L",

    "M",
    "XL",
     "2XL",
     "3XL",

  ],
   Materialcomposition:"Rayon Viscose",
  Sleevetype:"3/4 Sleeve",
  Length:"CalfLength",
  NeckstyleRound :"Neck",
  Style:"Anarkali",
   CountryofOrigin:"India",

    image: dress4 },
  { id: 5, name: "Stylish women pink frock", category: "DRESSES", price: 1499, title:"Purple Off The Shoulder 3D Floral Embroidered A-Line Gown",
           variants: [

    "S",

    "L",

    "M",
    "XL",
     "2XL",
     "3XL",

  ],
    image: dress5 },
  { id: 6, name: "Men casual wear", category: "DRESSES", price: 499,title:"IndoPrimo Men’s Stylish Satin Shirt for Party, Formal, Daily and Casual Wear Full Sleeve Shirt for Men",
                   variants: [

    "S",

    "L",

    "M",
    "XL",
     "2XL",

  ],
   Materialcomposition:"Satin",
  Sleevetype:"Long Sleeve",
  Style:"Western",
   CountryofOrigin:"India",
    image: dress6 },
  { id: 7, name: "Men party wear", category: "DRESSES", price: 999,title:"Men’s Kurta with Sequin Work",
     variants: [

    "L",

    "M",
    "XL",
     "2XL",
     "3XL",

  ],
  Materialcomposition:"Cotton Rayon",
  Fittype:"Slim Fit",
  Sleevetype:"Long Sleeve",
  Style:"Regular",
   CountryofOrigin:"India",

    
    image: dress7 },
  { id: 8, name: "men casual", category: "DRESSES", price: 1199,title:"Afflatus Men’s Stylish Satin Shirt for Party, Formal, Daily and Casual Wear Full Sleeve Shirt for Mens",
        variants: [

    "s",

    "M",
    "l",
    "XL",
     "2XL",
  

  ],
   Materialcomposition:"Satin",
  Fittype:"Regular Fit",
  Sleevetype:"Long Sleeve",
  Style:"Western",
 CountryofOrigin:"India",
    image: dress8 },
  { id: 9, name: "women trendy dress", category: "DRESSES", price: 1599, title:"Sugathari Women A-line Brown Midi/Calf Length Dress",
        variants: [
    "s",
    "L",

    "M",
    "XL",
     "2XL",
  

  ],
    
    image: dress9 },
  { id: 10, name: "couple dress", category: "DRESSES", price: 1999, title:"Redwood Senorita Ikat Couple",
        variants: [

    "L",

    "M",
    "XL",
     "2XL",
     "3XL",

  ],
  DressFrontLength:"39",
  DressBack: "Length 46",
SleevesLength: "11.5",
ShirtLength: "28",
    
    image: dress10 },
];

/* ---------- BAGS ---------- */
const bagItems = [
{
  id: 100,

  name: "ladies stylish handbag",

  category: "BAGS",

  price: 799,

  title:
    "Fostelo Women's Style Diva Satchel Tote Handbag for Women",

  closureType: "Zipper",

  outerMaterial: "Polyurethane",

  style: "Western",

  careInstructions:
    "Avoid exposure to direct sunlight and water. Clean with a soft dry cloth.",

  occasionType: "Mother's Day",

  numberOfPockets: "5",

  countryOfOrigin: "India",

  image: bag1
},
  { id: 101, name: "Black panther school bag(blue color)", category: "BAGS", price: 899,title:"Kuber Industries Marvel Black Panther School Bags | Kids School Bags | Collage Bookbag | Travel Backpack | School Bag for Girls & Boys | School Bag with 5 Compartments | Include Bag Cover | Black",
    
    image: bag2 },
  { id: 102, name: "light blue school bag", category: "BAGS", price: 1401, title:"Genie School BackPack for girls | 19 In-36 Ltr With Three Compartments,Side Pockets and Light Weight With Padded Shoulders|Best for books,Lunch Box &Essentials",
    
    image: bag3 },
  { id: 103, name: "Stylish bag", category: "BAGS", price: 1199,title:"TIED RIBBONS School Bag for Girls Stylish Casual Backpack (Artificial Leather)",
    
    image: bag4 },
  { id: 104, name: "cloth bag", category: "BAGS", price: 1399,title:"BLACKBOXES Unisex Adult Big Eco Cotton Jute Shopping Bags For Carry Milk Grocery Fruits Vegetable With Reinforced Handles Jhola Bag - Kitchen Essential (13X16X6.5-Inches) (Pack Of 1)",
    
    image: bag5 },
  { id: 105, name: "black bags(2pcs)", category: "BAGS", price: 1099,title:"Barsine Mini Backpack Purse With Wallet Set for Teen Girls BookBag ", image: bag6 },
  { id: 106, name: "safari school/college bag", category: "BAGS", price: 1299,title:"Safari Hitech Large Size 35 Ltrs Water Resistant Standard 4 Compartment Backpack - Blue",
    
    image: bag7 },
];

/* ---------- WATCHES ---------- */
const watchItems = [
 {
  id: 200,

  name: "mens fastrack watch",

  category: "WATCHES",

  title:
    "Fastrack Analog Unisex-Adult Watch",

  caseDiameter: "49 Millimetres",

  bandColour: "Gray",

  bandMaterialType: "Silicone",

  warrantyType: "Manufacturer",

  watchMovementType: "Quartz",

  itemWeight: "150 Grams",

  countryOfOrigin: "India",

  price: 1999,

  image: watch1
},
    
  { id: 201, name: "stylish watch for men", category: "WATCHES", price: 699, image: watch2 },
  {
  id: 202,

  name: "Smart watch",

  category: "WATCHES",

  title:
    'Noise Twist Go Round dial Smartwatch with BT Calling, 1.39" Metal Watch, IP68, Heart Rate Monitor',


Operating :	"android",
specialFeature:
"Activity Tracker, Calorie Tracker, Heart Rate Monitor, Notifications, Oxymeter (SpO2)",
connectivityTechnology:" Bluetooth ",
WirelessCommunicationStandard:"Bluetooth ",
GPS:"No GPS",

  
  price: 1399,

  image: watch3
},
 {
  id: 203,

  name: "Noise smart watch",

  category: "WATCHES",

  title:
    'Noise ColorFit Pulse 3 with 1.96" Biggest Display Bluetooth Calling Smart Watch',

  Operating: "android",

  specialFeature:
    "Activity Tracker, Alarm Clock, Lightweight, Notifications, Time Display",

  connectivityTechnology: "Bluetooth",

  WirelessCommunicationStandard: "Bluetooth",

  price: 1799,

  image: watch4
},
{
  id: 204,

  name: "Quartz watch for women",

  category: "WATCHES",

  title:
    "Fashionable Mermaid Bracelet Design Watch for Women",

  caseDiameter: "25 Millimetres",

  watchMovementType: "Quartz",

  caseThickness: "7 Millimetres",

  bandWidth: "10 Millimetres",

  countryOfOrigin: "China",

  price: 1999,

  image: watch5
},
  { id: 205, name: "Stylish watch for women", category: "WATCHES", title:"Daniel Radcliffe Women Analogue Wrist Watches for Women's & Girls&Miss&Ladies Diamond Studded Dial Rosegold Colored Stylish Bracelet Strap",
      caseDiameter: "25 Millimetres",
      BandcolourRose :"Gold",
      Bandmaterialtype:"Stainless Steel",
      Warrantytype:"Limited",
      Itemweight:"100 Grams",
    
    price: 1599, image: watch6 },
];

/* ---------- MOBILES ---------- */
const mobileItems = [
  { id: 300, name: "iphone16", category: "MOBILES", price: 99999,title:"iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Black",
     variants: [

    "128 GB",

    "256 GB",

    "512 GB"

  ],
    
    image: mobile1 },
  { id: 301, name: "Vivo", category: "MOBILES",title:"vivo V60e 5G (Elite Purple, 8GB RAM, 256GB Storage)",
       variants: [

    "8 GB",

    "256 GB",

  ],
    
    price: 34000, image: mobile2 },
 {
  id: 302,

  name: "one plus",

  category: "MOBILES",

  title:
    "OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)",

  variants: [

    "8GB + 128GB",

    "12GB + 256GB"

  ],

  brand: "OnePlus",

  os: "OxygenOS",

  ram: "8 GB",

  cpu: "Mediatek Dimensity 9000",

  cpuSpeed: "3.05 GHz",

  price: 29999,

  image: mobile3
},
  { id: 303, name: "Redmi", category: "MOBILES",title:"Redmi A3X (Ocean Green 3GB RAM,64GB Storage) Premium Halo Design | 90HZ |Display |Powerful Octa Core P rocessor",
    brand: "Redmi",

  os: "OxygenOS",

  ram: " 3 GB",

  cpu: "SnapDragon",

  cpuSpeed: "1.8 GHz",
    
    price: 12999, image: mobile4 },
  { id: 304, name: "Samsung", category: "MOBILES", title:"Samsung Galaxy S26 Ultra 5G (pink gold, 12GB RAM, 256GB Storage) with Built-in Privacy Display, AI Phone, Photo Assist, Creative Studio, 200MP Camera, 5000mAh Battery and Snapdragon 8 Elite Gen 5", 
     variants: [

    "12GB + 256GB",

    "12GB + 5126GB"

  ],
   brand: 	"Samsung",

  os: "	Android 16",

  ram: " 12 GB",

  cpu: "SnapDragon",

  cpuSpeed: "4.74 GHz",

    
    price: 130999 , image: mobile5 },
  { id: 305, name: "Oppo", category: "MOBILES", title:"Oppo A6X 5G (Ice Blue, 4GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
      variants: [

    "4GB + 64GB",

    "4GB + 128GB",

    "6GB + 128GB",

  ],
   brand: 	"	OPPO",

  os: "	Android 15",

  ram: " 4 GB",

  cpu: "	Mediatek Dimensity 6300",

  cpuSpeed: "4.74 GHz",
 price: 16999, image: mobile6 },
  { id: 306, name: "Moto", category: "MOBILES", price: 34046,title:"Motorola Edge 70 Fusion 5G (Pantone Silhouette, 12GB RAM, 256GB Storage) | AI Features | 6.78-inch 144Hz AMOLED | Snapdragon 7s Gen 4 | 50MP + 13MP Camera | 32MP Selfie | 7000mAh | 68W TurboPower",
        variants: [

    "8GB + 128GB",

    "12GB + 256GB",

  ],
   brand: 	"	Motorola",

  os: "	Android 16",

  ram: " 12GB",

  cpu: "	Snapdragon",
  cpuSpeed: "	2.4, 2.7 GHz",
image: mobile7 },
  { id: 307, name: "Infinix", category: "MOBILES", price: 12999,title:"Infinix Hot 60 5G+ (Shadow Blue, 128 GB) (6 GB RAM)",
    
    
    image: mobile8 },
 {
  id: 308,

  name: "Keypad phone",

  category: "MOBILES",

  price: 1677,

  title:
    'Lava Gem 2025 Dual Sim Keypad Phone (2.8" Display, Camera & Flash)',

  brand: "Lava",

  os: "RTOS",

  ram: "4MB",

  cpu: "A Series",

  cpuSpeed: "1.5 MHz",

  image: mobile9
},
  { id: 309, name: "Samsung keypad phone", category: "MOBILES", price: 3999,title:"Samsung Guru Music 2",
     ram: "10MB",
     battery:"1100MAH",
     display:"5.08 cm",    
    image: mobile10 },
   
  { id: 310, name: "Nokia keypad phone", category: "MOBILES", price: 2999,title:"Nokia 106 4G Keypad Phone with 4G, Built-in UPI Payments App, Long-Lasting Battery, Wireless FM Radio & MP3 Player, and MicroSD Card Slot | 1 Year Replacement Guarantee | pink",
     brand: "	Nokia",

  os: 	"S30+",


  cpu: "	MediaTek Kompanio 800T",

 	ScreenSize:"1.8 Inches", 
    image: mobile11 },
];

/* ---------- LAPTOPS ---------- */
const laptopItems = [
{
  id: 400,

  name: "Lenovo",

  title:
    "Lenovo Thinkpad E16 G2 16-inch Laptop, AMD Ryzen 7 7735HS, 16GB DDR5 RAM, 512GB SSD",

  stock: "In stock",

  category: "LAPTOPS",

  price: 79000,

  image: laptop1,

  model: "Lenovo",

  screenSize: "16 Inches",

  colour: "Black | Core 5 210H",

  hardDisk: "512 GB",

  cpu: "AMD Ryzen 7",

  ram: "16 GB",

  os: "Windows 11 Home",

  graphics: "Integrated",

  specialFeature:
    "Military Grade Durability"
},
  { id: 401, name: "HP",title:"HP 15, 13th Gen Intel Core i3-1315U Laptop (8GB DDR4,512GB SSD) Anti-Glare, Micro-Edge,15.6''/39.6cm, FHD, Win11,M365 Basic(1yr),Office Home24, Silver,1.59kg, FHD Camera w/Privacy Shutter, fd0569TU", category: "LAPTOPS",
     model: "		HP Laptop 15",

  screenSize: "	39.6 Centimetres",

  colour: "	Silver",

  hardDisk: "512 GB",

  cpu: "	Core i3 Family",

  ram: "8 GB",

  os: "Windows 11 Home"
    ,

  specialFeature:
    "	Anti Glare Coating, HD Audio, Numeric Keypad",
     graphics:
    "Integrated",

    price: 46000, image: laptop2 },
  { id: 402, name: "ASUS gaming laptop",title:"ASUS Gaming V16 (2025) 14th Gen,Intel Core 5 210H Gaming Laptop (RTX 4050-6GB/16GB RAM/512GB SSD/Windows 11 Home/16/144Hz/M365*/Office Home 2024,Matte Black,1.95 Kg),V3607VU-RP550WS",stock:"In Stock", category: "LAPTOPS", price: 84662, brand: "ASUS",

  model: "ASUS Vivobook 16",

  screenSize: "16 Inches",

  colour: "Black | Core 5 210H",

  hardDisk: "512 GB",

  cpu: "Intel Core 5",

  ram: "16 GB",

  os: "Windows 11 Home"
    ,

  specialFeature:
    "Anti-glare display, Backlit Keyboard, Precision touchpad",

  graphics:
    "Integrated", image: laptop3 },
  { id: 403, name: "Macbook",title:"Apple 2026 MacBook Neo 13″ Laptop with A18 Pro chip: Built for AI and Apple Intelligence, Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera; Citrus", category: "LAPTOPS", price: 75000,
    model: "MacBook Neo",
     image:laptop4,
  screenSize: "13 Inches",

  colour: "silver",

  hardDisk: "512 GB",

  cpu: "Apple A18 Pro",

  ram: "8 GB",

  os: "Mac OS"
    ,
     graphics:
    "Integrated",

  specialFeature:
    "Anti-glare display, Backlit Keyboard, Precision touchpad",},
   {
  id: 404,

  name: "ASUS",

  title:
    'ASUS Vivobook 15, Intel Core i3 13th Gen 1315U, 16GB RAM, 512GB SSD, FHD 15.6", Touchscreen, Win11, Office',

  category: "LAPTOPS",

  price: 75000,

  model: "ASUS Vivobook 15",

  screenSize: "15.6 Inches",

  colour: "Quiet Blue",

  hardDisk: "512 GB",

  cpu: "Core i3",

  ram: "16 GB",

  os: "Windows 11 Home",

  graphics: "Integrated",
  image: laptop3,

  specialFeature:
    "45% NTSC color gamut, Anti-glare display",
},
];
  
/* ---------- EARBUDS ---------- */
const earbudItems = [
  { id: 500, name: "Realme ", category: "EARBUDS",title:"Original Bluetooth Earbuds for Realme Buds T200 Lite, Crystal-Clear Calling, Ultra-Low Latency Performance, Gaming, and Everyday Communication [Purple]",
    brand:        "Lynacz Original",
    Colour:"      	Purple",
    EarPlacement:"	In Ear",
    Impedance:"	    32 Ohms",
    price: 999, image: earbud1 },
  { id: 501, name: "Boat", category: "EARBUDS",title:"boAt Airdopes Ace Gen 2 TWS Earbuds with 45H Battery, 4Mics ENx Tech, ASAP Charge, 13mm Drivers, 50 ms Low Latency, IPX5, Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Moon White)",
     brand:        "	boAt",
    Colour:"      	 blue",
    EarPlacement:"	In Ear",
    Impedance:"	    32 Ohms",
    price: 1199, image: earbud2 },
  { id: 502, name: "Philips", category: "EARBUDS",title:"Philips TAT1150RD/94 Premium Wireless Earbuds with ANC,Quad Mic ENC,Up to 55 Hr Playtime,13mm Neodymium Drivers,Multipoint, ergonomically Designed,IPX5 Water Resistance, Fast Charging(Red Mahogany)",
     brand:        "	Philips",
    Colour:"      		Red",
    EarPlacement:"	In Ear",
    Impedance:"	    32 Ohms",
    price: 1399, image: earbud3 },
  { id: 503, name: "One plus", category: "EARBUDS",title:"OnePlus Nord Buds 3 Pro Truly Wireless Bluetooth Earbuds with Upto 49dB Active Noise Cancellation,12.4mm Dynamic Drivers,10mins for 11Hrs Fast Charging with Upto 44Hrs Music Playback [Soft Jade]",
     brand:        "		OnePlus",
    Colour:       "     Soft Jade",
    EarPlacement:      " In Ear",
    Impedance:"	        32 Ohms",
    price: 1599, image: earbud4 },
  { id: 504, name: "Simple earbuds ", category: "EARBUDS",title:"Number Navo Bluetooth Buds N1 w/ 100Hrs Playtime, 4Mic ENC, Dual Pairing, High Bass,True Wireless Earbuds Fast Charge(Beast Green)",
     brand:        "			Number",
    Colour:       "     	NBN1 - BEAST GREEN",
    EarPlacement:      " In Ear",
    Impedance:"	        32 Ohms",
    
    price: 1799, image: earbud5 },
  { id: 505, name: "Earbuds latest", category: "EARBUDS", title:"UltraPods Max True Wireless Earbuds with Bluetooth 5.1, Enhanced Sound Quality, Touch Control,Long Playtime Life, Noise Cancellation & Comfortable Fit (BLACK)",
     brand:        "			Number",
    Colour:       "     	NBN1 - BEAST GREEN",
    EarPlacement:      " In Ear",
    Impedance:"	        32 Ohms",
    
    price: 899, image: earbud6 },
  { id: 506, name: "Apple earpods", category: "EARBUDS", title:" MX in-Ear Wired Earphones with Mic – 1 Meter Tangle-Free Cable Stereo Bass Sound 3.5mm Jack Wired Headphones Noise-Isolating Earbuds for Mobile Laptop Music Calls and Gaming",
      brand:        "			Mx",
    Colour:       "     	White",
    EarPlacement:      " In Ear",
    Impedance:"	        32 Ohms",
    
    price: 5199, image: earbud7 },
  { id: 507, name: "Robotek earpods", category: "EARBUDS",title:"Wireless Earbuds with 30H Playtime, Noise Isolation & Clear Calls, Bluetooth Earbuds with Voice Assistant, Bluetooth V 5.3 & Type C Fast Charging, IPX4 TWS Earphones"
,
      brand:        "			UGMA PRODUCTS",
    Colour:       "     	Yellow",
    EarPlacement:      " In Ear",
    Impedance:"	       	1000 Ohms",
      price: 1099, image: earbud8 },
];

/* ---------- EARPHONES ---------- */
const earphoneItems = [
  { id: 600, name: "Earphone belkin", category: "EARPHONES",title:"Belkin SoundForm Wired Earbuds with USB-C Connector, in-Ear Earphones w/Microphone - USB-C Headphones for iPhone 17, iPhone 16, iPad mini, Galaxy S25, Google Pixel 9, Android, and More - Pink", 
     brand:        "				Belkin",
    Colour:       "     	Pink",
    EarPlacement:      " In Ear",
    Impedance:"	        32 Ohms",
    
    price: 1999, image: earphone1 },
  { id: 601, name: "black earphones", category: "EARPHONES",title:"Boat BassHeads 210 Wired Earphones with 10mm Drivers, Signature Sound, in-Line Microphone, 3.5mm Jack, Voice Assistant & 120cm Cable (Active Black)",
     brand:        "					boAt",
    Colour:       "     	Black",
    EarPlacement:      " In Ear",
    Impedance:"	        16 Ohms",
    price: 499, image: earphone2 },
  { id: 602, name: "red earphones", category: "EARPHONES", title:"Boat Bassheads 211 Wired Earphones with 10mm Drivers, Signature Sound, in-Line Microphone, 3.5mm Jack, Voice Assistant & 120cm Cables (Raging Black)",
    brand:        "					boAt",
    Colour:       "     		Raging Black",
    EarPlacement:      " In Ear",
    Impedance:"	        16 Ohms",
    
    price: 399, image: earphone3 },
  { id: 603, name: "ambrane earphones (latest)", category: "EARPHONES", title:"Ambrane Stringz 38 Wired Headphones with Mic, Powerful HD Sound with High Bass, Tangle Free Cable, Comfort in Ear Fit, 3.5mm Jack (Purple)",
    brand:        "						Ambrane",
    Colour:       "     			Purple",
    EarPlacement:      " In Ear",
    Impedance:"	        16 Ohms",
    
    price: 599, image: earphone4 },
  { id: 604, name: "boat earphones", category: "EARPHONES", title:"Boat BassHeads 225 Special Edition in-Ear Headphones with Mic (Blue)",
     brand:        "						boAt",
    Colour:       "     			Blue",
    EarPlacement:      " In Ear",
    Impedance:"	        16 Ohms",
    
    price: 1099, image: earphone5 },
  { id: 605, name: "head phones", category: "EARPHONES", title:"Zebronics Thunder Neo (2026 Upgrade) Wireless Headphone, BT v6.0, True 50hrs Playback, 40mm Driver, ENC, Rapid Charge, Gaming Mode, Dual Pairing, 3 EQ Modes, AUX, Voice Assistant (Silver)",
     brand:        "						ZEBRONICS",
    Colour:       "     				Silver",
    EarPlacement:      " In Ear",
    Impedance:"	        16 Ohms",
    
    price: 799, image: earphone6 },
  { id: 606, name: "philips neck band", category: "EARPHONES",titile:"Philips TAN1150BK/94 Wireless Neckband with 60 Hr Playtime, Fast Charging, 13mm Deep Bass Drivers, AI ENC Mic, Multipoint Connectivity, Bluetooth v5.3, IPX5 Water Resistance (Deep Black)",
    brand:        "							Philips",
    Colour:       "     					Deep Black",
    EarPlacement:      " In Ear",
    Impedance:"	        32 Ohms",
    
    price: 899, image: earphone7 },
];

/* ---------- COMBINE ---------- */
  export const products = [
  ...dressItems,
  ...bagItems,
  ...watchItems,
  ...mobileItems,
  ...laptopItems,
  ...earbudItems,
  ...earphoneItems,
];

function ProductList() {
 const { category } = useParams();
const [search, setSearch] = useState("");
 const navigate = useNavigate();
  const filtered = products.filter(
  (p) =>
  (!category||p.category===category)&&
    
    p.name.toLowerCase().includes(search.toLowerCase())
);

return (

  <>

    <Navbar />

    <div className="container">

      <h2>{category}</h2>

      <div className="parent">

           <input
        type="text"
        placeholder="Search products..."
          value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      </div>

   

     <div className="product-grid">

  {filtered.map((p) => (

    <div
      key={p.id}
      onClick={() => navigate(`/product/${p.id}`)}
    >

      <ProductCard
        product={p}
      />

    </div>

  ))}

</div>

      <div className="cart-footer">

        <button className="view-cart-btn">
          View My Cart
        </button>

      </div>

    </div>

  </>

);
}

export default ProductList;