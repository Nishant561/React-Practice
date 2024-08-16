function injectElement(reactElement , main_container){
    const domElement = document.createElement(reactElement.type)

    for (const prop in reactElement.props){
        domElement.setAttribute(prop , reactElement.props[prop])
    }
    // domElement.setAttribute('href' ,reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    domElement.textContent = reactElement.children
    main_container.appendChild(domElement)
}


const reactElement = {
    type:'a',
    props:{
        href:"https://www.youtube.com/watch?v=IMp9txK4hyI&t=1397s",
        target:"_blank"
    },
    children:"click me to visit google"
}

const main_container = document.querySelector("#root")

injectElement(reactElement , main_container)