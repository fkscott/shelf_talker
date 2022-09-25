<script>
	//import components
	import Help from './Components/Help.svelte';
	import Acclaim from './Components/AcclaimTemplate.svelte';
	import NonAcclaim from './Components/NonAcclaimTemplate.svelte';
	import Controls from './Components/Controls.svelte';

	import { global_store } from './stores/global_store';
	export let globals = {};
	global_store.subscribe(data => {
        globals = data;
    });
</script>

<main>
	<div class="container-xxl">
		<nav class="navbar navbar-light bg-light">
			<div class="container-fluid">
			<span class="navbar-brand mb-0 h1">The Wine Merchant - Shelf Talker Tool</span>
				<button class="btn btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target="#help-modal">Help</button>
			</div>
		</nav>
	</div>
	 

	<Help></Help>


	<div class="container-fluid" id="app-container">

		<div class="row">

			<!-- Start Shelf Talker Preview-->
			<div class="col-md-6">
				<div id="shelf-talker-container">
					
					<!-- Logic to show templates-->
					{#if globals.acclaim}
						<Acclaim/>	
					{:else}
						<NonAcclaim/>	
					{/if}
				</div>
			</div>
			<!-- End Shelf Talker Preview-->
			    <!-- Start Info Entry-->
				<div class="col-md-6">
					<Controls/>
				</div>

		</div>
	</div>
</main>

<style>
	/* make body extend all the way down */

	main{
		height: 100%;
	}

	#app-container{
		padding-top: 50px;
		max-width: 1400px;
	}
</style>