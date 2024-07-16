<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import CustomInput from './CustomInput.svelte';
	import SimpleButton from '$lib/buttons/SimpleButton.svelte';
	export let name = '';

	function getFirstName(fullName: string) {
		return fullName.split(' ')[0];
	}
	let addMoreInformation = false;
	let drawerH = 'h-[70%]';
</script>

<Drawer position="bottom" height={drawerH} rounded="rounded-3xl" bgDrawer="bg-[#F5F5F5]">
	<div class="container mx-auto px-4 pt-12">
		<div class="text-black text-center mb-12">
			<h1 class="font-bold text-2xl mb-2">Let's connect!</h1>
			<p class="font-light text-lg">
				Share your contact information with <strong class="font-bold">{getFirstName(name)}</strong>
			</p>
		</div>

		<div class="max-w-sm mx-auto">
			<form class="space-y-8">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<CustomInput label="First name" type="text" />
					<CustomInput label="Last name" type="text" />
				</div>
				<CustomInput label="Email" type="email" />
				<CustomInput label="Phone number" type="tel" />

				{#if addMoreInformation === false}
					<div class="flex justify-center items-center">
						<button
							class="text-lg"
							on:click={() => {
								addMoreInformation = true;
								drawerH = 'h-[90%]';
							}}
						>
							<p class="text-gray-600 mt-3">+ Add more information</p>
						</button>
					</div>
				{/if}

				{#if addMoreInformation === true}
					<CustomInput label="Company" type="text" />
					<CustomInput label="Notes" type="notes" />
				{/if}
			</form>

			<div class="text-xl pt-12 mx-auto flex justify-center items-center">
				<SimpleButton text="Connect" />
			</div>
		</div>
	</div>
</Drawer>
