export const houseColors = ["Red", "Bright Orange", "Orange", "Yellow", "Green", "Mint", "Teal", "Cyan", "Blue", "Navy", "Indigo", "Purple", "Bright Pink", "Pink", "Maroon", "Brown", "Gray"];

const getHouseColor = (colorName: string): string => {
    switch (colorName.toLowerCase()) {
        case "red":
            return "rgb(254, 68, 57)";
        case "bright orange":
            return "rgb(255, 127, 2)";
        case "orange":
            return "rgb(254, 127, 0)";
        case "yellow":
            return "rgb(254, 215, 9)";
        case "green":
            return "rgb(50, 215, 75)";
        case "mint":
            return "rgb(103, 191, 214)";
        case "teal":
            return "rgb(0, 128, 128)";
        case "cyan":
            return "rgb(98, 211, 253)";
        case "blue":
            return "rgb(0, 0, 255)";
        case "navy":
            return "rgb(0, 0, 229)";
        case "indigo":
            return "rgb(75, 0, 130)";
        case "purple":
            return "rgb(191, 90, 242)";
        case "bright pink":
            return "rgb(254, 101, 177)";
        case "pink":
            return "rgb(255, 192, 203)";
        case "maroon":
            return "rgb(127, 0, 0)";
        case "brown":
            return "rgb(165, 42, 42)";
        case "gray":
            return "rgb(128, 128, 128)";
        default:
            return "rgb(11, 132, 255)";
    }
};
export default getHouseColor;
