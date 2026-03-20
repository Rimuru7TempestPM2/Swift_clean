// config.js - The Digital Identity of SwiftClean Laundry
const businessConfig = {
    businessName: "SwiftClean Laundry",
    tagline: "Free pick up and delivery in Thika and all areas around.",
    primaryColor: "#0ea5e9", // SwiftClean Sky Blue
    
    // 1. YOUR PLUMBING - Replace this with your Google Script URL
    webAppUrl: "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE", 
    
    // 2. THE SERVICE INVENTORY (From the Flyer)
    categories: [
        {
            name: "Laundry Baskets",
            items: [
                { id: "l-basket", name: "Large Laundry Basket", price: 450 },
                { id: "s-basket", name: "Small Laundry Basket", price: 350 },
                { id: "weigh", name: "Weighing Option (per kg)", price: 50, note: "Min 5kg" }
            ]
        },
        {
            name: "Duvets & Blankets",
            items: [
                { id: "s-duvet", name: "Small Duvet (4x6)", price: 300, note: "Free bedsheet/pillowcase wash" },
                { id: "m-duvet", name: "Medium Duvet (5x6)", price: 350, note: "Free bedsheet/pillowcase wash" },
                { id: "l-duvet", name: "Large Duvet (6x6)", price: 450, note: "Free bedsheet/pillowcase wash" },
                { id: "blanket", name: "Normal Blanket", price: 200 }
            ]
        },
        {
            name: "Special Services",
            items: [
                { id: "carpet", name: "Carpet Cleaning", price: 500 },
                { id: "sofa", name: "Sofa Cleaning (per seater)", price: 450 },
                { id: "shoes", name: "Shoes (per pair)", price: 90 },
                { id: "mattress", name: "Mattress Cleaning", price: 1000, note: "Starts from 1k" }
            ]
        }
    ],

    // 3. TARGET LOCATIONS
    estates: ["Section 9", "Landless", "Ngoingwa", "Makongeni", "Kenyatta Highway", "Blue Post", "Imperial-Runda Road"],

    // 4. BUSINESS INFO
    whatsappNumber: "254758811941",
    location: "Imperial-Runda road (Newly constructed containers)"
};

window.config = businessConfig;
