import type { SvelteComponent } from 'svelte';

export interface ButtonProps {
	text: string;
	action: () => void;
}

export type ButtonComponent = new (options: {
	target: HTMLElement;
	props?: ButtonProps;
}) => SvelteComponent;
