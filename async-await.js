
// Solve the below problems:

// #1) Convert the below promise into async await
//  fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then(console.log);
async function get() {
    let response= await fetch("https://jsonplaceholder.typicode.com/users/");
    let data=await response.json();
    console.log(data);
  }
  get();
  
  // #2) ADVANCED: Update the function below from the video to also have
  // async await for this line: fetch(url).then(resp => resp.json())
  // So there shouldn't be any .then() calls anymore!
  // Don't get discouraged... this is a really tough one...
  // const urls = [
  //   "https://jsonplaceholder.typicode.com/users",
  //   "https://jsonplaceholder.typicode.com/posts",
  //   "https://jsonplaceholder.typicode.com/albums",
  // ];
  
  // const getData = async function () {
  //   const [users, posts, albums] = await Promise.all(
  //     urls.map((url) => fetch(url).then((resp) => resp.json())),
  //   );
  //   console.log("users", users);
  //   console.log("posta", posts);
  //   console.log("albums", albums);
  // };
  //----------------------------------------Solution--------------------------------------
  // const urls = [
  //   "https://jsonplaceholder.typicode.com/users",
  //   "https://jsonplaceholder.typicode.com/posts",
  //   "https://jsonplaceholder.typicode.com/albums",
  // ];
  // async function urlP(url){
  //   let response = await fetch(url);
  //   let data=await response.json();
  //   return data;
  // }
  // const getData = async function () {
  //   const [users, posts, albums] = await Promise.all(
  //     urls.map(url=>urlP(url)),
  //   );
  //   console.log("users", users);
  //   console.log("posta", posts);
  //   console.log("albums", albums);
  // };
  // getData();
  //-------------------------------------------------------------------------------------------
  // #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  async function urlP(url){
    let response = await fetch(url);
    let data=await response.json();
    return data;
  }
  const getData = async function () {
    try{
        const [users, posts, albums] = await Promise.all(
        urls.map(url=>urlP(url)),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);}
    catch(error){
        alert("error");
    }
  };
  getData();