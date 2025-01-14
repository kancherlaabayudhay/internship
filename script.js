fetch('data.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const article = document.querySelector('.article');
        article.innerHTML = `
            <h2>${data[0].title}</h2>
            <p>${data[0].content}</p>
            <span>By ${data[0].author} - ${data[0].date}</span>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
