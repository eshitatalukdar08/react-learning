export default function Footer({length}){
    const today=new Date();
    return(
       <footer>
        <p>{length} Number of {length === 1  ? "Item" : "Items"}</p>
       </footer>
    );
}