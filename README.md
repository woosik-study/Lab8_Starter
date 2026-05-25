# Lab 8 - Network & ServiceWorkers

## Lab Partner(s)
- Woosik Kim (Solo)

## Deployed GitHub Pages URL
https://woosik-study.github.io/Lab8_Starter/

## Graceful Degradation and Service Workers

Graceful degradation is a design strategy where an application is built to deliver the full, ideal experience under optimal conditions — but degrades in a controlled, user-friendly way when resources are limited or unavailable. Service workers are a direct implementation of this principle applied to network reliability. Without a service worker, a web app that loses its network connection simply breaks: assets fail to load, API calls return errors, and the user is left with a blank or broken page. By registering a service worker, we intercept those network requests and serve cached versions of the HTML, CSS, JavaScript, images, and JSON data instead. This means the app continues to function — perhaps with slightly stale data — even when the user is completely offline. In other words, the service worker acts as the "graceful" layer that prevents a total failure: the user still sees recipe cards and can interact with the page, even if they are on an airplane with no Wi-Fi. The app degrades from "fully live" to "cached/offline mode" gracefully, rather than crashing entirely.

## Screenshot
![PWA Screenshot](pwa.png)