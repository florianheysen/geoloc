
![Logo](https://i.imgur.com/szqp64I.png)


# Geo location as a script.

Show personalized content to you users based on their IP geolocation, with a small, fast and globally distributed javascript file.

```html
<script defer src="https://geoloc-red.vercel.app/api/js"></script>
<script>
    document.addEventListener('geoloc-loaded', () => {
       console.log(geoloc.country) // Will return FR 
    });
</script>
```



### Why sould use it ?

**Lightweight:** less than 0.3kb uncompressed

**Super Fast:** Distribued worldwide, your users will be served from the nearest edge server

**Quick Setup:** Zero configuration, you don't need an API key, just add the script tag, and you are ready!
### How it works ?

Geoloc is a service that provides geolocation information about the current user using a lightweight javascript file. Any page that has the script tag in the DOM will have access to a global `geoloc` object containing the following informations :

```json
{
    "longitude": "2.2574",
    "latitude": "48.8954",
    "country": "FR",
    "region": "Île-de-France",
    "timezone": "Europe/Paris",
    "asOrganization": "BOUYGUES Telecom"
}
```

#### Using Async script

You can load the script asynchronously that it will have little to no impact on your page load performance, and you can bind an event to the document to execute a function as soon as the geolocation information is available.

```html
<!-- Load the script tag with either defer or async attribute -->
<script defer src="https://geoloc-red.vercel.app/api/js"></script>

<!-- Wait for the 'geoloc-loaded' event before using the global 'geoloc' variable -->
<script>
    document.addEventListener('geoloc-loaded', () => {
       console.log(geoloc.country) // Will return FR  
    });
</script>
```

#### Using as JSON endpoint

If you don't need the geolocation information to be available globally and only want to fetch it on-demand, you can use the /json endpoint, see example below.
```javascript
async function getGeolocInfo(){
    const response = await fetch('https://geoloc-red.vercel.app/api/json');
    return await response.json();
}
```

⚠️ This "/json" endpoint cannot be used on server-side as it will return the informations about the server's IP address.
### API Endpoints

#### Get Geo location script

```curl
  GET /api/js
```

#### Get Geo Location JSON object

```curl
  GET /api/json
```


#### Get User IP address

```curl
  GET /api/ip
```
