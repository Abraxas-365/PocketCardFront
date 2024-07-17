<script lang="ts">
	import MenuButtons from '$lib/buttons/MenuButtons.svelte';
	import SimpleButton from '$lib/buttons/SimpleButton.svelte';
	import type { UserData } from '$lib/types/user';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	export let user: UserData;
	let userProfile = user.userProfile;
	export let profileImage: string;

	$: baseColor = userProfile.theme || '#425181';
	onMount(() => {
		baseColor = userProfile.theme || '#425181';
		document.body.style.backgroundColor = baseColor;
	});
</script>

<div class="h-screen w-full relative">
	<!-- Image container -->
	<div class="w-full overflow-hidden h-[50%]">
		<img src={profileImage} alt="Colorful abstract art" class="w-full h-full object-contain" />
	</div>
</div>
