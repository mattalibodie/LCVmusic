
var galleryContent = [
    {
        "id" : "0",
        "photo" : "./image/slide_show/gallery.jpg"
    },
    {
        "id" : "1",
        "photo" : "./image/slide_show/gallery1.jpg"
    },
    {
        "id" : "2",
        "photo" : "./image/slide_show/gallery2.jpg"
    },
    {
        "id" : "3",
        "photo" : "./image/slide_show/gallery3.jpg"
    },
    {
        "id" : "4",
        "photo" : "./image/slide_show/gallery4.jpg"
    },
]

function init()
{
    for(var i = 0; i < galleryContent.length; i++)
    {
        var item = galleryContent[i];
        var dc=$("<div>");
        $("<img src='" + item.photo+ "'/>").appendTo(dc);
        $("#gallery").append(dc);
    }
}


function galleryEffect()
{
    init();
    $("#gallery > div:gt(0)").hide();
    setInterval(function(){
        $('#gallery > div:first').hide().next().fadeIn(1000).end().appendTo('#gallery');  
    }, 4500);
};
$(document).ready(function()
{
    galleryEffect();
})


