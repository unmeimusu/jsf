<script>
    let listname = []
    let newname = ""

    function add(newdata) {
        listname.push(newdata)
    }

    $: x = add(newname)
</script>

<h2>#3</h2>
<input type="text" bind:value={newname}>
<button on:click={add(newname)}>Add</button>
<ul>
    {#each listname as name,index}
        <li>{index+1}. {name}</li>
    {/each}
</ul>
