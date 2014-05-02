/*
 * Slydee: Panel Slider
 * www.slydee.gary-wilkerson.com  
 * By: Gary Wilkerson | www.gary-wilkerson.com  
 * Free to use under the MIT license.  
 * http://www.opensource.org/licenses/mit-license.php
*/

Thank you for downloading!

=======================================

Table of contents:

	-Markup
	-Options
	-Styles

=======================================

 -- Markup --

First, make sure you include jQuery, slydee.css, and slydee.js:

	<link type="text/css" rel="stylesheet" href="css/slydee.css" />
	<script src="js/jquery-1.11.0.min.js"></script>
	<script src="js/slydee.jquery.min.js"></script>

Now create your panel menu, this can include whatever you want, but here is a quick example:

	<div id="panel">
		<ul>
			<li><a href="#">These</a></li>
			<li><a href="#">Are</a></li>
			<li><a href="#">Your</a></li>
			<li><a href="#">Menu</a></li>
			<li><a href="#">Items</a></li>
		</ul>
	</div>

Keep in mind that the menu's default identifier for Slydee is "#panel" as shown above (see more in the options section). 
Next, create something clickable to toggle your menu:

	<div id="button">Push Me<div>  

The identifier for this "button" (or whatever) can be whatever you want as you will be passing it into your call for Slydee, which you should do now at the bottom of your markup:

	<script>
		$('#button').slydee();
	</script>



-- Options --

Here is a list of your options, a description of each, and their defaults:

Option:			'time'	
Description:	Time it takes for your slide menu to become fully visible.  Pretty straighforward.	
Default:		500

Option:			'width'	
Description:	Width of your Slydee panel to ensure that it completely hides off of the page.	
Default:		'250px'

Option:			'direction'	
Description:	Slide direction of your panel. Change to "right" if you want it to show up on the right-hand side of your page.	
Default:		'left'

Option:			'push'	
Description:	Automatically defaults to a slide menu. Set to 'true' for push menu, 
				otherwise your menu will slide over your page content.  
				Any content to be "pushed" will need to be wrapped in a div with the class of "wrap".	
Default:		'false'

Option:			'menuName'	
Description:	In case you want to change the name of your menu's id attribute.  
				Please note that if you change the menu's name/identifier you will also need to update 
				the slydee.css file or include to appropriate styles in your own stylesheet.	
Default:		'#panel'



-- Styles --

Your Slydee download came intentionally with very minimal styling.  Only the mechanisms to make Slydee work correctly are included within the Slydee.css file.  So make sure you include this file and then go nuts!




Feel free to contribute on GitHub (github.com/gwilkerson/slydee), visit me at www.gary-wilkerson.com, and follow me on twitter @wilkerson_gary.


