export default function({value, isShown}) {
    let  output =' ';

    if (isShown) {
        output = value;
    }
    return (
        <span className="letterbox">{output}</span>
    );
}