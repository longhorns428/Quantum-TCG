// Define an array of featured items
const featuredItems = [
    { name: "Item 1", price: "$10", imageUrl: "./img/item1.jpg" },
    { name: "Item 2", price: "$20", imageUrl: "./img/item2.jpg" },
    { name: "Item 3", price: "$15", imageUrl: "./img/item3.jpg" }
  ];
  
  // Function to populate featured items in the DOM
  function populateFeaturedItems() {
    const container = document.querySelector('.featured-items-container');
    container.innerHTML = ''; // Clear previous content
  
    featuredItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('featured-item');
  
      const imageElement = document.createElement('img');
      imageElement.src = item.imageUrl;
      itemElement.appendChild(imageElement);
  
      const nameElement = document.createElement('p');
      nameElement.textContent = item.name;
      itemElement.appendChild(nameElement);
  
      const priceElement = document.createElement('p');
      priceElement.textContent = item.price;
      itemElement.appendChild(priceElement);
  
      container.appendChild(itemElement);
    });
  }
  
  // Function to rotate featured items
  function rotateFeaturedItems() {
    const items = document.querySelectorAll('.featured-item');
    const firstItem = items[0];
  
    // Rotate the items
    firstItem.style.opacity = '0';
    setTimeout(() => {
      firstItem.remove();
      document.querySelector('.featured-items-container').appendChild(firstItem);
      firstItem.style.opacity = '1';
    }, 1000); // Change item every 1 second (adjust as needed)
  }
  
  // Populate featured items initially
  populateFeaturedItems();
  
  // Rotate featured items at intervals
  setInterval(rotateFeaturedItems, 5000); // Rotate every 3 seconds (adjust as needed)
  