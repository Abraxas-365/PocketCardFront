export interface UserProfile {
	id: string;
	user_id: number;
	email: string | null;
	name: string | null;
	bio: string | null;
	phone_number: string | null;
	location: string | null;
	profile_picture_url: string | null;
	theme: string | null;
	template: string;
	custom_url: string | null;
	job_title: string | null;
	facebook_url: string | null;
	twitter_url: string | null;
	instagram_url: string | null;
	linkedin_url: string | null;
	exchange_contacts: boolean;
	save_contact: boolean;
	call_me: boolean;
	email_me: boolean;
	social_media: boolean;
}

export interface UserData {
	userProfile: UserProfile;
}
