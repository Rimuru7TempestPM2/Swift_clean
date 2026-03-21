const businessConfig = {
    businessName: "SwiftClean Laundry",
    tagline: "Free pick up and delivery in Thika and all areas around.",
    primaryColor: "#0ea5e9",
    // STEP A: Replace with your Google Apps Script Web App URL
    webAppUrl: "https://script.google.com/macros/s/AKfycby4kXHPtlR3oMTt2a4f472Xif5XMJcaKwC_j8MU4PDKhRtHMo53uHhXzt1nyQwLvDpfqg/exec", 
    whatsappNumber: "254758811941",
    paymentType: "Buy Goods",
    tillNumber: "5919424",
    officialName: "SWIFTCLEAN SERVICES",
    
    categories: [
        {
            name: "Laundry Services",
            items: [
                { id: "l-basket", name: "Large Laundry Basket", price: 450, type: "qty", unit: "basket" },
                { id: "s-basket", name: "Small Laundry Basket", price: 350, type: "qty", unit: "basket" },
                { id: "weighing", name: "General Laundry (By Weight)", price: 50, type: "qty", unit: "kg", note: "Final weight verified by our scale at pick-up." }
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
                { id: "mattress", name: "Mattress Cleaning", price: 1000, type: "qty", unit: "unit", note: "Range: 1k - 1.5k (Verified at pick-up)" },
                { id: "carpet", name: "Carpet Cleaning", price: 500, type: "qty", unit: "unit", note: "Free doormat wash" },
                { id: "matt", name: "Matt Cleaning", price: 350, type: "qty", unit: "unit" },
                { id: "doormat", name: "Doormat Cleaning", price: 100, type: "qty", unit: "unit" },
                { id: "shoes", name: "Shoes Cleaning", price: 90, type: "qty", unit: "pair", note: "3+ pairs @85/-" }
            ]
        },
        {
            name: "House & Pest Control",
            items: [
                { id: "bedsitter", name: "Bedsitter Cleaning", price: 2000, type: "flat" },
                { id: "one-bed", name: "1 Bedroom Cleaning", price: 3000, type: "flat" },
                { id: "two-bed", name: "2 Bedroom Cleaning", price: 4000, type: "flat" },
                { id: "fumigation", name: "Full Fumigation", price: 2500, type: "qty", unit: "service", note: "6-month guarantee" }
            ]
        }
    ]
};
window.config = businessConfig;
