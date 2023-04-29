<script>
    let arr = []
    let num = 0

    sum = num + num
    
</script>

<input type="text" name="" id="" bind:value={num}/>
<button on:click={sum}>Add</button>
<div>
    <ul>
        <li>{num}</li>
    </ul>
</div>
<div>
    <p>{sum}</p>
</div>