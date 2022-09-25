import { writable } from "svelte/store";

export const non_acclaim_store = writable({
    name    : "",
    vintage : "",
    type    : "",
    region  : "",
    text    : "",
    price   : "",
});

