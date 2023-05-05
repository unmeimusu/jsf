<script>
    let aNewTab = () => window.open()
    let aCloseTab = () => window.close()
    let moveTo = () => window.moveTo()
    let resizeTo = () => window.resizeTo()
    let locHost = () => setTimeout(location.host,3000)
    let locHash = () => setTimeout(location.hash,3000)
    let locHostname = () => setTimeout(location.hostname,3000)
    let locOrigin = () => setTimeout(location.origin,3000)
    let locPort = () => setTimeout(location.port,3000)
    let locPro = () => setTimeout(location.protocol,3000)
    let locPat = () => setTimeout(location.pathname,3000)
    let locHref = () => setTimeout(location.href,3000)
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