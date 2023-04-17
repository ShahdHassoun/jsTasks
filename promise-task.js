// 1- create a promise that resolves in 4 seconds and returns "success" string
// 2-run the above promise and make it console.log success
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("success"), 4000)
    });
  
    let result = await promise; 
  
    console.log(result); 
  }
  
  f();
//3-read about promise.resolve
// async function f() {

//     let promise = new Promise((resolve) => {
//       setTimeout(() => resolve("success"), 4000)
//     });
  
//     let result = await promise; 
  
//     console.log(result); 
//   }
  
//   f();
//4-catch this error and console log "oops something went wrong" promise.reject('failed')
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("success"), 4000);
      reject('failed');
    }).catch((err)=>console.log('oops '));
  
  
  }
  
  f();
  //5&6
  const urls=[
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https:/'
  ];
  const getData = async function () {
     try{const [p1, p2, p3,p4] = await Promise.all(
        urls.map((url) => fetch(url).then((resp) => resp.json())),
      );

      console.log("People1", p1);
      console.log("people2 ", p2);
      console.log("people3", p3);
      console.log("people4",p4);
     }
     catch(error){
        console.log('oops there is an error');
   }
    };
  getData(); 
    
