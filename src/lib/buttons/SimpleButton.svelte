<script lang="ts">
	export let text: string = 'Exchange Contact';
	export let action: () => void = () => {};
</script>

<button
	class="bg-black flex flex-1 justify-center items-center
         py-5 rounded-3xl w-full
         duration-300 ease-in-out hover:shadow-lg
         active:bg-gray-900 active:shadow-inner active:scale-95"
	type="button"
	on:click={action}
>
	{text}
</button>
