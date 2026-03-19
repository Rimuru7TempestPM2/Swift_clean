// config.js - The Business Identity Layer
const businessConfig = {
    businessName: "Thika Premium Laundry", 
    primaryColor: "#2563eb", 
    tagline: "Fresh Clothes, Delivered Fast.",
    
    // REPLACE THE URL BELOW WITH YOUR GOOGLE SCRIPT URL
    webAppUrl: "https://script.google.com/macros/s/AKfycbys5Wcptv0-aDZOwIunmeLdb9wp-cLIom5Svwi1buWrPHAvwZIYKKdoA4HEEfz8eMcpPw/exec", 
    
    services: [
        { name: "Wash & Fold", price: "Ksh 500" },
        { name: "Dry Cleaning", price: "Ksh 800" },
        { name: "Duvet Cleaning", price: "Ksh 1,200" },
        { name: "Ironing Only", price: "Ksh 300" }
    ],

    phone: "0712345678",
    location: "Section 9, Thika"
};

// This matches your HTML's "const cfg = window.config;"
window.config = businessConfig;
