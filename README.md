<h1><b>Hive Chat Template</b></h1>

<p>The Hive Chat Template is built to provide a very basic chat service that integrates firebase login and a messaging service 
with custom controllers and templates.</p>

<ul>
	<li>Click on any of the below links to navigate to the selected section:</li>
		<ul>
			<li><a href="#features">Features</a></li>
			<li><a href="#file-structure">File Structure</a></li>
			<li><a href="#how-it-works">How It Works</a></li>
			<li><a href="#building-out-your-app">Building Out Your App</a></li>
			<li><a href="#other-documents-in-the-structure">Other Documents In The Structure</a></li>
			<li><a href="#understanding-the-resources-folder">Understanding The Resources Folder</a></li>
		</ul>
</ul>

<br>

<h2>Features</h2>
<ul>
	<li>
		The Hive Chat Template utilizes many awesome features, including:
	</li>
	<ul>
		<li>
			AngularJS and Angular UI-Router
		</li>
		<li>
			Firebase and Angular Fire
		</li>
		<li>
			Firebase Login
		</li>
		<li>
			Fully functioning simple chat service with firebase integration
		</li>
		<li>
			Resources file structure to easily compile an app icon and splashscreen once Phonegap builds the app
		</li>
	</ul>
</ul>
 
<h2>File Structure</h2>
<p>This template has a specific file structure to allow you to be able quickly and easily begin building out your app.
The file structure goes as follows:</p>

<ul>
	<li>resources</li>
		<ul>
			<li>android</li>
			<li>ios</li>
			<li>icon.png</li>
			<li>splash.png</li>
		</ul>
		
	<li>scss</li>
		<ul>
			<li>_custom.scss</li>
		</ul>
		
	<li>www</li>
		<ul>
			<li>css</li>
				<ul>
					<li>style.css</li>
				</ul>
				
			<li>img</li>
			
			<li>js</li>
				<ul>
					<li>angular-ui-router.min.js</li>
					<li>angular.min.js</li>
					<li>app.js</li>
					<li>controllers.js</li>
					<li>directives.js</li>
					<li>services.js</li>
				</ul>
				
			<li>lib</li>
				<ul>
					<li>hive</li>
						<ul>
							<li>hive.css</li>
						</ul>
				</ul>
				
			<li>templates</li>
				<ul>
					<li>chat.html</li>
					<li>header.html</li>
					<li>login.html</li>
				</ul>
				
			<li>config.xml</li>
			<li>index.html</li>
		</ul>
		
	<li>.editorconfig</li>
	<li>.gitignore</li>
	<li>config.xml</li>
	<li>README.md</li>
</ul>

<br><br>

<h2>How It Works</h2>

<p>The Hive Chat Template is very simple from the user perspective but from a developer perspective we believe it gets you started
in a great way. By integrating AngularJS with Angular UI-Router and linking all of the apps backend functionality to your own firebase
database, we believe that this will prove to be a great starting point for you to build out your own app.</p>

<ul>
	<li>Angular UI-Router is at the heart of this app template and allows for you to provide navigation via state changes which
	allows for a seamless transition of pages. To learn more about how Angular UI-Router works <a href="https://github.com/angular-ui/ui-router" target="_blank">click here</a></li>
		
		<ul>
			<br>
			<li>How UI-Router Works In This Template</li>
				<ul>
					<li>First we add the files angular.min.js and angular-ui-router.min.js into www/js, then both of these files are called in the index.html file.</li>
					
					<li>Second we build out the <code>body</code> of the app which includes a <code>header</code>, <code>main</code>, and <code>footer</code>. However, 
					In this app we are only utilizing the <code>header</code> and <code>main</code> but you can add in your own <code>footer</code> by building
					a footer.html page and adding it into the abstract state which will be mentioned in a minute. Also notice
					that each tag within the body has a specific "ui-view" assigned to it, these will be called in the app config.</li>
					
					<li>Third we build out the config which is a function to set each page state. Each state is assigned a specific html page
					and there is one abstract state which sets the header (and the footer if you configure one). Notice how we
					named the abstract state "hive" and there is a "header" view which sets the template for the header by assigning
					a html page to the view.</li>
					
					<li>Moving on in the config you will notice that all the 'normal' state names (states that aren't abstract states) start with 
					"hive." this is declaring that the state is going to use the abstract state named "hive" that has 
					been set.</li>
					
					<li>We also set the view of the 'normal' states to be "content@" it is important to include the "@" symbol otherwise the 
					template that is assigned to that state will not appear. Take note that back in the index.html file we assigned "ui-view = 'content'"
					to the <code>main</code> tag but did not include the "@" symbol in the ui-view.</li>
					
					<li>Lastly we call "$urlRouterProvider.otherwise("/");" to set the default page that the app will open to.</li>
					 
				</ul>
		</ul>
		
		<ul>
			<br>
			<li>How The 'www' Folder Structure Is Setup</li>
			
				<ul>
					<li>Within the www folder there are 5 subfolders and 2 files. Those folders and files are:</li>
						<ul>
							
							<li>css</li>
								<ul>
									<li>style.css</li>
										<ul>
											<li>This file is for you to add your own CSS Styling to the app.</li>
										</ul>
								</ul>
							
							<li>img</li>
								<ul>
									<li>This folder is where you can place your own images for your app.</li>
								</ul>
							
							<li>js</li>
								<ul>
									
									<li>angular-ui-router.min.js</li>
										<ul>
											<li>This file was copied from the angular ui-router install, we copied it into the 'js' folder
											since we are telling git to ignore the node_modules folder to save on file size.</li>
										</ul>
									
									<li>angular.min.js</li>
										<ul>
											<li>This file was copied from the angular ui-router install as well.</li>
										</ul>
									
									<li>app.js</li>
										<ul>
											<li>Within the app.js file we link in the controllers and services files, this is also where
											the ui-router state configurating is.</li>
										</ul>
									
									<li>controllers.js</li>
										<ul>
											<li>Within the controllers.js file we have a controller for the firebase login as well as a controller for
											the chat service.</li>
										</ul>
									
									<li>directives.js</li>
										<ul>
											<li>This file is empty but this is where you can write your own directives for your app.</li>
										</ul>
									
									<li>services.js</li>
										<ul>
											<li>The services.js file contains the factory for the 'messageService'. This file is where you can
											write any other factorys that you may need for your app.</li>
										</ul>
								</ul>
							
							<li>lib</li>
								<ul>
									<li>hive</li>
										<ul>
											<li>hive.css</li>
												<ul>
													<li>This file contains the styling that is used for the prebuilt template.</li>
												</ul>
										</ul>
								</ul>
							
							<li>templates</li>
								<ul>
									
									<li>chat.html</li>
										<ul>
											<li>The chat.html file is where we have setup all the html for the 'chat' page, this page integrates
											AngularJS to display each new message and utilizes the chatCtrl.</li>
										</ul>
									
									<li>header.html</li>
										<ul>
											<li>The header.html file is where the header for the app is located, we have setup a very simple
											header for you, you can modify this as much, or as little, as you find necessary.</li>
										</ul>
										
									<li>login.html</li>
										<ul>
											<li>The login.html file contains the code for the simple login page that we have built for you.
											This page also utilizes the LoginCtrl.</li>
										</ul>
								</ul>
							
							<li>config.xml</li>
								<ul>
									<li>The config.xml is utilized by PhoneGap for many different reasons, it states the version, title, author, and
									much more. One of the key features that this config.xml file does is compile the resources folder to create the app
									icon and the app splashscreen.</li>
								</ul>
							<li>index.html</li>
								<ul>
									<li>The index.html file, like all other apps/websites is one of the most important files in the
									entire application. This file brings in Bootstrap, JavaScript, jQuery, Firebase & AngularFire along with
									AngularJS and Angular UI-Router. This file also contains the <code>body</code> of the app which contains
									the 'ui-view' for the <code>header</code>, <code>main</code>, and <code>footer</code> (even though the footer
									isn't fully configured in this app, we still included it in the index.html file for you).</li>
								</ul>
						</ul>
				</ul>
		</ul>
</ul>

<br><br>

<h2>Building Out Your App</h2>

<p>Building out your app using a Hive Template is very easy as we have built the base structure for you. This means that all you
have to do is customize by adding in more pages and/or styling to the base that we provided. We have already integrated Bootstrap,
Javascript, jQuery, Firebase, AngularFire, and Angular UI-Router for you, and you can add in any other platforms, plugins, etc. that you
need.</p>

<br><br>

<h2>Other Documents In The Structure</h2>

<ul>
	<li>There are four other documents in the root structure that are included in all Hive Templates, these files include:</li>
	<ul>
		<li>.editorconfig</li>
			<ul>
				<li>EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems. To learn more about EditorConfig <a href="http://editorconfig.org/" target="_blank">click here</a></li>
			</ul>
		
		<li>.gitignore</li>
			<ul>
				<li>The GitIgnore page allows us to keep files and/or folders from getting pushed to Github. For instance with all Hive
				templates we ignore the node_modules folder, this is to keep the git repository from getting too large as PhoneGap only
				allows us to build repositories of 50MB or less.</li>
			</ul>
			
		<li>config.xml</li>
			<ul>
				<li>This is the same config.xml file that is found within the 'www' folder structure. This file must be kept in 
				order for PhoneGap to recognize that a config.xml file is present.</li>
			</ul>
		
		<li>README.md</li>
			<ul>
				<li>The README.md file is what you are reading right now! :)</li>
			</ul>
	</ul>
</ul>

<br><br>

<h2>Understanding The Resources Folder</h2>

<p>There are two folders and two files within the 'Resources' folder. The folders are 'android' and 'ios' and the files are 'icon.png'
and 'splash.png'. To update either the icon.png or splash.png files you need to drop in a new file and name it icon.png or splash.png 
depending on which of the two you are updating. The icon image’s minimum dimensions should be 192 x 192 px and should have no rounded corners.
Splash screen dimensions vary for each platform, device, and orientation, so a square source image is required to generate each of the various screen sizes. 
The source image’s minimum dimensions should be 2208 x 2208 px, and the artwork should be centered within the square, because each generated image will 
be center cropped into landscape and portrait images. The splash screen’s artwork should roughly fit within a center square 1200 x 1200 px.
The sizes for both platforms are as follows:</p>

<ul>
	<li>android icon sizes:</li>
		<ul>
			<li>36 x 36 (ldpi)</li>
			<li>48 × 48 (mdpi)</li>
			<li>72 × 72 (hdpi)</li>
			<li>96 × 96 (xhdpi)</li>
			<li>144 × 144 (xxhdpi)</li>
			<li>192 × 192 (xxxhdpi)</li>
		</ul>
	
	<li>ios icon sizes:</li>
		<ul>
			<li>57 x 57 (icon.png)</li>
			<li>114 x 114 (icon@2x.png)</li>
			<li>40 x 40 (icon-40.png)</li>
			<li>80 x 80 (icon-40@2x.png)</li>
			<li>50 x 50 (icon-50.png)</li>
			<li>100 x 100 (icon-50@2x.png)</li>
			<li>60 x 60 (icon-60.png)</li>
			<li>120 x 120 (icon-60@2x.png)</li>
			<li>180 x 180 (icon-60@3x.png)</li>
			<li>72 x 72 (icon-72.png)</li>
			<li>144 x 144 (icon-72@2x.png)</li>
			<li>76 x 76 (icon-76.png)</li>
			<li>152 x 152 (icon-76@2x.png)</li>
			<li>29 x 29 (icon-small.png)</li>
			<li>58 x 58 (icon-small@2x.png)</li>
			<li>87 x 87 (icon-small@3x.png)</li>
		</ul>

</ul>

<p><b>NOTE:</b> Each of the files within each platform folder should be kept up to date with the most current icon images and
each file needs to be in line with the dimensions stated above.</p>