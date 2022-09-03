	//acclaim source select binding
	/* array of javascript objects that contain 

	an id for each source
	the text to show in the dropdown
	the path for the logo images of each acclaim
	the name of the css style used for each acclaim source

	*/

    export {acclaim_sources as acclaim_sources} 
    
	let acclaim_sources = [
		{id: 0, label: `Acclaim Source`, name: `Acclaim Source`, img_path:'', styles: ''},
		{id: 1, label: `Decanter`, name: `Decanter`, img_path:'img/acclaim_logos/decanter.png', styles: 'decanter'},
		{id: 2, label: `James Suckling`, name: `James Suckling`, img_path:'img/acclaim_logos/suckling.png', styles: 'suckling'},
		{id: 3, label: `Jeb Dunnuck`, name: `Jeb Dunnuck`, img_path:'img/acclaim_logos/dunnuck.png', styles: 'dunnuck'},
		{id: 4, label: `Rober Parker's Wine Advocate` , name: `Rober Parker's Wine Advocate`, img_path:'img/acclaim_logos/parker.png', styles: 'parker'},
		{id: 5, label: `Tim Atkin`, name: `Tim Atkin`, img_path:'img/acclaim_logos/atkin.png', styles: 'atkin'},
		{id: 6, label: `Vinous`, name: `Vinous`, img_path:'img/acclaim_logos/vinous.png', styles: 'vinous'},
		{id: 7, label: `Wine & Spirits`, name: `Wine & Spirits`, img_path:'img/acclaim_logos/wineandspirits.png', styles: 'wineandspirits'},
		{id: 8, label: `Wine Spectator`, name: `Wine Spectator`, img_path:'img/acclaim_logos/spectator.png', styles: 'spectator'},
		{id: 9, label: `Untappd`, name: `Untappd`, img_path:'img/acclaim_logos/untappd.svg', styles: 'untappd'},
		{id: 10, label: `Custom Source`, name: `Custom Source`, img_path:''},
	];