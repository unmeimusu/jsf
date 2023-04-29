<script>
    let arr = []
    let num
    let total = 0

    function sum() {
        total = total + parseInt(num)
        total = total
    }
</script>

<input type="text" name="" id="" bind:value={num}/>
<button on:click={sum}>Add</button>
<div>
    <ul>
        <li>{num}</li>
    </ul>
</div>
<div>
    <p>{total}</p>
</div>