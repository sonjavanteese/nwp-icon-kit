<script>
  import { page } from "$app/stores";
  import { Icon } from "$lib/nwp-icons/";
  // import logo from "./svelte-logo-blue.svg";
  import logoDark from "./svelte-logo-dark.svg";
</script>

<header class="bg-blue-800 text-white shadow-xl">
  <nav class="flex justify-between items-center container mx-auto py-4 px-4">
    <a href="/" class="" class:active={$page.path === "/"}>
		<!-- <img src={logo} alt="SvelteKit" /> -->
		<Icon name="home" />
		</a>
    <span class="text-3xl font-semibold">nwp-app</span>
    <a href="/icons" class="text-2xl" class:active={$page.path === "/icons"}>
      <img src={logoDark} alt="SvelteKit" />
    </a>
  </nav>
</header>

<style>
  a {
    @apply text-2xl;
  }
  a.active {
    @apply bg-opacity-10 text-gray-200;
  }
  img {
	  width: 2rem;
	  height: 2rem;
  }
</style>
