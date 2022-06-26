/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){
    
    var input = document.querySelector("input").value;
    var finalInput = input.replace(/\s/g, '+');
    ajax(finalInput);

});


document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    
    //if the key ENTER is pressed...
    if(e.key === 'Enter') {
        var input = document.querySelector("input").value;
        var finalInput = input.replace(/\s/g, '+');
        ajax(finalInput);      
        
    }
});



/* 2. do the data stuff with the API */
function ajax(input) {
    const key = "UYyYPy3gjXZ1yR51nSngKPCVP73xTFc7"
    var url="http://api.giphy.com/v1/gifs/search?q="+input+"&api_key="+key;
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e) {
        var data = e.target.response;
        pushToDOM(data);
    });
}






/* 3. Show me the GIFs */
function pushToDOM(input) {

    var response = JSON.parse(input);

    var imageUrls = response.data;
    
    var container = document.querySelector(".js-container");

    container.innerHTML = "";

    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img src= \'"+src+"\' alt = 'GIF' class='container-image'>";
    });

}