import { writable } from "svelte/store";

export const global_store = writable({
        acclaim       : true,
        hide_download : true, 
});