const data = [
  {
    id: 1,
    make: "BMW",
    model: "M5",
    year: 2023,
    price: 90000,
    description: "A high-performance executive car from BMW's M series.",
    category: "sedan",
    image: "https://cdn.motor1.com/images/mgl/OpP3e/s3/2021-bmw-m5-m5-competition.jpg",
  },
  
  {
    id: 24,
    make: "Nissan",
    model: "GT-R",
    year: 2023,
    price: 95000,
    description: "A legendary sports car known for its speed and performance.",
    category: "coupe",
    image: "https://www.auto-data.net/images/f69/Nissan-GT-R-R35-facelift-2023.jpg",
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Camaro",
    year: 2023,
    price: 40000,
    description: "A sporty muscle car with great performance and style.",
    category: "coupe",
    image: "https://www.motortrend.com/uploads/2022/10/17-2023-Chevrolet-Camaro-RS-Exterior.jpg",
  },
  {
    id: 5,
    make: "BMW",
    model: "X5",
    year: 2022,
    price: 60000,
    description: "A luxurious SUV with advanced features and comfort.",
    category: "suv",
    image: "https://media.ed.edmunds-media.com/bmw/x5/2021/oem/2021_bmw_x5_4dr-suv_xdrive45e_fq_oem_1_1600.jpg",
  },
  {
    id: 7,
    make: "Jeep",
    model: "Wrangler",
    year: 2023,
    price: 38000,
    description: "An off-road capable SUV with a rugged design.",
    category: "suv",
    image: "https://static.motor.es/fotos-noticias/2023/04/jeep-wrangler-2024-202394130-1680714947_1.jpg",
  },
  {
    id: 25,
    make: "BMW",
    model: "M4",
    year: 2022,
    price: 120000,
    description: "A luxurious and powerful coupe from BMW's M series.",
    category: "coupe",
    image: "https://www.arabazzi.com/images/yuklemeler/bmw-m31323.jpg",
  },
  {
    id: 8,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 50000,
    description: "An electric sedan with cutting-edge technology.",
    category: "sedan",
    image: "https://www.cumhuriyet.com.tr/Archive/2022/4/8/1923876/kapak_161111.jpg",
  },
  {
    id: 22,
    make: "Audi",
    model: "RS",
    year: 2022,
    price: 85000,
    description: "A high-performance sports car from Audi's RS series.",
    category: "sports",
    image: "https://media.ed.edmunds-media.com/audi/rs-7/2021/oem/2021_audi_rs-7_sedan_base_fq_oem_2_1600.jpg",
  },
  {
    id: 9,
    make: "Audi",
    model: "Q5",
    year: 2021,
    price: 55000,
    description: "A premium compact SUV with a comfortable and stylish interior.",
    category: "suv",
    image: "https://cdn.ototeknikveri.com/Files/News/Big/2021-audi-q5-ve-sq5-sportback-avrupaya-geldi.jpg",
  },
  {
    id: 10,
    make: "Subaru",
    model: "Outback",
    year: 2022,
    price: 28000,
    description: "A versatile wagon with all-wheel drive for outdoor adventures.",
    category: "wagon",
    image: "https://www.autozeitung.de/assets/styles/article_image/public/field/images/subaru-outback-2021-01.jpg?itok=dXbDVlEV",
  },
  {
    id: 11,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 65000,
    description: "A luxury compact car with a prestigious brand image.",
    category: "luxury",
    image: "https://s3-prod.autonews.com/s3fs-public/AMGCV43-MAIN_i.jpg",
  },
  {
    id: 12,
    make: "GMC",
    model: "Sierra",
    year: 2021,
    price: 42000,
    description: "A reliable and capable full-size pickup truck.",
    category: "pickup",
    image: "https://file.kelleybluebookimages.com/kbb/base/evox/StJ/13673/2021-GMC-Sierra%201500%20Double%20Cab-front-angle3_13673_089_640x480.jpg",
  },
  {
    id: 13,
    make: "Volvo",
    model: "XC60",
    year: 2022,
    price: 57000,
    description: "A safe and elegant SUV with advanced safety features.",
    category: "suv",
    image: "https://www.autoscout24.at/cms-content-assets/227905GMBoSi62u3laFcN4-70d4b9e78c36b4ec9f48d01854e00895-Volvo_XC60__2_-1100.jpg",
  },
  {
    id: 14,
    make:"Lexus",
    model:"RX",
    
    year: 2021,
    price: 54000,
    description: "A premium crossover SUV with a smooth and comfortable ride.",
    category: "suv",
    image: "https://assets.flowfound.com/cars/2023/2023%20Lexus%20RX50.jpg",
  },
  {
    id: 15,
    make: "Porsche",
    model: "911",
    year: 2023,
    price: 110000,
    description: "An iconic sports car with breathtaking performance.",
    category: "coupe",
    image: "https://cdn.hiconsumption.com/wp-content/uploads/2022/08/2023-Porsche-911-GT3-RS-0-Hero.jpg",
  },
  {
    id: 3,
    make: "Ford",
    model: "F-150",
    year: 2021,
    price: 35000,
    description: "A powerful pickup truck for heavy-duty work and towing.",
    category: "pickup",
    image: "https://api.ford-koegler.de/fileadmin/Modellreihe/F150/Lightning/Text-Bild-Ford_F-150_Lariat__Willkommen_in_der_Koenigsklasse-Desktop-2x.jpg",
  },
  {
    id: 19,
    make: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 30000,
    description: "A compact SUV with modern design and advanced features.",
    category: "suv",
    image: "https://www.arabahabercisi.com/wp-content/uploads/2021/04/2021-Hyundai-Tucson-fiyat%C4%B1-600x381.jpg",
  },
  {
    id: 6,
    make: "Nissan",
    model: "Altima",
    year: 2021,
    price: 23000,
    description: "A family-friendly midsize sedan with a spacious interior.",
    category: "sedan",
    image: "https://cdn.jdpower.com/JDP_2023%20Nissan%20Altima%20SL%20Garnet%20Pearl%20Red%20Front%20Quarter%20View.jpg",
  },
  
  
  {
    id: 23,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    price: 25000,
    description: "A reliable and comfortable sedan for everyday use.",
    category: "sedan",
    image: "https://content.toyota.com.ph/uploads/prices/701/002_701_1639107449853_000.jpg",
  },
  
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2022,
    price: 22000,
    description: "A popular compact car known for its fuel efficiency.",
    category: "sedan",
    image: "https://www.honda.com.tr/assets/img/civic/home-banner.png",
  },
  {
    id: 16,
    make: "Chevrolet",
    model: "Equinox",
    year: 2022,
    price: 30000,
    description: "A compact SUV with good fuel efficiency and practicality.",
    category: "suv",
    image: "https://www.autoscout24.de/cms-content-assets/2ZjAqbTWPlKduPthSUeAgv-878ba15231976e106d8a58d7f0a7faee-chevrolet-equinox-front-1100.jpeg",
  },
  
]

data.forEach((car) => {
  car.title = `${car.make} ${car.model} ${car.year}`;
});
export default data;
