
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');

      const link = document.createElement('a');
      link.href = product.link;

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = 'Card Image';

      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      const title = document.createElement('h3');
      title.textContent = product.title;

      const description = document.createElement('p');
      description.textContent = product.description;

      const price = document.createElement('h4');
      price.textContent = product.price;

       const btn = document.createElement('button');
       btn.textContent = product.btn;
   
      cardContent.appendChild(title);
      cardContent.appendChild(description);
      cardContent.appendChild(price);
      cardContent.appendChild(btn);
      
      link.appendChild(img);
      card.appendChild(link);
      card.appendChild(cardContent);

      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

 
// --------------------------
// login modal

  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var modalBtn = document.getElementById('modal-btn');
    var closeBtn = document.getElementsByClassName('close')[0];
  
    modalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  