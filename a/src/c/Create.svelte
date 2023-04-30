<script>
    let listname = []
    let newname = ""

    function add() {
        if (isNaN(newname)) {
            
        } else {
            listname.push(newname)
            listname = listname // for array and object need to re-assign, telling the compiler it has changed
        }
    }
</script>

<h2>#3</h2>
<input type="text" bind:value={newname}>
<button on:click={add}>Add</button>
<ul>
    {#each listname as name,index}
        <li>{index+1}. {name}</li>
    {/each}
</ul>
