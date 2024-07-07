export default function TrueFalse({isDone = true}){
    const result = isDone == true ? 'Done' : 'Not Done!';
    return (
        <div>
            <p>{result}</p>
        </div>
    )
}