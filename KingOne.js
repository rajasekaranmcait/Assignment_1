$(document).ready(function()   //Use ready() to make a function available after the document is loaded
{
  for(i= 1; i <= 10; i++) //Loading Icon Loop
  {
    //load the loop images in the div frame
    $("#preloader").append("<div style='width:250px; height: 200px; position: relative;float: left;'><img id='pre' src='images/loading.gif'   alt='loading' ></div>");
  }
  function loading()
  {
    $("#preloader").html("");
    for(i= 1; i <= 10; i++) 
    {
      // Loading the images and when onclicked the images to reload the same page
      $("#preloader").append("<a href='ImageLoad.html'><img src='images/"+i+".jpg' style='width:250px; height: 200px;' alt='Top 10 Images' ></a>");
    }
  }
  //Set Time in Millisecond/Set Time in Millisecond
  setTimeout(loading, 12000);
});