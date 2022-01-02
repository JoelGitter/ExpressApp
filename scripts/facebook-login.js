
window.fbAsyncInit = function() {
    FB.init({
        appId      : '2178781185593087',
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
    });
        
    FB.AppEvents.logPageView();  
    
    // FB.getLoginStatus(function(response) {
    //     if(response.status === "unknown"){
    //         FB.login();
    //     }
    // }); 
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if(response.status === "connected"){
          userAction(response);
      }
    });
  }

const userAction = async (myBody) => {
    const response = await fetch('https://expressapp11.azurewebsites.net/facebook-identification', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }