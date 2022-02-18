function getPostsMeta(count = 0): any[] {
  const posts = import.meta.globEager('../posts/*.md');
  const postsMeta = Object.values(posts).map(post => post.metadata);
  if (count) return postsMeta.slice(0, count);
  return postsMeta;
}

export default getPostsMeta;
