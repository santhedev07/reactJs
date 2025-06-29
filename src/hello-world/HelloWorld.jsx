/**
 * A component that serves as a container for other demonstration components.
 * @returns {JSX.Element} A collection of React components.
 */
export default function HelloWorld(){
    return(
       <>
        <HeaderHelloWord />
        <ParagraphHelloWorld />
        <DestructuringJsx />
        <DestructuringElement text="Destructuring on Component Props" />
       </>
    )
}

/**
 * A functional component that returns a header element with inline styles.
 * @returns {JSX.Element} An h1 element with custom styling.
 */
export function HeaderHelloWord(){
    const text = 'Header using JSX format';
    return(
        <h1 style={{
            color: "cyan",
            backgroundColor: "black",
        }}>{text}</h1>
    )
}

/**
 * A component that demonstrates using JavaScript expressions within JSX.
 * It renders a paragraph with lowercase text and applies styles from an object.
 * @returns {JSX.Element} A p element with custom styling and transformed text.
 */
export function ParagraphHelloWorld(){
    const text = 'Paragraph using JavaScript format in JSX';
    const style = {
        color: "yellow",
        backgroundColor: "black",
    }
    return(
        <p style={style}>{text.toLocaleLowerCase()}</p>
    )
}

/**
 * A component that demonstrates destructuring props in JSX with a default value.
 * @param {object} props - The properties passed to the component.
 * @param {string} [props.text="Destructuring in JSX"] - The text to be displayed in uppercase.
 * @returns {JSX.Element} An h1 element displaying the uppercased text.
 */
export function DestructuringJsx({text = "Destructuring in JSX"}){
    return(
        <h1 style={{
            color: "black",
            backgroundColor: "yellow",
        }}>{text.toUpperCase()}</h1>
    )
}

/**
 * A component that demonstrates destructuring props.
 * @param {object} props - The properties passed to the component.
 * @param {string} props.text - The text to be displayed in uppercase.
 * @returns {JSX.Element} An h1 element displaying the uppercased text.
 */
export function DestructuringElement({text}){
    return(
        <h1 style={{
            color: "black",
            backgroundColor: "yellow",
        }}>{text.toUpperCase()}</h1>
    )
}