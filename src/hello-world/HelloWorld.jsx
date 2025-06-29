// component reactJs
export default function HelloWorld(){
    return(
       <>
        <HeaderHelloWord />
        <ParagraphHelloWorld />
       </>
    )
}

function HeaderHelloWord(){
    return(
        <h1>Hello World!</h1>
    )
}

function ParagraphHelloWorld(){
    return(
        <p>This is a paragraph in Hello World component</p>
    )
}
