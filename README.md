This is a demonstration of a COMET (long polling) application using Google's Channel service.  Came to the conclusion of using this service as I tried to develop my own non-trivial COMET server; got bogged down with having to continually refresh the long poll to detect clients dropping off which caused some secondary issues with messaging. 

_Google's Channel Service_

The one bit of trickiness is that in order to use Google's Channel service, one has to create an app on Google's App Engine. The good news is that one really only needs to build a basic "hello world" application from their documentation. Luckily, I had experience with both Google's App Engine and Java as this is the older server-side development platform that I used.

Channel Java API Overview - Java - Google Developers
<https://developers.google.com/appengine/docs/java/channel/>


_hellocometclient_

This is the client component of a COMET (long polling) "Hello World" application. This client essentially opens up a channel to Google's Channel service and waits for messages to be pushed. The beauty of this solution is that it works across domains without modification. 
