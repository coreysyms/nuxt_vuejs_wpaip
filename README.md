# NuXT + Vue + WP boilerplate

> starter pack for API connected frontend to WP backend

## Extend the WP Rest API to allow menus for navigation
What we need to do here is extend the WP REST API to allow a new custom endpoint. WP doesn’t by default return the menus to us. We need to go get them and expose them to the API
1. Go to wordpress admin
2. Appearance menu > theme editor
3. functions.php file, and scroll to bottom
4. Add in the following code and save.
```
/** Custom REST API endpoints ***/
function get_navigation() {
	//grab the 2 nav menus we know we will need, header and footer
	$headerNav 	= wp_get_nav_menu_items('headerNav');
	$footerNav	= wp_get_nav_menu_items('footerNav');
	
	//combine the 2 arrays into a single nav object
	return (object)['headerNav' => $headerNav, 'footerNav' => $footerNav];
}

//register the route for the REST API to hit
add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2/initroutes', 'navigation', array(
        'methods' => 'GET',
        'callback' => 'get_navigation',
    ) );
});
```

Next we need to create the menus in wordpress. This is simple.
1. Go to Appearance > Menus
2. Create a new `headerNav` menu, make sure it is named that
3. Associate the pages you would like with that menu, save
4. Create a new `footerNav` menu, make sure it is named that
5. Associate the pages you would like with that menu, save
6. Now you can navigate to `…/wp-json/wp/v2/initroutes/navigation`
7. You should see a returned object with each nav item for both menus


## Vue Build Setup

``` bash
# import / create a new repo for the new project
# on github.com upper right corner click import repo
# the clone url should be
$ https://github.com/ConnectionsMedia/boilerplate
# make sure you change to connections media as the owner
# make it private click begin import
# this makes an exact copy of boilerplate for the new project

# to start working in VS Code clone in the new project
$ git clone https://github.com/ConnectionsMedia/[THE NEW REPO].git


#cd into the new project
# install the dependencies
$ npm install

# to serve with hot reload at localhost:3000
$ npm run dev

# to build for production and launch server
$ npm run build
$ npm start

# to generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## Deploying to google cloud
1. Python 2.7 must be installed
2. gcloud cli must be installed
3. From [Google App Engine Deployment - Nuxt.js](https://nuxtjs.org/faq/appengine-deployment/)
Deploying to Google App Engine is a fast and easy solution for hosting your universal Nuxt application on Google's Cloud Services.

In this guide, we build the application locally and then simply upload the entire project folder to Google App Engine. After the upload, Google App Engine will automatically start the start script in our `package.json` and your app will be available immediately.

##### Getting Started
Make sure you have a Google Cloud Account, a project and an empty Google App Engine app set up on Google App Engine. Furthermore, make sure to download and install the Cloud SDK (CLI) from Google as explained here and log into your Google Cloud Account.

##### Configure your application
All you need to add to your universal Nuxt app for deploying it to the App Engine is a file called `app.yaml` Create a new file with that name in your root project directory and add the following content:

```
runtime: nodejs10

instance_class: F2

handlers:
  - url: /_nuxt
    static_dir: .nuxt/dist/client
    secure: always

  - url: /(.*\.(gif|png|jpg|ico|txt))$
    static_files: static/\1
    upload: static/.*\.(gif|png|jpg|ico|txt)$
    secure: always

  - url: /.*
    script: auto
    secure: always

env_variables:
  HOST: '0.0.0.0'
  NODE_ENV: 'production'
```

##### Build and deploy the app
Now build your app with npm run build.

At this point, your app is ready to be uploaded to Google App Engine. Now just run the following command:

`gcloud app deploy app.yaml --project [project-id]`
Voilà! Your Nuxt.js application is now hosted on Google App Engine!

##### Further Information
The `instance_class` attribute in your `app.yaml` file sets the class of your app instance. Instance F2 is not completely free, but has the minimum memory needed to run a Nuxt application.

Make sure to put the project-id and not the project-name in the deploy command. These are two different things but easy to mix up.

## Wordpress Set Up for Goggle Compute Engine

## Allowing api endpoints without the 'index.php' extension on GCP

1. Deployment Manager > Deployments
2. Click on the deployment instance
3. Click on the SSH button to launch
4. `sudo nano /etc/apache2/apache2.conf`
5. Find and change the .htaccess file to the below

```
<Directory /var/www/>
   Options Indexes FollowSymLinks
   AllowOverride ALL <——(edit from none)
   Require all granted
</Directory>
```

## Setting up Google Cloud Storage for Images
Follow this link https://geekflare.com/wordpress-media-google-cloud-storage/
