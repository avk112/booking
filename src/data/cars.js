export default [
    {
        id: 1,
        name: "Audi 2019 A4 allroad",
        url: "audi-2019-a4-allroad",
        price: 50,
        img: require("../image/cars/433-1_thumb-358x274-1.png"),
        model: ["economy"],
        rating: 4,
        class: "Compact",
        doors: 4,
        fuel: "Petrol",
        gearBox: "Automatic",
        luggage: 2,
        mileage: 320,
        seat: 6,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Electric Windows"],
        city: ["London", "Manchester"],
        description: "The road can be the start of a new adventure, so it’s important to have a companion that won’t hold you back. The Audi A4 allroad® sports a 248-hp 2.0-liter TFSI® engine paired with a seven-speed S tronic® dual-clutch automatic transmission to create a dynamic and sporty, yet comfortable, driving experience.",
        reviews: [
            {
                id: 1,
                author: "Charles Spencer",
                rating: 5,
                date: new Date(2022, 5, 12),
                text: "Wonderful car, amazing experience!"
            },
            {
                id: 2,
                author: "Tony Lawrence",
                rating: 4,
                date: new Date(2021, 10, 10),
                text: "Nice, very nice."
            }
        ]
    },

    {
        id:2,
        name: "Audi 2019 SQ",
        url: "audi-2019-sq",
        price: 90,
        img: require("../image/cars/Car-PNG-File.png"),
        model: ["family trip","luxury", "SUV"],
        rating: 5,
        class: "SUV",
        doors: 5,
        fuel: "Petrol",
        gearBox: "Manual",
        luggage: 2,
        mileage: 320,
        seat: 6,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["Manchester"],
        description: "The 2019 Audi SQ5 embodies the ultimate in performance, technology and luxury. The athletic design flows seamlessly from the distinct SQ5 Singleframe® grille and LED headlights, down the tornado line, finishing at the LED taillights.",
        reviews: [
            {
                id: 1,
                author: "Jane Doe",
                rating: 5,
                date: new Date(2022, 6, 5),
                text: "Wonderful car, amazing experience!"
            },
        ]
    },

    {
        id: 3,
        name: "BMW M6 Gran Coupé",
        url: "bmw-m6-gran-coupe",
        price: 80,
        img: require("../image/cars/bmw-6-series-gt-03-800x546-1.png"),
        model: ["trip", "sports", "luxury"],
        rating: 5,
        class: "Coupé",
        doors: 4,
        fuel: "Petrol",
        gearBox: "Manual",
        luggage: 4,
        mileage: 520,
        seat: 5,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["Liverpool", "Glasgow"],
        description: "Apple CarPlay is now included as a subscription service with the first year free. Based on the first 6 Series Gran Coupe generation introduced for 2013. Engine makes exceptional power. Interior is richly trimmed and well-equipped. Front seats offer impressive support and comfort",
        reviews: [
            {
                id: 1,
                author: "Dereck Lee",
                rating: 4,
                date: new Date(2023, 1, 1),
                text: "Not great, not terrible"
            },
            {
                id: 2,
                author: "Sandra Bullock",
                rating: 5,
                date: new Date(2022, 3, 16),
                text: "The best trip I ever had.."
            }
            ]
    },

    {
        id: 4,
        name: "Subaru XV 2018",
        url: "subaru-xv-2018",
        price: 80,
        img: require("../image/cars/xv20i-656x320-1-800x546-1-1.png"),
        model: ["SUV", "mid range", "family trip"],
        rating: 5,
        class: "SUV",
        doors: 5,
        fuel: "Petrol",
        gearBox: "Automatic",
        luggage: 4,
        mileage: 420,
        seat: 6,
        features: ["ABS", "AirBags", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["Birmingham", "London"],
        description: "According to GM, only the parts carried over from the last Camaro to this one are the bowtie and the SS badge. The new Camaro rides on GM’s Alpha platform",
        reviews: [
            {
                id: 1,
                author: "Philipp Lareuvete",
                rating: 5,
                date: new Date(2022, 9, 15),
                text: "Wonderful car, amazing experience!"
            },
            {
                id: 2,
                author: "Tony Lawrence",
                rating: 4,
                date: new Date(2022, 7, 30),
                text: "Nice, very nice."
            }
        ]
    },

    {
        id: 5,
        name: "Ford Taurus",
        url: "ford-taurus",
        price: 50,
        img: require("../image/cars/ford-taurus-800x546-1.png"),
        model: ["economy", "family trip", "mid range"],
        rating: 3,
        class: "Sedan",
        doors: 4,
        fuel: "Petrol",
        gearBox: "Automatic",
        luggage: 2,
        mileage: 350,
        seat: 4,
        features: ["ABS", "AirBags", "Audio Input", "GPS",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
           "Electric Windows"],
        city: ["Birmingham"],
        description: "Derived from the Ford CD4 platform, the seventh-generation Taurus is fitted with a 2.0L EcoBoost inline-4 (an option for the sixth-generation Taurus) and a 2.7L EcoBoost V6 (used in the Fusion and Lincoln Continental), with a 6-speed automatic paired to both engines.",
        reviews: [
            {
                id: 1,
                author: "Paul Allen",
                rating: 3,
                date: new Date(2022, 11, 11),
                text: "Could be much more better"
            },
        ]
    },

    {
        id: 6,
        name: "Honda Civic",
        url: "honda-civic",
        price: 70,
        img: require("../image/cars/honda-auto-repair-800x546-1.png"),
        model: ["sports", "modern trip"],
        rating: 4,
        class: "Sedan",
        doors: 4,
        fuel: "Petrol",
        gearBox: "Manual",
        luggage: 2,
        mileage: 400,
        seat: 5,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
           "Electric Windows"],
        city: ["Glasgow", "Birmingham"],
        description: "The iconic Honda Civic Sedan makes a bold statement everywhere you go with its edgy, sleek styling. It contains 174 horse power turbo-charged engine.",
        reviews: [
            {
                id: 1,
                author: "Helena Swiss",
                rating: 4,
                date: new Date(2022, 12, 31),
                text: "I prefer leather seats, not textile"
            },
            {
                id: 2,
                author: "Andrew Mortens",
                rating: 5,
                date: new Date(2023, 1, 3),
                text: "Nice, very nice."
            }
        ]
    },

    {
        id: 7,
        name: "Hyundai Accent Limited Edition",
        url: "hyundai-accent-limited-edition",
        price: 80,
        img: require("../image/cars/big_wheels.png"),
        model: ["modern trip", "family trip", "trip", "economy"],
        rating: 5,
        class: "Sedan",
        doors: 4,
        fuel: "Petrol",
        gearBox: "Manual",
        luggage: 2,
        mileage: 400,
        seat: 5,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["Liverpool"],
        description: "Very elegant by design. One of the safest car in the world. Engine: 1.4 L Kappa I4 (petrol), 1.6 L Gamma I4 (petrol), 1.4 L U-Line I4 (diesel), 1.6 L U-Line I4 (diesel). Transmission:, 6-speed manual M6CF1, 6-speed automatic A6GF1",
        reviews: [
            {
                id: 1,
                author: "Jason May",
                rating: 5,
                date: new Date(2022, 4, 8),
                text: "Wonderful car, amazing experience!"
            },
        ]
    },

    {
        id: 8,
        name: "JEEP 2018 WRANGLER",
        url: "jeep-2018-wrangler",
        price: 90,
        img: require("../image/cars/2-SB-How-work-1.png"),
        model: ["modern trip", "sports"],
        rating: 4,
        class: "Offroad",
        doors: 4,
        fuel: "Diesel",
        gearBox: "Manual",
        luggage: 2,
        mileage: 300,
        seat: 4,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language", "Airconditions", "Audio System", "Central Locking"],
        city: ["Birmingham"],
        description: "This car is very strong by look. High quality suspension and great performance on hill-tracks.",
        reviews: [
            {
                id: 1,
                author: "Philipp Lareuvete",
                rating: 5,
                date: new Date(2022, 8, 29),
                text: "Wonderful car, amazing experience!"
            },
            {
                id: 2,
                author: "Tony Lawrence",
                rating: 4,
                date: new Date(2022, 10, 10),
                text: "Nice, very nice."
            }
        ]
    },

    {
        id: 9,
        name: "Ford Mustang",
        url: "ford-mustang",
        price: 100,
        img: require("../image/cars/Dallas-car-locksmith-prokeys-2.png"),
        model: ["sports", "modern trip", "luxury"],
        rating: 5,
        class: "Coupé",
        doors: 2,
        fuel: "Petrol",
        gearBox: "Manual",
        luggage: 2,
        mileage: 400,
        seat: 4,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["Liverpool"],
        description: "An enhanced engine and a re-engineered 6-speed automatic transmission are just two of the many refinements that make the all-new Rio fun to drive. Add the updated braking system and Motor Driven Power Steering (MDPS), and you’ve got increased control and responsiveness behind the wheel.",
        reviews: [
            {
                id: 1,
                author: "Edward Shawn",
                rating: 5,
                date: new Date(2022, 2, 5),
                text: "Wonderful car, amazing experience!"
            },
            {
                id: 2,
                author: "Lizz Flowers",
                rating: 4,
                date: new Date(2021, 5, 19),
                text: "Nice, very nice."
            }
        ]
    },

    {
        id: 10,
        name: "KIA Sorento SX 2019",
        url: "kia-sorento-sx-2019",
        price: 90,
        img: require("../image/cars/2017-kia-sorento-sx-at-4wd-suv-angular-front.png"),
        model: ["luxury", "family trip", "modern trip", "SUV"],
        rating: 5,
        class: "SUV",
        doors: 5,
        fuel: "Diesel",
        gearBox: "Automatic",
        luggage: 4,
        mileage: 420,
        seat: 5,
        features: ["ABS", "AirBags", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["London", "Liverpool", "Glasgow"],
        description: "Every 2019 Sorento includes niceties such as three rows of seats and a touchscreen infotainment system, the loaded SX Limited trim comes with LED headlights, a panoramic sunroof, a proximity key with push-button start, Nappa leather seats, an 8.0-inch touchscreen infotainment system with navigation (the standard unit measures 7.0 inches), automatic high-beam headlights, adaptive cruise control, lane-departure warning, lane-keeping assist, and more.",
        reviews: [
            {
                id: 1,
                author: "Betty Frost",
                rating: 5,
                date: new Date(2022, 11, 12),
                text: "Wonderful car, amazing experience!"
            },
        ]
    },

    {
        id: 11,
        name: "Mercedes-AMG GLA 45 4MATIC",
        url: "mercedes-amg-gla-45-4matic",
        img: require("../image/cars/GLC.png"),
        price: 100,
        model: ["luxury", "mid range", "SUV"],
        rating: 5,
        class: "SUV",
        doors: 5,
        fuel: "Diesel",
        gearBox: "Automatic",
        luggage: 4,
        mileage: 400,
        seat: 5,
        features: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["Glasgow"],
        description: "You can accept boundaries. Or overcome them. In the street. Or next to the street. At AMG, this has always been part of its philosophy. Because this car is looking for the next challenge. In every project, in every vehicle, in every individual part. It is therefore not surprising that the Mercedes-AMG GLA 45 can accelerate to 100 km/h in 4.4 seconds – a notable compact SUV.",
        reviews: [
            {
                id: 1,
                author: "Philipp Lareuvete",
                rating: 5,
                date: new Date(2021, 1, 7),
                text: "Wonderful car, amazing experience!"
            },
            {
                id: 2,
                author: "Tony Lawrence",
                rating: 5,
                date: new Date(2022, 3, 28),
                text: "Nice, very nice."
            }
        ]
    },

    {
        id: 12,
        name: "Porsche 718 Cayman",
        url: "porsche-718-cayman",
        price: 100,
        img: require("../image/cars/Porsche-PNG-Image-51036.png"),
        model: ["sports", "luxury"],
        rating: 5,
        class: "Coupé",
        doors: 2,
        fuel: "Petrol",
        gearBox: "Automatic",
        luggage: 2,
        mileage: 400,
        seat: 4,
        features: ["ABS", "AirBags", "Bluetooth", "GPS", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        city: ["Manchester", "Liverpool"],
        description: "The Cayman is a coupé derived from Porsche’s second and third generation Boxster roadster, styled in its first iteration by Pinky Lai. Cayman is an alternative spelling of caiman, a reptile in the same family as the alligator. Introduced in 2016 for the 2017 model year, the Porsche Boxster and Cayman were renamed the Porsche 718 Boxster and Porsche 718 Cayman, reviving the historic 718 moniker while switching engines from naturally-aspirated flat sixes to small-displacement flat-four turbocharged units. The new 718 Cayman was also re-positioned with an entry price lower than that of the 718 Boxster, in keeping with Porsche’s higher pricing for roadster models.",
        reviews: [
            {
                id: 1,
                author: "Alice Wonderland",
                rating: 5,
                date: new Date(2022, 8, 8),
                text: "Wonderful car, amazing experience!"
            },
        ]
    },

    {
        id: 13,
        name: "TATA Tiago",
        url: "tata-tiago",
        price: 40,
        img: require("../image/cars/Tata-Tiago-Tata-Motors-Car-800x546-1.png"),
        model: ["economy"],
        rating: 3,
        class: "Compact",
        doors: 4,
        fuel: "Petrol",
        gearBox: "Manual",
        luggage: 2,
        mileage: 300,
        seat: 4,
        features: ["ABS", "AirBags", "Audio Input",  "Baby Seat", "Airconditions", "Audio System", "Central Locking",],
        city: ["Glasgow"],
        description: "Signature hexagon grille with multifaceted Tata emblem. Sporty dual tone exterior option with glossy black roof and spoiler. Sporty and premium 15” dual tone alloy wheels. Body hugging seat bolsters crafted to ensure maximum comfort. Geometric textures on doors with chrome handles. Advanced AMT for the most convenient clutch pedal- free driving experience. Creep function: Drive easy in stop and go traffic. Sports mode: For sheer performance. Shift Assist Manual Mode : Easily select the best gear to drive in.",
        reviews: [
            {
                id: 1,
                author: "Sam Backett",
                rating: 3,
                date: new Date(2022, 9, 9),
                text: "Small wheels, low speed, no electrical windows. Disappointment"
            },
            {
                id: 2,
                author: "Lana Del Ray",
                rating: 3,
                date: new Date(2023, 1, 23),
                text: "Good service, but not comfortable car"
            }
        ]
    }
];