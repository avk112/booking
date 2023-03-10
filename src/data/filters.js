export default [
    {
        id: 1,
        sortPosition:2,
        name: "model",
        fieldName: "model",
        title: "Car model",
        type: "select",
        lazyMatch: true,
        placeholder: "Choose model",
        options: ["economy", "family trip", "luxury", "mid range", "modern trip", "sports", "SUV", "trip"],
        img: require("../image/filters/model.png")
    },

    {
        id: 2,
        sortPosition:3,
        name: "rating",
        fieldName: "rating",
        title: "Rating",
        type: "select",
        placeholder: "Choose rating",
        options: [1,2,3,4,5],
        img: require("../image/filters/rating.png")
    },

    {
        id: 3,
        sortPosition:1,
        name: "search",
        title: "Search",
        type: "text",
        options: [],
        img: require("../image/filters/search.png")
    },

    {
        id: 4,
        name: "features",
        title: "Features",
        type: "checkbox",
        lazyMatch: false,
        options: ["ABS", "AirBags", "Audio Input", "Bluetooth", "GPS", "Language",
            "Baby Seat", "Child Seat", "Airconditions", "Audio System", "Central Locking",
            "Climate Control", "Cruise Control", "Electric Windows"],
        img: require("../image/filters/features.png")
    },

    {
        id: 5,
        name: "class",
        title: "Class",
        type: "checkbox",
        lazyMatch: true,
        options: ["Compact", "SUV", "Coupé", "Sedan", "Offroad"],
        img: require("../image/filters/class.png")
    },

    {
        id: 6,
        name: "doors",
        title: "Doors",
        type: "radio",
        options: ["Any",2,4,5],
        img: require("../image/filters/door.png")
    },

    {
        id: 7,
        name: "fuel",
        title: "Fuel",
        type: "radio",
        options: ["Any", "Petrol", "Diesel"],
        img: require("../image/filters/fuel.png")
    },

    {
        id: 8,
        name: "gearBox",
        title: "Gear Box",
        type: "radio",
        options: ["Any", "Manual", "Automatic"],
        img: require("../image/filters/gearbox.png")
    },

    {
        id: 9,
        name: "seat",
        title: "Seat",
        type: "radio",
        options: ["Any", 4,5,6],
        img: require("../image/filters/seat.png")
    },

    {
        id: 10,
        name: "city",
        fieldName: "startCity",
        title: "Where you from",
        type: "select",
        united: true,
        options: [],
        img: require("../image/filters/city.png")
    },

    {
        id: 11,
        name: "city",
        fieldName: "finishCity",
        title: "Where you Go",
        type: "select",
        united: true,
        options: [],
        img: require("../image/filters/city.png")
    },
    {
        id: 12,
        name: "date",
        fieldName: "date",
        title: "Choose date",
        type: "select",
        options: [],
        img: require("../image/filters/date.png")
    },

    {
        id: 13,
        name: "mileage",
        fieldName: "mileage",
        title: "Mileage",
        type: "checkbox",
        options: [],
        img: require("../image/filters/mileage.png")
    },

    {
        id: 14,
        name: "luggage",
        fieldName: "luggage",
        title: "Luggage",
        type: "checkbox",
        options: [],
        img: require("../image/filters/luggage.png")
    },


];
