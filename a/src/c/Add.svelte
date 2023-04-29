<script>
    let arr = []
    let num = 0
    let total = 0

    function sum() {
        total = total + num
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