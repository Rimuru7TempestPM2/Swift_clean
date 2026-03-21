const businessConfig = {
    businessName: "SwiftClean Laundry",
    tagline: "Free pick up and delivery in Thika and all areas around.",
    primaryColor: "#0ea5e9",
    // STEP A: Replace the URL below with your Google Apps Script Web App URL
    webAppUrl: "https://script.google.com/macros/s/XXXXX/exec", 
    whatsappNumber: "254758811941",
    
    categories: [
        {
            name: "Laundry Services",
            items: [
                { id: "l-basket", name: "Large Laundry Basket", price: 450, type: "qty", unit: "basket" },
                { id: "s-basket", name: "Small Laundry Basket", price: 350, type: "qty", unit: "basket" },
                { id: "weighing", name: "Weighing Option", price: 50, type: "qty", unit: "kg", note: "Min 5kg" }
            ]
        },
        {
            name: "Duvets & Bedding",
            items: [
                { id: "s-duvet", name: "Small Duvet (4x6)", price: 300, type: "qty", unit: "unit", note: "Free bedsheet/pillowcase wash" },
                { id: "m-duvet", name: "Medium Duvet (5x6)", price: 350, type: "qty", unit: "unit", note: "Free bedsheet/pillowcase wash" },
                { id: "l-duvet", name: "Large Duvet (6x6)", price: 450, type: "qty", unit: "unit", note: "Free bedsheet/pillowcase wash" },
                { id: "blanket", name: "Normal Blanket", price: 200, type: "qty", unit: "unit" }
            ]
        },
        {
            name: "Cleaning & Special Services",
            items: [
                { id: "sofa", name: "Sofa Cleaning", price: 450, type: "qty", unit: "seater" },
                { id: "mattress", name: "Mattress Cleaning", price: 1000, type: "qty", unit: "unit", note: "Price: 1k - 1.5k" },
                { id: "carpet", name: "Carpet Cleaning", price: 500, type: "qty", unit: "unit", note: "Free doormat wash" },
                { id: "matt", name: "Matt Cleaning", price: 350, type: "qty", unit: "unit" },
                { id: "doormat", name: "Doormat Cleaning", price: 100, type: "qty", unit: "unit" },
                { id: "shoes", name: "Shoes Cleaning", price: 90, type: "qty", unit: "pair", note: "3+ pairs @85/-" }
            ]
        },
        {
            name: "House Cleaning",
            items: [
                { id: "single", name: "Single Room", price: 1200, type: "qty", unit: "room" },
                { id: "bedsitter", name: "Bedsitter", price: 2000, type: "qty", unit: "unit" },
                { id: "one-bed", name: "1 Bedroom", price: 3000, type: "qty", unit: "unit" },
                { id: "two-bed", name: "2 Bedroom", price: 4000, type: "qty", unit: "unit" }
            ]
        },
        {
            name: "Pest Control",
            items: [
                { id: "fumigation", name: "Full Fumigation", price: 2500, type: "qty", unit: "service", note: "6-month guarantee" },
                { id: "bedbugs", name: "Bedbug Treatment", price: 1000, type: "qty", unit: "room" }
            ]
        }
    ]
};
window.config = businessConfig;
