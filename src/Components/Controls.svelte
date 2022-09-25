<script>
    import { global_store } from '../stores/global_store';
    import { acclaim_store } from '../stores/acclaim_store';
    import { non_acclaim_store } from '../stores/non_acclaim_store';

    import {acclaim_sources} from '../static/acclaim_sources.js';
    import {lifestyle_options} from '../static/lifestyle_options.js';

    //Add dependencies for font awesome, jquery, and html2canvas
    import Fa from 'svelte-fa';
    import { faDownload, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
    import jQuery from 'jquery';
    import html2canvas from "html2canvas";


    export let globals = {};

    global_store.subscribe(data => {
        globals = data;
    });

   //toggle which template is shown
   function toggleTemplate(){
        $global_store.acclaim = !$global_store.acclaim;

    }

    function increaseNameFontSize(){
        if(globals.acclaim){
            var fontSize = parseInt(jQuery("#acclaim-name").css("font-size"));
            fontSize = fontSize + 2 + "px";
            jQuery("#acclaim-name").css({'font-size': fontSize});
        }

        else{
            var fontSize = parseInt(jQuery("#nonacclaim-name").css("font-size"));
            fontSize = fontSize + 2 + "px";
            jQuery("#nonacclaim-name").css({'font-size': fontSize});	
        }
        
    }

    function decreaseNameFontSize(){
        if(globals.acclaim){
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

    function increaseTextFontSize(){

        if(globals.acclaim){
            var fontSize = parseInt(jQuery("#acclaim-preview-text").css("font-size"));
            fontSize = fontSize + 2 + "px";
            jQuery("#acclaim-preview-text").css({'font-size': fontSize});
        }

        else{
            var fontSize = parseInt(jQuery("#nonacclaim-preview-text").css("font-size"));
            fontSize = fontSize + 2 + "px";
            jQuery("#nonacclaim-preview-text").css({'font-size': fontSize});	
        }
        
    }

    function decreaseTextFontSize(){

        if(globals.acclaim){
            var fontSize = parseInt(jQuery("#acclaim-preview-text").css("font-size"));
            fontSize = fontSize - 2 + "px";
            jQuery("#acclaim-preview-text").css({'font-size': fontSize});
        }

        else{
            var fontSize = parseInt(jQuery("#nonacclaim-preview-text").css("font-size"));
            fontSize = fontSize - 2 + "px";
            jQuery("#nonacclaim-preview-text").css({'font-size': fontSize});	
        }
        
    }
    function exportShelfTalker(){

        if(globals.acclaim){
            html2canvas(document.querySelector("#acclaim-template-preview")).then(canvas =>{
                const download_link = document.querySelector("#download-button");

                download_link.href = canvas.toDataURL();
                download_link.download = `${$acclaim_store.name}_shelf_talker.png`;

                alert("shelf talker ready for download");

                $global_store.hide_download = false;
            });
        }	

        else{

            html2canvas(document.querySelector("#nonacclaim-template-preview")).then(canvas =>{
                const download_link = document.querySelector("#download-button");

                download_link.href = canvas.toDataURL();
                download_link.download = `${$non_acclaim_store.name}_shelf_talker.png`;

                alert("shelf talker ready for download");

                $global_store.hide_download = false;
            });
        }
    }
</script>

<main>

        <!-- Nav for Acclaim / Non Acclaim -->
        <div class="btn-group template-select" role="group" aria-label="template_select_buttons">
            <input on:change={toggleTemplate} type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-danger" for="btnradio1">Acclaim Template</label>
            
            <input on:change={toggleTemplate} type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-danger" for="btnradio2">Non-Acclaim Template</label>
        </div>
        
        <!-- End Acclaim / Non Acclaim Nav-->

        {#if globals.acclaim}
            <!-- Start Info Entry -->
            <div class="py-3" id="acclaim-template">
            <div class="row">
            <!-- Start Acclaim Info Entry-->
                <div class="col-md-6">

                    <h4> Wine Info</h4>
                    <input class="form-control form-control-lg" type="text" placeholder="Wine Name" bind:value={$acclaim_store.name} aria-label="acclaim_wine_name">

                    <!-- Options to increase or decrease font size -->
                    <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={increaseNameFontSize}><span class="btn-label"><Fa icon={faPlus} size="lg"/></span> Increase Name Font Size</button>

                    <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={decreaseNameFontSize}><span class="btn-label"><Fa icon={faMinus} size="lg"/></span> Decrease Name Font Size</button>
                    
                    <input class="form-control form-control-lg" type="text" placeholder="Type" bind:value={$acclaim_store.type} aria-label="acclaim_wine_type">

                    <input class="form-control form-control-lg" type="text" placeholder="Vintage" bind:value={$acclaim_store.vintage} aria-label="acclaim_wine_vintage">

                    <input class="form-control form-control-lg" type="text" placeholder="Region" bind:value={$acclaim_store.region} aria-label="acclaim_wine_region">

                    <input class="form-control form-control-lg" type="text" placeholder="Score" bind:value={$acclaim_store.score} aria-label="acclaim_score">

                    <select bind:value={$acclaim_store.selected_source} class="form-select form-select-lg mb-3" aria-label="acclaim_source_dropdown">
                        <!-- load all acclaim sources from our JS-->
                        {#each acclaim_sources as source }
                            <option value={source}>
                                {source.name}
                            </option>
                        {/each}

                    </select>

                    <input class="form-control form-control-lg" type="text" placeholder="Custom Acclaim Source" bind:value={$acclaim_store.custom_source} aria-label="acclaim_custom_source">
                    

                    <select bind:value={$acclaim_store.lifestyle} class="form-select form-select-lg mb-3" aria-label="acclaim_vegan_dropdown">
                        <!-- load all lifestyle options from our JS-->
                        {#each lifestyle_options as option }
                            <option value={option}>
                                {option.label}
                            </option>
                        {/each}

                    </select>
                        
                    <input class="form-control form-control-lg" type="text" placeholder="Price" bind:value={$acclaim_store.price} aria-label="acclaim_score">
                    
                </div>

                <!--start acclaim text-->
                <div class="col-md-6">
                    <h4>Text Entry</h4>
                    <textarea class="form-control" bind:value={$acclaim_store.text} placeholder="Enter Acclaim text."></textarea>
                    
                    <!-- increase or decrease bottom text size -->
                    <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={increaseTextFontSize}><span class="btn-label"><Fa icon={faPlus} size="lg"/></span> Increase Text Font Size</button>

                    <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={decreaseTextFontSize}><span class="btn-label"><Fa icon={faMinus} size="lg"/></span> Decrease Text Font Size</button>
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
                        <input class="form-control form-control-lg" type="text" placeholder="Wine Name" bind:value={$non_acclaim_store.name} aria-label="non_acclaim_wine_name">

                        <!-- Options to increase or decrease font size -->
                        <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={increaseNameFontSize}><span class="btn-label"><Fa icon={faPlus} size="lg"/></span> Increase Name Font Size</button>

                        <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={decreaseNameFontSize}><span class="btn-label"><Fa icon={faMinus} size="lg"/></span> Decrease Name Font Size</button>	
                        
                        <input class="form-control form-control-lg" type="text" placeholder="Type" bind:value={$non_acclaim_store.type} aria-label="non_acclaim_wine_type">

                        <input class="form-control form-control-lg" type="text" placeholder="Vintage" bind:value={$non_acclaim_store.vintage} aria-label="non_acclaim_wine_vintage">

                        <input class="form-control form-control-lg" type="text" placeholder="Region" bind:value={$non_acclaim_store.region} aria-label="non_acclaim_wine_region">

                        <input class="form-control form-control-lg" type="text" placeholder="Price" bind:value={$non_acclaim_store.price} aria-label="non_acclaim_price">
                    </div>
                    <!-- End Non-Acclaim Info Entry -->
                    <!--start non-acclaim text-->
                    <div class="col-md-6">
                        <h4> Text Entry</h4>
                        <textarea class="form-control" bind:value={$non_acclaim_store.text} placeholder="Enter text."></textarea>
                        
                        <!-- increase or decrease bottom text size -->
                        <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={increaseTextFontSize}><span class="btn-label"><Fa icon={faPlus} size="lg"/></span> Increase Text Font Size</button>

                        <button type="button" class="btn btn-labeled btn-secondary export-button" on:click={decreaseTextFontSize}><span class="btn-label"><Fa icon={faMinus} size="lg"/></span> Decrease Text Font Size</button>
                    </div>
                    <!-- end non-acclaim text-->
                </div> 
        </div>
        <!-- End Non Acclaim-->

        {/if}
        <!-- End Info Entry-->
        <!-- big export button here-->
        <button type="button" class="btn btn-success btn-lg export-button" on:click={exportShelfTalker}>Export Shelf Talker</button>

        <a id="download-button" class="btn btn-lg export-button" href="/" role="button" hidden={globals.hide_download}><Fa icon={faDownload} size="lg"/> Download Shelf Talker </a>
</main>

<style>
	textarea{
		resize: none;
		height: 300px;
	}

	.template-select{
		width: 100%;
	}

	.export-button{
		width: 100%;
	}
</style>