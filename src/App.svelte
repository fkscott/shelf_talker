<script>

	//add font awesome icons
	import Fa from 'svelte-fa';
	import { faDownload, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

	//add jquery
	import jQuery from 'jquery';

	//import html2canvas for use
	import html2canvas from "html2canvas";

	//acclaim source select binding
	/* array of javascript objects that contain 

	an id for each source
	the text to show in the dropdown
	the path for the logo images of each acclaim
	the name of the css style used for each acclaim source

	*/
	let acclaim_sources = [
		{id: 0, name: `Decanter`, img_path:'img/acclaim_logos/decanter.png', styles: 'decanter'},
		{id: 1, name: `James Suckling`, img_path:'img/acclaim_logos/suckling.png', styles: 'suckling'},
		{id: 2, name: `Jeb Dunnuck`, img_path:'img/acclaim_logos/dunnuck.png', styles: 'dunnuck'},
		{id: 3, name: `Rober Parker's Wine Advocate`, img_path:'img/acclaim_logos/parker.png', styles: 'parker'},
		{id: 4, name: `Tim Atkin`, img_path:'img/acclaim_logos/atkin.png', styles: 'atkin'},
		{id: 5, name: `Vinous`, img_path:'img/acclaim_logos/vinous.png', styles: 'vinous'},
		{id: 6, name: `Wine & Spirits`, img_path:'img/acclaim_logos/wineandspirits.png', styles: 'wineandspirits'},
		{id: 7, name: `Wine Spectator`, img_path:'img/acclaim_logos/spectator.png', styles: 'spectator'},
		{id: 8, name: `Untappd`, img_path:'img/acclaim_logos/untappd.svg', styles: 'untappd'},
		{id: 9, name: `Custom Source`, img_path:''},
	];

	//lifestyle option select that replaces the original vegan girlfriend toggle
	let lifestyle_options = [
		{id: 0, label: 'No Lifestyle Option', text:''},
		{id: 1, label: 'Vegan / GF', text:'vegan / gf'},
		{id: 2, label: 'Sustainable', text:'sustainable'},
		{id: 3, label: 'Natural', text: 'natural'},
		{id: 4, label: 'Organic', text: 'organic'},
		{id: 5, label: 'Biodynmamic', text: 'biodynamic'}
	];

	//boolean to toggle template
	let acclaim = true;

	//variables updated by acclaim template
	let preview_name = "";
	let preview_vintage ="";
	let preview_type ="";
	let preview_region = "";
	let preview_score = "";
	let preview_text= "";


	//variables updated by NON-acclaim template
	let nonacclaim_name = "";
	let nonacclaim_vintage = "";
	let nonacclaim_type = "";
	let nonacclaim_region = "";
	let nonacclaim_text = "";

	//boolean for toggling vegan girlfriend visibility
	let vegan_gf;

	// variable to update acclaim template with selected option
	let selected_source;

	//custom acclaim source name variable that will be put in the template in place of an image
	let custom_source = "";

	//boolean to show the download button after export is clicked
	let hide_download = true;

	//variable for choosing lifestyle option 
	let lifestyle = lifestyle_options[0];

 
	/* FUNCTIONS TO UPDATE VIEW AND EXPORT SHELF TALKER */


	//toggle which template is shown
	function toggleTemplate(){
		acclaim = !acclaim;

		/* there was a weird issue where the button would be checked but the 
		text wasn't showing and vice versa. This fixes it */
		vegan_gf = false;
		document.getElementById("vegan-girlfriend").style.visibility = "hidden";
	}


	function increaseFontSize(){
		if(acclaim){
			var fontSize = parseInt(jQuery("#acclaim-name").css("font-size"));
			fontSize = fontSize + 2 + "px";
			jQuery("#acclaim-name").css({'font-size': fontSize});
		}

		else{
			console.log("changing nonacclaim");
			var fontSize = parseInt(jQuery("#nonacclaim-name").css("font-size"));
			fontSize = fontSize + 2 + "px";
			jQuery("#nonacclaim-name").css({'font-size': fontSize});	
		}
		
	}

	function decreaseFontSize(){
		if(acclaim){
			var fontSize = parseInt(jQuery("#acclaim-name").css("font-size"));
			fontSize = fontSize - 2 + "px";
			jQuery("#acclaim-name").css({'font-size': fontSize});
		}

		else{
			var fontSize = parseInt(jQuery("#nonacclaim-name").css("font-size"));
			fontSize = fontSize - 2 + "px";
			jQuery("#nonacclaim-name").css({'font-size': fontSize});	
		}
		
	}

	function exportShelfTalker(){

		if(acclaim){
			html2canvas(document.querySelector("#acclaim-template-preview")).then(canvas =>{
				const download_link = document.querySelector("#download-button");

				download_link.href = canvas.toDataURL();
				download_link.download = `${preview_name}_shelf_talker.png`;

				alert("shelf talker ready for download");

				hide_download = false;
			});
		}	

		else{

			html2canvas(document.querySelector("#nonacclaim-template-preview")).then(canvas =>{
				const download_link = document.querySelector("#download-button");

				download_link.href = canvas.toDataURL();
				download_link.download = `${nonacclaim_name}_shelf_talker.png`;

				alert("shelf talker ready for download");

				hide_download = false;
			});
		}
	}

</script>

<main>
	<div class="container" id="app-container">

		<div class="row" >

			<!-- Start Shelf Talker Preview-->
			<div class="col-md-6">
				<h1>Preview here</h1>

				<div id="shelf-talker-container">
					
					<!-- Logic to show templates-->
					{#if acclaim}
					<div id="acclaim-template-preview">
						<div class="acclaim-preview-name d-flex flex-row justify-content-center text-center" id="acclaim-name">
							{#if preview_name ===""}
								Wine Name
							{:else}
								{preview_name}
		
							{/if}
							</div>

						<div class="acclaim-preview-type d-flex justify-content-center text-center">
							{#if preview_type ===""}
								type
							{:else}
								{preview_type}
							
							{/if}
						</div>

						<div class="acclaim-preview-vintage d-flex justify-content-center">
							{#if preview_vintage === ""}
								vintage
							{:else}
								{preview_vintage}
							{/if}
						</div>

						<div class="acclaim-preview-region d-flex justify-content-center">
							{#if preview_region === ""}
								Region
							{:else}
								{preview_region}
							{/if}

						</div>

						<div class="acclaim-preview-score d-flex justify-content-center">
							{#if preview_score === ""}
								Score
							{:else}
								{preview_score}
							{/if}
						</div>

						<div class="accliam-source-container d-flex flex-row bd-highlight mb-1 justify-content-between">
							<div class="acclaim-preview-vegan-gf bd-highlight align-self-end" id="vegan-girlfriend">
								{lifestyle.text}
							</div>
							
							<div class="acclaim-preview-source  bd-highlight justify-content-right align-self-end">
								{#if !selected_source}
									no source selected
								{:else}

								{#if selected_source.id == 9}
									{custom_source}
								{:else}
									<img src={selected_source.img_path} class={selected_source.styles} alt="">	
								{/if}
							{/if}


							</div>
						  </div>
						<div class="acclaim-preview-text d-flex justify-content-center my-3 px-5">
							{#if preview_text === ""}
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
							{:else}
								{preview_text}
							{/if}
						</div>

						<div class="acclaim-preview-logo d-flex justify-content-center align-content-end">
							<img src="img/the_wine_merchant_logo.png" alt="wine merchant logo"/>
						</div>
					</div>
					{:else}

					<!-- start non-acclaim preview-->
					<div id="nonacclaim-template-preview">
						<div class="acclaim-preview-name d-flex flex-row justify-content-center text-center" id="nonacclaim-name">
							{#if nonacclaim_name ===""}
								Wine Name
							{:else}
								{nonacclaim_name}
		
							{/if}
							</div>

						<div class="acclaim-preview-type d-flex justify-content-center text-center">
							{#if nonacclaim_type ===""}
								type
							{:else}
								{nonacclaim_type}
							{/if}
						</div>

						<div class="acclaim-preview-vintage d-flex justify-content-center">
							{#if nonacclaim_vintage === ""}
								vintage
							{:else}
								{nonacclaim_vintage}
							{/if}
						</div>

						<div class="acclaim-preview-region d-flex justify-content-center">
							{#if nonacclaim_region === ""}
								Region
							{:else}
								{nonacclaim_region}
							{/if}
					
						</div>

						<div class="nonacclaim-preview-text d-flex justify-content-center my-3 px-5">
							{#if nonacclaim_text === ""}
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
							{:else}
								{nonacclaim_text}
							{/if}
						</div>

						<div class="acclaim-preview-logo d-flex justify-content-center">
							<img src="img/the_wine_merchant_logo.png" alt="wine merchant logo"/>
						</div>
					</div>
					<!-- end non-acclaim preview-->
					{/if}
				</div>
			</div>
			<!-- End Shelf Talker Preview-->
			
			<!-- Start Info Entry-->
			<div class="col-md-6">
				<h1>info</h1>

				
				<!-- Nav for Acclaim / Non Acclaim -->
				<div class="btn-group template-select" role="group" aria-label="template_select_buttons">
					<input on:change={toggleTemplate} type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
					<label class="btn btn-outline-danger" for="btnradio1">Acclaim Template</label>
				  
					<input on:change={toggleTemplate} type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
					<label class="btn btn-outline-danger" for="btnradio2">Non-Acclaim Template</label>
				</div>
				
				<!-- End Acclaim / Non Acclaim Nav-->

				{#if acclaim}
				  <!-- Start Acclaim Template-->
				  <div class="py-3" id="acclaim-template">
					<div class="row">
					<!-- Start Acclaim Info Entry-->
						<div class="col-md-6">

							<h4> Wine Info</h4>
							<input class="form-control form-control-lg" type="text" placeholder="Wine Name" bind:value={preview_name} aria-label="acclaim_wine_name">

							<!-- Options to increase or decrease font size -->
							<button type="button" class="btn btn-labeled btn-default" on:click={increaseFontSize}><span class="btn-label"><Fa icon={faPlus} size="lg"/></span> Increase Name Font Size</button>

							<button type="button" class="btn btn-labeled btn-default" on:click={decreaseFontSize}><span class="btn-label"><Fa icon={faMinus} size="lg"/></span> Decrease Name Font Size</button>
							
							<input class="form-control form-control-lg" type="text" placeholder="Type" bind:value={preview_type} aria-label="acclaim_wine_type">

							<input class="form-control form-control-lg" type="text" placeholder="Vintage" bind:value={preview_vintage} aria-label="acclaim_wine_vintage">

							<input class="form-control form-control-lg" type="text" placeholder="Region" bind:value={preview_region} aria-label="acclaim_wine_region">

							<input class="form-control form-control-lg" type="text" placeholder="Score" bind:value={preview_score} aria-label="acclaim_score">

							<select bind:value={selected_source} class="form-select form-select-lg mb-3" aria-label="acclaim_source_dropdown">
								<option hidden>Acclaim Source</option>
								<!-- load all acclaim sources from our JS-->
								{#each acclaim_sources as source }
									<option value={source}>
										{source.name}
									</option>
								{/each}

							</select>

							<input class="form-control form-control-lg" type="text" placeholder="Custom Acclaim Source" bind:value={custom_source} aria-label="acclaim_custom_source">
							

							<select bind:value={lifestyle} class="form-select form-select-lg mb-3" aria-label="acclaim_vegan_dropdown">
								<option hidden>Vegan, GF, etc?</option>
								<!-- load all lifestyle options from our JS-->
								{#each lifestyle_options as option }
									<option value={option}>
										{option.label}
									</option>
								{/each}

							</select>

							
						</div>

						<!--start acclaim text-->
						<div class="col-md-6">
							<h4>Acclaim Text Entry</h4>
							<textarea class="form-control" bind:value={preview_text} placeholder="Enter Acclaim text. Max 8 lines please."></textarea>
						</div>
						<!-- end acclaim text-->
					</div>
					<!-- End Acclaim Info Entry-->
				  <!-- End Acclaim Template -->
				</div>

				{:else}
				  <!-- Start Non Acclaim -->
				  <div class="py-3" id="non-acclaim-template">
					  <div class="row">
						<!-- Start Non-Acclaim Info Entry-->
							<div class="col-md-6">
	
								<h4> Wine Info</h4>
								<input class="form-control form-control-lg" type="text" placeholder="Wine Name" bind:value={nonacclaim_name} aria-label="non_acclaim_wine_name">

								<!-- Options to increase or decrease font size -->
								<button type="button" class="btn btn-labeled btn-default" on:click={increaseFontSize}><span class="btn-label"><Fa icon={faPlus} size="lg"/></span> Increase Name Font Size</button>

								<button type="button" class="btn btn-labeled btn-default" on:click={decreaseFontSize}><span class="btn-label"><Fa icon={faMinus} size="lg"/></span> Decrease Name Font Size</button>	
								
								<input class="form-control form-control-lg" type="text" placeholder="Type" bind:value={nonacclaim_type} aria-label="non_acclaim_wine_type">

								<input class="form-control form-control-lg" type="text" placeholder="Vintage" bind:value={nonacclaim_vintage} aria-label="non_acclaim_wine_vintage">
	
								<input class="form-control form-control-lg" type="text" placeholder="Region" bind:value={nonacclaim_region} aria-label="non_acclaim_wine_region">

							</div>
							<!-- End Non-Acclaim Info Entry -->
							<!--start non-acclaim text-->
							<div class="col-md-6">
								<h4> Text Entry</h4>
								<textarea class="form-control" bind:value={nonacclaim_text} placeholder="Enter text."></textarea>
							</div>
							<!-- end non-acclaim text-->
						</div> 
				  </div>
				  <!-- End Non Acclaim-->

				{/if}
			<!-- End Info Entry-->
			
			<!-- big export button here-->
			<button type="button" class="btn btn-success btn-lg export-button" on:click={exportShelfTalker}>Export Shelf Talker</button>

			<a id="download-button" class="btn btn-lg export-button" href="/" role="button" hidden={hide_download}><Fa icon={faDownload} size="lg"/> Download Shelf Talker </a>
		</div>
	</div>
</main>

<style>

	.acclaim-template-preview, .nonacclaim-template-preview{
		position: relative;
	}
	/* make body extend all the way down */

	main{
		height: 100%;
		background-color: whitesmoke;
	}
	
	/*acclaim template styles */
	#acclaim-template-preview{
		background-image: url("../img/talker-bg.png");
		width: 600px;
		height: 800px;
		margin: none;

	}
	.acclaim-preview-name{
		font-family: 'Cinzel', serif;
		font-weight: 700; /* semi-bold */
		font-size: 42pt;
		color: #AA263D;
		padding-top: 40px;
		padding-bottom: 10px;
		max-height: 135px;
		line-height: 60px;
		padding-inline: 20px;

	}

	.acclaim-preview-type{
		font-family: 'Cinzel', serif;
		font-weight: 400; /* medium */
		font-size: 24pt;
		padding-top: 20px;
	}

	.acclaim-preview-vintage{
		font-family: 'Cinzel', serif;
		font-weight: 400; /* medium */
		font-size: 24pt
	}

	.acclaim-preview-region{

		font-family: 'Cinzel', serif;
		font-weight: 400; /* medium */
		font-size: 24pt;
	}

	.acclaim-preview-score{
		font-family: 'Work Sans', sans-serif;
		font-weight: 700;
		font-size: 72pt;
		line-height: 100px;
		color: #AA263D;
	}

	.acclaim-preview-source{
		font-family: 'Work Sans', sans-serif;
		font-weight: 300;
		font-size: 16pt;
		padding-right: 25px;

	}

	.accliam-source-container{
		height: 60px;
	}

	.acclaim-preview-vegan-gf{

		font-family: 'Work Sans', sans-serif;
		font-weight: 300;
		font-size: 16pt;
		padding-left: 25px;
	}

	.acclaim-preview-text{
		font-family: 'EB Garamond', serif;
		font-weight: 400;
		font-size: 22px;
		height: 150px;
		text-align: justify;
	}

	.acclaim-preview-logo img{
		width: 75px;
		height: auto;
		padding-top: 25px;
	}

	/* specific image styling for acclaim logos */
	.suckling{
		width: auto;
		height: 60px;
	}

	.dunnuck{
		width:auto;
		height: 25px;
	}

	.parker{
		width: auto;
		height: 60px;
	}

	.atkin{
		width: auto;
		height: 60px;
	}

	.vinous{
		width: auto;
		height: 35px;
	}

	.wineandspirits{
		width: auto;
		height: 35px;
	}

	.spectator{
		width: auto;
		height: 45px;
	}

	.untappd{
		width: auto;
		height: 50px;
	}

	.decanter{
		width: auto;
		height: 40px;
	}
	/* non-acclaim template styles */
	#nonacclaim-template-preview{
		background-image: url("../img/talker-bg.png");
		width: 600px;
		height: 800px;
	}
	textarea{
		resize: none;
		height: 300px;
	}

	.nonacclaim-preview-text{
		font-family: 'EB Garamond', serif;
		font-weight: 400;
		font-size: 22px;
		height: 350px;	
	}

	.template-select{
		width: 100%;
	}

	.export-button{
		width: 100%;
	}
</style>