const generateSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing spaces
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+/, "") // Remove leading hyphens
    .replace(/-+$/, ""); // Remove trailing hyphens
};

export function removeAsterisks(text) {
  if (!text) return "";

  const str = text.toString();

  return str.replace(/\*/g, "");
}

export default generateSlug;
