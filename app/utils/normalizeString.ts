export default function normalizeString(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

