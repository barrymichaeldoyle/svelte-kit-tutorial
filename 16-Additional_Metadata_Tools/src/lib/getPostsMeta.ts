interface Meta {
  title?: string;
  slug: string;
  published?: boolean;
}

function getPostsMeta(count = 0): any[] {
  const posts = import.meta.globEager('../posts/*.md');
  const postsMeta = Object.keys(posts).map(key => ({
    ...posts[key].metadata,
    slug: key.substring(key.lastIndexOf('/') + 1, key.length - 3)
  }) as Meta);
  const publishedPostsMeta = postsMeta.filter(post => post.published);
  if (count) return publishedPostsMeta.slice(0, count);
  return publishedPostsMeta;
}

export default getPostsMeta;
