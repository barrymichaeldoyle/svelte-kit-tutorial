function getPostsMeta(): any[] {
  const posts = import.meta.globEager('../posts/*.md');
  const postsMeta = Object.values(posts).map(post => post.metadata);
  return postsMeta
}

export default getPostsMeta;
