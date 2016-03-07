function showIcons() {

	var iconsMenu = document.getElementById('app-icons');
	
	if ((iconsMenu.style.display === 'none') || (iconsMenu.style.display === '')) {
		iconsMenu.style.display = 'block';
	} else {
		iconsMenu.style.display = 'none';
	}
}