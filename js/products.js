
/*Search */
/* $(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".products-imgs *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }); */

/* function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[1];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
            } else {
                    li[i].style.display = "none";
            }
    }
} */
/*  const headers = document.querySelectorAll("h1");

let input = document.getElementById("search");
let filter = input.value.toUpperCase();


headers.forEach(header=>{
    let txtValue=header.innerText || header.textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        header.style.display = "";
}
 else {
        header.style.display = "none";
}
}) ;
 */
/*animation using intersection Observer API */


const images = document.querySelectorAll(".img2");

const options={
};

const observer = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return
            }
            entry.target.classList.add("fadeInBtm");
            console.log(entry.target);
        });
},options);

images.forEach(image=>{
    observer.observe(image)
}) 
