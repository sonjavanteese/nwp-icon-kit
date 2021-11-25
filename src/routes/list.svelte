<script>
  import { Icon, iconlist } from "$lib/nwp-icons/";
</script>

<main>
  <section class="page-container">
      <nav class="flex items-center mb-4">
        <a href="/" class="text-xl text-blue-800">&#10094; back</a>
        <div class="flex-grow"></div>
          <a href="/icons" class="text-blue-800 text-lg font-medium"> Icon Libary</a>
      </nav>
      <h1 class="py-4 text-center border-b mb-8">
        Nwp Icon List
      </h1>

      <div class="flex flex-col divide-y divide-opacity-10">
          {#each iconlist as icon}
          <a href="/details/{icon}" class="flex items-center px-4 py-3">
              <div class="text-2xl font-medium">{icon.toUpperCase()}</div>
              <span class="flex-grow"></span>
              <Icon name="{icon}" />
          </a>
          {/each}
      </div>
  </section>
</main>

