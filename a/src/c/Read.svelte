<script>
    function aNewTab() {
        window.open()
    }
</script>

<style>
</style>

<h3>Information Window:</h3>
<p>Length: {Window.length}, Name: {Window.name}</p>
<h3>Information Location:</h3><!--inconsistent ReferenceError: fixed by block comment it and then uncomment it again, or use event listener to call it-->
<!-- <p>Host: {location.host}, Hash: {location.hash}, Hostname: {location.hostname}, Origin: {location.origin}, Port: {location.port}, Protocol: {location.protocol}, {location.pathname}, {location.href}</p>
 --><h3>Command methods</h3>
 <button on:click={aNewTab}>Open</button>