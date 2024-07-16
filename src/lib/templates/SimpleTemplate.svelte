<script lang="ts">
	import MenuButtons from '$lib/buttons/MenuButtons.svelte';
	import type { UserData } from '$lib/types/user';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	export let user: UserData;
	let userProfile = user.userProfile;
	export let profileImage: string;

	onMount(() => {
		document.body.style.backgroundColor = 'white';
	});
</script>

<div class="mx-auto max-w-xl">
	<!--Inner Container-->
	<div class="w-full pt-16 px-8">
		<!--Image avatar-->
		<div class="rounded-full overflow-hidden w-52 h-52 mx-auto">
			<Avatar src={profileImage} width="w-52" rounded="rounded-full" />
		</div>
		<div class="mt-5 flex flex-col justify-center items-center space-y-2 text-black">
			<h1 class="text-2xl">{userProfile.name}</h1>
			<h2 class="text-lg font-light text-gray-500">{userProfile.job_title}</h2>
		</div>

		<MenuButtons {user} />
	</div>
</div>
<div class="mt-24 flex justify-center items-center">
	<p class="mx-auto text-2xl text-black font-bold">PocketCard.me</p>
</div>
