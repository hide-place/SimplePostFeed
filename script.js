const usernameInput = document.getElementById('usernameInput');
const postInput = document.getElementById('postInput');
const postBtn = document.getElementById('postBtn');
const postFeed = document.getElementById('posts');
const username = document.getElementById('username');
const postText = document.getElementById('postText');
const addPostBtn = document.getElementById('add')
const main = document.getElementById('main')


function getCurrentFormattedDateTime() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

function publishPost(){
    var time = getCurrentFormattedDateTime();
    var usernameInputValue = usernameInput.value;
   // console.log(usernameInputValue)
    var postInputValue = postInput.value;
    //console.log(postInputValue)
if(usernameInputValue !== '' && postInputValue !== ''){

    postFeed.insertAdjacentHTML('afterbegin', `
    <div class="post">
        <h3>@${usernameInputValue}</h3>
        <p>${postInputValue}</p>
        <p class="time">${time}</p>
    </div>
`);

 postInput.value = ''
 main.style.display = 'none'


} 
   
}

function showOrHideMain(){
    if (main.style.display === 'none'){
        main.style.display = 'flex'

    }
    else if (main.style.display ===''){
        main.style.display = 'flex'
    }
    else  {
        main.style.display = 'none'

    }
}


postBtn.addEventListener('click' , publishPost)
addPostBtn.addEventListener('click' , showOrHideMain)