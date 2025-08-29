export default function Footer({length}){
    const today=new Date();
    return(
       <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
       </footer>
    );
}