const ListGenerator = {
  generateListContainer: () => {
    return `
        import React, { useEffect, useState } from "react";
  
        export default function ListContainer() {
          const [items, setItems] = useState([]);
  
          useEffect(() => {
            // Simulação de uma requisição falsa para alimentar a lista
            setTimeout(() => {
              const fakeData = [
                { id: 1, text: "Item 1" },
                { id: 2, text: "Item 2" },
                { id: 3, text: "Item 3" },
              ];
              setItems(fakeData);
            }, 1000); // Aguarda 1 segundo
          }, []);
  
          return <List items={items} />;
        }
      `;
  },

  generateList: () => {
    return `
        import React from "react";
        import { List, ListItem, ListItemText } from "@mui/material";
  
        export default function List({ items }) {
          return (
            <div>
              <h2>Lista de Itens</h2>
              <List>
                {items.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </div>
          );
        }
      `;
  },

  generateRequest: () => {
    return `
        import axios from "axios";
  
        export const fetchData = async () => {
          try {
            const response = await axios.get("/users");
            const data = response.data;
            return data;
          } catch (error) {
            console.error("Erro ao buscar dados:", error);
          }
        };
      `;
  },
};

export default ListGenerator;
