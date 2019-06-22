const windowLocationDefined = typeof window !== 'undefined' && window.location;

export default function getUrlHashes() {
  if (!windowLocationDefined) return {};

  const hash = window.location.hash.replace(/^#?!?/, '');
  if (hash) return hash;

  return {};
}

