<script context="module">
  export const prerender = true;

  import faker from "faker";

  export async function load({ fetch }) {
    return {
      props: {
        users: [...Array(50)].map(() => {
          const lastName = faker.name.lastName();
          return {
            avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
            lastName,
          }
        })
      }
    }
  }
</script>

<script>
  export let users;
</script>

<main>
  {#each users as { avatar, lastName }}
    <a sveltekit:prefetch href={`/users/${lastName}`} class="box">
      <img src={avatar} alt={lastName} />
      <h2>{lastName}</h2>
    </a>
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .box {
    padding: 0.25rem;
    margin: 1.5rem;
    color: salmon;
    box-shadow: 4px 5px 11px 2px lightgray;
  }
  .box:hover {
    box-shadow: 4px 5px 11px 10px lightgray;
  }
  img {
    width: 15rem;
    object-fit: contain;
  }
</style>
