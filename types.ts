export interface MenuItem {
	name: string;
	path: string;
}

export interface Menu {
	name: string;
	path?: string;
	items?: MenuItem[];
}

export interface ContactInfo {
	email: string;
	phone: string;
	address: string;
	facebook: string;
	twitter: string;
	instagram: string;
}
