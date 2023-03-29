import { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';
function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table className="book-table">
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}

function InventoryTitle() {
  return (
      <h1>Zach's Shop Inventory</h1>
  );
}

function InventoryDescription() {
  return (
    <>
      <p>This is page includes information about various items and how many are remaining for Zach's store.</p>
      <p>Items that have more than 3 available will appear green and items that have 3 or less will appear red.</p>
    </>
  );
}

const items = [
  {id: 1, name: "Laptop", qty: 5, isAvailable: true},
  {id: 2, name: "Desktop", qty: 2, isAvailable: false},
  {id: 3, name: "VR headset", qty: 3, isAvailable: false},
]

function InventoryTable() {
  const listItems = items.map( items =>
    <>
    <tr>
    <td
    key={items.id}
    >
{items.id}
    </td>
    <td
    key={items.name}
    >
{items.name}
    </td>
    <td
    key={items.qty}
    style={{
      color: items.isAvailable ? 'green' : 'red'
    }}
    >
{items.qty}
    </td>
    </tr>
    </>
  )
  return (
    <>
<table>
<th>ID</th>
    <th>Name</th>
    <th>Quantity</th>
  {listItems}
</table>
    </>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Library/>
      <InventoryTitle/>
      <InventoryDescription/>
      <InventoryTable/>
      </header>
    </div>
    
  );
}

export default App;
