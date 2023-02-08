First, run the development server:

```bash
yarn
yarn dev

```

This app is using travel advisor for getting the restaurants list in the nearby area and google maps api for searching a location with autocomplete feature.
This app is not dependent on the backend but rather using a third party api directly for data. I have attached one backend because I tried calling the thrd party api in backend and then transferring the result (though I personally think it is not a great idea, caaling third party directly is enough for this small feature) but some issue occured related to openssl in api calling (screenshot attached). But the app is up and running despite of all facts and we can add some more features to it like filter options, locating our location, searching for hotels, parks and much more. 
A video output is attached in the zip file.