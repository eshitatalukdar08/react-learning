import ItemList from './ItemList.js';

export default function Content({items, handleCheck, handleDelete}){
/*     ----LESSON 8----      */

    return(
      <main>
      {items.length ? (
       <ItemList 
       items={items}  
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       />
      ) : (
        <p style={{marginTop: '6rem'}}>Your list is empty</p>
      )}
      </main>
    );
}