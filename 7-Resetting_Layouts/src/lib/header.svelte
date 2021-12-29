<script>
  export let title = "SurfSpots";
</script>

<header>
  <h1><a href="/" sveltekit:prefetch>{title}</a></h1>
  <nav>
    <a href="/about" sveltekit:prefetch>About</a>
    <a href="/posts" sveltekit:prefetch>Posts</a>
    <a href="/login" sveltekit:prefetch>Login</a>
  </nav>
</header>

<style lang="scss">
  header {
    background-color: aquamarine;
    display: flex;
    padding: 15px;

    h1 {
      flex: 1;
      margin: 0;

      a {
        color: purple;
        text-decoration: none;
      }
    }

    nav {
      align-items: center;
      display: flex;

      a {
        color: sienna;
        border-right: 3px solid sienna;
        font-weight: bold;
        padding: 0 15px;
        text-decoration: none;
        transition: 0.2s;

        &:last-child {
          border-right: none;
        }

        &:hover {
          color: salmon;
        }
      }
    }
  }
</style>