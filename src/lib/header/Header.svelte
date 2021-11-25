<script>
	import { page } from "$app/stores";
  import { Icon } from "$lib/nwp-icons/";
  import Modal from "$lib/modal/modal.svelte";
  import { isMod, isSb } from '$lib/stores.js';
  import logoDark from "./svelte-logo-dark.svg";
</script>
<Modal />
<header class="bg-gray-50 text-gray-800 text-white border-b shadow-xl">
  <nav class="flex justify-between items-center container mx-auto py-4 px-4">
     <!--  {#if $page.path === '/'}
      <span on:click={() => isMod.set(true)} class="text-2xl cursor-pointer"><Icon name="cog" /></span>
      {:else}
      <a href="/"><Icon name="goback" /></a>
      {/if} -->
    <a href="/" class="text-3xl font-semibold flex-grow">
      <img src="https://nwp-cgn.de/media/uploads/big/a67a7730cb8f9e6aa0cb09a082a426bc.png" alt="nwp-studio">
    </a>
    <span on:click={() => isSb.set(true)} class="text-3xl text-gray-600 cursor-pointer">
      &#9776;
    </span>
  </nav>
</header>



<style>
 a {
    @apply text-2xl;
  }
  img {
	  max-height: 2rem;
  }
</style>
