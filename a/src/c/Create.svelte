<script>
    let listname = []
    let newname = ""

    function add(newdata) {
        listname.push(newdata)
    }
</script>

<input type="text" bind:value={newname}>
<button on:click={add(newname)}>Add</button>
<ul>
    {#each listname as name,index}
        <li>{name}</li>
    {/each}
</ul>
