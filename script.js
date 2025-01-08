document.getElementById('log').addEventListener('click',function(){
    alert('fun trip in my world!')
})
title1.addEventListener("moseover", () =>{
title1.style.fontSize= "30px"
})
title1.addEventListener("moseleave", () =>{
    title1.style.fontSize= "50px"
    })
    document.querySelectorAll('.item').forEach(item => {
       item.addEventListener('click', function () {
         if (this.id === 'who') {
            alert('لقد وجدت الشجرة الذهبية! 🎉');
           window.location.href = 'world2.html'; // انتقال إلى العالم الثاني
       } 
       else {
           alert('هذه ليست الشجرة الذهبية. حاول مرة أخرى!');
        }
       });
});
HTMl


