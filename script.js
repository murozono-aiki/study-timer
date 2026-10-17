if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}

navigator.serviceWorker.ready.then(registration => {
    registration.active.postMessage("");
});
navigator.serviceWorker.addEventListener("message", event => {
    console.log("受信：", event.data)
});