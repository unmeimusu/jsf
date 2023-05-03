// reef object to call API methods
        // reef.store()
        // #1 same as with component and render
        let {store, component, render} = reef;

        // #2 use render
        let name = 'world'
        render("#app",`<p>Hello, ${name}!</p>`)

        // #3 reactive data
        let data = store({
            greeting: 'Hello',
            name: 'World'
        });
        // data updated automatically
        data.greeting = 'Hi';

        // or use a template function
        function template () {
            let {greeting, name} = data;
            return `<p>${greeting}, ${name}</p>`;
        };
        // after that use component to render template
        component('#app2', template);