export const restaurants = [
  {
    "id": 1,
    "name": "Burger House",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    "rating": 4.8,
    "deliveryFee": 2.99,
    "deliveryTime": "25-35 min",
    "categories": ["Burgers", "American"],
    "dishes": [
      {
        "id": 1,
        "name": "Classic Cheeseburger",
        "price": 8.99,
        "description": "Beef patty, cheese, lettuce, tomato, onions",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Alface", "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0", "price": 0 },
            { "id": 2, "name": "Tomate", "image": "https://images.unsplash.com/photo-1506801310323-534be5e7f7f4", "price": 0 },
            { "id": 3, "name": "Cebola", "image": "https://images.unsplash.com/photo-1601390092743-c7e507aa3c93", "price": 0 },
            { "id": 4, "name": "Picles", "image": "https://images.unsplash.com/photo-1568928462405-c8784734aaf9", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Bacon", "image": "https://images.unsplash.com/photo-1559638740-b6ef5dd53a0e", "price": 3.99 },
            { "id": 2, "name": "Ovo", "image": "https://images.unsplash.com/photo-1595295112042-fd35f96abfdf", "price": 2.99 },
            { "id": 3, "name": "Queijo Extra", "image": "https://images.unsplash.com/photo-1559561853-78d3572adad9", "price": 3.99 },
            { "id": 4, "name": "Cebola Caramelizada", "image": "https://images.unsplash.com/photo-1614987319501-b4dc6ce0d28f", "price": 2.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "2",
            "name": "Batata Frita",
            "price": 6.99,
            "description": "Batatas fritas crocantes",
            "image": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
            "suggestedAddOns": [
              {
                "id": "3",
                "name": "Refrigerante",
                "price": 4.99,
                "description": "Coca-Cola 350ml",
                "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Bacon Deluxe",
        "price": 10.99,
        "description": "Beef patty, bacon, cheese, lettuce, special sauce",
        "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Alface", "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0", "price": 0 },
            { "id": 2, "name": "Tomate", "image": "https://images.unsplash.com/photo-1506801310323-534be5e7f7f4", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Ovo", "image": "https://images.unsplash.com/photo-1595295112042-fd35f96abfdf", "price": 2.99 },
            { "id": 2, "name": "Queijo Extra", "image": "https://images.unsplash.com/photo-1559561853-78d3572adad9", "price": 3.99 },
            { "id": 3, "name": "Cebola Caramelizada", "image": "https://images.unsplash.com/photo-1614987319501-b4dc6ce0d28f", "price": 2.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "4",
            "name": "Batata Frita",
            "price": 6.99,
            "description": "Batatas fritas crocantes",
            "image": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
            "suggestedAddOns": [
              {
                "id": "5",
                "name": "Suco de Laranja",
                "price": 3.99,
                "description": "Suco de laranja natural",
                "image": "https://images.unsplash.com/photo-1603052878361-52445d2bb26d"
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "BBQ Bacon Burger",
        "price": 11.49,
        "description": "BBQ sauce, bacon, cheddar cheese, lettuce, tomato",
        "image": "https://media.istockphoto.com/id/1295796231/pt/foto/cheese-burger-with-bacon-on-black-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ht7E3IWEDNQH-UsM7ppL_qbrUUgcJBS99ehOlWdKuXQ=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Alface", "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0", "price": 0 },
            { "id": 2, "name": "Tomate", "image": "https://images.unsplash.com/photo-1506801310323-534be5e7f7f4", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Bacon", "image": "https://images.unsplash.com/photo-1559638740-b6ef5dd53a0e", "price": 3.99 },
            { "id": 2, "name": "Queijo Extra", "image": "https://images.unsplash.com/photo-1559561853-78d3572adad9", "price": 3.99 },
            { "id": 3, "name": "Ovo", "image": "https://images.unsplash.com/photo-1595295112042-fd35f96abfdf", "price": 2.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "6",
            "name": "Batata Rústica",
            "price": 7.99,
            "description": "Batatas rústicas temperadas",
            "image": "https://images.unsplash.com/photo-1647426901433-b1c90f377a8b",
            "suggestedAddOns": [
              {
                "id": "7",
                "name": "Refrigerante Diet",
                "price": 4.49,
                "description": "Coca-Cola Diet 350ml",
                "image": "https://images.unsplash.com/photo-1614386035871-469b99b7c4c5"
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "name": "Veggie Burger",
        "price": 7.99,
        "description": "Grilled veggie patty, lettuce, tomato, pickles",
        "image": "https://images.unsplash.com/photo-1661529515593-bba89f12e8de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFZlZ2dpZSUyMEJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Alface", "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0", "price": 0 },
            { "id": 2, "name": "Tomate", "image": "https://images.unsplash.com/photo-1506801310323-534be5e7f7f4", "price": 0 },
            { "id": 3, "name": "Picles", "image": "https://images.unsplash.com/photo-1568928462405-c8784734aaf9", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Extra", "image": "https://images.unsplash.com/photo-1559561853-78d3572adad9", "price": 3.99 },
            { "id": 2, "name": "Cebola Caramelizada", "image": "https://images.unsplash.com/photo-1614987319501-b4dc6ce0d28f", "price": 2.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "8",
            "name": "Batata Doce Frita",
            "price": 6.49,
            "description": "Batata doce frita crocante",
            "image": "https://images.unsplash.com/photo-1580489701895-e1ed29ea10d6",
            "suggestedAddOns": [
              {
                "id": "9",
                "name": "Suco Detox",
                "price": 5.99,
                "description": "Suco detox natural",
                "image": "https://images.unsplash.com/photo-1593642532831-6581e5038b60"
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "name": "Cheeseburger Fries",
        "price": 5.99,
        "description": "Fries topped with melted cheese and beef",
        "image": "https://images.unsplash.com/photo-1636907229139-1521583f8f7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENoZWVzZWJ1cmdlciUyMEZyaWVzfGVufDB8fDB8fHww",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Bacon", "image": "https://images.unsplash.com/photo-1559638740-b6ef5dd53a0e", "price": 3.99 },
            { "id": 2, "name": "Queijo Extra", "image": "https://images.unsplash.com/photo-1559561853-78d3572adad9", "price": 3.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "10",
            "name": "Batata Frita com Bacon",
            "price": 7.49,
            "description": "Batatas fritas com bacon crocante",
            "image": "https://images.unsplash.com/photo-1605649680193-d559410f648f",
            "suggestedAddOns": [
              {
                "id": "11",
                "name": "Refrigerante Lata",
                "price": 3.49,
                "description": "Coca-Cola Lata",
                "image": "https://images.unsplash.com/photo-1593702892555-bda8761d3b77"
              }
            ]
          }
        ]
      }
    ]
  },  
  {
    "id": 2,
    "name": "Sushi Master",
    "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    "rating": 4.9,
    "deliveryFee": 3.99,
    "deliveryTime": "35-45 min",
    "categories": ["Japanese", "Sushi"],
    "dishes": [
      {
        "id": "3",
        "name": "California Roll",
        "price": 12.99,
        "description": "Crab, avocado, cucumber",
        "image": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Molho de Soja", "emoji": "🥢", "price": 0 },
            { "id": 2, "name": "Gengibre em conserva", "emoji": "🍣", "price": 0 },
            { "id": 3, "name": "Cebolinha", "emoji": "🧅", "price": 0 },
            { "id": 4, "name": "Alga Nori", "emoji": "🌿", "price": 0 },
            { "id": 5, "name": "Picles de Pepino", "emoji": "🥒", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Wasabi", "emoji": "🌶️", "price": 1.99 },
            { "id": 2, "name": "Shoyu com Trufa", "emoji": "🍄", "price": 2.99 },
            { "id": 3, "name": "Cebola Caramelizada", "emoji": "🧅", "price": 2.99 },
            { "id": 4, "name": "Molho Teriyaki", "emoji": "🍶", "price": 1.49 },
            { "id": 5, "name": "Avocado Extra", "emoji": "🥑", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "8",
            "name": "Bebidas",
            "price": 10,
            "description": "Adicione ao pedido",
            "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
            "suggestedAddOns": [
              {
                "id": "9",
                "name": "Refrigerante",
                "price": 4.99,
                "description": "Coca-Cola 350ml",
                "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
              },
              {
                "id": "10",
                "name": "Suco de Laranja",
                "price": 3.99,
                "description": "Suco natural de laranja",
                "image": "https://images.unsplash.com/photo-1603052878361-52445d2bb26d"
              }
            ]
          }
        ]
      },
      {
        "id": "4",
        "name": "Salmon Nigiri",
        "price": 14.99,
        "description": "Fresh salmon over rice",
        "image": "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Molho de Soja", "emoji": "🥢", "price": 0 },
            { "id": 2, "name": "Gengibre em conserva", "emoji": "🍣", "price": 0 },
            { "id": 3, "name": "Cebolinha", "emoji": "🧅", "price": 0 },
            { "id": 4, "name": "Alga Nori", "emoji": "🌿", "price": 0 },
            { "id": 5, "name": "Picles de Pepino", "emoji": "🥒", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Wasabi", "emoji": "🌶️", "price": 1.99 },
            { "id": 2, "name": "Shoyu com Trufa", "emoji": "🍄", "price": 2.99 },
            { "id": 3, "name": "Cebola Caramelizada", "emoji": "🧅", "price": 2.99 },
            { "id": 4, "name": "Molho Teriyaki", "emoji": "🍶", "price": 1.49 },
            { "id": 5, "name": "Avocado Extra", "emoji": "🥑", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "11",
            "name": "Bebidas",
            "price": 0,
            "description": "Deseja adicionar uma bebida?",
            "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
            "suggestedAddOns": [
              {
                "id": "12",
                "name": "Refrigerante",
                "price": 4.99,
                "description": "Coca-Cola 350ml",
                "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
              },
              {
                "id": "13",
                "name": "Suco Detox",
                "price": 5.49,
                "description": "Suco detox natural",
                "image": "https://images.unsplash.com/photo-1593642532831-6581e5038b60"
              }
            ]
          }
        ]
      },
      {
        "id": "5",
        "name": "Tuna Sashimi",
        "price": 15.49,
        "description": "Fresh tuna slices with wasabi and soy sauce",
        "image": "https://media.istockphoto.com/id/1810639482/pt/foto/tuna-sashimi-isolated-in-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwD0AZpFlZRSYOncJTkmyyxjrna1-nACy9WGedhAR1M=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Molho de Soja", "emoji": "🥢", "price": 0 },
            { "id": 2, "name": "Gengibre em conserva", "emoji": "🍣", "price": 0 },
            { "id": 3, "name": "Cebolinha", "emoji": "🧅", "price": 0 },
            { "id": 4, "name": "Alga Nori", "emoji": "🌿", "price": 0 },
            { "id": 5, "name": "Picles de Pepino", "emoji": "🥒", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Wasabi", "emoji": "🌶️", "price": 1.99 },
            { "id": 2, "name": "Shoyu com Trufa", "emoji": "🍄", "price": 2.99 },
            { "id": 3, "name": "Cebola Caramelizada", "emoji": "🧅", "price": 2.99 },
            { "id": 4, "name": "Molho Teriyaki", "emoji": "🍶", "price": 1.49 },
            { "id": 5, "name": "Avocado Extra", "emoji": "🥑", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": "14",
            "name": "Bebidas",
            "price": 0,
            "description": "Deseja adicionar uma bebida?",
            "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
            "suggestedAddOns": [
              {
                "id": "15",
                "name": "Refrigerante Diet",
                "price": 4.49,
                "description": "Coca-Cola Diet 350ml",
                "image": "https://images.unsplash.com/photo-1614386035871-469b99b7c4c5"
              },
              {
                "id": "16",
                "name": "Chá Gelado",
                "price": 3.99,
                "description": "Chá gelado natural",
                "image": "https://images.unsplash.com/photo-1593702892555-bda8761d3b77"
              }
            ]
          }
        ]
      }
    ]
  },  
  {
    "id": 3,
    "name": "Pasta Bella",
    "image": "https://media.istockphoto.com/id/1003150192/pt/foto/eating-tagliatelle-pasta-with-vegan-bolognese-and-bella-lodi-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=7xm6WT9oArt1MdmzW3EWLBrN5NzH016a12s6VE-vJHo=",
    "rating": 4.7,
    "deliveryFee": 2.5,
    "deliveryTime": "30-40 min",
    "categories": ["Italian", "Pasta"],
    "dishes": [
      {
        "id": 8,
        "name": "Spaghetti Carbonara",
        "price": 13.49,
        "description": "Spaghetti, pancetta, eggs, parmesan, black pepper",
        "image": "https://media.istockphoto.com/id/943785646/pt/foto/spaghetti-carbonara-with-garlic-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=fABvOkju4Vhfggr4Ojn6ybarV_xo01isKyqM4AkHELU=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Alho", "emoji": "🧄", "price": 0 },
            { "id": 2, "name": "Queijo Parmesão", "emoji": "🧀", "price": 0 },
            { "id": 3, "name": "Manjericão Fresco", "emoji": "🌿", "price": 0 },
            { "id": 4, "name": "Azeitonas", "emoji": "🫒", "price": 0 },
            { "id": 5, "name": "Pimenta Preta", "emoji": "🌶️", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Bacon Extra", "emoji": "🥓", "price": 2.99 },
            { "id": 2, "name": "Molho Pesto", "emoji": "🍃", "price": 1.99 },
            { "id": 3, "name": "Mussarela de Búfala", "emoji": "🧀", "price": 2.49 },
            { "id": 4, "name": "Tomates Secos", "emoji": "🍅", "price": 1.99 },
            { "id": 5, "name": "Alcaparras", "emoji": "🫑", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 1,
            "name": "Limonada Siciliana",
            "price": 4.99,
            "image": "https://example.com/limonada_siciliana.jpg"
          },
          {
            "id": 2,
            "name": "Tiramisu",
            "price": 5.49,
            "image": "https://example.com/tiramisu.jpg"
          }
        ]
      },
      {
        "id": 9,
        "name": "Lasagna Bolognese",
        "price": 16.99,
        "description": "Layers of pasta, bolognese sauce, ricotta, mozzarella",
        "image": "https://media.istockphoto.com/id/1565367820/pt/foto/lazy-lasagna-with-ravioli.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rkx0SWR5HKSUjhit5Srp16TmPZXJjsx-XGmnxG1zDlA=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Queijo Parmesão", "emoji": "🧀", "price": 0 },
            { "id": 2, "name": "Manjericão Fresco", "emoji": "🌿", "price": 0 },
            { "id": 3, "name": "Alho", "emoji": "🧄", "price": 0 },
            { "id": 4, "name": "Azeitonas", "emoji": "🫒", "price": 0 },
            { "id": 5, "name": "Pimenta Preta", "emoji": "🌶️", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Gouda", "emoji": "🧀", "price": 2.99 },
            { "id": 2, "name": "Molho Béchamel", "emoji": "🍶", "price": 2.49 },
            { "id": 3, "name": "Bacon Crocante", "emoji": "🥓", "price": 2.99 },
            { "id": 4, "name": "Alcaparras", "emoji": "🫑", "price": 2.49 },
            { "id": 5, "name": "Cogumelos", "emoji": "🍄", "price": 2.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 3,
            "name": "Cerveja Artesanal",
            "price": 6.49,
            "image": "https://example.com/cerveja_artesanal.jpg"
          },
          {
            "id": 4,
            "name": "Panna Cotta",
            "price": 4.99,
            "image": "https://example.com/panna_cotta.jpg"
          }
        ]
      },
      {
        "id": 10,
        "name": "Fettuccine Alfredo",
        "price": 14.99,
        "description": "Fettuccine pasta with creamy Alfredo sauce",
        "image": "https://media.istockphoto.com/id/1282544273/pt/foto/homemade-chicken-fettuccine-alfredo-pasta.webp?a=1&b=1&s=612x612&w=0&k=20&c=De80FSVOgx0O18gpUiwma8fJ9oPJQn_B1A8GE-EeWx4=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Queijo Parmesão", "emoji": "🧀", "price": 0 },
            { "id": 2, "name": "Manjericão Fresco", "emoji": "🌿", "price": 0 },
            { "id": 3, "name": "Alho", "emoji": "🧄", "price": 0 },
            { "id": 4, "name": "Azeitonas", "emoji": "🫒", "price": 0 },
            { "id": 5, "name": "Pimenta Preta", "emoji": "🌶️", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Cogumelos", "emoji": "🍄", "price": 2.99 },
            { "id": 2, "name": "Bacon Crocante", "emoji": "🥓", "price": 2.99 },
            { "id": 3, "name": "Molho Alfredo Extra", "emoji": "🍶", "price": 2.49 },
            { "id": 4, "name": "Mussarela de Búfala", "emoji": "🧀", "price": 2.49 },
            { "id": 5, "name": "Tomates Secos", "emoji": "🍅", "price": 1.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 5,
            "name": "Vinho Tinto",
            "price": 12.99,
            "image": "https://example.com/vinho_tinto.jpg"
          },
          {
            "id": 6,
            "name": "Gelato de Baunilha",
            "price": 4.49,
            "image": "https://example.com/gelato_baunilha.jpg"
          }
        ]
      }
    ]
  },  
  {
    "id": 4,
    "name": "Taco Fiesta",
    "image": "https://cdn.prod.website-files.com/6501d74c349ad4abddce6670/650c490f35f8edcda528a6f2_LOGO-glow.png",
    "rating": 4.5,
    "deliveryFee": 1.99,
    "deliveryTime": "20-30 min",
    "categories": ["Mexican", "Tacos"],
    "dishes": [
      {
        "id": 13,
        "name": "Taco al Pastor",
        "price": 3.99,
        "description": "Marinated pork, pineapple, cilantro, onions",
        "image": "https://media.istockphoto.com/id/1131715969/pt/foto/a-plate-of-tacos-al-pastor-corn-tortillas-shaved-pork-sauce-sliced-pineapple-cilantro-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=GhiJ05NaEz8V5ucZ2IAvQVvfdJB36dNqsEUBblKTrwU=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Cilantro", "emoji": "🌿", "price": 0 },
            { "id": 2, "name": "Cebola", "emoji": "🧅", "price": 0 },
            { "id": 3, "name": "Pineapple", "emoji": "🍍", "price": 0 },
            { "id": 4, "name": "Alface", "emoji": "🥬", "price": 0 },
            { "id": 5, "name": "Limão", "emoji": "🍋", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Ralado", "emoji": "🧀", "price": 1.49 },
            { "id": 2, "name": "Molho Picante", "emoji": "🌶️", "price": 1.99 },
            { "id": 3, "name": "Guacamole Extra", "emoji": "🥑", "price": 2.49 },
            { "id": 4, "name": "Bacon", "emoji": "🥓", "price": 2.99 },
            { "id": 5, "name": "Sour Cream", "emoji": "🍶", "price": 1.49 }
          ]
        }
      },
      {
        "id": 18,
        "name": "Lemonade",
        "price": 2.99,
        "description": "Sweet and tart, freshly squeezed lemon juice",
        "image": "https://media.istockphoto.com/id/1194540644/pt/foto/limonada.jpg?s=612x612&w=0&k=20&c=4FrYNmjmVldRYHvXwctV7WJrRA_fzkb6vSQjHezv8PA=",
        "accompaniments": {
          "free": [],
          "paid": []
        },
        "suggestedAddOns": [
          {
            "id": 21,
            "name": "Ice Cubes",
            "price": 0.99,
            "description": "Extra cold ice cubes",
            "image": "https://media.istockphoto.com/id/1081219280/pt/foto/fresh-ice-cubes.webp?a=1&b=1&s=612x612&w=0&k=20&c=BxS_YLphxjxHvA7X2ZGEC9AnMep2yKmLroABzwTl0ms="
          }
        ]
      },
      {
        "id": 19,
        "name": "Margarita",
        "price": 4.99,
        "description": "Classic margarita with lime, tequila, and triple sec",
        "image": "https://media.istockphoto.com/id/167042973/pt/foto/margarita-cocktail.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0Lg_GIfYWjUBkCw9eV0J-X4yUBIKGoRFEkM-CKJ0Bk=",
        "accompaniments": {
          "free": [],
          "paid": []
        },
        "suggestedAddOns": [
          {
            "id": 22,
            "name": "Salt Rim",
            "price": 0.49,
            "description": "Salt rim for your glass",
            "image": "https://media.istockphoto.com/id/173864020/pt/foto/margarita-com-sal.webp?a=1&b=1&s=612x612&w=0&k=20&c=h1mIC_SdQtx3DhoGkbTS7WtI79NSWogkRphDQ92UnJw="
          }
        ]
      },
      {
        "id": 20,
        "name": "Mexican Beer",
        "price": 3.99,
        "description": "Refreshing Mexican beer, perfect for any meal",
        "image": "https://media.istockphoto.com/id/1298485050/pt/foto/cerveja-mexicana.webp?a=1&b=1&s=612x612&w=0&k=20&c=a92ynGV3YQSHDjdksP_gjYYCmFUlRPfMZG_V-eae-xk=",
        "accompaniments": {
          "free": [],
          "paid": []
        },
        "suggestedAddOns": [
          {
            "id": 23,
            "name": "Lime Slice",
            "price": 0.99,
            "description": "Fresh lime slice",
            "image": "https://media.istockphoto.com/id/157422006/pt/foto/lime.webp?a=1&b=1&s=612x612&w=0&k=20&c=ISxYk9hEbJoMvwHXMgbUpxzM1KKOCWcbVJijZK4yc90="
          }
        ]
      }
    ]
  },  
  {
    "id": 5,
    "name": "Pizza Mania",
    "image": "https://media.istockphoto.com/id/1410466400/pt/foto/mixture-pizza-with-sausage-and-tomatoes-with-shape-of-word-food-art-idea-delicous-pizza-key.webp?a=1&b=1&s=612x612&w=0&k=20&c=bOh8A4RFtwi7uBveeDscSiYY30LgR2kwO3rW2wkUqlE=",
    "rating": 4.7,
    "deliveryFee": 3.49,
    "deliveryTime": "25-35 min",
    "categories": ["Italian", "Pizza"],
    "dishes": [
      {
        "id": 18,
        "name": "Pepperoni Pizza",
        "price": 14.99,
        "description": "Pepperoni, mozzarella, tomato sauce",
        "image": "https://media.istockphoto.com/id/1212512019/pt/foto/pepperoni-pizza-with-mozzarella-cheese-salami-tomato-sauce-pepper-spices-italian-pizza-on-dark.webp?a=1&b=1&s=612x612&w=0&k=20&c=wU63dN4vKHn2O92UWgjrOjACd-512_ik7MVe4Bkz-o8=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Alho", "emoji": "🧄", "price": 0 },
            { "id": 2, "name": "Orégano", "emoji": "🌿", "price": 0 },
            { "id": 3, "name": "Tomate", "emoji": "🍅", "price": 0 },
            { "id": 4, "name": "Azeitona", "emoji": "🫒", "price": 0 },
            { "id": 5, "name": "Alface", "emoji": "🥬", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Extra", "emoji": "🧀", "price": 1.99 },
            { "id": 2, "name": "Bacon", "emoji": "🥓", "price": 2.49 },
            { "id": 3, "name": "Pimentão", "emoji": "🌶️", "price": 1.49 },
            { "id": 4, "name": "Molho Picante", "emoji": "🌶️", "price": 1.99 },
            { "id": 5, "name": "Creme de Alho", "emoji": "🧄", "price": 1.49 }
          ]
        }
      },
      {
        "id": 19,
        "name": "Hawaiian Pizza",
        "price": 15.49,
        "description": "Ham, pineapple, mozzarella",
        "image": "https://media.istockphoto.com/id/2038985754/pt/foto/aerial-view-of-a-pizza-on-a-restaurant-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=aCu_hupp89xeogPaDrZ26ErS4ZwT4DnEvgruFuROFvo=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Tomate", "emoji": "🍅", "price": 0 },
            { "id": 2, "name": "Alface", "emoji": "🥬", "price": 0 },
            { "id": 3, "name": "Cebola", "emoji": "🧅", "price": 0 },
            { "id": 4, "name": "Cilantro", "emoji": "🌿", "price": 0 },
            { "id": 5, "name": "Azeitona", "emoji": "🫒", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Extra", "emoji": "🧀", "price": 1.99 },
            { "id": 2, "name": "Bacon", "emoji": "🥓", "price": 2.49 },
            { "id": 3, "name": "Molho Barbecue", "emoji": "🍖", "price": 2.49 },
            { "id": 4, "name": "Molho de Alho", "emoji": "🧄", "price": 1.49 },
            { "id": 5, "name": "Pimentão", "emoji": "🌶️", "price": 1.49 }
          ]
        }
      },
      {
        "id": 20,
        "name": "Vegetarian Pizza",
        "price": 13.99,
        "description": "Bell peppers, olives, mushrooms, onions, mozzarella",
        "image": "https://media.istockphoto.com/id/1279000076/pt/foto/freshly-baked-pizza-with-arugula-tomato-red-onion-and-mozzarella.webp?a=1&b=1&s=612x612&w=0&k=20&c=jlgVbS3CtdnAs6PIJ30wziN2D7UtLWU5GIXrmD2FWB4=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Alface", "emoji": "🥬", "price": 0 },
            { "id": 2, "name": "Tomate", "emoji": "🍅", "price": 0 },
            { "id": 3, "name": "Cebola", "emoji": "🧅", "price": 0 },
            { "id": 4, "name": "Azeitona", "emoji": "🫒", "price": 0 },
            { "id": 5, "name": "Espinafre", "emoji": "🍃", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Extra", "emoji": "🧀", "price": 1.99 },
            { "id": 2, "name": "Cogumelos", "emoji": "🍄", "price": 2.49 },
            { "id": 3, "name": "Molho de Alho", "emoji": "🧄", "price": 1.49 },
            { "id": 4, "name": "Pepperoni", "emoji": "🍕", "price": 2.99 },
            { "id": 5, "name": "Pimentão", "emoji": "🌶️", "price": 1.49 }
          ]
        }
      },
      {
        "id": 21,
        "name": "Margherita Pizza",
        "price": 12.99,
        "description": "Tomato, mozzarella, basil",
        "image": "https://media.istockphoto.com/id/92627977/pt/foto/pizza-e-forno-de-tijolos.webp?a=1&b=1&s=612x612&w=0&k=20&c=1XqM9BR251nvr1qu_SAKhxKHmIKxtAO5EEd1EBU53Vs=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Tomate", "emoji": "🍅", "price": 0 },
            { "id": 2, "name": "Manjericão", "emoji": "🌿", "price": 0 },
            { "id": 3, "name": "Alho", "emoji": "🧄", "price": 0 },
            { "id": 4, "name": "Alface", "emoji": "🥬", "price": 0 },
            { "id": 5, "name": "Azeitona", "emoji": "🫒", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Extra", "emoji": "🧀", "price": 1.99 },
            { "id": 2, "name": "Molho Barbecue", "emoji": "🍖", "price": 2.49 },
            { "id": 3, "name": "Bacon", "emoji": "🥓", "price": 2.49 },
            { "id": 4, "name": "Pimentão", "emoji": "🌶️", "price": 1.49 },
            { "id": 5, "name": "Molho de Alho", "emoji": "🧄", "price": 1.49 }
          ]
        }
      },
      {
        "id": 22,
        "name": "Meat Lovers Pizza",
        "price": 16.49,
        "description": "Sausage, bacon, pepperoni, beef, mozzarella",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioinJi6wOdFRG4CNMPNsQdoqWeNSVRxUF5w&s",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Cebola", "emoji": "🧅", "price": 0 },
            { "id": 2, "name": "Alface", "emoji": "🥬", "price": 0 },
            { "id": 3, "name": "Alho", "emoji": "🧄", "price": 0 },
            { "id": 4, "name": "Tomate", "emoji": "🍅", "price": 0 },
            { "id": 5, "name": "Cilantro", "emoji": "🌿", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Queijo Extra", "emoji": "🧀", "price": 1.99 },
            { "id": 2, "name": "Bacon Crocante", "emoji": "🥓", "price": 2.49 },
            { "id": 3, "name": "Molho Picante", "emoji": "🌶️", "price": 1.49 },
            { "id": 4, "name": "Molho de Alho", "emoji": "🧄", "price": 1.49 },
            { "id": 5, "name": "Pimentão", "emoji": "🌶️", "price": 1.49 }
          ]
        }
      }
    ]
  },  
  {
    "id": 6,
    "name": "Brazilian Flavors",
    "image": "https://media.istockphoto.com/id/1252504256/pt/foto/brazilian-cuisine-shrimp-stew-usually-served-with-rice-mush-and-manioc-flour.webp?a=1&b=1&s=612x612&w=0&k=20&c=RMYRF9ng5PS_cUrCJOnSSx867i7rIsZs0OxgxHKBZNM=",
    "rating": 4.8,
    "deliveryFee": 2.99,
    "deliveryTime": "30-40 min",
    "categories": ["Brazilian"],
    "dishes": [
      {
        "id": 23,
        "name": "Feijoada Completa",
        "price": 18.99,
        "description": "Tradicional feijoada brasileira com arroz, couve e farofa.",
        "image": "https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.webp?a=1&b=1&s=612x612&w=0&k=20&c=EcSnO9wqM17A5THTF049jL5V1lyDax76mlqSvYUPn68=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Arroz Branco", "emoji": "🍚", "price": 0 },
            { "id": 2, "name": "Couve Refogada", "emoji": "🌿", "price": 0 },
            { "id": 3, "name": "Farofa", "emoji": "🍞", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Laranja", "emoji": "🍊", "price": 1.49 },
            { "id": 2, "name": "Torresmo", "emoji": "🍖", "price": 3.49 },
            { "id": 3, "name": "Cachaça", "emoji": "🍸", "price": 4.99 }
          ]
        }
      },
      {
        "id": 24,
        "name": "Picanha Grelhada",
        "price": 25.49,
        "description": "Picanha grelhada servida com arroz, feijão e batata frita.",
        "image": "https://media.istockphoto.com/id/1480810441/pt/foto/picanha.webp?a=1&b=1&s=612x612&w=0&k=20&c=oZF578xz2i-1gSFHSenUokrmF9a80JSa3UKoXU59yKg=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Arroz Branco", "emoji": "🍚", "price": 0 },
            { "id": 2, "name": "Feijão Preto", "emoji": "🍲", "price": 0 },
            { "id": 3, "name": "Batata Frita", "emoji": "🍟", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Molho de Alho", "emoji": "🧄", "price": 1.99 },
            { "id": 2, "name": "Farofa", "emoji": "🍞", "price": 2.49 },
            { "id": 3, "name": "Vinho Tinto", "emoji": "🍷", "price": 5.99 }
          ]
        }
      },
      {
        "id": 25,
        "name": "Moqueca de Peixe",
        "price": 22.99,
        "description": "Moqueca de peixe com leite de coco e dendê.",
        "image": "https://media.istockphoto.com/id/1326687357/pt/foto/moqueca-capixaba.webp?a=1&b=1&s=612x612&w=0&k=20&c=aG7jSH1v9GbXn0QVEJykt6aEFiSilbWqYqQ3xKJVk00=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Arroz Branco", "emoji": "🍚", "price": 0 },
            { "id": 2, "name": "Farofa de Dendê", "emoji": "🍞", "price": 0 },
            { "id": 3, "name": "Couve Refogada", "emoji": "🌿", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Vinagrete", "emoji": "🍅", "price": 1.99 },
            { "id": 2, "name": "Cachaça", "emoji": "🍸", "price": 4.99 }
          ]
        }
      },
      {
        "id": 26,
        "name": "Coxinha",
        "price": 2.99,
        "description": "Salgado brasileiro recheado com frango desfiado.",
        "image": "https://media.istockphoto.com/id/1424050486/pt/foto/coxinha-de-frango-1.webp?a=1&b=1&s=612x612&w=0&k=20&c=yBzRNYYzaF4GRpOribCNXChzfFRvF1P7wnbCABk97lc=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Molho de Pimenta", "emoji": "🌶️", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Ketchup", "emoji": "🍅", "price": 0.99 },
            { "id": 2, "name": "Refrigerante", "emoji": "🥤", "price": 2.49 }
          ]
        }
      },
      {
        "id": 27,
        "name": "Açaí Bowl",
        "price": 12.99,
        "description": "Açaí com granola, banana e mel.",
        "image": "https://media.istockphoto.com/id/1313706157/pt/foto/a%C3%A7ai-with-strawberry-and-banana-brazilian-a%C3%A7a%C3%AD.webp?a=1&b=1&s=612x612&w=0&k=20&c=4PZbxAIJxTmD5oYiMUAXW-u1d-ZTTV68-Si07C1aq30=x",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Granola", "emoji": "🥣", "price": 0 },
            { "id": 2, "name": "Banana", "emoji": "🍌", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Morango", "emoji": "🍓", "price": 1.49 },
            { "id": 2, "name": "Mel", "emoji": "🍯", "price": 1.49 },
            { "id": 3, "name": "Leite Condensado", "emoji": "🥛", "price": 1.99 }
          ]
        }
      },
      {
        "id": 28,
        "name": "Guaraná Antarctica",
        "price": 2.99,
        "description": "Refrigerante típico brasileiro sabor guaraná.",
        "image": "https://media.istockphoto.com/id/1373150621/pt/foto/guarana-soda.webp?a=1&b=1&s=612x612&w=0&k=20&c=kIWrZyVnQu5DOse5DWhsvPqgJsMg3KsKt_S7wM6sENk=",
        "accompaniments": {
          "free": [],
          "paid": []
        },
        "suggestedAddOns": [
          {
            "id": 29,
            "name": "Gelo",
            "price": 0.99,
            "description": "Adicione gelo extra à sua bebida.",
            "image": "https://media.istockphoto.com/id/1081219280/pt/foto/fresh-ice-cubes.webp?a=1&b=1&s=612x612&w=0&k=20&c=BxS_YLphxjxHvA7X2ZGEC9AnMep2yKmLroABzwTl0ms="
          }
        ]
      },
      {
        "id": 30,
        "name": "Café Brasileiro",
        "price": 1.99,
        "description": "Café coado tradicional brasileiro.",
        "image": "https://media.istockphoto.com/id/1326824923/pt/foto/coffee-cup.webp?a=1&b=1&s=612x612&w=0&k=20&c=gq27kPRAKc01bLYbTFvTy_1wv9zHAswRuCOXL05ZnkI=",
        "accompaniments": {
          "free": [],
          "paid": []
        },
        "suggestedAddOns": [
          {
            "id": 31,
            "name": "Pão de Queijo",
            "price": 2.49,
            "description": "Acompanhe seu café com um pão de queijo tradicional.",
            "image": "https://media.istockphoto.com/id/1278602216/pt/foto/p%C3%A3o-de-queijo.webp?a=1&b=1&s=612x612&w=0&k=20&c=f_g5_XeDlIxV-tMD9Gsqj_YUtGo3_YHDB5ZmAHs90k4="
          }
        ]
      }
    ]
  },  
  {
    "id": 7,
    "name": "Asian Delights",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "rating": 4.9,
    "deliveryFee": 3.5,
    "deliveryTime": "40-50 min",
    "categories": ["Asian", "Noodles"],
    "dishes": [
      {
        "id": 28,
        "name": "Pad Thai",
        "price": 14.99,
        "description": "Macarrão tailandês com camarão, tofu e molho de tamarindo.",
        "image": "https://media.istockphoto.com/id/1367738509/pt/foto/pad-thai-vegetarian-plant-based-asian-recipe-from-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=jWzVHooh0DXfIf0Mt1xRpbFwPa_gQgejJ3JeSSLmywE=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Arroz Japonês", "emoji": "🍚", "price": 0 },
            { "id": 2, "name": "Salada de Pepino", "emoji": "🥒", "price": 0 },
            { "id": 3, "name": "Molho de Peixe", "emoji": "🌶️", "price": 0 },
            { "id": 4, "name": "Broto de Feijão", "emoji": "🌱", "price": 0 },
            { "id": 5, "name": "Limão", "emoji": "🍋", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Amendoim Torrado", "emoji": "🥜", "price": 1.49 },
            { "id": 2, "name": "Sake", "emoji": "🍶", "price": 5.99 },
            { "id": 3, "name": "Cogumelos Shiitake", "emoji": "🍄", "price": 2.49 },
            { "id": 4, "name": "Molho de Curry", "emoji": "🍛", "price": 1.99 },
            { "id": 5, "name": "Tapioca de Coco", "emoji": "🍡", "price": 3.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 33,
            "name": "Sobremesa de Tapioca",
            "price": 4.99,
            "description": "Sobremesa tailandesa tradicional feita com tapioca e leite de coco.",
            "image": "https://media.istockphoto.com/id/1323933087/pt/foto/tapioca-dessert.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOKH9tXwqeD5fwQoF7NfI_4UXo8E11QllXkRFLBb1kw="
          }
        ]
      },
      {
        "id": 29,
        "name": "Frango Teriyaki",
        "price": 13.99,
        "description": "Frango grelhado com molho teriyaki e arroz japonês.",
        "image": "https://media.istockphoto.com/id/154887844/pt/foto/frango-teriyaki.webp?a=1&b=1&s=612x612&w=0&k=20&c=S3ND31pu5P2DVsBAHvbRHEuVnR1_IjAo-FprpqES4xQ=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Arroz Japonês", "emoji": "🍚", "price": 0 },
            { "id": 2, "name": "Brócolis", "emoji": "🥦", "price": 0 },
            { "id": 3, "name": "Molho Teriyaki", "emoji": "🍶", "price": 0 },
            { "id": 4, "name": "Cebolinhas", "emoji": "🧅", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Gengibre em Conserva", "emoji": "🫚", "price": 1.49 },
            { "id": 2, "name": "Ovo de Codorna", "emoji": "🥚", "price": 2.49 },
            { "id": 3, "name": "Pasta de Gergelim", "emoji": "🫒", "price": 1.99 },
            { "id": 4, "name": "Tapioca", "emoji": "🍡", "price": 3.49 },
            { "id": 5, "name": "Sake", "emoji": "🍶", "price": 5.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 34,
            "name": "Cerveja Japonesa",
            "price": 4.99,
            "description": "Cerveja japonesa premium.",
            "image": "https://media.istockphoto.com/id/1374534401/pt/foto/japanese-beer.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xo7umkVvtXX6hhEBaQp3U1g7x-qhMdh9r2NHcJXN_CE="
          }
        ]
      },
      {
        "id": 35,
        "name": "Mochi",
        "price": 5.99,
        "description": "Bolinhos de arroz japonês recheados com sabores variados.",
        "image": "https://media.istockphoto.com/id/1191412966/pt/foto/japanese-mochi-dessert.webp?a=1&b=1&s=612x612&w=0&k=20&c=lkgqs8Gv6F2s2whDlQonFo63d_cAtuylJKpxK6vVXYo=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Sorvete de Matcha", "emoji": "🍵", "price": 2.99 }
          ]
        }
      }
    ]
  },  
  {
    "id": 8,
    "name": "Tropical Sweets",
    "image": "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VHJvcGljYWwlMjBTd2VldHN8ZW58MHx8MHx8fDA%3D",
    "rating": 4.7,
    "deliveryFee": 1.99,
    "deliveryTime": "20-30 min",
    "categories": ["Desserts"],
    "dishes": [
      {
        "id": 33,
        "name": "Pudim de Leite",
        "price": 6.99,
        "description": "Pudim cremoso com calda de caramelo.",
        "image": "https://media.istockphoto.com/id/1240513924/pt/foto/condensed-milk-pudding.webp?a=1&b=1&s=612x612&w=0&k=20&c=9XqsaoIPpfBM4sV8O7z2qyF55jqwSuQ8foiMY63pfzo=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Canela em Pó", "emoji": "🍂", "price": 0 },
            { "id": 2, "name": "Frutas Frescas", "emoji": "🍓🍊", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Coco Ralado", "emoji": "🥥", "price": 1.49 },
            { "id": 2, "name": "Granola", "emoji": "🥣", "price": 1.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 38,
            "name": "Café Espresso",
            "price": 2.99,
            "description": "Café forte e aromático para acompanhar seu pudim.",
            "image": "https://media.istockphoto.com/id/1253992723/pt/foto/caf%C3%A9-espresso.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gldh-pcmq4NiLflvPqlx2IovAp10COwOsauQoaRXZnU="
          }
        ]
      },
      {
        "id": 34,
        "name": "Brigadeiro Gourmet",
        "price": 2.99,
        "description": "Delicioso brigadeiro com cobertura de chocolate belga.",
        "image": "https://media.istockphoto.com/id/1307651082/pt/foto/typical-brazilian-brigadeiros-on-a-plate-with-chocolate-sprinkles.webp?a=1&b=1&s=612x612&w=0&k=20&c=ruo_UlYV13BcIsuPu_hNPqdUSm9SWud52ybu0Ff25AQ=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Morango", "emoji": "🍓", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Leite Condensado", "emoji": "🥛", "price": 1.49 },
            { "id": 2, "name": "Chocolate Belga Extra", "emoji": "🍫", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 39,
            "name": "Sorvete de Creme",
            "price": 3.49,
            "description": "Sorvete de creme para complementar seu brigadeiro.",
            "image": "https://media.istockphoto.com/id/1494534256/pt/foto/sorvete.webp?a=1&b=1&s=612x612&w=0&k=20&c=DxNN6kDPGRxG8N8NBqIJw14CjQp8vYpdJOKO9yW02TA="
          }
        ]
      },
      {
        "id": 35,
        "name": "Bolo de Cenoura com Chocolate",
        "price": 5.49,
        "description": "Bolo de cenoura com calda de chocolate.",
        "image": "https://media.istockphoto.com/id/1312530797/pt/foto/carrot-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=XvB_Z4AcmADTvnk-UgFKE7TEs5J33iQqFpNOCvCdY9s=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Castanhas de Caju", "emoji": "🌰", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Cobertura de Chocolate", "emoji": "🍫", "price": 1.99 },
            { "id": 2, "name": "Chantilly", "emoji": "🍦", "price": 1.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 40,
            "name": "Café com Leite",
            "price": 3.99,
            "description": "Café com leite cremoso para acompanhar o bolo.",
            "image": "https://media.istockphoto.com/id/1253992723/pt/foto/caf%C3%A9-com-leite.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gldh-pcmq4NiLflvPqlx2IovAp10COwOsauQoaRXZnU="
          }
        ]
      },
      {
        "id": 36,
        "name": "Torta de Limão",
        "price": 7.99,
        "description": "Base crocante com recheio de limão e merengue.",
        "image": "https://media.istockphoto.com/id/1399384140/pt/foto/torta-de-lim%C3%A3o.webp?a=1&b=1&s=612x612&w=0&k=20&c=3HhmtNY7ubukemD6WWmI8MXyJqnrGad0V6ukjvzBuKw=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Folhas de Hortelã", "emoji": "🌿", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Sorvete de Limão", "emoji": "🍦", "price": 2.49 },
            { "id": 2, "name": "Morango", "emoji": "🍓", "price": 1.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 41,
            "name": "Limonada Gelada",
            "price": 3.99,
            "description": "Limonada refrescante para harmonizar com a torta.",
            "image": "https://media.istockphoto.com/id/1194540644/pt/foto/limonada-gelada.webp?a=1&b=1&s=612x612&w=0&k=20&c=_F1_Dr15mcYrN5l62mBLebfWpmkTmTEuHUfHsBElWl8="
          }
        ]
      },
      {
        "id": 37,
        "name": "Açaí Bowl",
        "price": 12.99,
        "description": "Açaí com granola, banana e mel.",
        "image": "https://plus.unsplash.com/premium_photo-1723568409747-dfaa9b52ab46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QSVDMyVBN2FpJTIwQm93bHxlbnwwfHwwfHx8MA%3D%3D",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Granola", "emoji": "🥣", "price": 0 },
            { "id": 2, "name": "Banana", "emoji": "🍌", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Mel", "emoji": "🍯", "price": 1.49 },
            { "id": 2, "name": "Morango", "emoji": "🍓", "price": 1.49 },
            { "id": 3, "name": "Leite Condensado", "emoji": "🥛", "price": 1.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 42,
            "name": "Smoothie de Frutas Tropicais",
            "price": 5.99,
            "description": "Bebida cremosa feita com frutas tropicais.",
            "image": "https://media.istockphoto.com/id/1214567845/pt/foto/tropical-smoothie.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Z9G5uHmcVLTLpRpp6OJOWFGsPldfyNyvOgUBjbb-aA="
          }
        ]
      }
    ]
  },  
  {
    "id": 9,
    "name": "Churrasco Master",
    "image": "https://media.istockphoto.com/id/1168294580/pt/foto/professional-catering-smoked-meat-assortment.webp?a=1&b=1&s=612x612&w=0&k=20&c=dFUy7TzC-hkuv0mO-1leVeFeZgdcpoRff6wPeTI1hRI=",
    "rating": 4.8,
    "deliveryFee": 4.99,
    "deliveryTime": "45-55 min",
    "categories": ["Brazilian"],
    "dishes": [
      {
        "id": 38,
        "name": "Espeto Misto",
        "price": 14.99,
        "description": "Espeto de carne bovina, frango e linguiça.",
        "image": "https://media.istockphoto.com/id/457956401/pt/foto/yakitori.webp?a=1&b=1&s=612x612&w=0&k=20&c=U_uhbpSINbpZi04AEXx65pZ8-vN9SiO9ak1LbXGzGZY=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Mandioca Cozida", "emoji": "🍠", "price": 0 },
            { "id": 2, "name": "Vinagrete", "emoji": "🍅", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Arroz Branco", "emoji": "🍚", "price": 1.49 },
            { "id": 2, "name": "Farofa Especial", "emoji": "🍞", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 43,
            "name": "Cerveja Artesanal",
            "price": 6.99,
            "description": "Cerveja artesanal gelada para harmonizar com o espeto.",
            "image": "https://media.istockphoto.com/id/157942778/pt/foto/beer.webp?a=1&b=1&s=612x612&w=0&k=20&c=_3W39ywnnBtXCLosGzo46AzK_oZAFHkJjtZC9v-P1Do="
          }
        ]
      },
      {
        "id": 39,
        "name": "Pão de Alho",
        "price": 5.99,
        "description": "Pão grelhado com recheio de alho e manteiga.",
        "image": "https://media.istockphoto.com/id/1480810450/pt/foto/garlic-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y0SuGxm6LRA6tofjMh-oUv1sSwCIk4dVV1j771PuRs0=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Queijo Coalho", "emoji": "🧀", "price": 2.99 },
            { "id": 2, "name": "Molho Barbecue", "emoji": "🍖", "price": 1.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 44,
            "name": "Molho de Alho",
            "price": 1.99,
            "description": "Molho especial de alho para realçar o sabor.",
            "image": "https://media.istockphoto.com/id/1248443048/pt/foto/garlic-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=dPTx1IT-6_JGbFtZw8B4--5jwFsWy8fwi_hE0KlDM_E="
          }
        ]
      },
      {
        "id": 40,
        "name": "Costela no Bafo",
        "price": 25.99,
        "description": "Costela bovina defumada, acompanhada de mandioca.",
        "image": "https://images.unsplash.com/photo-1700077103134-17a454ee5f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29zdGVsYSUyMG5vJTIwYmFmb3xlbnwwfHwwfHx8MA%3D%3D",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Mandioca Cozida", "emoji": "🍠", "price": 0 },
            { "id": 2, "name": "Vinagrete", "emoji": "🍅", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Arroz Branco", "emoji": "🍚", "price": 1.49 },
            { "id": 2, "name": "Farofa", "emoji": "🍞", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 45,
            "name": "Caipirinha",
            "price": 7.99,
            "description": "Acompanhamento clássico brasileiro feito com limão e cachaça.",
            "image": "https://media.istockphoto.com/id/1158569772/pt/foto/caipirinha.webp?a=1&b=1&s=612x612&w=0&k=20&c=UHXpA7npyw4YVyQnoaOs5v_5X64VGGmWW3f27c_r2gs="
          }
        ]
      },
      {
        "id": 41,
        "name": "Coração de Frango",
        "price": 12.49,
        "description": "Espetinhos de coração de frango.",
        "image": "https://media.istockphoto.com/id/1224978853/pt/foto/skewered-and-grilled-chicken-hearts-yakitori-black-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=k2oxuT9bm2SUYoQnr_PgVCWKBmaw_fYyAa9mFGQ5lx8=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Molho Chimichurri", "emoji": "🌶️", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Arroz de Brócolis", "emoji": "🥦", "price": 1.99 },
            { "id": 2, "name": "Farofa de Ovo", "emoji": "🍳", "price": 2.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 46,
            "name": "Suco de Laranja Natural",
            "price": 4.49,
            "description": "Suco de laranja fresco para equilibrar os sabores do prato.",
            "image": "https://media.istockphoto.com/id/1205364636/pt/foto/suco-de-laranja.webp?a=1&b=1&s=612x612&w=0&k=20&c=Em0X1P8YPuCvNlD5oCZoDL71AMnD0oJdTYwK7GV1P3I="
          }
        ]
      },
      {
        "id": 42,
        "name": "Farofa Especial",
        "price": 3.99,
        "description": "Farofa crocante com bacon e ervas.",
        "image": "https://cdn.aquelareceita.com.br/recipes/image-1638558963585-1641924822826.png",
        "accompaniments": {
          "free": [],
          "paid": []
        },
        "suggestedAddOns": [
          {
            "id": 47,
            "name": "Cerveja Lager",
            "price": 5.99,
            "description": "Cerveja leve e refrescante para acompanhar a farofa.",
            "image": "https://media.istockphoto.com/id/157942778/pt/foto/beer.webp?a=1&b=1&s=612x612&w=0&k=20&c=_3W39ywnnBtXCLosGzo46AzK_oZAFHkJjtZC9v-P1Do="
          }
        ]
      }
    ]
  },  
  {
    "id": 10,
    "name": "Green Bites",
    "image": "https://tb-static.uber.com/prod/image-proc/processed_images/dc9aa127ebb925ad9d743a70b60cb1aa/a70f5c9df440d10213e93244e9eb7cad.jpeg",
    "rating": 4.6,
    "deliveryFee": 2.99,
    "deliveryTime": "20-30 min",
    "categories": ["Healthy"],
    "dishes": [
      {
        "id": 43,
        "name": "Salada Caesar",
        "price": 12.99,
        "description": "Alface americana, croutons, queijo parmesão e molho Caesar.",
        "image": "https://media.istockphoto.com/id/2165274526/pt/foto/chicken-caesar-pasta-salad-with-sauce-in-white-plate-healthy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=jM7LZc7VCPwi0C09Y_jgUPfiIIzCpoGuoYkKwlTwpks=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Molho Caesar Extra", "emoji": "🥄", "price": 0 },
            { "id": 2, "name": "Pepitas", "emoji": "🌰", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Peito de Frango Grelhado", "emoji": "🍗", "price": 4.99 },
            { "id": 2, "name": "Queijo de Cabra", "emoji": "🧀", "price": 2.99 },
            { "id": 3, "name": "Abacate", "emoji": "🥑", "price": 1.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 48,
            "name": "Suco Detox Verde",
            "price": 7.49,
            "description": "Acompanhamento perfeito para sua salada Caesar.",
            "image": "https://images.unsplash.com/photo-1543648973-1eb94629e7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VjbyUyMERldG94JTIwVmVyZGV8ZW58MHx8MHx8fDA%3D"
          }
        ]
      },
      {
        "id": 44,
        "name": "Wrap Vegano",
        "price": 10.49,
        "description": "Tortilla recheada com vegetais grelhados e homus.",
        "image": "https://media.istockphoto.com/id/1157957733/pt/foto/tortilla-with-vegetables-and-hummus-with-chickpeas.webp?a=1&b=1&s=612x612&w=0&k=20&c=y2USOOCeM8Ykt2nnOAaZ4JFLZRZEaotPAVqQluLVPEQ=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Batata Doce Assada", "emoji": "🍠", "price": 2.49 },
            { "id": 2, "name": "Molho Tahine", "emoji": "🥄", "price": 1.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 49,
            "name": "Smoothie de Frutas Vermelhas",
            "price": 8.99,
            "description": "Combinação refrescante para seu wrap vegano.",
            "image": "https://media.istockphoto.com/id/856746566/pt/foto/berries-overhead-mix-in-heart-shaped-ceramic-jar-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=WvzxsMDegkGWfFJ4sJtU-MKdPUITsz8CaNVDoNio7KE="
          }
        ]
      },
      {
        "id": 45,
        "name": "Quinoa Bowl",
        "price": 14.99,
        "description": "Quinoa com vegetais, grão de bico e molho de limão.",
        "image": "https://media.istockphoto.com/id/937016542/pt/foto/quinoa-salad-with-beet-root-and-spinach.webp?a=1&b=1&s=612x612&w=0&k=20&c=MA4Q8fTXL7AAr9Zmwx11iOi7Em-Lc2jDBOB4oCZ4IRw=",
        "accompaniments": {
          "free": [
            { "id": 1, "name": "Molho de Limão Extra", "emoji": "🍋", "price": 0 }
          ],
          "paid": [
            { "id": 1, "name": "Grão de Bico Grelhado", "emoji": "🧆", "price": 2.99 },
            { "id": 2, "name": "Abacate", "emoji": "🥑", "price": 1.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 50,
            "name": "Água de Coco",
            "price": 3.99,
            "description": "Refrescante e saudável, combina com o Quinoa Bowl.",
            "image": "https://media.istockphoto.com/id/1085813444/pt/foto/fresh-coconut-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=PvUMw2FPjUbIhVHZehGEEI1YGyktkzucE-rKz3ZDW3s="
          }
        ]
      },
      {
        "id": 46,
        "name": "Suco Detox Verde",
        "price": 7.49,
        "description": "Suco de couve, limão, gengibre e maçã.",
        "image": "https://images.unsplash.com/photo-1543648973-1eb94629e7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VjbyUyMERldG94JTIwVmVyZGV8ZW58MHx8MHx8fDA%3D",
        "accompaniments": {
          "free": [],
          "paid": []
        }
      },
      {
        "id": 47,
        "name": "Smoothie de Frutas Vermelhas",
        "price": 8.99,
        "description": "Smoothie com morango, amora e framboesa.",
        "image": "https://media.istockphoto.com/id/856746566/pt/foto/berries-overhead-mix-in-heart-shaped-ceramic-jar-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=WvzxsMDegkGWfFJ4sJtU-MKdPUITsz8CaNVDoNio7KE=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Chia", "emoji": "🌱", "price": 1.49 },
            { "id": 2, "name": "Granola", "emoji": "🍯", "price": 2.49 }
          ]
        }
      }
    ]
  },  
  {
    "id": 11,
    "name": "Drink Lounge",
    "image": "https://media.istockphoto.com/id/1284577129/pt/foto/red-drink-with-patefon-in-the-club.webp?a=1&b=1&s=612x612&w=0&k=20&c=YR5LY0jcTYXtZp50MZ6uxdy0QGRdsg66328ql6dAZYI=",
    "rating": 4.5,
    "deliveryFee": 2.5,
    "deliveryTime": "15-25 min",
    "categories": ["Drinks"],
    "dishes": [
      {
        "id": 48,
        "name": "Caipirinha",
        "price": 9.99,
        "description": "Cachaça, limão, açúcar e gelo.",
        "image": "https://media.istockphoto.com/id/175239466/pt/foto/caipirinha-brasil-nacional-de-bebidas.webp?a=1&b=1&s=612x612&w=0&k=20&c=CfJKV0mnhOMXdwim130VjE9L5cgEda2_fKjFYY9SG3E=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Maracujá", "emoji": "🍊", "price": 1.99 },
            { "id": 2, "name": "Gengibre", "emoji": "🌱", "price": 1.49 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 53,
            "name": "Porção de Pastéis",
            "price": 12.99,
            "description": "Pastéis variados (carne, queijo e palmito) para acompanhar sua caipirinha.",
            "image": "https://media.istockphoto.com/id/1302842871/pt/foto/brazilian-snack.webp?a=1&b=1&s=612x612&w=0&k=20&c=5w0MnqfHrVryFM_8FSVpeEJ9_wNG-hBb-sZ6HLx26j8="
          }
        ]
      },
      {
        "id": 49,
        "name": "Mojito",
        "price": 11.99,
        "description": "Rum, hortelã, açúcar, soda e limão.",
        "image": "https://media.istockphoto.com/id/1019323316/pt/foto/mint-mojito-cocktail.webp?a=1&b=1&s=612x612&w=0&k=20&c=CmPNlh3247x-QAbIKG0AXCo209NOIGEvyLn0PaIuw5I=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Framboesa", "emoji": "🍇", "price": 1.99 },
            { "id": 2, "name": "Lima", "emoji": "🍋", "price": 0.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 54,
            "name": "Batatas Rústicas",
            "price": 9.99,
            "description": "Batatas rústicas temperadas, perfeitas para acompanhar seu mojito.",
            "image": "https://media.istockphoto.com/id/185283334/pt/foto/batatas-r%C3%BAsticas.webp?a=1&b=1&s=612x612&w=0&k=20&c=szk19ZQtFOEJSb5My_-ATKoa0Y5O1XPDr4RdVoAMq7k="
          }
        ]
      },
      {
        "id": 50,
        "name": "Suco de Maracujá",
        "price": 6.99,
        "description": "Suco natural de maracujá.",
        "image": "https://media.istockphoto.com/id/503191417/pt/foto/vidro-com-suco-de-maracuja.webp?a=1&b=1&s=612x612&w=0&k=20&c=pbueIEGDpfu3n_tNYneW2yvhyatwEVGRS1J0a4rshPU=",
        "accompaniments": {
          "free": [],
          "paid": []
        },
        "suggestedAddOns": [
          {
            "id": 55,
            "name": "Tapioca de Coco",
            "price": 4.99,
            "description": "Sobremesa leve para complementar seu suco de maracujá.",
            "image": "https://media.istockphoto.com/id/1323933087/pt/foto/tapioca-dessert.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOKH9tXwqeD5fwQoF7NfI_4UXo8E11QllXkRFLBb1kw="
          }
        ]
      },
      {
        "id": 51,
        "name": "Café Gelado",
        "price": 5.49,
        "description": "Café espresso gelado com leite.",
        "image": "https://media.istockphoto.com/id/1148105963/pt/foto/two-glass-jars-of-ice-coffee-in-woman-and-man-hands.webp?a=1&b=1&s=612x612&w=0&k=20&c=ULa49IEcwwqernx0e_lyyJoEnqD6vLBTB3znaMHT1tU=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Caramelo", "emoji": "🍯", "price": 1.49 },
            { "id": 2, "name": "Chocolate", "emoji": "🍫", "price": 1.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 56,
            "name": "Cookies Artesanais",
            "price": 3.99,
            "description": "Cookies feitos à mão, ideais para acompanhar seu café gelado.",
            "image": "https://media.istockphoto.com/id/1124746396/pt/foto/homemade-cookies.webp?a=1&b=1&s=612x612&w=0&k=20&c=clJNZwRGUV5eNbdhSz-_xA96UDlyURaw-2nFxXBd8T0="
          }
        ]
      },
      {
        "id": 52,
        "name": "Chá Gelado de Hibisco",
        "price": 7.49,
        "description": "Chá gelado de hibisco com limão.",
        "image": "https://media.istockphoto.com/id/182314121/pt/foto/frio-actualizar-berry-hibisco-ch%C3%A1-gelado.webp?a=1&b=1&s=612x612&w=0&k=20&c=kRX990Wd8IGMO0zQr0ZIWhakmeV_ZyeZPPtgfW_I2U8=",
        "accompaniments": {
          "free": [],
          "paid": [
            { "id": 1, "name": "Folhas de Hortelã", "emoji": "🌿", "price": 1.49 },
            { "id": 2, "name": "Rodelas de Limão", "emoji": "🍋", "price": 0.99 }
          ]
        },
        "suggestedAddOns": [
          {
            "id": 57,
            "name": "Salada de Frutas",
            "price": 6.99,
            "description": "Salada de frutas tropicais para refrescar ainda mais.",
            "image": "https://media.istockphoto.com/id/183891595/pt/foto/salada-de-frutas.webp?a=1&b=1&s=612x612&w=0&k=20&c=ADq2IG5ZxnxPUOYxDdMD95kA2vC_x38BVbTwemzdfCA="
          }
        ]
      }
    ]
  },  
  {
    "id": 12,
    "name": "SuperMart",
    "image": "https://plus.unsplash.com/premium_photo-1678187782578-70b5a348f502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U3VwZXJNYXJ0fGVufDB8fDB8fHww",
    "rating": 4.4,
    "deliveryFee": 5.99,
    "deliveryTime": "40-60 min",
    "categories": ["Markets"],
    "dishes": [
      {
        "id": 53,
        "name": "Arroz 5kg",
        "price": 18.99,
        "description": "Arroz branco tipo 1, pacote de 5kg.",
        "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFycm96JTIwNWtnfGVufDB8fDB8fHww",
        "suggestedAddOns": [
          {
            "id": 54,
            "name": "Óleo de Soja 1L",
            "price": 7.99,
            "description": "Óleo de soja refinado, 1L.",
            "image": "https://media.istockphoto.com/id/694044152/pt/foto/chicken-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bf3hUqmOJJXiEIW4fcylhnoumQsJ0Bm_a6gcsx92hLc="
          },
          {
            "id": 55,
            "name": "Banana Prata (1kg)",
            "price": 4.49,
            "description": "Bananas prata frescas por quilo.",
            "image": "https://plus.unsplash.com/premium_photo-1681414728888-c2360c8852f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFuYW5hJTIwUHJhdGElMjAoMWtnKXxlbnwwfHwwfHx8MA%3D%3D"
          }
        ]
      },
      {
        "id": 56,
        "name": "Carne Moída (1kg)",
        "price": 32.99,
        "description": "Carne moída de primeira, 1kg.",
        "image": "https://media.istockphoto.com/id/1341859890/pt/foto/extra-lean-ground-beef.webp?a=1&b=1&s=612x612&w=0&k=20&c=4ZyOg31ypH_WBiCzdlnf1rmgwJG-B8lcMEQ6BPRjHAA=",
        "suggestedAddOns": [
          {
            "id": 53,
            "name": "Arroz 5kg",
            "price": 18.99,
            "description": "Arroz branco tipo 1, pacote de 5kg.",
            "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFycm96JTIwNWtnfGVufDB8fDB8fHww"
          },
          {
            "id": 54,
            "name": "Óleo de Soja 1L",
            "price": 7.99,
            "description": "Óleo de soja refinado, 1L.",
            "image": "https://media.istockphoto.com/id/694044152/pt/foto/chicken-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bf3hUqmOJJXiEIW4fcylhnoumQsJ0Bm_a6gcsx92hLc="
          }
        ]
      },
      {
        "id": 57,
        "name": "Feijão Preto 1kg",
        "price": 9.99,
        "description": "Feijão preto tipo 1, pacote de 1kg.",
        "image": "https://media.istockphoto.com/id/1214480519/pt/foto/black-beans.webp?a=1&b=1&s=612x612&w=0&k=20&c=srdIXNOcNmkiKn1ybJoAWduNEZLCH1OxlkZZPpSY51M=",
        "suggestedAddOns": [
          {
            "id": 54,
            "name": "Óleo de Soja 1L",
            "price": 7.99,
            "description": "Óleo de soja refinado, 1L.",
            "image": "https://media.istockphoto.com/id/694044152/pt/foto/chicken-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bf3hUqmOJJXiEIW4fcylhnoumQsJ0Bm_a6gcsx92hLc="
          },
          {
            "id": 58,
            "name": "Calabresa Defumada (500g)",
            "price": 15.49,
            "description": "Calabresa defumada embalada a vácuo, 500g.",
            "image": "https://media.istockphoto.com/id/1271770765/pt/foto/brazilian-sausage.webp?a=1&b=1&s=612x612&w=0&k=20&c=SpY12rwHKoxapygAvdOapc__oVcmR1D_dSEiP0YPKRo="
          }
        ]
      }
    ]
  },  
  {
    "id": 13,
    "name": "Panificadora Delícia",
    "image": "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuaWZpY2Fkb3JhJTIwRGVsJUMzJUFEY2lhfGVufDB8fDB8fHww",
    "rating": 4.8,
    "deliveryFee": 2.99,
    "deliveryTime": "15-25 min",
    "categories": ["Bakery"],
    "dishes": [
      {
        "id": 57,
        "name": "Pão Francês (10 unidades)",
        "price": 6.99,
        "description": "Tradicional pão francês fresquinho.",
        "image": "https://media.istockphoto.com/id/1203260587/pt/foto/freshly-baked-mexican-bolillo-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=o0pFaepD8ttsRS64j6LcOjCMMocu7usCT58Hn-HZT1I=",
        "suggestedAddOns": [
          {
            "id": 60,
            "name": "Manteiga 200g",
            "price": 4.99,
            "description": "Manteiga cremosa para passar no pão.",
            "image": "https://media.istockphoto.com/id/1152466247/pt/foto/fresh-butter.webp?a=1&b=1&s=612x612&w=0&k=20&c=AIlnvPvVle7p2X8IctcCL9e18U4GR7f1HLYAx7NSXFY="
          },
          {
            "id": 61,
            "name": "Queijo Minas 500g",
            "price": 19.99,
            "description": "Queijo minas fresco para complementar.",
            "image": "https://media.istockphoto.com/id/1366479659/pt/foto/white-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=_CStMv_sg7BAGwT6D0Pi4WWu3CX5KzkHX24UwCGFAuE="
          }
        ]
      },
      {
        "id": 58,
        "name": "Bolo de Milho",
        "price": 12.99,
        "description": "Bolo de milho caseiro.",
        "image": "https://media.istockphoto.com/id/1015457776/pt/foto/breakfast-cornmeal-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=NbK6stJVZeT7xhXWwZNZZ_TX_AfX5vTtbwggVob5Dsk=",
        "suggestedAddOns": [
          {
            "id": 62,
            "name": "Café Coado 500ml",
            "price": 6.49,
            "description": "Café coado fresquinho, ideal para acompanhar o bolo.",
            "image": "https://media.istockphoto.com/id/1127396059/pt/foto/coffee-pouring-from-the-pot.webp?a=1&b=1&s=612x612&w=0&k=20&c=fpHJ6TZSzTzZCPcqk5MLBRzHvEXns8Y8Ghrq5c9a41A="
          },
          {
            "id": 63,
            "name": "Leite 1L",
            "price": 4.99,
            "description": "Leite integral para acompanhar.",
            "image": "https://media.istockphoto.com/id/1246469751/pt/foto/milk.webp?a=1&b=1&s=612x612&w=0&k=20&c=kGkMi1Wx_VdsSHRTm8MEL6Hgdbt8Or3ST0VVgkhX_yI="
          }
        ]
      },
      {
        "id": 59,
        "name": "Sonho de Creme",
        "price": 3.99,
        "description": "Sonho recheado com creme.",
        "image": "https://media.istockphoto.com/id/1346757975/pt/foto/known-in-brazil-as-a-dream.webp?a=1&b=1&s=612x612&w=0&k=20&c=fMM_EU4pjdBoO70N8f4ViSSc_gLLVjyBP4zeVPsZznk=",
        "suggestedAddOns": [
          {
            "id": 64,
            "name": "Cappuccino 300ml",
            "price": 8.49,
            "description": "Cappuccino cremoso, perfeito para acompanhar o sonho.",
            "image": "https://media.istockphoto.com/id/1134860438/pt/foto/cappuccino.webp?a=1&b=1&s=612x612&w=0&k=20&c=jkt9bPSlSQ96aBx7NiQwNzQmWmsm65VWNrpxuRMyiLg="
          },
          {
            "id": 65,
            "name": "Chocolate Quente 300ml",
            "price": 7.99,
            "description": "Bebida quente e doce para complementar.",
            "image": "https://media.istockphoto.com/id/1164524036/pt/foto/hot-chocolate.webp?a=1&b=1&s=612x612&w=0&k=20&c=RtSpDzwXzM5AEl6Kh6JbhF8mdQy9lLbFJGkzLgRR07E="
          }
        ]
      }
    ]
  },  
  {
    "id": 14,
    "name": "Adega Brasil",
    "image": "https://media.istockphoto.com/id/1189207012/pt/foto/storage-of-several-barrels-of-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=2CKInn0uVR6LOHrE4hYMT5aS43xkWz-VCiapd6k6MJc=",
    "rating": 4.6,
    "deliveryFee": 3.99,
    "deliveryTime": "20-30 min",
    "categories": ["Wine & Spirits"],
    "dishes": [
      {
        "id": 60,
        "name": "Vinho Tinto Malbec",
        "price": 59.99,
        "description": "Vinho argentino, 750ml.",
        "image": "https://media.istockphoto.com/id/513253798/pt/foto/copos-de-vinho-tinto.webp?a=1&b=1&s=612x612&w=0&k=20&c=BGg1L9Zz84GO2cd1PtWMqorE7Ir0U4F9LksqjkbVrHU=",
        "suggestedAddOns": [
          {
            "id": 63,
            "name": "Tábua de Queijos",
            "price": 39.99,
            "description": "Variedade de queijos selecionados para harmonizar com vinho.",
            "image": "https://media.istockphoto.com/id/1182762904/pt/foto/cheese-platter.webp?a=1&b=1&s=612x612&w=0&k=20&c=c_6cVoqSbfvXMEtQsJUIAAfu7oboykXPoHHT5YthcKw="
          },
          {
            "id": 64,
            "name": "Pães Artesanais",
            "price": 14.99,
            "description": "Cesta com pães artesanais variados.",
            "image": "https://media.istockphoto.com/id/1413396372/pt/foto/artisan-breads.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZlNQU3czLnmJGFPaxDjaRpYAfSmmp8unOHcpWWR6hnU="
          }
        ]
      },
      {
        "id": 61,
        "name": "Whisky Red Label",
        "price": 99.99,
        "description": "Whisky escocês, 1L.",
        "image": "https://images.unsplash.com/photo-1534221905680-192a9a88ac81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwTGFiZWx8ZW58MHx8MHx8fDA%3D",
        "suggestedAddOns": [
          {
            "id": 65,
            "name": "Gelo de Coco",
            "price": 9.99,
            "description": "Cubos de gelo feitos com água de coco para um toque especial.",
            "image": "https://media.istockphoto.com/id/1146508123/pt/foto/coconut-ice-cubes.webp?a=1&b=1&s=612x612&w=0&k=20&c=sPWh8IXQDWNCHEex2dLNV4cRIr5XC6ZWT1fUP4uYRxM="
          },
          {
            "id": 66,
            "name": "Petiscos de Carne Seca",
            "price": 19.99,
            "description": "Tirinhas de carne seca temperada, perfeitas para acompanhar.",
            "image": "https://media.istockphoto.com/id/1283513756/pt/foto/dry-meat-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k93CSNptHGUnRoE8AsreHGRP1L5GmhZ3YOuqctxyxZk="
          }
        ]
      },
      {
        "id": 62,
        "name": "Cerveja Artesanal IPA",
        "price": 12.99,
        "description": "Cerveja artesanal estilo IPA, 500ml.",
        "image": "https://media.istockphoto.com/id/1313934089/pt/foto/cold-glass-filled-with-beer.webp?a=1&b=1&s=612x612&w=0&k=20&c=RBdZRKxcpe8VszqWS9o6dMrXu0fjX2vmD0zhK2B5ZDc=",
        "suggestedAddOns": [
          {
            "id": 67,
            "name": "Amendoins Temperados",
            "price": 5.99,
            "description": "Amendoins temperados e crocantes.",
            "image": "https://media.istockphoto.com/id/1263841531/pt/foto/spicy-peanuts.webp?a=1&b=1&s=612x612&w=0&k=20&c=7hxpmk-UTXkHPjSmGzZFd_Hpt6PgAA3Xv5Uw7OY1unE="
          },
          {
            "id": 68,
            "name": "Mix de Castanhas",
            "price": 12.49,
            "description": "Mix de castanhas variadas, ideal para petiscar.",
            "image": "https://media.istockphoto.com/id/1331456044/pt/foto/mix-of-nuts.webp?a=1&b=1&s=612x612&w=0&k=20&c=pDQwKDWE5Xwv8rF5dDePCEZ9rT8DdZJ2WHI1bqTOvbw="
          }
        ]
      }
    ]
  },  
  {
    "id": 15,
    "name": "Farma Fácil",
    "image": "https://images.unsplash.com/photo-1523245332310-ff40ff34a419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmFybWFjaWF8ZW58MHx8MHx8fDA%3D",
    "rating": 4.5,
    "deliveryFee": 4.99,
    "deliveryTime": "25-35 min",
    "categories": ["Pharmacy"],
    "dishes": [
      {
        "id": 63,
        "name": "Paracetamol 500mg (20 comprimidos)",
        "price": 12.99,
        "description": "Analgésico e antitérmico.",
        "image": "https://media.istockphoto.com/id/1199617301/pt/foto/paracetamol-pain-and-fever-medication-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=AhSMySHQTE2vmIx5lf0_goMVZ8OaujcLxUUr5J17Z_4=",
        "suggestedAddOns": [
          {
            "id": 66,
            "name": "Termômetro Digital",
            "price": 34.99,
            "description": "Termômetro digital para medir a temperatura corporal.",
            "image": "https://media.istockphoto.com/id/1203471152/pt/foto/digital-thermometer.webp?a=1&b=1&s=612x612&w=0&k=20&c=vbSUx0cprfswO_qP_e8yb0LT0G9Oowx6CQIUXAKmYVA="
          },
          {
            "id": 67,
            "name": "Água Mineral (1L)",
            "price": 2.49,
            "description": "Ideal para manter a hidratação durante o tratamento.",
            "image": "https://media.istockphoto.com/id/1179385681/pt/foto/bottle-of-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=yQkQWcV9FG-PfKgROulcptzblFhG3jJ5wmz6mISvcLI="
          }
        ]
      },
      {
        "id": 64,
        "name": "Álcool em Gel 70%",
        "price": 8.99,
        "description": "Álcool em gel para higienização.",
        "image": "https://images.unsplash.com/photo-1586992953119-9d5d3ebf1da0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWxjb29sJTIwZW0lMjBnZWx8ZW58MHx8MHx8fDA%3D",
        "suggestedAddOns": [
          {
            "id": 68,
            "name": "Luvas Descartáveis (caixa com 100 unidades)",
            "price": 29.99,
            "description": "Luvas descartáveis para proteção adicional.",
            "image": "https://media.istockphoto.com/id/1207549937/pt/foto/disposable-gloves.webp?a=1&b=1&s=612x612&w=0&k=20&c=YIKpZ-T8vNQyVzWCoDd5dxNmXXNxuCKgiZT3-y0b5Og="
          },
          {
            "id": 69,
            "name": "Lenços Umedecidos Antissépticos",
            "price": 15.99,
            "description": "Pacote com lenços para higienização rápida.",
            "image": "https://media.istockphoto.com/id/1299336462/pt/foto/wet-wipes.webp?a=1&b=1&s=612x612&w=0&k=20&c=fym-q7FE8AkY3QXDF7QLGx-nJSsqzmjWCK6B8oPguE0="
          }
        ]
      },
      {
        "id": 65,
        "name": "Máscara Cirúrgica (caixa com 50 unidades)",
        "price": 24.99,
        "description": "Máscaras descartáveis.",
        "image": "https://media.istockphoto.com/id/869125416/pt/foto/white-protective-sterile-face-masks-on-vintage-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=J7MdzobS-TCsqfgFCvL814zUjSZmbn5bUPNKOh1ImcI=",
        "suggestedAddOns": [
          {
            "id": 70,
            "name": "Protetor Facial",
            "price": 39.99,
            "description": "Protetor facial reutilizável para proteção completa.",
            "image": "https://media.istockphoto.com/id/1212165462/pt/foto/protective-face-shield.webp?a=1&b=1&s=612x612&w=0&k=20&c=UQSDNxOSzDsH26wF03HWuwpy9iHccGzOIRBgyEOZdD0="
          },
          {
            "id": 71,
            "name": "Spray Antisséptico 250ml",
            "price": 12.99,
            "description": "Spray antisséptico para superfícies.",
            "image": "https://media.istockphoto.com/id/1207549937/pt/foto/antiseptic-spray.webp?a=1&b=1&s=612x612&w=0&k=20&c=im-RfSpXUwTFCTy4jsL30huXdnPY9DDdRtHsEn5xzII="
          }
        ]
      }
    ]
  },  
  {
    "id": 16,
    "name": "Mercado Rápido",
    "image": "https://media.istockphoto.com/id/1692067937/pt/foto/shopping-cart-on-target.webp?a=1&b=1&s=612x612&w=0&k=20&c=YJH4jmMxSo4MyYCrjfN6C3DrPIBTHyuSFfD0a9tqEG8=",
    "rating": 4.3,
    "deliveryFee": 4.99,
    "deliveryTime": "30-40 min",
    "categories": ["Markets"],
    "dishes": [
      {
        "id": 66,
        "name": "Café em Pó 500g",
        "price": 9.99,
        "description": "Café torrado e moído.",
        "image": "https://media.istockphoto.com/id/1399046802/pt/foto/coffee-powder-in-espresso-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=D7yhYNaZxywxg6BAHpoAi0Z9u-RTiIv_QIwjU5MAV7Y=",
        "suggestedAddOns": [
          {
            "id": 69,
            "name": "Filtro de Café (Pacote com 100 unidades)",
            "price": 7.99,
            "description": "Filtros de papel para café, tamanho padrão.",
            "image": "https://media.istockphoto.com/id/1368472057/pt/foto/coffee-filter.webp?a=1&b=1&s=612x612&w=0&k=20&c=fS3A6FIz9bxGp92Yqks5Xeic9SaVIXlbEraypSK8o-8="
          },
          {
            "id": 70,
            "name": "Bolachas Cream Cracker 400g",
            "price": 4.49,
            "description": "Bolachas salgadas ideais para acompanhar o café.",
            "image": "https://media.istockphoto.com/id/1077814532/pt/foto/crackers.webp?a=1&b=1&s=612x612&w=0&k=20&c=bCXJBB-KTPvRogAw3wO7ImccT9fX75v3XYKhgMue0vk="
          }
        ]
      },
      {
        "id": 67,
        "name": "Açúcar Refinado 1kg",
        "price": 4.49,
        "description": "Açúcar refinado de alta qualidade.",
        "image": "https://media.istockphoto.com/id/1371245517/pt/foto/granulated-white-sugar-in-wooden-bowl-isolated-on-white-background-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=tIIi_RlDRufp9gnKTF5FBvHUCedx971SY9IukMSZT4M=",
        "suggestedAddOns": [
          {
            "id": 71,
            "name": "Leite Integral 1L",
            "price": 5.49,
            "description": "Leite integral para combinar com receitas ou bebidas.",
            "image": "https://media.istockphoto.com/id/1246469751/pt/foto/milk.webp?a=1&b=1&s=612x612&w=0&k=20&c=xPvQfsA2SWbc9jrU1thRTv0pFwmA2H3P4Al3m2C1Tvo="
          },
          {
            "id": 72,
            "name": "Achocolatado em Pó 400g",
            "price": 7.99,
            "description": "Achocolatado em pó para bebidas doces e sobremesas.",
            "image": "https://media.istockphoto.com/id/1368489788/pt/foto/chocolate-powder.webp?a=1&b=1&s=612x612&w=0&k=20&c=NJ1GURul18-cYNUfxoO3MmrYtovvL2F-5IwtWt4Vh5Q="
          }
        ]
      },
      {
        "id": 68,
        "name": "Leite Integral 1L",
        "price": 5.49,
        "description": "Leite integral de alta qualidade.",
        "image": "https://images.unsplash.com/photo-1586992953119-9d5d3ebf1da0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVpdGV8ZW58MHx8MHx8fDA%3D",
        "suggestedAddOns": [
          {
            "id": 73,
            "name": "Biscoito Recheado (Pacote 200g)",
            "price": 3.99,
            "description": "Biscoitos recheados, perfeitos para acompanhar o leite.",
            "image": "https://media.istockphoto.com/id/1338541574/pt/foto/biscuits.webp?a=1&b=1&s=612x612&w=0&k=20&c=kKiYEevYYL_1YlhkOuswAPsNgzHL4hTLlRWx2y1P1-E="
          },
          {
            "id": 74,
            "name": "Granola Tradicional 500g",
            "price": 15.49,
            "description": "Granola rica em fibras para uma combinação saudável.",
            "image": "https://media.istockphoto.com/id/1227673268/pt/foto/granola.webp?a=1&b=1&s=612x612&w=0&k=20&c=RMoH3xUef-uOibUJtwNHwkwahvN3APrCQQobOTrfNgw="
          }
        ]
      }
    ]
  },  
  {
    "id": 17,
    "name": "Pão & Arte",
    "image": "https://media.istockphoto.com/id/1494437052/pt/foto/croissant-and-chocolate-bread-on-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=-ckj4m5YvWS-I-BudThT6xT0qKPlt7Sq06GqeIcso40=",
    "rating": 4.9,
    "deliveryFee": 3.49,
    "deliveryTime": "15-25 min",
    "categories": ["Bakery"],
    "dishes": [
      {
        "id": 69,
        "name": "Croissant",
        "price": 4.99,
        "description": "Croissant folhado e amanteigado.",
        "image": "https://media.istockphoto.com/id/1494437052/pt/foto/croissant-and-chocolate-bread-on-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=-ckj4m5YvWS-I-BudThT6xT0qKPlt7Sq06GqeIcso40=",
        "suggestedAddOns": [
          {
            "id": 72,
            "name": "Café Espresso",
            "price": 3.99,
            "description": "Café espresso quente para acompanhar o croissant.",
            "image": "https://media.istockphoto.com/id/182314121/pt/foto/espresso-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=9MPKMCPUnTmeezUw8ISg9pAvUihReOfRABrpA49LGic="
          },
          {
            "id": 73,
            "name": "Manteiga Extra",
            "price": 1.49,
            "description": "Porção extra de manteiga para seu croissant.",
            "image": "https://media.istockphoto.com/id/177067825/pt/foto/french-butter.webp?a=1&b=1&s=612x612&w=0&k=20&c=ghJbnJZY3cdLF2ODkeujO_KWHKnqxGVXGlWRGaxCeRM="
          }
        ]
      },
      {
        "id": 70,
        "name": "Torta de Maçã",
        "price": 9.99,
        "description": "Torta de maçã caseira.",
        "image": "https://images.unsplash.com/photo-1601000937971-d464714b9e6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9ydGElMjBkZSUyME1hJUMzJUE3JUMzJUEzfGVufDB8fDB8fHww",
        "suggestedAddOns": [
          {
            "id": 74,
            "name": "Chantilly",
            "price": 2.49,
            "description": "Chantilly cremoso para acompanhar a torta.",
            "image": "https://media.istockphoto.com/id/183366252/pt/foto/whipped-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=z9Y1Cc2dWPKMNRv1ogXVmlJ5O0vN3ReTpN1kmG7WfcM="
          },
          {
            "id": 75,
            "name": "Sorvete de Baunilha",
            "price": 3.99,
            "description": "Bola de sorvete de baunilha para complementar sua sobremesa.",
            "image": "https://media.istockphoto.com/id/1063364900/pt/foto/vanilla-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=_UjlLqCUULle3tImCwdHcaZwFwh_9E6gAoxsT_Siw8o="
          }
        ]
      },
      {
        "id": 71,
        "name": "Empada de Frango",
        "price": 3.99,
        "description": "Empada artesanal recheada com frango.",
        "image": "https://media.istockphoto.com/id/487635356/pt/foto/chicken-panela-tartes-com-massa-folhada.webp?a=1&b=1&s=612x612&w=0&k=20&c=YFOxPOtfxkhk8q-5eL8odxzUxmqXhqC43flMQzqYQXo=",
        "suggestedAddOns": [
          {
            "id": 76,
            "name": "Refrigerante Lata",
            "price": 2.99,
            "description": "Refrigerante gelado para acompanhar sua empada.",
            "image": "https://media.istockphoto.com/id/1593702892555/pt/foto/coca-cola.webp?a=1&b=1&s=612x612&w=0&k=20&c=KIvkeQEbO6ciD7IaM0GV-YAAq6f19EZsBKyL78eQnZk="
          },
          {
            "id": 77,
            "name": "Molho de Pimenta",
            "price": 0.99,
            "description": "Porção de molho de pimenta para acompanhar a empada.",
            "image": "https://media.istockphoto.com/id/182314121/pt/foto/hot-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=OV0TeVr1wRxGyGXpKJv6B8fGUbPCPiFzHpXmS5BhmQ0="
          }
        ]
      }
    ]
  },  
  {
    "id": 18,
    "name": "Vinhos do Mundo",
    "image": "https://media.istockphoto.com/id/629063668/pt/foto/red-wine-world.webp?a=1&b=1&s=612x612&w=0&k=20&c=uoIROKETDBtcMjKO3WaHq8ECzCF2bCZN1fFaYh2Zzo0=",
    "rating": 4.7,
    "deliveryFee": 3.99,
    "deliveryTime": "20-30 min",
    "categories": ["Wine & Spirits"],
    "dishes": [
      {
        "id": 72,
        "name": "Vinho Merlot",
        "price": 49.99,
        "description": "Vinho tinto Merlot, 750ml.",
        "image": "https://media.istockphoto.com/id/1297401631/pt/foto/red-wineglass-and-bottle-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=dQh0MrgMbdK0Z9qxi4guvSqLW1baF5DXMsjrpVH6Ka8=",
        "suggestedAddOns": [
          {
            "id": 75,
            "name": "Queijo Gouda",
            "price": 19.99,
            "description": "Queijo Gouda, ideal para acompanhar vinhos tintos.",
            "image": "https://media.istockphoto.com/id/478608830/pt/foto/gouda-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=tcXUItgSTrMs6IuTCtcDlXcCN9STWWGm61PIWF8qRu4="
          },
          {
            "id": 76,
            "name": "Taça de Vinho",
            "price": 14.99,
            "description": "Taça de vinho de cristal, 1 unidade.",
            "image": "https://media.istockphoto.com/id/1142180136/pt/foto/empty-wineglass.webp?a=1&b=1&s=612x612&w=0&k=20&c=MsZWuqbMdG8wnfLqixJw8O9C_RN5XqUBGLbHfrLoJis="
          }
        ]
      },
      {
        "id": 73,
        "name": "Cerveja Weiss",
        "price": 14.99,
        "description": "Cerveja artesanal estilo Weiss, 500ml.",
        "image": "https://images.unsplash.com/photo-1626875945326-1d608e0a140a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2VydmVqYSUyMFdlaXNzfGVufDB8fDB8fHww",
        "suggestedAddOns": [
          {
            "id": 77,
            "name": "Petiscos",
            "price": 12.99,
            "description": "Mix de petiscos para harmonizar com cervejas artesanais.",
            "image": "https://media.istockphoto.com/id/1154939200/pt/foto/beer-snack.webp?a=1&b=1&s=612x612&w=0&k=20&c=vysjKeGkRXg7BzAc7jJ2T2TrhsPpRAqJ8nvl40K27XA="
          },
          {
            "id": 78,
            "name": "Copo de Cerveja Weiss",
            "price": 9.99,
            "description": "Copo específico para cerveja Weiss, capacidade 500ml.",
            "image": "https://media.istockphoto.com/id/1179063774/pt/foto/weizenbier-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=ggWyklZ9uBaAnWXCkWRLZayPskkF7ZsoNW02Ipb9vbg="
          }
        ]
      },
      {
        "id": 74,
        "name": "Gin Premium",
        "price": 89.99,
        "description": "Gin destilado com ervas selecionadas.",
        "image": "https://images.unsplash.com/photo-1694886712802-6c656fb90173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2luJTIwUHJlbWl1bXxlbnwwfHwwfHx8MA%3D%3D",
        "suggestedAddOns": [
          {
            "id": 79,
            "name": "Água Tônica",
            "price": 5.99,
            "description": "Água tônica premium para preparo de Gin Tônica.",
            "image": "https://media.istockphoto.com/id/1204761525/pt/foto/tonic-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=MTTP5C5gVbAXTCIq5AlO-g0lvA-v7KK7PNF9Dy8fZfY="
          },
          {
            "id": 80,
            "name": "Rodelas de Limão Siciliano",
            "price": 2.49,
            "description": "Porção de rodelas de limão siciliano fresco.",
            "image": "https://media.istockphoto.com/id/1297438481/pt/foto/fresh-lemon.webp?a=1&b=1&s=612x612&w=0&k=20&c=qgPv8XyBEXhrO1l-UQh_4EMbsuVWfhZZZZxMvewy83Y="
          }
        ]
      }
    ]
  },  
  {
    "id": 19,
    "name": "Droga Rápida",
    "image": "https://images.unsplash.com/photo-1602188275935-6e578fc70b85?w=500&auto=format&fit=crop&q=60",
    "rating": 4.5,
    "deliveryFee": 4.99,
    "deliveryTime": "25-35 min",
    "categories": ["Pharmacy"],
    "dishes": [
      {
        "id": 75,
        "name": "Dipirona 500mg (20 comprimidos)",
        "price": 13.99,
        "description": "Analgésico e antitérmico.",
        "image": "https://images.unsplash.com/photo-1580287000551-71cd8e921ed4?w=500&auto=format&fit=crop&q=60",
        "suggestedAddOns": [
          {
            "id": 78,
            "name": "Água Mineral 500ml",
            "price": 2.99,
            "description": "Água mineral sem gás.",
            "image": "https://images.unsplash.com/photo-1512034247918-3c5d70e6e42c?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 79,
            "name": "Máscara Cirúrgica (5 unidades)",
            "price": 9.99,
            "description": "Máscaras descartáveis.",
            "image": "https://images.unsplash.com/photo-1585314062346-b2e84ac3083b?w=500&auto=format&fit=crop&q=60"
          }
        ]
      },
      {
        "id": 76,
        "name": "Protetor Solar FPS 50",
        "price": 49.99,
        "description": "Protetor solar para pele sensível.",
        "image": "https://images.unsplash.com/photo-1574169208507-843761748e2c?w=500&auto=format&fit=crop&q=60",
        "suggestedAddOns": [
          {
            "id": 80,
            "name": "Hidratante Facial",
            "price": 29.99,
            "description": "Hidratante facial para todos os tipos de pele.",
            "image": "https://images.unsplash.com/photo-1599731114694-77bb5e6e41f4?w=500&auto=format&fit=crop&q=60"
          }
        ]
      },
      {
        "id": 77,
        "name": "Termômetro Digital",
        "price": 39.99,
        "description": "Termômetro de alta precisão.",
        "image": "https://images.unsplash.com/photo-1612277799271-615df0b04b8b?w=500&auto=format&fit=crop&q=60",
        "suggestedAddOns": [
          {
            "id": 81,
            "name": "Lenços Desinfetantes",
            "price": 19.99,
            "description": "Lenços desinfetantes para superfícies.",
            "image": "https://images.unsplash.com/photo-1588444367685-439f205d1a3b?w=500&auto=format&fit=crop&q=60"
          }
        ]
      }
    ]
  },  
  {
    "id": 20,
    "name": "Casa da Pizza",
    "image": "https://media.istockphoto.com/id/1349383878/pt/foto/hawaiian-pizza-with-ham-and-pineapple.webp?a=1&b=1&s=612x612&w=0&k=20&c=HZcVlFFxR9X90doIV5m3XASHAnlBoCW0mopUBBcYebc=",
    "rating": 4.8,
    "deliveryFee": 3.99,
    "deliveryTime": "20-30 min",
    "categories": ["Pizza"],
    "dishes": [
      {
        "id": 78,
        "name": "Pizza Quatro Queijos",
        "price": 19.99,
        "description": "Pizza com mistura de queijos selecionados.",
        "image": "https://media.istockphoto.com/id/1744442094/pt/foto/pizza-quattro-fromaggi-on-a-wooden-board-four-cheese-pizza-or-quattro-formaggi-pizza-topped.webp?a=1&b=1&s=612x612&w=0&k=20&c=s8n4oA4ZIgVRJw0r6Jcc0-BgUc40HXkfQEcouA0Tt1w=",
        "suggestedAddOns": [
          {
            "id": 81,
            "name": "Refrigerante Lata",
            "price": 4.99,
            "description": "Lata de refrigerante 350ml.",
            "image": "https://images.unsplash.com/photo-1515005300416-bb150777af47?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 82,
            "name": "Molho de Alho",
            "price": 2.99,
            "description": "Molho especial de alho.",
            "image": "https://images.unsplash.com/photo-1592346200537-c8fc146f5d8c?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 101, "name": "Guardanapos", "emoji": "🧻" },
            { "id": 102, "name": "Talheres", "emoji": "🍴" }
          ],
          "paid": [
            { "id": 103, "name": "Molho Picante", "price": 1.99, "emoji": "🌶️" },
            { "id": 104, "name": "Queijo Extra", "price": 3.99, "emoji": "🧀" }
          ]
        }
      },
      {
        "id": 79,
        "name": "Pizza de Calabresa",
        "price": 17.99,
        "description": "Pizza com calabresa e cebola.",
        "image": "https://images.unsplash.com/photo-1681158924733-784eae8a9f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBpenphJTIwZGUlMjBDYWxhYnJlc2F8ZW58MHx8MHx8fDA%3D",
        "suggestedAddOns": [
          {
            "id": 83,
            "name": "Pimenta Extra",
            "price": 1.49,
            "description": "Pimenta especial para sua pizza.",
            "image": "https://images.unsplash.com/photo-1585652654456-fd354ea006b4?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 84,
            "name": "Borda Recheada",
            "price": 5.99,
            "description": "Borda recheada com queijo.",
            "image": "https://images.unsplash.com/photo-1592861953205-f2348e61af04?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 101, "name": "Guardanapos", "emoji": "🧻" },
            { "id": 102, "name": "Talheres", "emoji": "🍴" }
          ],
          "paid": [
            { "id": 105, "name": "Azeitonas Extras", "price": 2.49, "emoji": "🫒" },
            { "id": 106, "name": "Cebola Caramelizada", "price": 2.99, "emoji": "🧅" }
          ]
        }
      },
      {
        "id": 80,
        "name": "Pizza Portuguesa",
        "price": 21.99,
        "description": "Pizza com ovos, presunto e cebola.",
        "image": "https://media.istockphoto.com/id/1363507824/pt/foto/tasty-portuguese-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=_DplLwqh5gTHgTfleGMwxzJXr3LgP0dOZZcWU3bnpmc=",
        "suggestedAddOns": [
          {
            "id": 85,
            "name": "Azeitonas Extras",
            "price": 2.49,
            "description": "Porção extra de azeitonas.",
            "image": "https://images.unsplash.com/photo-1620632485378-bef5cfad0e45?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 86,
            "name": "Cerveja Long Neck",
            "price": 7.99,
            "description": "Cerveja gelada long neck.",
            "image": "https://images.unsplash.com/photo-1572802419229-961a4ce44404?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 101, "name": "Guardanapos", "emoji": "🧻" },
            { "id": 102, "name": "Talheres", "emoji": "🍴" }
          ],
          "paid": [
            { "id": 107, "name": "Orégano Extra", "price": 0.99, "emoji": "🌿" },
            { "id": 108, "name": "Presunto Extra", "price": 3.49, "emoji": "🥓" }
          ]
        }
      }
    ]
  },  
  {
    "id": 21,
    "name": "Delícias Orgânicas",
    "image": "https://plus.unsplash.com/premium_photo-1722073663467-4a8e47f2eeac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVsJUMzJUFEY2lhcyUyME9yZyVDMyVBMm5pY2FzfGVufDB8fDB8fHww",
    "rating": 4.9,
    "deliveryFee": 4.49,
    "deliveryTime": "25-35 min",
    "categories": ["Healthy", "Markets"],
    "dishes": [
      {
        "id": 81,
        "name": "Cenoura Orgânica (1kg)",
        "price": 7.49,
        "description": "Cenouras frescas orgânicas.",
        "image": "https://media.istockphoto.com/id/2170821757/pt/foto/pile-of-carrots-in-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=ctlZMHoeSKpGk1dw_rUqDARE6KCRkSkNHZFmu8NqMi8=",
        "suggestedAddOns": [
          {
            "id": 84,
            "name": "Hummus Orgânico",
            "price": 5.99,
            "description": "Pasta de grão-de-bico orgânico.",
            "image": "https://images.unsplash.com/photo-1591348273093-b985b59ba8b3?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 85,
            "name": "Molho Ranch Orgânico",
            "price": 4.49,
            "description": "Molho cremoso ideal para saladas.",
            "image": "https://images.unsplash.com/photo-1638391273487-d66356f68838?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 201, "name": "Sacos Biodegradáveis", "emoji": "♻️" },
            { "id": 202, "name": "Receitas Saudáveis", "emoji": "📖" }
          ],
          "paid": [
            { "id": 203, "name": "Ervas Finas", "price": 2.99, "emoji": "🌿" },
            { "id": 204, "name": "Gengibre Fresco (100g)", "price": 1.99, "emoji": "🍃" }
          ]
        }
      },
      {
        "id": 82,
        "name": "Tomate Orgânico (1kg)",
        "price": 9.99,
        "description": "Tomates maduros orgânicos.",
        "image": "https://media.istockphoto.com/id/847335116/pt/foto/tomatoes-on-the-vine.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gk3cFi8WQP-9Z1UTaxXRc8pPX8udNAJbjrRfluPfEo4=",
        "suggestedAddOns": [
          {
            "id": 86,
            "name": "Manjericão Fresco",
            "price": 2.49,
            "description": "Folhas de manjericão para temperar.",
            "image": "https://images.unsplash.com/photo-1594960162624-442097ad5bdb?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 87,
            "name": "Azeite Extra Virgem",
            "price": 9.99,
            "description": "Azeite orgânico de alta qualidade.",
            "image": "https://images.unsplash.com/photo-1577269634080-01915cbfb530?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 201, "name": "Sacos Biodegradáveis", "emoji": "♻️" },
            { "id": 202, "name": "Receitas Saudáveis", "emoji": "📖" }
          ],
          "paid": [
            { "id": 205, "name": "Orégano Orgânico", "price": 2.49, "emoji": "🌱" },
            { "id": 206, "name": "Vinagre Balsâmico", "price": 3.49, "emoji": "🧴" }
          ]
        }
      },
      {
        "id": 83,
        "name": "Mix de Verduras",
        "price": 12.49,
        "description": "Kit com espinafre, rúcula e alface.",
        "image": "https://media.istockphoto.com/id/1675960430/pt/foto/colorful-raw-fruits-and-vegetables-varied-vegan-food-vivid-rainbow-arrangement.webp?a=1&b=1&s=612x612&w=0&k=20&c=7BYk71PdLh3fjDfff0maLQA5xsfQNnK5z9_pjhh8qdU=",
        "suggestedAddOns": [
          {
            "id": 88,
            "name": "Croutons Caseiros",
            "price": 3.99,
            "description": "Croutons crocantes para salada.",
            "image": "https://images.unsplash.com/photo-1517363907692-6250f8e5707d?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 89,
            "name": "Queijo Ralado Orgânico",
            "price": 4.99,
            "description": "Queijo ralado para finalizar saladas.",
            "image": "https://images.unsplash.com/photo-1550948390-6ff7f9a8b7a4?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 201, "name": "Sacos Biodegradáveis", "emoji": "♻️" },
            { "id": 202, "name": "Receitas Saudáveis", "emoji": "📖" }
          ],
          "paid": [
            { "id": 207, "name": "Molho Caesar", "price": 3.49, "emoji": "🥗" },
            { "id": 208, "name": "Sementes de Chia", "price": 2.99, "emoji": "🌾" }
          ]
        }
      }
    ]
  },  
  {
    "id": 22,
    "name": "Café & Companhia",
    "image": "https://plus.unsplash.com/premium_photo-1673984588721-9be1d3c9d592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FmJUMzJUE5JTIwJTI2JTIwQ29tcGFuaGlhfGVufDB8fDB8fHww",
    "rating": 4.7,
    "deliveryFee": 2.99,
    "deliveryTime": "15-25 min",
    "categories": ["Bakery", "Drinks"],
    "dishes": [
      {
        "id": 84,
        "name": "Café Latte",
        "price": 6.99,
        "description": "Café com leite vaporizado.",
        "image": "https://images.unsplash.com/photo-1503240778100-fd245e17a273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FmJUMzJUE5JTIwTGF0dGV8ZW58MHx8MHx8fDA%3D",
        "suggestedAddOns": [
          {
            "id": 87,
            "name": "Canela em Pó",
            "price": 1.49,
            "description": "Adicione um toque especial ao seu café.",
            "image": "https://images.unsplash.com/photo-1598133897071-c3375d08a2c9?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 88,
            "name": "Chantilly",
            "price": 2.49,
            "description": "Finalize seu café com chantilly cremoso.",
            "image": "https://images.unsplash.com/photo-1598742369471-3b62ca309f25?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 301, "name": "Açúcar Mascavo", "emoji": "🍯" },
            { "id": 302, "name": "Guardanapo", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 303, "name": "Biscoito de Canela", "price": 3.99, "emoji": "🍪" },
            { "id": 304, "name": "Leite Desnatado", "price": 1.99, "emoji": "🥛" }
          ]
        }
      },
      {
        "id": 85,
        "name": "Capuccino",
        "price": 7.99,
        "description": "Café cremoso com espuma de leite.",
        "image": "https://media.istockphoto.com/id/1400194993/pt/foto/cappuccino-art.webp?a=1&b=1&s=612x612&w=0&k=20&c=eumthrYg21cIOA53QaK-EsJRBXCaiLpBcB_vBR9QZLQ=",
        "suggestedAddOns": [
          {
            "id": 89,
            "name": "Raspas de Chocolate",
            "price": 1.99,
            "description": "Dê um toque doce ao seu capuccino.",
            "image": "https://images.unsplash.com/photo-1600986603256-e0d93f82de15?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 90,
            "name": "Leite de Amêndoas",
            "price": 3.49,
            "description": "Substitua o leite tradicional por leite vegetal.",
            "image": "https://images.unsplash.com/photo-1606925797300-efb53c90d7a5?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 301, "name": "Açúcar Mascavo", "emoji": "🍯" },
            { "id": 302, "name": "Guardanapo", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 305, "name": "Doce de Leite", "price": 2.99, "emoji": "🍮" },
            { "id": 306, "name": "Avelãs Tostadas", "price": 4.99, "emoji": "🌰" }
          ]
        }
      },
      {
        "id": 86,
        "name": "Bolo de Chocolate",
        "price": 8.99,
        "description": "Bolo de chocolate caseiro.",
        "image": "https://media.istockphoto.com/id/1327828405/pt/foto/delicious-slice-of-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=IQDrXsyhEVJmcRiFPUcGO6tiZA4GT87VdsvEDghY8ME=",
        "suggestedAddOns": [
          {
            "id": 91,
            "name": "Calda de Chocolate",
            "price": 2.99,
            "description": "Para um bolo ainda mais delicioso.",
            "image": "https://images.unsplash.com/photo-1506808547685-e2ba962ded40?w=500&auto=format&fit=crop&q=60"
          },
          {
            "id": 92,
            "name": "Nozes Picadas",
            "price": 3.49,
            "description": "Adicione crocância ao seu bolo.",
            "image": "https://images.unsplash.com/photo-1601312522047-7a8a2d1c7338?w=500&auto=format&fit=crop&q=60"
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 301, "name": "Açúcar Mascavo", "emoji": "🍯" },
            { "id": 302, "name": "Guardanapo", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 307, "name": "Creme de Avelã", "price": 4.49, "emoji": "🍫" },
            { "id": 308, "name": "Frutas Vermelhas", "price": 5.99, "emoji": "🍓" }
          ]
        }
      }
    ]
  },  
  {
    "id": 23,
    "name": "Açougue Prime",
    "image": "https://media.istockphoto.com/id/2160537141/pt/foto/overhead-composition-with-raw-beef-cowboy-steak-and-butcher-tools-on-back-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=sPJW6o95XuA-31aX-szwDldUJEqcLiKiluk0jl24RWM=",
    "rating": 4.8,
    "deliveryFee": 5.99,
    "deliveryTime": "30-40 min",
    "categories": ["Markets", "Meats"],
    "dishes": [
      {
        "id": 87,
        "name": "Picanha Bovina (1kg)",
        "price": 89.99,
        "description": "Picanha fresca ideal para churrasco.",
        "image": "https://media.istockphoto.com/id/1488646231/pt/foto/brazilian-picanha-raw-meat-angus.webp?a=1&b=1&s=612x612&w=0&k=20&c=PeTedaf6jqQ2XNlKBZzsPQ39N0A5whpoa_7Ato33KA0=",
        "suggestedAddOns": [
          {
            "id": 90,
            "name": "Tempero Chimichurri",
            "price": 12.49,
            "description": "Tempero argentino para realçar o sabor.",
            "image": "https://media.istockphoto.com/id/497494208/pt/foto/herbal-mix.webp?a=1&b=1&s=612x612&w=0&k=20&c=abFE2fDQkriPlLD4O_SjDY_VaETNQ51xZ4AiV7Ml3B8="
          },
          {
            "id": 91,
            "name": "Carvão Vegetal (5kg)",
            "price": 29.99,
            "description": "Ideal para um churrasco perfeito.",
            "image": "https://media.istockphoto.com/id/527659506/pt/foto/burning-charcoal.webp?a=1&b=1&s=612x612&w=0&k=20&c=XirfAE9VulUfd99NcYQ1PSuPh2Qv_dqxHTq2nEKN_xo="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 401, "name": "Sacos de Lixo", "emoji": "🗑️" },
            { "id": 402, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 403, "name": "Farofa Pronta", "price": 5.99, "emoji": "🥄" },
            { "id": 404, "name": "Vinagrete", "price": 7.99, "emoji": "🥗" }
          ]
        }
      },
      {
        "id": 88,
        "name": "Fraldinha (1kg)",
        "price": 72.99,
        "description": "Fraldinha suculenta e macia.",
        "image": "https://media.istockphoto.com/id/1454241575/pt/foto/flank-steak-raw.webp?a=1&b=1&s=612x612&w=0&k=20&c=SF4Y5JfhW1KOBRjKBbYkuTi3uxYh0Qb9Qnug9smoVQo=",
        "suggestedAddOns": [
          {
            "id": 92,
            "name": "Espetos de Madeira (10 unidades)",
            "price": 8.49,
            "description": "Espetos resistentes para churrasco.",
            "image": "https://media.istockphoto.com/id/1332703044/pt/foto/bamboo-skewers.webp?a=1&b=1&s=612x612&w=0&k=20&c=IMa-dMfAwKNcMPZR6biuUZYMyDO-TgAkvGBEtABdGmo="
          },
          {
            "id": 93,
            "name": "Manteiga de Alho",
            "price": 6.99,
            "description": "Ideal para grelhar a carne.",
            "image": "https://media.istockphoto.com/id/1127986813/pt/foto/garlic-butter.webp?a=1&b=1&s=612x612&w=0&k=20&c=lgW49qrYbOlURkEd-TDBhfsO-A2-PENXxGTk1FvdZ1A="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 401, "name": "Sacos de Lixo", "emoji": "🗑️" },
            { "id": 402, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 405, "name": "Molho Barbecue", "price": 9.99, "emoji": "🍶" },
            { "id": 406, "name": "Sal Grosso", "price": 3.49, "emoji": "🧂" }
          ]
        }
      },
      {
        "id": 89,
        "name": "Linguiça Toscana (1kg)",
        "price": 23.99,
        "description": "Linguiça toscana artesanal.",
        "image": "https://media.istockphoto.com/id/1299358511/pt/foto/brazilian-sausage.webp?a=1&b=1&s=612x612&w=0&k=20&c=0tFPDCQw_NIM8yZ_h-zIU4Iui0-kTAoBErvyKr8uXBQ=",
        "suggestedAddOns": [
          {
            "id": 94,
            "name": "Molho de Mostarda",
            "price": 5.49,
            "description": "Perfeito para acompanhar a linguiça.",
            "image": "https://media.istockphoto.com/id/1488722966/pt/foto/homemade-mustard.webp?a=1&b=1&s=612x612&w=0&k=20&c=8aC_U6ELH_SpNeGo8wAje82-QutpAflcDXbOgUjDkP4="
          },
          {
            "id": 95,
            "name": "Cebolas Caramelizadas",
            "price": 4.99,
            "description": "Para um toque doce e saboroso.",
            "image": "https://media.istockphoto.com/id/166092729/pt/foto/caramelized-onions.webp?a=1&b=1&s=612x612&w=0&k=20&c=d8C0bLuDYrYrQDNfsnQjP0iCMw6ECwV-HUutWcK16Ls="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 401, "name": "Sacos de Lixo", "emoji": "🗑️" },
            { "id": 402, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 407, "name": "Pães de Alho", "price": 8.99, "emoji": "🍞" },
            { "id": 408, "name": "Vinagrete", "price": 7.99, "emoji": "🥗" }
          ]
        }
      }
    ]
  },  
  {
    "id": 23,
    "name": "Açougue Prime",
    "image": "https://media.istockphoto.com/id/2160537141/pt/foto/overhead-composition-with-raw-beef-cowboy-steak-and-butcher-tools-on-back-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=sPJW6o95XuA-31aX-szwDldUJEqcLiKiluk0jl24RWM=",
    "rating": 4.8,
    "deliveryFee": 5.99,
    "deliveryTime": "30-40 min",
    "categories": ["Markets", "Meats"],
    "dishes": [
      {
        "id": 87,
        "name": "Picanha Bovina (1kg)",
        "price": 89.99,
        "description": "Picanha fresca ideal para churrasco.",
        "image": "https://media.istockphoto.com/id/1488646231/pt/foto/brazilian-picanha-raw-meat-angus.webp?a=1&b=1&s=612x612&w=0&k=20&c=PeTedaf6jqQ2XNlKBZzsPQ39N0A5whpoa_7Ato33KA0=",
        "suggestedAddOns": [
          {
            "id": 90,
            "name": "Tempero Chimichurri",
            "price": 12.49,
            "description": "Tempero argentino para realçar o sabor.",
            "image": "https://media.istockphoto.com/id/497494208/pt/foto/herbal-mix.webp?a=1&b=1&s=612x612&w=0&k=20&c=abFE2fDQkriPlLD4O_SjDY_VaETNQ51xZ4AiV7Ml3B8="
          },
          {
            "id": 91,
            "name": "Carvão Vegetal (5kg)",
            "price": 29.99,
            "description": "Ideal para um churrasco perfeito.",
            "image": "https://media.istockphoto.com/id/527659506/pt/foto/burning-charcoal.webp?a=1&b=1&s=612x612&w=0&k=20&c=XirfAE9VulUfd99NcYQ1PSuPh2Qv_dqxHTq2nEKN_xo="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 401, "name": "Sacos de Lixo", "emoji": "🗑️" },
            { "id": 402, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 403, "name": "Farofa Pronta", "price": 5.99, "emoji": "🥄" },
            { "id": 404, "name": "Vinagrete", "price": 7.99, "emoji": "🥗" }
          ]
        }
      },
      {
        "id": 88,
        "name": "Fraldinha (1kg)",
        "price": 72.99,
        "description": "Fraldinha suculenta e macia.",
        "image": "https://media.istockphoto.com/id/1454241575/pt/foto/flank-steak-raw.webp?a=1&b=1&s=612x612&w=0&k=20&c=SF4Y5JfhW1KOBRjKBbYkuTi3uxYh0Qb9Qnug9smoVQo=",
        "suggestedAddOns": [
          {
            "id": 92,
            "name": "Espetos de Madeira (10 unidades)",
            "price": 8.49,
            "description": "Espetos resistentes para churrasco.",
            "image": "https://media.istockphoto.com/id/1332703044/pt/foto/bamboo-skewers.webp?a=1&b=1&s=612x612&w=0&k=20&c=IMa-dMfAwKNcMPZR6biuUZYMyDO-TgAkvGBEtABdGmo="
          },
          {
            "id": 93,
            "name": "Manteiga de Alho",
            "price": 6.99,
            "description": "Ideal para grelhar a carne.",
            "image": "https://media.istockphoto.com/id/1127986813/pt/foto/garlic-butter.webp?a=1&b=1&s=612x612&w=0&k=20&c=lgW49qrYbOlURkEd-TDBhfsO-A2-PENXxGTk1FvdZ1A="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 401, "name": "Sacos de Lixo", "emoji": "🗑️" },
            { "id": 402, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 405, "name": "Molho Barbecue", "price": 9.99, "emoji": "🍶" },
            { "id": 406, "name": "Sal Grosso", "price": 3.49, "emoji": "🧂" }
          ]
        }
      },
      {
        "id": 89,
        "name": "Linguiça Toscana (1kg)",
        "price": 23.99,
        "description": "Linguiça toscana artesanal.",
        "image": "https://media.istockphoto.com/id/1299358511/pt/foto/brazilian-sausage.webp?a=1&b=1&s=612x612&w=0&k=20&c=0tFPDCQw_NIM8yZ_h-zIU4Iui0-kTAoBErvyKr8uXBQ=",
        "suggestedAddOns": [
          {
            "id": 94,
            "name": "Molho de Mostarda",
            "price": 5.49,
            "description": "Perfeito para acompanhar a linguiça.",
            "image": "https://media.istockphoto.com/id/1488722966/pt/foto/homemade-mustard.webp?a=1&b=1&s=612x612&w=0&k=20&c=8aC_U6ELH_SpNeGo8wAje82-QutpAflcDXbOgUjDkP4="
          },
          {
            "id": 95,
            "name": "Cebolas Caramelizadas",
            "price": 4.99,
            "description": "Para um toque doce e saboroso.",
            "image": "https://media.istockphoto.com/id/166092729/pt/foto/caramelized-onions.webp?a=1&b=1&s=612x612&w=0&k=20&c=d8C0bLuDYrYrQDNfsnQjP0iCMw6ECwV-HUutWcK16Ls="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 401, "name": "Sacos de Lixo", "emoji": "🗑️" },
            { "id": 402, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 407, "name": "Pães de Alho", "price": 8.99, "emoji": "🍞" },
            { "id": 408, "name": "Vinagrete", "price": 7.99, "emoji": "🥗" }
          ]
        }
      }
    ]
  },  
  {
    "id": 25,
    "name": "Chocolateria do Cacau",
    "image": "https://media.istockphoto.com/id/1413355713/pt/foto/bright-colorful-cacao-plant-pod.webp?a=1&b=1&s=612x612&w=0&k=20&c=rBxlf5ysRa5e0iUTXffdYA33xDBcupw05EBH_CZSZZs=",
    "rating": 4.9,
    "deliveryFee": 3.99,
    "deliveryTime": "15-25 min",
    "categories": ["Desserts"],
    "dishes": [
      {
        "id": 93,
        "name": "Trufa Gourmet (Unidade)",
        "price": 3.99,
        "description": "Trufa de chocolate belga recheada.",
        "image": "https://media.istockphoto.com/id/183255573/pt/foto/cole%C3%A7%C3%A3o-de-chocolate-sobre-uma-seda-ackground.webp?a=1&b=1&s=612x612&w=0&k=20&c=BOOUivRHv9UfSm_bhPvpmhOXTOazNmgUT6nAtKwjMd4=",
        "suggestedAddOns": [
          {
            "id": 96,
            "name": "Café Expresso",
            "price": 4.99,
            "description": "Café perfeito para acompanhar sua trufa.",
            "image": "https://media.istockphoto.com/id/480214126/pt/foto/coffee-cup-and-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=UOerB7AE2KYB2c6_bJgAplPSgqCtD7yZV02uwbbHRNs="
          },
          {
            "id": 97,
            "name": "Cobertura Extra de Chocolate",
            "price": 2.99,
            "description": "Mais chocolate para a sua experiência.",
            "image": "https://media.istockphoto.com/id/1329849736/pt/foto/dark-chocolate-dripping.webp?a=1&b=1&s=612x612&w=0&k=20&c=79DxJQJwPje6NOwNf6GBy-XpugeZZ9K0R8hZgEj4Rmg="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 417, "name": "Guardanapo", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 418, "name": "Raspas de Chocolate", "price": 1.99, "emoji": "🍫" },
            { "id": 419, "name": "Nozes Trituradas", "price": 3.49, "emoji": "🌰" }
          ]
        }
      },
      {
        "id": 94,
        "name": "Caixa de Bombons Artesanais",
        "price": 24.99,
        "description": "Bombons com recheios variados.",
        "image": "https://media.istockphoto.com/id/182889514/pt/foto/cole%C3%A7%C3%A3o-de-chocolates.webp?a=1&b=1&s=612x612&w=0&k=20&c=6HD1pSR_TP5iPejbsEnMoUurDDdgPoU1onxWWlOwF_M=",
        "suggestedAddOns": [
          {
            "id": 98,
            "name": "Cartão Presente",
            "price": 5.99,
            "description": "Cartão especial para presentear junto com os bombons.",
            "image": "https://media.istockphoto.com/id/1157352022/pt/foto/handwritten-calligraphy-holiday-greeting-card.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZEXU2WEnPo8auom3isG_At8HCeOr_mOReNchj0Z-G-M="
          },
          {
            "id": 99,
            "name": "Vinho de Sobremesa (375ml)",
            "price": 49.99,
            "description": "Perfeito para harmonizar com os chocolates.",
            "image": "https://media.istockphoto.com/id/1054919912/pt/foto/red-wine-bottle-and-glass-on-rustic-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=kh-F6b4D3PHk26bqzxy-17enSFFRDl1GrKrfr44-K7E="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 420, "name": "Embalagem Presente", "emoji": "🎁" }
          ],
          "paid": [
            { "id": 421, "name": "Rosas Naturais", "price": 15.99, "emoji": "🌹" },
            { "id": 422, "name": "Caixa Premium", "price": 9.99, "emoji": "📦" }
          ]
        }
      },
      {
        "id": 95,
        "name": "Barra de Chocolate 70%",
        "price": 12.49,
        "description": "Chocolate amargo 70% cacau.",
        "image": "https://media.istockphoto.com/id/1448038415/pt/foto/dark-chocolate-bar-pieces-on-dark-background-with-grated-chocolate-pile-chunks-of-broken.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZmwPVuNv6_Rm3TIQ6w8d0dIliqLFtCI5u-Ph_ncvjzA=",
        "suggestedAddOns": [
          {
            "id": 100,
            "name": "Frutas Secas",
            "price": 6.99,
            "description": "Para complementar o sabor do chocolate.",
            "image": "https://media.istockphoto.com/id/187839556/pt/foto/frutas-secas.webp?a=1&b=1&s=612x612&w=0&k=20&c=p-NOcz1AX1I3IRMP52Nre2p12FZTGGGoETZpXT4W5p8="
          },
          {
            "id": 101,
            "name": "Pedaços de Amêndoas",
            "price": 4.49,
            "description": "Adicione uma textura crocante.",
            "image": "https://media.istockphoto.com/id/481609620/pt/foto/fatia-de-am%C3%AAndoas.webp?a=1&b=1&s=612x612&w=0&k=20&c=yyRwrpGCzLAFRW8T_6OT9JpTAbU6Z_FkFXi8Da-yQCA="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 423, "name": "Papel Toalha", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 424, "name": "Calda de Chocolate", "price": 3.99, "emoji": "🍫" },
            { "id": 425, "name": "Framboesa Fresca", "price": 5.99, "emoji": "🍓" }
          ]
        }
      }
    ]
  },  
  {
    "id": 26,
    "name": "Hortifruti Frescor",
    "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    "rating": 4.6,
    "deliveryFee": 4.99,
    "deliveryTime": "30-40 min",
    "categories": ["Markets", "Healthy"],
    "dishes": [
      {
        "id": 96,
        "name": "Abacate (1kg)",
        "price": 10.99,
        "description": "Abacate fresco e maduro.",
        "image": "https://plus.unsplash.com/premium_photo-1675715402461-9ac75a5b400e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJhY2F0ZXxlbnwwfHwwfHx8MA%3D%3D",
        "suggestedAddOns": [
          {
            "id": 99,
            "name": "Limão Siciliano",
            "price": 4.99,
            "description": "Perfeito para preparar guacamole.",
            "image": "https://media.istockphoto.com/id/1158358701/pt/foto/lemon-slices-on-yellow-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=lUptHZH03dA2ERbTlp3NdvFW-oOhr8pWPLBw4RT_kUs="
          },
          {
            "id": 100,
            "name": "Torradas Integrais",
            "price": 6.99,
            "description": "Ideal para servir com abacate.",
            "image": "https://media.istockphoto.com/id/1193395448/pt/foto/crispy-toast.webp?a=1&b=1&s=612x612&w=0&k=20&c=b40WiZCWwDNQO0RzuhXOKG9yqxKhG46MZikBoCxoSTg="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 426, "name": "Saco de Papel", "emoji": "🛍️" }
          ],
          "paid": [
            { "id": 427, "name": "Molho para Salada", "price": 3.49, "emoji": "🥗" },
            { "id": 428, "name": "Ervas Frescas", "price": 2.99, "emoji": "🌿" }
          ]
        }
      },
      {
        "id": 97,
        "name": "Alface Crespa",
        "price": 3.99,
        "description": "Alface crespa orgânica.",
        "image": "https://media.istockphoto.com/id/486032818/pt/foto/alface-em-uma-caixa-de-madeira-na-mesa-de-madeira-r%C3%BAstico.webp?a=1&b=1&s=612x612&w=0&k=20&c=6UXCjR65lr-eI60mHIGy8q8ALnNoPfXYoPBicH26HPk=",
        "suggestedAddOns": [
          {
            "id": 101,
            "name": "Vinagre Balsâmico",
            "price": 5.49,
            "description": "Para temperar sua salada.",
            "image": "https://media.istockphoto.com/id/1218237892/pt/foto/balsamic-vinegar.webp?a=1&b=1&s=612x612&w=0&k=20&c=U_gM5pk3wB_OvDz9kFD9yHKbnVFFAA2z5B2ynxrFeHw="
          },
          {
            "id": 102,
            "name": "Azeite de Oliva Extra Virgem",
            "price": 12.99,
            "description": "Complementa qualquer prato saudável.",
            "image": "https://media.istockphoto.com/id/1218246485/pt/foto/bottle-of-extra-virgin-olive-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=EY36yV8HxvJqHUmtvHkXpaW6V9U1Vc6RX1R8EusDZVc="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 429, "name": "Receita de Salada", "emoji": "📜" }
          ],
          "paid": [
            { "id": 430, "name": "Queijo Parmesão", "price": 3.99, "emoji": "🧀" },
            { "id": 431, "name": "Croutons", "price": 2.49, "emoji": "🍞" }
          ]
        }
      },
      {
        "id": 98,
        "name": "Batata Doce (1kg)",
        "price": 7.99,
        "description": "Batata doce fresca, ideal para receitas saudáveis.",
        "image": "https://media.istockphoto.com/id/486032818/pt/foto/alface-em-uma-caixa-de-madeira-na-mesa-de-madeira-r%C3%BAstico.webp?a=1&b=1&s=612x612&w=0&k=20&c=6UXCjR65lr-eI60mHIGy8q8ALnNoPfXYoPBicH26HPk=",
        "suggestedAddOns": [
          {
            "id": 103,
            "name": "Canela em Pó",
            "price": 3.99,
            "description": "Perfeito para batata doce assada.",
            "image": "https://media.istockphoto.com/id/1187517467/pt/foto/cinnamon.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pg-K0eQY91tNdGG4hg5RyYvljeqgBpRmCpXxrKPUx_0="
          },
          {
            "id": 104,
            "name": "Papel Alumínio",
            "price": 5.49,
            "description": "Facilita o preparo no forno.",
            "image": "https://media.istockphoto.com/id/160432634/pt/foto/rolo-de-papel-alum%C3%ADnio.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejzSPqlHIb1cmlXat_dxdC-WC7rxU2MXOdS_V8nyY4Q="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 432, "name": "Folheto de Receitas", "emoji": "📖" }
          ],
          "paid": [
            { "id": 433, "name": "Manteiga Sem Sal", "price": 2.99, "emoji": "🧈" },
            { "id": 434, "name": "Sal Marinho", "price": 1.99, "emoji": "🧂" }
          ]
        }
      }
    ]
  },  
  {
    "id": 27,
    "name": "Empório das Massas",
    "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    "rating": 4.8,
    "deliveryFee": 3.49,
    "deliveryTime": "20-30 min",
    "categories": ["Italian"],
    "dishes": [
      {
        "id": 99,
        "name": "Ravioli de Queijo (500g)",
        "price": 19.99,
        "description": "Ravioli recheado com queijo artesanal.",
        "image": "https://media.istockphoto.com/id/537618250/pt/foto/ravioli-with-sage-butter-sprinkled-with-grana-padano-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=x3VEgqCYXA-TBj8mt-Im8Lx879CWe3USPGBuBncSMsc=",
        "suggestedAddOns": [
          {
            "id": 102,
            "name": "Queijo Parmesão Ralado",
            "price": 3.49,
            "description": "Adicione um toque extra de sabor.",
            "image": "https://media.istockphoto.com/id/479537290/pt/foto/freshly-grated-parmesan-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=f3DNwOrRTutdDWWPrD8SY8sblZ6WmeQ7fg9eRj2cLTo="
          },
          {
            "id": 103,
            "name": "Pão de Alho",
            "price": 7.99,
            "description": "Perfeito para acompanhar massas.",
            "image": "https://media.istockphoto.com/id/1298272223/pt/foto/garlic-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=QQwwsd7PTt52xfw0rjxSYupR_Az1Ow78zTpD9XrRsyM="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 435, "name": "Folheto de Receitas", "emoji": "📜" }
          ],
          "paid": [
            { "id": 436, "name": "Molho de Pimenta", "price": 1.99, "emoji": "🌶️" },
            { "id": 437, "name": "Manjericão Fresco", "price": 2.49, "emoji": "🌿" }
          ]
        }
      },
      {
        "id": 100,
        "name": "Gnocchi de Batata (500g)",
        "price": 17.99,
        "description": "Gnocchi artesanal de batata.",
        "image": "https://images.unsplash.com/photo-1616170687881-32188ae1b6d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R25vY2NoaSUyMGRlJTIwQmF0YXRhfGVufDB8fDB8fHww",
        "suggestedAddOns": [
          {
            "id": 104,
            "name": "Molho Branco",
            "price": 14.99,
            "description": "Molho branco cremoso.",
            "image": "https://media.istockphoto.com/id/1268699374/pt/foto/creamy-white-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=s76VLjJ6QotHgGe8jve3AifSvhU8NTh0G7Q6je6QuL0="
          },
          {
            "id": 105,
            "name": "Torradas de Parmesão",
            "price": 5.49,
            "description": "Torradas crocantes para acompanhar.",
            "image": "https://media.istockphoto.com/id/1209678598/pt/foto/cheese-crisps.webp?a=1&b=1&s=612x612&w=0&k=20&c=DU_PVuWTbAxkFGnE8ppCZRwMQ7MPHy-EFf01cmAWONo="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 438, "name": "Azeite Extra Virgem", "emoji": "🫒" }
          ],
          "paid": [
            { "id": 439, "name": "Nozes Trituradas", "price": 3.49, "emoji": "🌰" },
            { "id": 440, "name": "Sal Rosa do Himalaia", "price": 1.99, "emoji": "🧂" }
          ]
        }
      },
      {
        "id": 101,
        "name": "Molho de Tomate Artesanal (500ml)",
        "price": 12.49,
        "description": "Molho de tomate fresco.",
        "image": "https://plus.unsplash.com/premium_photo-1725902075652-837a57b4f4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9saG8lMjBkZSUyMFRvbWF0ZSUyMEFydGVzYW5hbHxlbnwwfHwwfHx8MA%3D%3D",
        "suggestedAddOns": [
          {
            "id": 106,
            "name": "Orégano",
            "price": 1.49,
            "description": "Orégano fresco para finalizar o prato.",
            "image": "https://media.istockphoto.com/id/1206483375/pt/foto/oregano.webp?a=1&b=1&s=612x612&w=0&k=20&c=3dhk58lGngV4URGGEO_1phfuS5PCtf2Ni_PyUk_uRdk="
          },
          {
            "id": 107,
            "name": "Queijo Ralado",
            "price": 2.99,
            "description": "Adicione mais sabor ao seu molho.",
            "image": "https://media.istockphoto.com/id/1277019036/pt/foto/grated-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=v7mIhjSxCn8KvWNuNhDJ0-XW1n2xDRJasnmfuOoe8jc="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 441, "name": "Receita Exclusiva", "emoji": "📖" }
          ],
          "paid": [
            { "id": 442, "name": "Pimenta Calabresa", "price": 1.99, "emoji": "🌶️" },
            { "id": 443, "name": "Azeitonas Pretas", "price": 3.49, "emoji": "🫒" }
          ]
        }
      }
    ]
  },  
  {
    "id": 28,
    "name": "McDonald's",
    "image": "https://images.unsplash.com/photo-1533821790650-2bcb4bbf9df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWNEb25hbGQnc3xlbnwwfHwwfHx8MA%3D%3D",
    "rating": 4.5,
    "deliveryFee": 7.99,
    "deliveryTime": "20-30 min",
    "categories": ["Burgers", "Fast Food"],
    "dishes": [
      {
        "id": 102,
        "name": "Big Mac",
        "price": 18.99,
        "description": "Dois hambúrgueres, alface, queijo, molho especial, cebola e picles no pão com gergelim.",
        "image": "https://media.istockphoto.com/id/1773193904/pt/foto/big-mac-with-french-fries-on-a-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=khXRVLNwK2ir-jMEw1i6qgj0YO1R7gTadc2x41Vrk-k=",
        "suggestedAddOns": [
          {
            "id": 106,
            "name": "Extra Molho Especial",
            "price": 1.49,
            "description": "Adicione mais molho ao seu Big Mac.",
            "image": "https://media.istockphoto.com/id/1145269555/pt/foto/special-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=EY92cBR3pHxUykBR3OSf-74pVeWEvROeRDk9SfhMEG4="
          },
          {
            "id": 107,
            "name": "Queijo Extra",
            "price": 2.49,
            "description": "Mais queijo para o seu hambúrguer.",
            "image": "https://media.istockphoto.com/id/1226328003/pt/foto/cheese-slice.webp?a=1&b=1&s=612x612&w=0&k=20&c=ACq-_eOd7usW8V_lBj49xLv6jNykVg6yCmgcbhVsD70="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 444, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 445, "name": "Molho Barbecue", "price": 1.99, "emoji": "🍖" },
            { "id": 446, "name": "Molho Ranch", "price": 1.99, "emoji": "🥗" }
          ]
        }
      },
      {
        "id": 103,
        "name": "McChicken",
        "price": 16.99,
        "description": "Hambúrguer de frango empanado com alface e maionese especial.",
        "image": "https://media.istockphoto.com/id/1517846992/pt/foto/classic-mcchicken-as-a-quick-snack-in-the-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=q_HP_5aeKrivEPxReAXkoitT2dJTiiJuOBEOl5qXhZ8=",
        "suggestedAddOns": [
          {
            "id": 108,
            "name": "Extra Maionese",
            "price": 1.49,
            "description": "Mais maionese especial.",
            "image": "https://media.istockphoto.com/id/1207649647/pt/foto/white-mayo.webp?a=1&b=1&s=612x612&w=0&k=20&c=ouPFSu3pyD_gdfdYyLYv_lVbRzEAcyIcylhn8NjljQE="
          },
          {
            "id": 109,
            "name": "Alface Adicional",
            "price": 0.99,
            "description": "Mais crocância com alface extra.",
            "image": "https://media.istockphoto.com/id/491262481/pt/foto/lettuce.webp?a=1&b=1&s=612x612&w=0&k=20&c=oMPOe9I9FMlv8hPjqjH8phS5gMgK48lxJ5Pb3MfHZAs="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 447, "name": "Canudo", "emoji": "🥤" }
          ],
          "paid": [
            { "id": 448, "name": "Molho Tártaro", "price": 1.99, "emoji": "🍋" },
            { "id": 449, "name": "Ketchup", "price": 0.99, "emoji": "🍅" }
          ]
        }
      },
      {
        "id": 104,
        "name": "McFritas Média",
        "price": 10.99,
        "description": "Batatas fritas crocantes e douradas.",
        "image": "https://media.istockphoto.com/id/1827633152/pt/foto/french-fries-macro-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=GT0Dp26tTO2zQb2ZW1VSsMWOD8O_aR7uaNLVN6sQ0Rc=",
        "suggestedAddOns": [
          {
            "id": 110,
            "name": "Molho de Queijo",
            "price": 2.99,
            "description": "Delicioso molho de queijo.",
            "image": "https://media.istockphoto.com/id/1185965359/pt/foto/cheese-dip.webp?a=1&b=1&s=612x612&w=0&k=20&c=bYjH-DK9iLt0MyW7DLbOxZZ8nvCxAk3k9R_3rt1ACpA="
          },
          {
            "id": 111,
            "name": "Bacon Bits",
            "price": 3.49,
            "description": "Adicione bacon crocante às batatas.",
            "image": "https://media.istockphoto.com/id/1223044165/pt/foto/bacon-pieces.webp?a=1&b=1&s=612x612&w=0&k=20&c=NsMW91Oi3f2TRyzCdMNSugxRXmCmjhJqjEq1H4H90eQ="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 450, "name": "Pacote de Sal", "emoji": "🧂" }
          ],
          "paid": [
            { "id": 451, "name": "Maionese", "price": 0.99, "emoji": "🥚" },
            { "id": 452, "name": "Mostarda", "price": 0.99, "emoji": "🌭" }
          ]
        }
      },
      {
        "id": 105,
        "name": "McFlurry Ovomaltine",
        "price": 12.99,
        "description": "Sorvete de baunilha com Ovomaltine crocante.",
        "image": "https://static.ifood-static.com.br/image/upload/t_high/pratos/d8dc2beb-2234-4e56-8191-160316dfcf4e/202212271051_iqnb2y5lmq8.png",
        "suggestedAddOns": [
          {
            "id": 112,
            "name": "Calda de Chocolate",
            "price": 1.99,
            "description": "Calda extra de chocolate.",
            "image": "https://media.istockphoto.com/id/1334991674/pt/foto/chocolate-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=_MvfhZhdZIrNvMNh3OG5LsUjwMOtbUM7vrEkM5TOFzE="
          },
          {
            "id": 113,
            "name": "Granulado de Chocolate",
            "price": 0.99,
            "description": "Finalize com granulado.",
            "image": "https://media.istockphoto.com/id/1094122196/pt/foto/chocolate-sprinkles.webp?a=1&b=1&s=612x612&w=0&k=20&c=cp8iBPxkhBL-zFADWFL2TIqFSKmdoSTvcrP_L9a-uvY="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 453, "name": "Colher", "emoji": "🥄" }
          ],
          "paid": [
            { "id": 454, "name": "Confeito Colorido", "price": 1.49, "emoji": "🍬" },
            { "id": 455, "name": "Chantilly", "price": 1.99, "emoji": "🍦" }
          ]
        }
      }
    ]
  },  
  {
    "id": 29,
    "name": "Habib's",
    "image": "https://gkpb.com.br/wp-content/uploads/2021/02/novo-logo-habibs-sem-fundo.png",
    "rating": 4.4,
    "deliveryFee": 5.99,
    "deliveryTime": "15-25 min",
    "categories": ["Arabic", "Fast Food"],
    "dishes": [
      {
        "id": 106,
        "name": "Esfiha de Carne",
        "price": 1.99,
        "description": "Esfiha tradicional com recheio de carne temperada.",
        "image": "https://media.istockphoto.com/id/1315080317/pt/foto/arabic-meat-sfiha-on-the-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=nWGrNAc1RBfv5fPxx8WOShQ0lYuLrcfyU2n-TEpIf0I=",
        "suggestedAddOns": [
          {
            "id": 110,
            "name": "Limão",
            "price": 0.50,
            "description": "Adicione uma fatia de limão para realçar o sabor.",
            "image": "https://media.istockphoto.com/id/174949103/pt/foto/lemon-slice.webp?a=1&b=1&s=612x612&w=0&k=20&c=aWtbtGT2-X47Ty9jmnOaMoGCHLY2Z6rJtIHh4ysd-YI="
          },
          {
            "id": 111,
            "name": "Molho de Alho",
            "price": 1.99,
            "description": "Molho cremoso de alho para acompanhar.",
            "image": "https://media.istockphoto.com/id/1185965372/pt/foto/garlic-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=-v7_wM6ad6huu7E2u0m-lLpBAl-PXPCh53hknJ--91o="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 501, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 502, "name": "Molho de Pimenta", "price": 1.50, "emoji": "🌶️" },
            { "id": 503, "name": "Azeite Extra Virgem", "price": 2.00, "emoji": "🫒" }
          ]
        }
      },
      {
        "id": 107,
        "name": "Kibe Frito",
        "price": 3.99,
        "description": "Kibe frito crocante recheado com carne moída e temperos.",
        "image": "https://media.istockphoto.com/id/453191413/pt/foto/kibbeh.webp?a=1&b=1&s=612x612&w=0&k=20&c=vfPWzMlzBtV0D85ljj5uQfjDjYq1F5RbSgdZIegdKAg=",
        "suggestedAddOns": [
          {
            "id": 112,
            "name": "Limão",
            "price": 0.50,
            "description": "Adicione uma fatia de limão para realçar o sabor.",
            "image": "https://media.istockphoto.com/id/174949103/pt/foto/lemon-slice.webp?a=1&b=1&s=612x612&w=0&k=20&c=aWtbtGT2-X47Ty9jmnOaMoGCHLY2Z6rJtIHh4ysd-YI="
          },
          {
            "id": 113,
            "name": "Requeijão",
            "price": 1.99,
            "description": "Acompanhe com requeijão cremoso.",
            "image": "https://media.istockphoto.com/id/1196760530/pt/foto/cream-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=2yV9PhlWTA7ID7HSeGP39QlBvYzVUVAVH1azkDtuoUQ="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 504, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 505, "name": "Molho de Alho", "price": 1.99, "emoji": "🧄" },
            { "id": 506, "name": "Molho de Pimenta", "price": 1.50, "emoji": "🌶️" }
          ]
        }
      },
      {
        "id": 108,
        "name": "Beirute de Frango",
        "price": 17.99,
        "description": "Pão sírio recheado com frango, queijo, alface e tomate.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmzFc2KIL3TfvrOLV_QZwahs6_ocPZfHj5A&s",
        "suggestedAddOns": [
          {
            "id": 114,
            "name": "Azeitonas Pretas",
            "price": 2.49,
            "description": "Adicione azeitonas pretas ao recheio.",
            "image": "https://media.istockphoto.com/id/1339568275/pt/foto/black-olives.webp?a=1&b=1&s=612x612&w=0&k=20&c=V2Qoykgavv5ZkLQt0cBQjtV9ZMiJKkPIMFOsL5mrg3Q="
          },
          {
            "id": 115,
            "name": "Queijo Adicional",
            "price": 2.99,
            "description": "Mais queijo no seu Beirute.",
            "image": "https://media.istockphoto.com/id/1226328003/pt/foto/cheese-slice.webp?a=1&b=1&s=612x612&w=0&k=20&c=ACq-_eOd7usW8V_lBj49xLv6jNykVg6yCmgcbhVsD70="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 507, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 508, "name": "Molho Especial", "price": 2.50, "emoji": "🥫" },
            { "id": 509, "name": "Molho de Alho", "price": 1.99, "emoji": "🧄" }
          ]
        }
      },
      {
        "id": 109,
        "name": "Pastel de Belém",
        "price": 4.99,
        "description": "Sobremesa típica portuguesa com recheio de creme.",
        "image": "https://media.istockphoto.com/id/1324207355/pt/foto/traditional-portuguese-dessert.webp?a=1&b=1&s=612x612&w=0&k=20&c=olUIIOGa9GgwNGhhlwl5GG0PTMN9DInKFOh6YfQFCCY=",
        "suggestedAddOns": [
          {
            "id": 116,
            "name": "Canela em Pó",
            "price": 0.99,
            "description": "Adicione um toque de canela.",
            "image": "https://media.istockphoto.com/id/184284212/pt/foto/cinnamon-powder.webp?a=1&b=1&s=612x612&w=0&k=20&c=0-91U9XosqtnPi6ljcHVVXYnM7skhF3SdcFqVTXRebY="
          },
          {
            "id": 117,
            "name": "Chantilly",
            "price": 1.49,
            "description": "Finalize com chantilly.",
            "image": "https://media.istockphoto.com/id/1257105876/pt/foto/whipped-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=ORqXZJomvRCEkQgB0DeiBPfNLPS4biXZR-2CS_yfLHo="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 510, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 511, "name": "Calda de Chocolate", "price": 1.99, "emoji": "🍫" },
            { "id": 512, "name": "Açúcar de Confeiteiro", "price": 0.99, "emoji": "🍯" }
          ]
        }
      }
    ]
  },  
  {
    "id": 30,
    "name": "Burger King",
    "image": "https://images.unsplash.com/photo-1716825340664-d52a315a0011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnVyZ2VyJTIwS2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    "rating": 4.6,
    "deliveryFee": 6.99,
    "deliveryTime": "20-30 min",
    "categories": ["Burgers", "Fast Food"],
    "dishes": [
      {
        "id": 110,
        "name": "Whopper",
        "price": 19.99,
        "description": "Hambúrguer grelhado com alface, tomate, picles, ketchup e maionese.",
        "image": "https://media.istockphoto.com/id/2174100988/pt/foto/fast-food-meal-at-a-cozy-outdoor-cafe-classic-burger-with-crispy-fries-served-on-the-tray.webp?a=1&b=1&s=612x612&w=0&k=20&c=G-BXOAWXDmEe3cqtKgIKeVdViMy0R08GktJ33ryi_yI=",
        "suggestedAddOns": [
          {
            "id": 114,
            "name": "Queijo Extra",
            "price": 2.49,
            "description": "Adicione mais queijo ao seu Whopper.",
            "image": "https://media.istockphoto.com/id/1226328003/pt/foto/cheese-slice.webp?a=1&b=1&s=612x612&w=0&k=20&c=ACq-_eOd7usW8V_lBj49xLv6jNykVg6yCmgcbhVsD70="
          },
          {
            "id": 115,
            "name": "Bacon Extra",
            "price": 3.49,
            "description": "Mais bacon para o seu lanche.",
            "image": "https://media.istockphoto.com/id/1063634590/pt/foto/bacon.webp?a=1&b=1&s=612x612&w=0&k=20&c=F8-PwSt9uwDiMfBl7f4_HNL44j5_HMoDtb9ymPbNkug="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 601, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 602, "name": "Molho Barbecue", "price": 1.99, "emoji": "🍖" },
            { "id": 603, "name": "Molho Ranch", "price": 1.99, "emoji": "🥗" }
          ]
        }
      },
      {
        "id": 111,
        "name": "Chicken Fries",
        "price": 14.99,
        "description": "Tiras de frango empanado crocante.",
        "image": "https://plus.unsplash.com/premium_photo-1683139918895-06f8f3b9939e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpY2tlbiUyMEZyaWVzfGVufDB8fDB8fHww",
        "suggestedAddOns": [
          {
            "id": 116,
            "name": "Molho de Alho",
            "price": 1.99,
            "description": "Molho cremoso de alho para acompanhar.",
            "image": "https://media.istockphoto.com/id/1185965372/pt/foto/garlic-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=-v7_wM6ad6huu7E2u0m-lLpBAl-PXPCh53hknJ--91o="
          },
          {
            "id": 117,
            "name": "Molho de Mostarda e Mel",
            "price": 1.99,
            "description": "Sabor suave e doce para combinar com o frango.",
            "image": "https://media.istockphoto.com/id/1322236495/pt/foto/honey-mustard-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=GiTpNEm15p_akFMm29BPyYjBX8-V_fNsUmKXByU1NYg="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 604, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 605, "name": "Molho de Pimenta", "price": 1.50, "emoji": "🌶️" },
            { "id": 606, "name": "Molho Ranch", "price": 1.99, "emoji": "🥗" }
          ]
        }
      },
      {
        "id": 112,
        "name": "Onion Rings",
        "price": 9.99,
        "description": "Anéis de cebola empanados e crocantes.",
        "image": "https://media.istockphoto.com/id/621849666/pt/foto/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=zylsq8mFUvywHakB0lfrncM21zlZbrQH_xEMTRqI8qU=",
        "suggestedAddOns": [
          {
            "id": 118,
            "name": "Queijo Cheddar",
            "price": 2.49,
            "description": "Adicione molho de queijo cheddar.",
            "image": "https://media.istockphoto.com/id/1131259853/pt/foto/bowl-of-melted-cheddar-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=pGnxRQ5mFsIZTKWEiwci7lF05TtW6omArMyg-wcsx9I="
          },
          {
            "id": 119,
            "name": "Bacon Bits",
            "price": 2.99,
            "description": "Pedaços crocantes de bacon.",
            "image": "https://media.istockphoto.com/id/1402927076/pt/foto/bacon-bits.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rp-YPpFNCmlJ5vmMPfb9-CgR3nImZG5ExnlGqISXxvA="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 607, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 608, "name": "Molho Barbecue", "price": 1.99, "emoji": "🍖" },
            { "id": 609, "name": "Molho Ranch", "price": 1.99, "emoji": "🥗" }
          ]
        }
      },
      {
        "id": 113,
        "name": "BK Shake Ovomaltine",
        "price": 11.99,
        "description": "Milkshake de baunilha com Ovomaltine.",
        "image": "https://static.ifood-static.com.br/image/upload/t_high/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202202012154_10VF_i.jpg",
        "suggestedAddOns": [
          {
            "id": 120,
            "name": "Cobertura de Chocolate",
            "price": 1.99,
            "description": "Adicione mais sabor ao seu milkshake.",
            "image": "https://media.istockphoto.com/id/1135375475/pt/foto/chocolate-drizzle.webp?a=1&b=1&s=612x612&w=0&k=20&c=GkQUwtoWbK9nrlhNxGqBBPVRQHIKZbpryY3MIUJwVGc="
          },
          {
            "id": 121,
            "name": "Granulado",
            "price": 0.99,
            "description": "Finalize com granulado crocante.",
            "image": "https://media.istockphoto.com/id/1020715976/pt/foto/colorful-sprinkles.webp?a=1&b=1&s=612x612&w=0&k=20&c=qqwVNrZ60LKe2Z_H3t3CZBdr4pH8oxM8-tMu6VvhPGo="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 610, "name": "Canudo", "emoji": "🥤" }
          ],
          "paid": [
            { "id": 611, "name": "Cobertura de Morango", "price": 1.99, "emoji": "🍓" },
            { "id": 612, "name": "Marshmallows", "price": 1.49, "emoji": "🍬" }
          ]
        }
      }
    ]
  },  
  {
    "id": 31,
    "name": "Ragazzo",
    "image": "https://gsobmidia.com.br/uploads/lojas/81/ragazzo_1604587650.jpg",
    "rating": 4.3,
    "deliveryFee": 4.99,
    "deliveryTime": "20-30 min",
    "categories": ["Italian", "Fast Food"],
    "dishes": [
      {
        "id": 114,
        "name": "Coxinha de Frango",
        "price": 2.99,
        "description": "Tradicional coxinha de frango cremosa.",
        "image": "https://media.istockphoto.com/id/1030446680/pt/foto/coxinha.webp?a=1&b=1&s=612x612&w=0&k=20&c=ggQu8_lU4uiEpYYZEfnAhQ8X1A5n03hv9PWxMgViLKc=",
        "suggestedAddOns": [
          {
            "id": 118,
            "name": "Molho Ranch",
            "price": 1.99,
            "description": "Molho cremoso para acompanhar sua coxinha.",
            "image": "https://media.istockphoto.com/id/1335164791/pt/foto/ranch-dressing.webp?a=1&b=1&s=612x612&w=0&k=20&c=H9qtC58EhP1NeUgg6p30Na97bX0_Ht-y67XQ6RB4uOg="
          },
          {
            "id": 119,
            "name": "Molho Picante",
            "price": 1.49,
            "description": "Molho picante para dar um toque especial.",
            "image": "https://media.istockphoto.com/id/1452897371/pt/foto/spicy-hot-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=aGp2TDebfMwoaxOniTfliYXoh3Rytp4iISmKkUahE2A="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 701, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 702, "name": "Extra Recheio de Frango", "price": 1.99, "emoji": "🍗" }
          ]
        }
      },
      {
        "id": 115,
        "name": "Ravioli de Carne",
        "price": 12.99,
        "description": "Ravioli com recheio de carne e molho de tomate.",
        "image": "https://media.istockphoto.com/id/2181974490/pt/foto/bufala-mozzarella-ravioli.webp?a=1&b=1&s=612x612&w=0&k=20&c=PBIs4nOLHsuqhIEV6kEONhxtPoBsoHcvMj01QhUd23M=",
        "suggestedAddOns": [
          {
            "id": 120,
            "name": "Parmesão Ralado",
            "price": 2.49,
            "description": "Parmesão ralado para finalizar seu prato.",
            "image": "https://media.istockphoto.com/id/1197033289/pt/foto/grated-parmesan-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=6slE-SM5WY5alXIBsG8S2oa2XphWhYY05C5uEPsZG94="
          },
          {
            "id": 121,
            "name": "Molho Pesto",
            "price": 3.49,
            "description": "Molho pesto para complementar o ravioli.",
            "image": "https://media.istockphoto.com/id/1412465147/pt/foto/pesto-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=tGZSEKKj9CJEGNePyG93X9cJ1q0iLJmKlgxHicZKPcc="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 703, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 704, "name": "Pão de Alho", "price": 4.99, "emoji": "🥖" }
          ]
        }
      },
      {
        "id": 116,
        "name": "Pizza Calabresa Individual",
        "price": 10.99,
        "description": "Pizza individual com calabresa e cebola.",
        "image": "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGl6emElMjBDYWxhYnJlc2ElMjBJbmRpdmlkdWFsfGVufDB8fDB8fHww",
        "suggestedAddOns": [
          {
            "id": 122,
            "name": "Azeitonas Pretas",
            "price": 1.49,
            "description": "Adicione azeitonas pretas à sua pizza.",
            "image": "https://media.istockphoto.com/id/488953972/pt/foto/black-olives.webp?a=1&b=1&s=612x612&w=0&k=20&c=C9PdcQZ0-XBNFQGoDECOC2tkXClnPHcbIv2GcWxx6XY="
          },
          {
            "id": 123,
            "name": "Molho de Alho",
            "price": 1.99,
            "description": "Molho de alho cremoso para acompanhar.",
            "image": "https://media.istockphoto.com/id/1185965372/pt/foto/garlic-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=-v7_wM6ad6huu7E2u0m-lLpBAl-PXPCh53hknJ--91o="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 705, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 706, "name": "Refrigerante Lata", "price": 4.99, "emoji": "🥤" }
          ]
        }
      },
      {
        "id": 117,
        "name": "Torta de Limão",
        "price": 5.99,
        "description": "Torta de limão com base crocante e cobertura de merengue.",
        "image": "https://media.istockphoto.com/id/185265004/pt/foto/tarte-com-creme-de-lima-com-natas-batidas-no-marble-bancada.webp?a=1&b=1&s=612x612&w=0&k=20&c=MmM5WANg6X7pO2mZaPRLBOA-SwjQyeVIsbji_0fZW-s=",
        "suggestedAddOns": [
          {
            "id": 124,
            "name": "Calda de Chocolate",
            "price": 1.99,
            "description": "Adicione calda de chocolate à sua torta.",
            "image": "https://media.istockphoto.com/id/1135375475/pt/foto/chocolate-drizzle.webp?a=1&b=1&s=612x612&w=0&k=20&c=GkQUwtoWbK9nrlhNxGqBBPVRQHIKZbpryY3MIUJwVGc="
          },
          {
            "id": 125,
            "name": "Raspas de Limão",
            "price": 0.99,
            "description": "Finalize com raspas de limão fresco.",
            "image": "https://media.istockphoto.com/id/1268679312/pt/foto/lime-zest.webp?a=1&b=1&s=612x612&w=0&k=20&c=tcLtQMrpa_Ud2j1P0My-0D2-f97-xyvlFlK-M-zlZLw="
          }
        ],
        "accompaniments": {
          "free": [
            { "id": 707, "name": "Guardanapos", "emoji": "🧻" }
          ],
          "paid": [
            { "id": 708, "name": "Café Espresso", "price": 4.99, "emoji": "☕" }
          ]
        }
      }
    ]
  }  
];
