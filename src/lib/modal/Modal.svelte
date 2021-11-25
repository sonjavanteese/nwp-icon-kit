<script>
	import Icon from '$lib/nwp-icons/Icon.svelte';
	import { isMod, dataMod } from '$lib/stores.js';
    import { fade } from 'svelte/transition';
</script>

{#if $isMod}
    <div transition:fade={{duration: 500}} class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
        <!-- modal -->
        <article class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
        <!-- modal header -->
        <header class="border-b px-4 py-2 flex items-center">
            <Icon name="info" />
            <span class="flex-grow font-semibold text-2xl px-2">
                <span>{!$dataMod.name ? `` : $dataMod.name}</span> 
            </span>
            <span on:click={() => isMod.set(false)} class="text-black cursor-pointer">
            <Icon name="cross" />
            </span>
        </header>
        <!-- modal body -->
        <div class="p-3 space-y-3">
            {#if $dataMod.id !== 0}
            <div class="text-8xl text-center">
                {@html $dataMod.icon}
            </div>
            {/if}
            <div>
                <pre class="overflow-auto rounded-xl">{$dataMod.icon}</pre>             
            </div>
        </div>
        <footer class="flex items-center border-t p-3">
            <span class="flex-grow"></span>
            <button on:click={() => isMod.set(false)} class="btn btn-blue">Ok</button>
            <button on:click={() => isMod.set(false)} class="btn btn-red">Close</button>
            <!-- <button on:click={() => isMod.set(false)} class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Oke</button> -->
        </footer>
        </article>
    </div>
{/if}

<style global>
.btn {
    @apply inline-block px-6 py-2 mr-2 text-sm text-white font-bold bg-gray-500 hover:bg-gray-600 rounded;
}
.btn.btn-blue {
    @apply bg-blue-500 hover:bg-blue-600;
}
.btn.btn-red {
    @apply bg-red-700 hover:bg-red-800;
}
</style>