<script>
    let listdata = []
    let newdata = ""

    function add() {
        if (isNaN(newdata) || newdata == "") {
            listdata = listdata
        } else {
            listdata.push(parseInt(newdata))
            listdata = listdata // for array and object need to re-assign, telling the compiler it has changed
        }
        newdata = ""
    }

    function sumLtoR(total, num) {
        return total + num
    }

    $: sum = listdata.reduce(sumLtoR)
</script>

<h2>#3</h2>
<input type="text" bind:value={newdata}>
<button on:click={add}>Add</button>
<div>
    <ul>
        {#each listdata as data,index}
            <li>{index+1}. {data}</li>
        {/each}
    </ul>
</div>
<div>
    {#if}
        <span>please enter a value first</span>
    {/if}
        
</div>