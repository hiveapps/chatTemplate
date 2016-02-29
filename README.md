<h1><b>Hive Chat Template</b></h1>

<p>The Hive Chat Template is built to provide a very basic chat service that integrates firebase simple login and a messaging service 
with a custom factory and controllers.</p>

<br><br>

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
			Firebase Simple Login
		</li>
		<li>
			Fully functioning and simple chat service with firebase integration
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
					<li>controller.js</li>
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
					<li>First we add the files angular.min.js and angular-ui-router.min.js into www/js, then both of these files are called in the index.html file</li>
					
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
					
					<li>Lastly we call "$urlRouterProvider.otherwise("/");" to set the default page that the app will open to</li>
					 
				</ul>
		</ul>
		
		<ul>
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
												<ul>
													<li>This file contains the styling that is used for the prebuilt template</li>
												</ul>
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
				</ul>
		</ul>
</ul>