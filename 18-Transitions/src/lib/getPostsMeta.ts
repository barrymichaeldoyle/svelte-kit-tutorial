interface Meta {
  title?: string;
  slug: string;
  published?: boolean;
  date?: string;
}

function getPostsMeta(count = 0): any[] {
  const posts = import.meta.globEager('../posts/*.md');
  const postsMeta = Object.keys(posts).map(key => ({
    ...posts[key].metadata,
    slug: key.substring(key.lastIndexOf('/') + 1, key.length - 3)
  }) as Meta);
  const sortedPublishedPostsMeta = postsMeta
    .filter(post => post.published)
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : -Infinity;
      const dateB = b.date ? new Date(b.date).getTime() : -Infinity;
      return dateB - dateA;
    });
  if (count) return sortedPublishedPostsMeta.slice(0, count);
  return sortedPublishedPostsMeta;
}

export default getPostsMeta;
