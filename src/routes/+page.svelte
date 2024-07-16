<script lang="ts">
	import SimpleTemplate from '$lib/templates/SimpleTemplate.svelte';
	import type { UserData, UserProfile, UserSetting } from '$lib/types/user';
	import { onMount } from 'svelte';

	let userData: UserData | null = null;
	let error: string | null = null;

	onMount(async () => {
		try {
			const profileId = '123e4567-e89b-12d3-a456-426614174000';
			const [profileResponse, settingsResponse] = await Promise.all([
				fetch(`http://localhost:80/users/profile/${profileId}`),
				fetch(`http://localhost:80/users/settings/${profileId}`)
			]);

			if (!profileResponse.ok || !settingsResponse.ok) {
				throw new Error(`HTTP error! status: ${profileResponse.status} ${settingsResponse.status}`);
			}

			const userProfile: UserProfile = await profileResponse.json();
			const userSetting: UserSetting = await settingsResponse.json();

			userData = {
				userProfile,
				userSetting
			};

			console.log(userData);
		} catch (e) {
			console.error('Failed to fetch user data:', e);
			error = 'Failed to load user data';
		}
	});

	$: profileImageUrl =
		userData?.userProfile.profile_picture_url ||
		'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
</script>

{#if error}
	<p>Error: {error}</p>
{:else if userData}
	<SimpleTemplate user={userData} profileImage={profileImageUrl} />
{:else}
	<div></div>
{/if}
