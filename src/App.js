import React from 'react';
import { Link } from "react-router-dom";

import './App.css';
import { TodoItem, TodoItemEntity } from './components/todo-item/todo-item';

import { AppContent } from './shared/content';

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        new TodoItemEntity("Test", "Beschreibung 1"),
        new TodoItemEntity("Test", "Beschreibung 2"),
        new TodoItemEntity("Test", "Beschreibung 1"),
        new TodoItemEntity("Test", "Beschreibung 2"),new TodoItemEntity("Test", "Beschreibung 1"),
        new TodoItemEntity("Test", "Beschreibung 2"),new TodoItemEntity("Test", "Beschreibung 1"),
        new TodoItemEntity("Test", "Beschreibung 2"),new TodoItemEntity("Test", "Beschreibung 1"),
        new TodoItemEntity("Test", "Beschreibung 2"),new TodoItemEntity("Test", "Beschreibung 1"),
        new TodoItemEntity("Test", "Beschreibung 2")
      ]
    };

    // Make "this" available in function
    this.deleteAllItems = this.deleteAllItems.bind(this);
  }

  deleteAllItems() {
    this.setState({
      items: []
    })
  }
  
  render() {
    return (
      <AppContent>
  
            <div className='flex items-center justify-end w-full mb-6 gap-2'>
              <h3 className='flex-grow font-semibold'>Deine Liste</h3>
              <Link to="/create"><button className='py-2 px-4 rounded text-sm font-semibold border-2 border-sky-700 bg-sky-700 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Anlegen</button></Link>
              <button onClick={this.deleteAllItems} className='py-2 px-4 rounded text-sm font-semibold border-2 border-red-400 bg-red-400 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Alles löschen</button>
            </div>
  
            <div className='flex flex-col gap-2 mt-6'>
              {this.state.items.map((item) => {
                return <TodoItem key={item.id} item={item} />
              })}
            </div>
          </AppContent>
    );
  }
}
