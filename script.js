let url = "https://kontests.net/api/v1/all"

let response = fetch(url)

const imageUrls = [
    "https://img.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg?w=1800&t=st=1683722841~exp=1683723441~hmac=85c19107a4dc76f38f69ea0ac95755f7176f5b4e92d236e679ae05dd893e70ce",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU",
    "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nJTIwY29udGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZyUyMGNvbnRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZyUyMGNvbnRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=800"

];



response.then((contest)=>{
        return contest.json();
}).then((contest)=>{
    // console.log(contest)
    htmlCard=""
    for(item in contest){
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    // console.log(randomImageUrl)
        // console.log(contest[item])
        htmlCard += `
        <div class="card"  style="width: 18rem; margin-right: 1rem; margin-top: 1rem">
        <img src="${randomImageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <h6 class="card-text" id="site1">Site At: ${contest[item].site} </h6>
          <p>Starts At : ${contest[item].start_time}</p>
          <p>Ends At : ${contest[item].end_time}</p>
          <a href="${contest[item].url}"  class="btn btn-primary" target="blank">Visit here.. </a>
        </div>
      </div>`
    }
    cardContainer.innerHTML = htmlCard;
})


// const searchFunction = ()=>{
//     let filter = document.getElementById('myinput').value.toUpperCase();
//     let searchData = document.getElementById('site1').value;
//     // let searchData1 = searchData.getElementsByTagName('h6');

// }


const searchInput = document.getElementById('search').value.toUpperCase;

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  filterContests(searchValue);
});

function filterContests(keyword) {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const site = card.querySelector('.card-text').textContent.toLowerCase();
  
      if (title.includes(keyword) || site.includes(keyword)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  

// cardContainer.innerHTML = "allcards"
// console.log(response)

