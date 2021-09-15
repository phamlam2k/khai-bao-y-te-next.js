export default async function existsData(url) {
  const result = await fetch(url, { method: 'HEAD' });
  return result.ok;
}