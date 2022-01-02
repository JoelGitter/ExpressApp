
window.fbAsyncInit = function() {
    FB.init({
        appId      : '2178781185593087',
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
    });
        
    FB.AppEvents.logPageView();  
    
    FB.getLoginStatus(function(response) {
        if(response.status === "unknown"){
            FB.login();
        }
    }); 
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
