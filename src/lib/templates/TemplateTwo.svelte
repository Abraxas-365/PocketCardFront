<script lang="ts">
	import MenuButtons from '$lib/buttons/MenuButtons.svelte';
	import TwoButton from '$lib/buttons/TwoButton.svelte';
	import type { UserData } from '$lib/types/user';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	export let user: UserData;
	let userProfile = user.userProfile;
	export let profileImage: string;
	function getTransitionColor(startColor: string, endColor: string, percent: number = 50): string {
		startColor = startColor.replace(/^#/, '');
		endColor = endColor.replace(/^#/, '');
		let r1 = parseInt(startColor.slice(0, 2), 16);
		let g1 = parseInt(startColor.slice(2, 4), 16);
		let b1 = parseInt(startColor.slice(4, 6), 16);
		let r2 = parseInt(endColor.slice(0, 2), 16);
		let g2 = parseInt(endColor.slice(2, 4), 16);
		let b2 = parseInt(endColor.slice(4, 6), 16);
		let r = Math.round(r1 + (r2 - r1) * (percent / 100));
		let g = Math.round(g1 + (g2 - g1) * (percent / 100));
		let b = Math.round(b1 + (b2 - b1) * (percent / 100));
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
		transitionColor = getTransitionColor(baseColor, '#FFFFFF', 15);
		let startAccentColor = adjustColor(baseColor, 30);
		let endAccentColor = adjustColor(baseColor, -30);
		accentColor = getTransitionColor(startAccentColor, endAccentColor, 50);
		document.body.style.backgroundColor = baseColor;
	});
</script>

<section class="min-h-screen md:min-h-auto gap-0 mx-auto md:max-w-xl" style="background-color: {transitionColor};">
	<div class="m-0">

		<!-- class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full md:w-auto xl:min-w-[350px] xl:max-w-[600px]" -->
		<Avatar
			rounded="rounded-none"
			class="w-full md:h-full object-cover"
			src={profileImage}
		/>
	</div>
	
	<div
		class="z-10 -translate-y-[11%] h-full md:-translate-y-2/4 p-4 py-6 rounded-t-[30px] w-full"
		style="background-color: red;"
	>
		<div class="flex flex-row w-full justify-between px-3">
			<div class="flex flex-col gap-1">
				<p class="text-xl text-white">{userProfile.name}</p>
				<p class="text-sm text-white">{userProfile.job_title}</p>
			</div>
			<img src={'/PocketCardIcon.svg'} alt="" class="ml-36 p-2 rounded-[12px] bg-white" />
		</div>
		<div>
			<MenuButtons {user} ButtonComponent={TwoButton} />
		</div>
	</div>
</section>
