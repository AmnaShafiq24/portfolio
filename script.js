
document.addEventListener('DOMContentLoaded', function()
{
    const menuT = document.querySelector(".menu_toggle");
    const navlink = document.querySelector(".nav_links");
    
   menuT.addEventListener('click', function()
   {
    navlink.classList.toggle('active');

    const icon = menuT.querySelector('i');
    icon.classList.toggle('fa-bar');
    icon.classList.toggle('fa-x');
   });

});