interface Props{
    children: React.ReactNode
}
export default function Tombol(){
return(
    <button 
    style={{
        background: "red",
        border: "none",
        color: "white",
        padding: "5px 10px",
        borderRadius: "3px",
    }}
    type="submit"
    >
        Never Buy
    </button>
 );
}