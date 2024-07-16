<script>
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';

	export let label = '';
	export let value = '';
	export let type = 'text';

	let isFocused = false;

	function handleFocus() {
		isFocused = true;
	}

	function handleBlur() {
		isFocused = value.length === 0 ? false : true;
	}

	$: inputId = label.toLowerCase().replace(/\s+/g, '-');
</script>

<div class="relative mt-6 w-full">
	{#if type === 'text'}
		<input
			type="text"
			id={inputId}
			class="input-group-input peer w-full border-t-0 border-l-0 border-r-0 border-b border-b-1 border-black bg-transparent pt-4 pb-1 font-sans text-lg text-gray-900"
			placeholder=" "
			on:focus={handleFocus}
			on:blur={handleBlur}
			bind:value
		/>
	{:else if type === 'email'}
		<input
			type="email"
			id={inputId}
			class="input-group-input peer w-full border-t-0 border-l-0 border-r-0 border-b border-b-1 border-black bg-transparent pt-4 pb-1 font-sans text-lg text-gray-900"
			placeholder=" "
			on:focus={handleFocus}
			on:blur={handleBlur}
			bind:value
		/>
	{:else if type === 'tel'}
		<input
			type="tel"
			id={inputId}
			class="input-group-input peer w-full border-t-0 border-l-0 border-r-0 border-b border-b-1 border-black bg-transparent pt-4 pb-1 font-sans text-lg text-gray-900"
			placeholder=" "
			on:focus={handleFocus}
			on:blur={handleBlur}
			bind:value
		/>
	{:else if type === 'password'}
		<input
			type="password"
			id={inputId}
			class="input-group-input peer w-full border-t-0 border-l-0 border-r-0 border-b border-b-1 border-black bg-transparent pt-4 pb-1 font-sans text-lg text-gray-900"
			placeholder=" "
			on:focus={handleFocus}
			on:blur={handleBlur}
			bind:value
		/>
	{:else if type === 'notes'}
		<textarea
			id={inputId}
			class="input-group-input peer w-full border-t-0 border-l-0 border-r-0 border-b border-b-1 border-black bg-transparent mt-3 pb-1 font-sans text-lg text-gray-900 resize-none overflow-y-auto"
			placeholder=" "
			on:focus={handleFocus}
			on:blur={handleBlur}
			bind:value
			rows="3"
		></textarea>
	{/if}

	<label
		for={inputId}
		class="absolute left-0 top-4 font-sans text-xl text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs"
	>
		{#if isFocused}
			<span in:fly={{ y: -20, duration: 300, easing: cubicIn }} class="text-sm">{label}</span>
		{:else}
			{label}
		{/if}
	</label>
</div>

<style lang="postcss">
	:global(input.input-group-input:focus),
	:global(textarea.input-group-input:focus) {
		outline: none !important;
		box-shadow: none !important;
		border-color: theme('colors.black') !important;
	}

	:global(input.input-group-input),
	:global(textarea.input-group-input) {
		border-radius: 0;
	}

	.peer:focus ~ label,
	.peer:not(:placeholder-shown) ~ label {
		top: -0.75rem;
		font-size: 0.75rem;
	}

	textarea.input-group-input {
		min-height: 6em; /* Approximately 3 lines of text */
		max-height: 12em; /* Limit the height, after which scrolling begins */
	}
</style>
