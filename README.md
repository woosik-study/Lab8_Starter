# Lab 8 - Network & ServiceWorkers

## Lab Partner(s)
- Woosik Kim (Solo)

## Deployed GitHub Pages URL
https://woosik-study.github.io/Lab8_Starter/

## Graceful Degradation and Service Workers

Graceful degradation is a design strategy where an application is built to deliver the full experience under optimal conditions, but degrades in a controlled way when resources are unavailable. Service workers are a direct implementation of this principle applied to network reliability. Without a service worker, a web app that loses its network connection simply breaks, leaving the user with a blank page. By registering a service worker, network requests are intercepted and cached versions of the HTML, CSS, JavaScript, and JSON data are served instead. This means the app continues to function even when the user is completely offline. The service worker acts as the graceful layer that prevents total failure, so the user still sees recipe cards and can interact with the page even without a Wi-Fi connection.

## Screenshot
![PWA Screenshot](pwa.png)