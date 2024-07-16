<script lang="ts">
	import type { ButtonComponent } from './types';
	import SimpleButton from './SimpleButton.svelte';

	export let text: string;
	export let action: () => void;
	export let ButtonComponent: ButtonComponent = SimpleButton;
</script>

<svelte:component this={ButtonComponent} {text} {action} />
