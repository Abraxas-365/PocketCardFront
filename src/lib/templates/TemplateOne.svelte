<script lang="ts">
	import MenuButtons from '$lib/buttons/MenuButtons.svelte';
	import OneButton from '$lib/buttons/OneButton.svelte';
	import type { UserData } from '$lib/types/user';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	export let user: UserData;
	let userProfile = user.userProfile;
	export let profileImage: string;

	function getTransitionColor(startColor: string, endColor: string, percent: number = 50): string {
		// Remove the hash if it exists
		startColor = startColor.replace(/^#/, '');
		endColor = endColor.replace(/^#/, '');

		// Parse the hex strings
		let r1 = parseInt(startColor.slice(0, 2), 16);
		let g1 = parseInt(startColor.slice(2, 4), 16);
		let b1 = parseInt(startColor.slice(4, 6), 16);

		let r2 = parseInt(endColor.slice(0, 2), 16);
		let g2 = parseInt(endColor.slice(2, 4), 16);
		let b2 = parseInt(endColor.slice(4, 6), 16);

		// Calculate the transition color
		let r = Math.round(r1 + (r2 - r1) * (percent / 100));
		let g = Math.round(g1 + (g2 - g1) * (percent / 100));
		let b = Math.round(b1 + (b2 - b1) * (percent / 100));

		// Convert back to hex
		return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
	}

	function adjustColor(color: string, amount: number): string {
		return (
			'#' +
			color
				.replace(/^#/, '')
				.replace(/../g, (color) =>
					('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
				)
		);
	}

	let baseColor: string;
	let transitionColor: string;
	let accentColor: string;

	onMount(() => {
		baseColor = userProfile.theme || '#425181';
		transitionColor = getTransitionColor(baseColor, '#FFFFFF', 15); // Transition 15% towards white

		// Calculate accent color based on base color
		let startAccentColor = adjustColor(baseColor, 30); // Slightly lighter version of base color
		let endAccentColor = adjustColor(baseColor, -30); // Slightly darker version of base color
		accentColor = getTransitionColor(startAccentColor, endAccentColor, 50); // 50% transition between the two variations

		document.body.style.backgroundColor = baseColor;
	});
</script>

<!-- <div class="relative mx-auto max-w-xl flex flex-col min-h-screen"> -->
<div class="mx-auto md:max-w-xl min-h-screen" style="background-color: {transitionColor};">
	<!--Inner Container-->
	<div class="w-full rounded-b-full flex-grow" style="background-color: {transitionColor};">
		<!-- This div creates the space at the top -->
		<!-- <div class="h-48 w-full rounded-b-full" style="background-color: {transitionColor};"></div> -->
	</div>

	<!-- <div class="px-5 relative z-10 mt-[-23rem] flex-grow flex flex-col"> -->
	<div class="px-5 relative z-10 py-5 flex-grow flex flex-col" style="background-color: {transitionColor};">
		<!-- Adjust -mt-60 as needed -->
		<div class="rounded-full overflow-hidden h-44 w-44 md:w-52 md:h-52 mx-auto flex justify-center items-center p-5 bg-red-50/20">
			<div class="absolute w-full h-full md:w-64 md:h-64 rounded-full -z-10" style="background-color: {accentColor};" />
			<Avatar src={profileImage} width="md:w-52 w-full" rounded="rounded-full" />
		</div>
		<div class="mt-10 flex flex-col justify-center items-center space-y-2 text-white">
			<h1 class="text-2xl">{userProfile.name}</h1>
			<h2 class="text-lg font-light">{userProfile.job_title}</h2>
		</div>

		<div style="color: {baseColor}" class="flex-grow">
			<MenuButtons {user} ButtonComponent={OneButton} />
		</div>
	</div>
	<div class="mt-auto flex justify-center items-center bg-white h-28">
		<p class="text-2xl text-black font-bold">PocketCard.me</p>
	</div>
</div>
