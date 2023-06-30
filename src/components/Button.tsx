interface Props {
    text: string;
}

export default function Button (props: Props) {
    const handleClick = () => {
        alert("si le diste click woff 🐶");
    };

    return <button onClick={handleClick}>{props.text}</button>;   
}