<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import SimpleButton from './SimpleButton.svelte';
	import ActionButton from './ActionButton.svelte';
	import type { UserData } from '$lib/types/user';
	import ConnectDrawer from '$lib/drawers/ConnectDrawer.svelte';
	import type { ButtonComponent } from './types';

	const drawerStore = getDrawerStore();

	export let user: UserData;
	export let ButtonComponent: ButtonComponent = SimpleButton;

	let userProfile = user.userProfile;

	function saveContact() {
		const newContact = new Blob([vcard()], { type: 'text/vcard' });
		const link = document.createElement('a');
		link.href = URL.createObjectURL(newContact);
		link.download = `${userProfile.name}.vcf`;
		link.click();
	}

	function callMe() {
		window.location.href = `tel:${userProfile.phone_number}`;
	}

	function emailMe() {
		window.location.href = `mailto:${userProfile.email}`;
	}

	function vcard() {
		return `BEGIN:VCARD
VERSION:3.0
FN:${userProfile.name}
TEL:${userProfile.phone_number}
EMAIL:${userProfile.email}
TITLE:${userProfile.job_title}
END:VCARD`;
	}
</script>

<div class="pt-10 font-medium text-lg w-full flex flex-col space-y-5">
	{#if userProfile.exchange_contacts}
		<ActionButton text="Exchange Contact" action={drawerStore.open} {ButtonComponent} />
	{/if}

	{#if userProfile.save_contact}
		<ActionButton text="Save Contact" action={saveContact} {ButtonComponent} />
	{/if}

	{#if userProfile.call_me}
		<ActionButton text="Call Me" action={callMe} {ButtonComponent} />
	{/if}

	{#if userProfile.email_me}
		<ActionButton text="Email Me" action={emailMe} {ButtonComponent} />
	{/if}
</div>

<ConnectDrawer name={userProfile.name || ''} />
