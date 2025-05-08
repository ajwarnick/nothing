// Global typings file (e.g., global.d.ts)
declare module "*.json" {
    const value: any;
    export default value;
}

// Import JSON file without specifying types each time
import images from './hashes.json' assert {type: 'json'};

export const getHash = () => {
    return images.images[Math.floor(Math.random() * images.images.length)].hash
}