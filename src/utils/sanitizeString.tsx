// Function to sanitize the string
export function sanitizeString(str: string): string {
    const modifiedStr = str.replace(/[^a-zA-Z0-9 ]/g, "");
    const underscoredStr = modifiedStr.replace(/ /g, "_");
    return underscoredStr.toLowerCase();
}