<script>
    import { nwp_user, signOut } from "./auth"
    export let label = "Logout"
</script>
  
{#if $nwp_user}
    <div on:click={signOut}>
        {label}
    </div>
{/if}

<style>
    div {
        @apply flex justify-center items-center p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-300 cursor-pointer;
    }
</style>