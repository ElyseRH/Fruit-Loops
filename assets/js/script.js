$( 'header' ).append( '<div class="burguer"><span></span><span></span><span></span></div>' );

$( '.burguer' ).on( 'click', function ()
{

  $( '.burguer' ).toggleClass( 'burguer-click' );
  $( '.menu' ).toggleClass( 'menu-click' );
} );


// Code for back to top button on clothing tips page
// from W3 https://www.w3schools.com/howto/howto_js_scroll_to_top.asp 

mybutton = document.getElementById( "backBtn" );

window.onscroll = function () { scrollFunction() };

function scrollFunction ()
{
  if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 )
  {
    mybutton.style.display = "block";
  } else
  {
    mybutton.style.display = "none";
  }
};

function topFunction ()
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
