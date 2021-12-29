<div>
  <content>
    <slot />
  </content>
  <article>
    <h3>Archives</h3>
    <ui>
      <li><a href="/posts/post1">Post 1</a></li>
      <li><a href="/posts/post2">Post 2</a></li>
      <li><a href="/posts/post3">Post 3</a></li>
      <li><a href="/posts/post4">Post 4</a></li>
      <li><a href="/posts/post5">Post 5</a></li>
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

          a {
            color: purple;
            font-weight: bold;
            transition: 0.2s;

            &:hover {
              opacity: 0.6;
            }
          }
        }
      }
    }
  }
</style>