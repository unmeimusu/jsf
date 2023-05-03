// reef object to call API methods
        // reef.store()
        // same as with component and render
        let {store, component, render} = reef;

        // reactive data
        let data = store({
            greeting: 'Hello',
            name: 'World'
        });

        // use render
        let name = 'world'
        render("#app2",`<p>Hello, ${name}!</p>`)

        data.greeting = 'Hi';
        
        // or use a template function
        function template () {
            let {greeting, name} = data;
            return `<p>${greeting}, ${name}</p>`;
        };
        // after that use component to render template
        component('#app', template);