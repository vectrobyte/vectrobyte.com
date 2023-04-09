export function uuid() {
  return Math.random().toString(36).substr(2, 9);
}

export function getSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}
