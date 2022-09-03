     <script>
        export let props;
     </script>

<main>
    <!-- start non-acclaim preview-->
    <div id="nonacclaim-template-preview">
        <div class="preview-name d-flex flex-row justify-content-center text-center" id="nonacclaim-name">
            {#if props.name ===""}
                Wine Name
            {:else}
                {props.name}

            {/if}
            </div>

        <div class="preview-type d-flex justify-content-center text-center">
            {#if props.type ===""}
                type
            {:else}
                {props.type}
            {/if}
        </div>

        <div class="preview-vintage d-flex justify-content-center">
            {#if props.vintage === ""}
                vintage
            {:else}
                {props.vintage}
            {/if}
        </div>

        <div class="preview-region d-flex justify-content-center">
            {#if props.region === ""}
                Region
            {:else}
                {props.region}
            {/if}
    
        </div>

        <div class="nonacclaim-preview-text d-flex justify-content-center my-3 px-5" id="nonacclaim-preview-text">
            {#if props.text === ""}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            {:else}
                {props.text}
            {/if}
        </div>

        <div class="nonacclaim-preview-logo d-flex justify-content-center">
            <img src="img/the_wine_merchant_logo.png" alt="wine merchant logo"/>
        </div>
        
        
        {#if props.price.length !== 0}
        <div class="d-flex flex-row justify-content-end align-items-start">
            <div class="preview-price">
                ${props.price}
            </div>
        </div>
        {/if}
    </div>
    <!-- end non-acclaim preview-->
</main>

<style>
    	/* non-acclaim template styles */
	#nonacclaim-template-preview{
		background-image: url("../img/talker-bg.png");
		width: 600px;
		height: 800px;
	}


	.nonacclaim-preview-text{
		font-family: 'EB Garamond', serif;
		font-weight: 400;
		font-size: 22px;
		height: 350px;	
		text-align: justify;
	}

    .nonacclaim-preview-logo img{
		width: 75px;
		height: auto;
		padding-top: 20px;
	}
</style>

