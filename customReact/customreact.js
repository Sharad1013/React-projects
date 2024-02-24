function customRender(reactElement, mainContainer){
    /* abolishing the DRY principle on setting the Attributes.

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(domElement);
    */

    // loop based code 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);

}

const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'Click Me to Visit Google',  
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)