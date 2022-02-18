<script context="module">
  import getPostsMeta from "$lib/getPostsMeta";

  export async function load() {
    return { props: { postsMeta: getPostsMeta(5) }}
  }
</script>

<script>
  export let postsMeta;
</script>

<div>
  <content>
    <slot />
  </content>
  <article>
    <h3>Latest 5 Posts</h3>
    <ui>
      {#each postsMeta as post}
        <li><a href="/posts/{post.slug}">{post.title}</a></li>
      {/each}
    </ui>
  </article>
</div>

<style lang="scss">
  div {
    display: flex;

    content {
      flex: 1;
    }

    article {
      background-color: sandybrown;
      padding: 15px;
      width: 150px;

      h3 {
        color: black;
        margin: 0 0 10px 0;
      }

      ui {
        list-style: none;

        li {
          margin: 10px 0;
        }
      }
    }
  }
</style>