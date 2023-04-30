<script>
    let num
    let total = 0

    function sum() {
        if (isNaN(total)) {
           total = "Not a number, please reset!"
        } else {
            total = parseInt(total) + parseInt(num)
            num = ""
            if (isNaN(total)) {
                total = "Not a number, please reset!"
            }
        }
    }
    function reset() {
        num = ""
        total = 0
    }
</script>

<h2>#1</h2>
<input type="text" name="" id="" bind:value={num}/>
<button on:click={sum}>Add</button>
<button on:click={reset}>Reset</button>
<div>
    {num}
</div>
<div>
    <p>{total}</p>
</div>