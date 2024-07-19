<script lang="ts">
	export let text: string = '';
	export let action: () => void = () => {};
</script>

<button
	class="underline text-red-500 bg-transparent
         flex flex-1 justify-center items-center
         py-3 w-full
         duration-300 ease-in-out hover:shadow-lg
         active:bg-gray-900 active:shadow-inner active:scale-95"
	type="button"
	on:click={action}
>
	{text}
</button>
