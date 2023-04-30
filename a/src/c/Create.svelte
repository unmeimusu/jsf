<script>
    let listname = []
    let newname = ""

    function add() {
        listname.push(newname)
    }

    $: x = add()
</script>

<h2>#3</h2>
<input type="text" bind:value={newname}>
<button on:click={add}>Add</button>
<ul>
    {#each listname as name,index}
        <li>{index+1}. {name}</li>
    {/each}
</ul>
