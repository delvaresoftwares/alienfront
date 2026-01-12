// Product Images
import menPhilFront from '../assets/images/products/men/Tee/Phil\'Stone/front.jpg';
import menPhilBack from '../assets/images/products/men/Tee/Phil\'Stone/back.jpg';
import menTropicalFront from '../assets/images/products/men/Tee/Tropical/front.jpg';
import menTropicalBack from '../assets/images/products/men/Tee/Tropical/back.jpg';
import menCoreFront from '../assets/images/products/men/Tee/core collection/front.jpg';
import menCoreBack from '../assets/images/products/men/Tee/core collection/back.jpg';

import womenShirtFront from '../assets/images/products/women/Tee/Shirt/Tropical/front.jpg';
import womenShirtBack from '../assets/images/products/women/Tee/Shirt/Tropical/back.jpg';

// Accessories (Keep existing)
import imgSticker from '../assets/images/products/holo_sticker.png';
import imgFrame from '../assets/images/products/glitch_frame.png';
import imgMousepad from '../assets/images/products/neural_mousepad.png';

const products = [
    // --- MEN'S COLLECTION ---
    {
        id: "men-philosopher",
        title: "Philosopher's Stone",
        collection: "MEN 01",
        price: 4499.00,
        image: menPhilFront,
        imageBack: menPhilBack,
        category: 'clothing',
        gender: ['men'],
        description: "Alchemy meets oversize. The signature stone print.",
        specs: { material: "Cotton", fit: "Oversized", origin: "Earth" }
    },
    {
        id: "men-tropical",
        title: "Neon Tropical",
        collection: "MEN 02",
        price: 3999.00,
        image: menTropicalFront,
        imageBack: menTropicalBack,
        category: 'clothing',
        gender: ['men'],
        description: "Summer noir aesthetics.",
        specs: { material: "Cotton", fit: "Regular", origin: "Earth" }
    },
    {
        id: "men-core",
        title: "Alienhill Core",
        collection: "MEN 03",
        price: 2999.00,
        image: menCoreFront,
        imageBack: menCoreBack,
        category: 'clothing',
        gender: ['men'],
        description: "The essential black tee.",
        specs: { material: "Cotton", fit: "Regular", origin: "Mother Ship" }
    },

    // --- WOMEN'S COLLECTION ---
    {
        id: "women-shirt-tropical",
        title: "Tropical Glitch",
        collection: "WOMEN 01",
        price: 3499.00,
        image: womenShirtFront,
        imageBack: womenShirtBack,
        category: 'clothing',
        gender: ['women'],
        description: "Vibrant cuts for the digital age.",
        specs: { material: "Cotton Blend", fit: "Crop / Regular", origin: "Earth" }
    },
    {
        id: "holo-sticker",
        title: "Holo Sticker",
        collection: "ACC",
        price: 499.00,
        image: imgSticker,
        category: 'accessories',
        gender: ['men', 'women'],
        description: "Iridescent holographic stickers to mark your territory.",
        specs: {
            material: "Vinyl",
            weight: "N/A",
            fit: "Universal",
            print: "Holographic",
            origin: "Earth"
        }
    },
    {
        id: "glitch-frame",
        title: "Glitch Frame",
        collection: "ACC",
        price: 1999.00,
        image: imgFrame,
        category: 'accessories',
        gender: ['men', 'women'],
        description: "Display your digital memories in a physical distortion field.",
        specs: {
            material: "Acrylic/Digital Panel",
            weight: "500g",
            fit: "Desktop",
            print: "Digital Display",
            origin: "Shenzhen"
        }
    },
    {
        id: "neural-mousepad",
        title: "Neural Mousepad",
        collection: "ACC",
        price: 1499.00,
        image: imgMousepad,
        category: 'accessories',
        gender: ['men', 'women'],
        description: "High-precision surface for neural-linked reflexes.",
        specs: {
            material: "Micro-textured Cloth",
            weight: "Standard",
            fit: "XL Desk Mat",
            print: "Sublimation",
            origin: "Earth"
        }
    }
];

export default products;
