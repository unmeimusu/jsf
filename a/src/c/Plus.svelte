<script>
    let a = 1;
    let b = 2;
</script>
<h2># 2</h2>
<input type="number" bind:value={a}>
<input type="number" bind:value={b}>
<p>
    {a} + {b} = {a + b}
</p>