// /**
//  * System configuration for Angular samples
//  * Adjust as necessary for your application needs.
//  */
(function( global ) {

	// Alias the path to the common rc1 vendor scripts.
	var paths = {
		'npm:': './node_modules/'
	};

	// Tell Angular how normalize path and package aliases.
	var  map = {
		app: 'app',
		"@angular": "npm:/@angular",
		"plugin-typescript": "npm:plugin-typescript/lib/plugin.js",
		"rxjs": "npm:rxjs",
		"tsconfig.json": "./tsconfig.json",
		"typescript": "npm:typescript"
	};

	// Setup meta data for individual areas of the application.
	var packages = {
		"app": {
          main: './transpiled-js/main.js', // path to main.js
          format: 'cjs',  // commonjs
          defaultExtension: 'js'
		},
		"rxjs": {
			defaultExtension: 'js'
		},
		"angular-2-in-memory-web-api": {
          main: './index.js',
          defaultExtension: 'js'
		}
	};

	var ngPackageNames = [
		"common",
		"compiler",
		"core",
		"http",
		"platform-browser",
		"platform-browser-dynamic",
		"router",
		"upgrade",
	];

	ngPackageNames.forEach(
		function iterator( packageName ) {

			var filename = ( "/bundles/" + packageName + ".umd.js" );

			var ngPackage = packages[ "@angular/" + packageName ] = {
				main: filename,
				meta: {}
			};

			ngPackage.meta[ filename ] = {
				typings: ( packageName + "/index.d.ts" )
			};

		}
	);

	System.config({
		paths: paths,
		map: map,
		packages: packages,
		transpiler: "plugin-typescript",
		typescriptOptions: {
			tsconfig: true
		},
		meta: {
			typescript: {
				exports: "ts"
			}
		}
	});

	// Load "./app/main.ts" (gets full path from package configuration above).
	// --
	// NOTE: We are attaching the resultant promise to the global scope so that other
	// scripts may listen for the successful loading of the application.
	global.bootstrapping = System
		.import( "app" )
		.then(
			function handleResolve() {

				console.info( "System.js successfully bootstrapped app." );

			},
			function handleReject( error ) {

				console.warn( "System.js could not bootstrap the app." );
				console.error( error );

				return( Promise.reject( error ) );

			}
		)
	;

})( window );