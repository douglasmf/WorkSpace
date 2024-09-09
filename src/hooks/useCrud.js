import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useCrud = (key) => {
  const [items, setItems] = useLocalStorage(key, []);
  const [activeItemId, setActiveItemId] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [open, setOpen] = useState(false);

  const addItem = (newItemData) => {
    if (itemToEdit) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemToEdit.id ? { ...item, ...newItemData } : item
        )
      );
      setItemToEdit(null);
    } else {
      const newItem = {
        id: Math.floor(Math.random() * 10000).toString(),
        ...newItemData
      } 
      setItems([newItem, ...items]);

      if (!activeItemId) {
        setActiveItemId(newItem.id);
      }
    }
    toggleOpen();
  };

  const editItem = (item) => {
    setItemToEdit(item);
    setOpen(true);
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const toggleOpen = () => {
    if (!open) {
      setItemToEdit(null);
    }
    setOpen(!open);
  };

  return {
    items,
    setItems,
    activeItemId,
    setActiveItemId,
    itemToEdit,
    open,
    addItem,
    editItem,
    deleteItem,
    toggleOpen
  };
};

export default useCrud;
