export interface MenuItem {
	name: string;
	path: string;
}

export interface Menu {
	name: string;
	path?: string;
	items?: MenuItem[];
}
