import { writable } from "svelte/store";

export const acclaim_store = writable({
    name            : "",
    vintage         : "",
    type            : "",
    region          : "",
    score           : "",
    text            : "",
    price           : "",
    custom_source   : "", //custom acclaim source name variable that will be put in the template in place of an image
});