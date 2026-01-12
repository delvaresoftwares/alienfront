
// Import images
import imgMinimal from '../assets/images/products/minimal_mammal_v2.png';
import imgSecret from '../assets/images/products/secret_society_v2.png';
import imgPhilosopher from '../assets/images/products/philosophers_stone_v2.png';
import imgCyber from '../assets/images/products/cyber_glitch_v2.png';
import imgFrost from '../assets/images/products/frost_walker_v2.png';
import imgAlienhill from '../assets/images/products/alienhill_core_v2.png';
import imgMockup from '../assets/images/products/product_mockup_v2.png';

const products = [
    {
        id: "minimal-mammal",
        title: "Minimal Mammal",
        collection: "01",
        price: 89.00,
        image: imgMinimal,
        type: 'fashion',
        description: "A minimalist masterpiece featuring clean lines and geometric aesthetics. Perfect for the modern urban explorer who values simplicity and impact.",
        specs: {
            material: "100% Organic Cotton",
            weight: "240 GSM",
            fit: "Oversized Fit",
            print: "Screen Print",
            origin: "Earth"
        }
    },
    {
        id: "philosophers-stone",
        title: "Philosopher's Stone",
        collection: "02",
        price: 95.00,
        image: imgPhilosopher,
        type: 'fashion',
        description: "Ancient wisdom meets future tech. This design embodies the eternal quest for knowledge and the transmutation of the self.",
        specs: {
            material: "Premium Cotton Blend",
            weight: "260 GSM",
            fit: "Relaxed Boxy Fit",
            print: "High-Density Puff Print",
            origin: "Alchemy Lab/Earth"
        }
    },
    {
        id: "frost-walker",
        title: "Frost Walker",
        collection: "03",
        price: 92.00,
        image: imgFrost,
        type: 'fashion',
        description: "Stay cold, perform hot. Visuals inspired by the frozen wastelands of a post-apocalyptic future.",
        specs: {
            material: "Thermal Cotton Knit",
            weight: "280 GSM",
            fit: "Regular Street Fit",
            print: "Digital Direct",
            origin: "Cryo-System/Earth"
        }
    },
    {
        id: "cyber-glitch",
        title: "Cyber Glitch",
        collection: "04",
        price: 88.00,
        image: imgCyber,
        type: 'fashion',
        description: "Reality is breaking down. Embrace the error with this vibrant, chaotic glitch art piece.",
        specs: {
            material: "100% Cotton",
            weight: "220 GSM",
            fit: "Oversized",
            print: "Rubberized Print",
            origin: "The Cloud"
        }
    },
    {
        id: "secret-society",
        title: "Secret Society",
        collection: "05",
        price: 110.00,
        image: imgSecret,
        type: 'fashion',
        description: "If you know, you know. Members only access to high-tier apparel. Subtlety is key.",
        specs: {
            material: "Heavyweight French Terry",
            weight: "320 GSM",
            fit: "Luxury Street Fit",
            print: "Embroidery + Print",
            origin: "[REDACTED]"
        }
    },
    {
        id: "alienhill-core",
        title: "Alienhill Core",
        collection: "06",
        price: 75.00,
        image: imgAlienhill,
        type: 'fashion',
        description: "The fast-forward basic. Represents the core identity of the Alienhill movement.",
        specs: {
            material: "Bio-Washed Cotton",
            weight: "200 GSM",
            fit: "Regular Fit",
            print: "Reflective Logo",
            origin: "Mothership"
        }
    },
    {
        id: "holo-sticker",
        title: "Holo Sticker",
        collection: "ACC",
        price: 15.00,
        image: imgMockup,
        type: 'apparels',
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
        price: 45.00,
        image: imgMockup,
        type: 'apparels',
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
        price: 35.00,
        image: imgMockup,
        type: 'apparels',
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
