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

    function del(i) {
            listdata.splice(i,1)
    }

    $: sum = listdata.reduce((total,num) => total+num,0);
</script>

<h2>#3</h2>
<input type="text" bind:value={newdata}>
<button on:click={add}>Add</button>
<div>
    <ul>
        {#each listdata as data,index}
            <li>{index+1}. {data}<button on:click={del(index)}>X</button></li>
            
        {/each}
    </ul>
</div>
<div>
    {#if sum}
        <span>{sum}</span>
    {:else if sum == ""}
       <span>please insert a value</span>
    {/if}
</div>