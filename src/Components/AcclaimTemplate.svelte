<script>
    export let props;
</script>

<main>
    <div id="acclaim-template-preview">
        <div class="preview-name d-flex flex-row justify-content-center text-center" id="acclaim-name">
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

        <div class="acclaim-preview-score d-flex justify-content-center">
            {#if props.score === ""}
                Score
            {:else}
                {props.score}
            {/if}
        </div>

        <div class="accliam-source-container d-flex flex-row bd-highlight mb-1 justify-content-between">
            <div class="acclaim-preview-vegan-gf bd-highlight align-text-bottom align-self-end" id="vegan-girlfriend">
                <!-- I don't want to know why this works -->
                {#if !props.lifestyle}
                    no source selected
                {:else}
                    {props.lifestyle.text}
                {/if}
            </div>
            
            <div class="acclaim-preview-source bd-highlight justify-content-right align-self-end">
                {#if !props.selected_source}
                    no source selected
                {:else}

                {#if props.selected_source.id == 10}
                    {props.custom_source}
                {:else}
                    <img src={props.selected_source.img_path} class={props.selected_source.styles} alt="">	
                {/if}
            {/if}

            </div>
          </div>
        <div class="acclaim-preview-text d-flex justify-content-center my-3 px-5" id="acclaim-preview-text">
            {#if props.text === ""}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            {:else}
                {props.text}
            {/if}
        </div>
        
            
            <div class="acclaim-preview-logo d-flex justify-content-center align-content-end">
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
</main>

<style>
	#acclaim-template-preview{
		background-image: url("../img/talker-bg.png");
		width: 600px;
		height: 800px;
		margin: none;

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
		padding-right: 1.5625rem;

	}

	.accliam-source-container{
		height: 40px;
	}

	.acclaim-preview-vegan-gf{

		font-family: 'Work Sans', sans-serif;
		font-weight: 300;
		font-size: 16pt;
		padding-left: 25px;
		line-height: 0.9;
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
		padding-top: 75px;
	}
</style>