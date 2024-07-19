<script lang="ts">
	import SimpleTemplate from '$lib/templates/SimpleTemplate.svelte';
	import TemplateFour from '$lib/templates/TemplateFour.svelte';
	import TemplateOne from '$lib/templates/TemplateOne.svelte';
	import TemplateThree from '$lib/templates/TemplateThree.svelte';
	import TemplateTwo from '$lib/templates/TemplateTwo.svelte';
	import TemplateFive from '$lib/templates/TemplateFive.svelte';
	import type { UserData, UserProfile } from '$lib/types/user';
	import { onMount } from 'svelte';

	let userData: UserData | null = null;
	let error: string | null = null;

	// Simulated fetch block - This would be uncommented in a real scenario
	/*
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

			userData = {
				userProfile
			};

			console.log(userData);
		} catch (e) {
			console.error('Failed to fetch user data:', e);
			error = 'Failed to load user data';
		}
	});
	*/

	// Simulated userProfile for demonstration purposes
	const userProfile: UserProfile = {
		id: '123e4567-e89b-12d3-a456-426614174000',
		user_id: 1,
		email: 'fakeemail@example.com',
		name: 'John Doe',
		bio: 'This is a sample bio',
		phone_number: '123-456-7890',
		location: 'New York, NY',
		profile_picture_url: 'https://via.placeholder.com/128',
		theme: 'light',
		template: "five",
		custom_url: 'https://example.com/johndoe',
		job_title: 'Software Engineer',
		facebook_url: 'https://facebook.com/johndoe',
		twitter_url: 'https://twitter.com/johndoe',
		instagram_url: 'https://instagram.com/johndoe',
		linkedin_url: 'https://linkedin.com/in/johndoe',
		exchange_contacts: true,
		save_contact: true,
		call_me: true,
		email_me: true,
		social_media: true
	};

	userData = {
		userProfile
	};

	// Ensure profileImageUrl is always a string
	$: profileImageUrl =
		userData?.userProfile.profile_picture_url ??
		'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
</script>

{#if error}
	<p>Error: {error}</p>
{:else if userData && userData.userProfile.template == 'default'}
	<SimpleTemplate user={userData} profileImage={profileImageUrl} />
{:else if userData && userData.userProfile.template == 'one'}
	<TemplateOne user={userData} profileImage={profileImageUrl} />
{:else if userData && userData.userProfile.template == 'two'}
	<TemplateTwo user={userData} profileImage={profileImageUrl} />
{:else if userData && userData.userProfile.template == 'three'}
	<TemplateThree user={userData} profileImage={profileImageUrl} />
{:else if userData && userData.userProfile.template == 'four'}	
	<TemplateFour user={userData} profileImage={profileImageUrl} />
{:else if userData && userData.userProfile.template == 'five'}
	<TemplateFive user={userData} profileImage={profileImageUrl} />

{:else}
	<div></div>
{/if}
