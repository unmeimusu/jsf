<script>
    let num
    let total = 0

    function sum() {
        if (num !== NaN && total !== NaN) {
            total = parseInt(total) + parseInt(num)
            num = ""
        } else {
            num = 0
            total = 0
        }
    }
    function reset() {
        total = 0
    }
</script>

<h2># 1</h2>
<input type="text" name="" id="" bind:value={num}/>
<button on:click={sum}>Add</button>
<button on:click={reset}>Reset</button>
<div>
    {num}
</div>
<div>
    <p>{total}</p>
</div>