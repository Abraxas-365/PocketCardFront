<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import SimpleButton from './SimpleButton.svelte';
	import type { UserData } from '$lib/types/user';
	import ConnectDrawer from '$lib/drawers/ConnectDrawer.svelte';

	const drawerStore = getDrawerStore();

	export let user: UserData;
	let userProfile = user.userProfile;
	let userSetting = user.userSetting;

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
		window.location.href = `mailto:${''}`;
	}

	function vcard() {
		return `BEGIN:VCARD
VERSION:3.0
FN:${userProfile.name}
TEL:${userProfile.phone_number}
EMAIL:${userProfile.email}
TITLE:${userProfile.phone_number}
END:VCARD`;
	}
</script>

<div class="pt-10 font-medium text-lg w-full flex flex-col space-y-5 text-white">
	{#if userSetting.exchange_contacts == true}
		<SimpleButton text="Exchange Contact" action={drawerStore.open} />
	{/if}

	{#if userSetting.save_contact == true}
		<SimpleButton text="Save Contact" action={saveContact} />
	{/if}

	{#if userSetting.call_me == true}
		<SimpleButton text="Call Me" action={callMe} />
	{/if}

	{#if userSetting.email_me == true}
		<SimpleButton text="Email Me" action={emailMe} />
	{/if}
</div>

<ConnectDrawer name={userProfile.name || ''} />
