<script>
    let aNewTab = () => window.open()
    let aCloseTab = () => window.close()
    let moveTo = () => window.moveTo()
    let resizeTo = () => window.resizeTo()
    let locHost = () => window.location.host
    let locHash = () => window.location.hash
    let locHostname = () => window.location.hostname
    let locOrigin = () => window.location.origin
    let locPort = () => window.location.port
    let locPro = () => window.location.protocol
    let locPat = () => window.location.pathname
    let locHref = () => window.location.href
    let locAssign = () => window.location.assign("https://wikipedia.com") 
</script>

<style>
</style>

<h3>Information Window:</h3>
<p>Length: {Window.length}, Name: {Window.name}</p>
<h3>Information Location:</h3><!--inconsistent ReferenceError: fixed by block comment it and then uncomment it again, or use event listener to call it-->
<p>Host: {locHost()}, Hash: {locHash()}, Hostname: {locHostname()}, Origin: {locOrigin()}, Port: {locPort()}, Protocol: {locPro()}, {locPat()}, {locHref()}</p>
<h3>Command methods</h3>
<button on:click={aNewTab}>New Tab</button>
<button on:click={aCloseTab}>Close</button>
<button on:click={moveTo}>Move To</button>
<button on:click={resizeTo}>Resize To</button>
<input type="button" value="Load new document" on:click={locAssign}>