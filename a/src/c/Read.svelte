<script>
    let aNewTab = () => window.open()
    let aCloseTab = () => window.close()
    let moveTo = () => window.moveTo()
    let resizeTo = () => window.resizeTo()
</script>

<style>
</style>

<h3>Information Window:</h3>
<p>Length: {Window.length}, Name: {Window.name}</p>
<h3>Information Location:</h3><!--inconsistent ReferenceError: fixed by block comment it and then uncomment it again, or use event listener to call it-->
<!-- <p>Host: {async () => {location.host }}, Hash: {async () => {location.hash}}, Hostname: {async () => {location.hostname}}, Origin: {async () => {location.origin}}, Port: {location.port}, Protocol: {location.protocol}, {async () => {location.pathname}}, {async () => {location.href}}</p> -->
<h3>Command methods</h3>
<button on:click={aNewTab}>New Tab</button>
<button on:click={aCloseTab}>Close</button>
<button on:click={moveTo}>Move To</button>
<button on:click={resizeTo}>Resize To</button>