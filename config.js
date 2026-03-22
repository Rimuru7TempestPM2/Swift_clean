const businessConfig = {
    businessName: "SwiftClean Laundry",
    tagline: "Free pick up and delivery in Thika and all areas around.",
    primaryColor: "#0ea5e9",
    webAppUrl: "PASTE_YOUR_NEW_URL_HERE", 
    whatsappNumber: "254758811941",
    paymentType: "Buy Goods",
    tillNumber: "5919424",
    officialName: "SWIFTCLEAN SERVICES",
    
    categories: [
        {
            name: "Laundry (Wash, Dry, Fold)",
            items: [
                { id: "weight-standard", name: "Standard Laundry (By Weight)", price: 70, type: "qty", unit: "kg", note: "Above 5kg @50/kg | Below 5kg @70/kg" },
                { id: "weight-express", name: "Express/Instant (By Weight)", price: 90, type: "qty", unit: "kg", note: "Wash, Dry & Fold while you wait" },
                { id: "single-cloth", name: "Single Item Wash", price: 50, type: "qty", unit: "clothe" }
            ]
        },
        {
            name: "Baskets & Bedding",
            items: [
                { id: "l-basket", name: "Large Laundry Basket", price: 460, type: "qty", unit: "basket" },
                { id: "s-basket", name: "Small Laundry Basket", price: 360, type: "qty", unit: "basket" },
                { id: "s-duvet", name: "Small Duvet (4x6)", price: 300, type: "qty", unit: "unit", note: "Free bedsheet/pillowcase wash" },
                { id: "m-duvet", name: "Medium Duvet (5x6)", price: 350, type: "qty", unit: "unit", note: "Free bedsheet/pillowcase wash" },
                { id: "l-duvet", name: "Large Duvet (6x6)", price: 450, type: "qty", unit: "unit", note: "Free bedsheet/pillowcase wash" }
            ]
        },
        {
            name: "Cleaning & Special Services",
            items: [
                { id: "sofa", name: "Sofa Cleaning", price: 450, type: "qty", unit: "seater", note: "Price is per seater" },
                { id: "mattress", name: "Mattress Cleaning", price: 1000, type: "qty", unit: "unit", note: "Range: 1k - 1.5k" },
                { id: "carpet", name: "Carpet Cleaning", price: 500, type: "qty", unit: "unit", note: "Free doormat wash" },
                { id: "shoes", name: "Shoes Cleaning", price: 90, type: "qty", unit: "pair", note: "3+ pairs @85/-" }
            ]
        },
        {
            name: "Home Cleaning & Others",
            items: [
                { id: "single-room", name: "Single Room", price: 1200, type: "flat" },
                { id: "bedsitter", name: "Bedsitter", price: 2000, type: "flat" },
                { id: "one-bed", name: "1 Bedroom", price: 3000, type: "flat" },
                { id: "fumigation", name: "Fumigation", price: 0, type: "flat", note: "COMING SOON - NOT OFFERED YET" }
            ]
        }
    ]
};
window.config = businessConfig;
