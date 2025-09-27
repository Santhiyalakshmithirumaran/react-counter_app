export default function Button(props) {
 return (
    <button
     style={{
        padding: "45px",
        margin: "50px",
        backgroundColor: "lightgray",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        frontsize: "20px",
     }}
    >
     {props.prop1}
    </button>
 )
}
