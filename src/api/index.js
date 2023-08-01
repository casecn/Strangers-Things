
// Setup path and access to strangers-things api.

const COHORT_NAME = "2303-FTB-MT-WEB-PT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


/////////////////////////////////////////////////
export const retrieveAllPosts = async () => {
  let apiURL = `${BASE_URL}/posts`;
  // if (localStorage.getItem('token')) {
  const token = localStorage.getItem("token");

  // }
  try {
    //console.log('TOKEN:', token)
    const response = await fetch(apiURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
         },
       });
    const jsonData = await response.json();
    if (jsonData.error) {
      throw jsonData.error;
    }
    let posts = [...jsonData.data.posts];
    return posts;
  } catch (error) {
    console.log(`ERROR-retrieveAllPosts: ${error}`);
  }
};

/////////////////////////////////////////////////
export const retrieveMyPosts = async () => {
   let apiURL = `${BASE_URL}/posts`;
   let bearerKey = `Bearer ${localStorage.getItem("token")}`;
   bearerKey = bearerKey.replace(/"/g, "");

  try {
    const response = await fetch(apiURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerKey,
      },
    });
    const jsonData = await response.json();
    if (jsonData.error) {
      throw `Error receiving data: ${jsonData.error}`;
    }
    let posts = [...jsonData.data.posts];
    const myPosts = posts.filter((post)=>{
     return post.isAuthor === true 
    })
    return myPosts;
  } catch (error) {
    console.log(`ERROR-retrieveAllPosts: ${error}`);
  }
};
/////////////////////////////////////////////////
export const createPostEndpoint= async (
  title,
  description,
  price,
  location,
  willDeliver,
) => {
  if (!localStorage.getItem("token")) {
    window.alert("Log in to create a post!");
    return null
  }
  let apiURL = `${BASE_URL}/posts`;
  let bearerKey = `Bearer ${localStorage.getItem("token")}`;
  bearerKey = bearerKey.replace(/"/g,'');
  
  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerKey,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: '$'+price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await response.json();
    console.log('MyResult:', result)
    if (result.success) {

      return result;
    } else {
      
      window.alert("Creat Post failed!", result.error);
    }
  } catch (error) {
console.error("ERROR CREATING A POST!  ERROR MESSAGE:", error);
  }
};
/////////////////////////////////////////////////
export const deletePost = async ( postId ) => {
  if (!localStorage.getItem("token")) {
    window.alert("You must be logged in to delete a post.");
    return null;
  }
  if(window.confirm("Do you really want to delete this post?")){
  let apiURL = `${BASE_URL}/posts/${postId}`;
  let bearerKey = `Bearer ${localStorage.getItem("token")}`;
  bearerKey = bearerKey.replace(/"/g, "");
  try {
    const response = await fetch(apiURL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json",
      Authorization: bearerKey,
      }
    })
    
    const result = await response.json();

    if (result.success) {
      return true;
    } else {      
      window.alert(`Deleteing post ${ postId }a post failed!: ${result.error}`);
    }
  } catch (error) {
    console.error("ERROR DELETING A POST!  ERROR MESSAGE:", error);
  }
}
}

/////////////////////////////////////////////////
export const loginEndpoint = async (userName, passWord) => {
  console.log({ userName });
  console.log({ passWord });
  let apiURL = `${BASE_URL}/users/login`;
  console.log("APIURL _ - ", apiURL)
  try {
    let token = ""  
    const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
     
            username: userName,
            password: passWord,
          },
        }),
      });
      const result = await response.json();

      
      if (result.success) {
        token = result.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userName", JSON.stringify(userName));
      } 
      else {
        window.alert('Login Failed!')
        token = "not logged in"
      }
      return token;
    } catch (error) {
    console.error("LOGIN END POINT ERROR:", error);
  }
};

/////////////////////////////////////////////////
export const registerEndpoint = async ( userName, passWord) => {
  console.log(`UserName: `, userName);
  console.log(`Password: `, passWord);
  let apiURL =
    'https://strangers-things.herokuapp.com/api/2303-FTB-MT-WEB-PT/users/register';
  let credentials = {
    user: {
      username: userName,
      password: passWord
    },
  };

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...credentials}),
    });
    console.log(response);
    const result = await response.json();
    const token = result.data.token;
    if (result.success) {
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userName", JSON.stringify(userName));
    } else {
      window.alert("Registration Failed!");
    }
    return true;
  } catch (err) {
    console.error(err);
  }
};

/////////////////////////////////////////////////
export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('passWord')
  console.log("Purged");
}

/////////////////////////////////////////////////
// export const createMessage = ({ postId, message, token}) => {
//     //author = post author
    
//     //if token, then can create message





//     //else send them packing


// } 
export const createMessage = async ({ postId, message }) => {
  try {
    console.log('CREATE MESSSAGE DATA: ', postId, message)
    // const apiURL = `${BASE_URL}/posts/${postId}/messages`
    // let bearerKey = `Bearer ${localStorage.getItem("token")}`;
    // bearerKey = bearerKey.replace(/"/g, "");
    
    // const response = await fetch( apiURL, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json', 
    //     'Authorization': bearerKey,
    //     },
    //   body: JSON.stringify({
    //     message: {
    //       content: message,
    //     },
    //   }),
    // });
    
    // const result = await response.json();
    // console.log(result);
    // return result;
  } catch (error) {
    console.error(error);
  }
};