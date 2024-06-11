
const POST_URL = "https://jsonplaceholder.typicode.com/posts/";
const previousPostBtn = document.querySelector(".previousPostBtn");
const nextPostBtn = document.querySelector(".nextPostBtn");
const postContainer = document.querySelector(".postContainer");
const postLoading = document.querySelector(".postLoading");
let currentId = localStorage.getItem("currentPost") || 0;

let postsCount = 0;

const postObj = {
    title: "Ошибка",
    desc: "Не удалось получить пост",
    id: 0
}
async function fetchData(url) {
    if (localStorage.getItem("currentPost") === null) localStorage.setItem("currentPost", 0);
    try {
        const repsonsePosts = await fetch(url);
        const dataPosts = await repsonsePosts.json();
        postsCount = dataPosts.length;
        postObj.title = dataPosts[Number(localStorage.getItem("currentPost"))].title;
        postObj.desc = dataPosts[Number(localStorage.getItem("currentPost"))].body;
        postObj.id = dataPosts[Number(localStorage.getItem("currentPost"))].id;
        createPost(postObj);
    } catch (error) {
        console.error(error);
        createPost(postObj);
    }
}


function createPost(obj) {
    postContainer.textContent = "";
    const titleHeader = document.createElement("h2");
    const descPar = document.createElement("p");
    const idPar = document.createElement("p");

    titleHeader.textContent = obj.title;
    descPar.textContent = obj.desc;
    idPar.textContent = obj.id;
    postContainer.append(titleHeader, descPar, idPar);
}

fetchData(POST_URL);
previousPostBtn.addEventListener("click", async () => {
    if (currentId !== 0) {
        currentId--
        localStorage.setItem("currentPost", currentId);
        await fetchData(POST_URL);
    }
});

nextPostBtn.addEventListener("click", async () => {
    console.log(currentId, postsCount - 1);
    if (currentId < postsCount - 1) {
        currentId++
        localStorage.setItem("currentPost", currentId);
        await fetchData(POST_URL);
    }
});


// async function getPosts(url) {
//     let data = null;
//     try {
//         const response = await fetch(url);
//         data = await response.json();
//         if (Number(localStorage.getItem("currentPost")) <= data.length) {
//             const title = data[Number(localStorage.getItem("currentPost"))].title;
//             const desc = data[Number(localStorage.getItem("currentPost"))].body;
//             const id = data[Number(localStorage.getItem("currentPost"))].id;
//             createPostCard(title, desc, id);
//             postLoading.textContent = "";
//         }
//     } catch (error) {
//         console.error(error);
//         createPostCard("Ошибка", "Не удалось получить контент", 0);
//     }
//     return data;
// }
//
// function createPostCard(title, desc, id) {
//     postContainer.textContent = "";
//     const h1 = document.createElement("h1");
//     const descPar = document.createElement("p");
//     const idPar = document.createElement("p");
//     h1.textContent = title;
//     descPar.textContent = desc;
//     idPar.textContent = id;
//     postContainer.append(h1, descPar, idPar);
// }
//
// getPosts(POST_URL);
//
// previousPostBtn.addEventListener("click", async () => {
//     if (currentId !== 0) {
//         currentId--
//         localStorage.setItem("currentPost", currentId);
//         await getPosts(POST_URL);
//     }
// });
//
// nextPostBtn.addEventListener("click", async () => {
//     currentId++
//     localStorage.setItem("currentPost", currentId);
//     await getPosts(POST_URL);
// });

