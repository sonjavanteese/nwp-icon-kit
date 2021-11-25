<script>
	import LogoutBtn from '$lib/auth/LogoutBtn.svelte';
    import { page } from "$app/stores";
    import { Icon } from "$lib/nwp-icons/";
    import { isSb } from '$lib/stores.js';
    const nav = [
	['/', 'Start', true, false],
	['/list', 'Icon List', true, true],
	['/icons', 'Icon Libary', true, true],
	['/utf8', 'Utf8 Icons', true, true]
    ]

    const closeSb = () => isSb.set(false)
</script>


<aside class="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-30" class:open={$isSb}>
  <nav class="relative flex flex-col w-full h-full bg-white border-r overflow-y-auto">
      <header class="flex items-center px-6 py-8 bg-gray-50">
          <a class="mr-auto text-2xl font-semibold leading-none" href="#">
              <img src="https://nwp-cgn.de/media/uploads/big/a67a7730cb8f9e6aa0cb09a082a426bc.png" alt="nwp-studio">
          </a>
          <span on:click={closeSb} class="cursor-pointer text-lg">
              <Icon name="cross" />
          </span>
      </header>
      <hr>
      <div class="px-4 py-4">
          <ul>
              {#each nav as [path, name, main, sub]}
                <li class="mb-1" on:click={closeSb}>
                    <a href={path} class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded" class:bg-gray-50={$page.path === path}>
                        {name}
                    </a>
                </li>
              {/each}
                
          </ul>
      </div>
      <footer class="mt-auto px-4 py-4">
          <div class="pt-6" on:click={closeSb}>
            <LogoutBtn />
        </div>
          <p class="mt-6 mb-4 text-sm text-center text-gray-400">
              <span>© 2021 All rights reserved.</span>
          </p>
      </footer>
  </nav>
</aside>
<section class:hidden={!$isSb} on:click={closeSb}></section>

<style>
  aside {
    @apply fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-30;
    transform: translateX(-100%);
    transition: transform 0.5s;
  }
  aside.open {
    transform: translateX(0);
  }
  section {
      @apply fixed inset-0 bg-gray-800 opacity-40 z-10;
  }
  img {
      max-height: 1.5rem;
  }
</style>
