
    let email=document.getElementById('email');
    let phone=document.getElementById('phone');
    let check=document.getElementById('check');
    let emailErr=document.getElementById('emailErr');
    let phErr=document.getElementById('phErr');
    let form=document.getElementById('myForm')
    let checkErr=document.getElementById('checkErr');
    let backToTop=document.getElementById('backToTop');
    let navElements=document.querySelectorAll('nav ul li a');
    let sections=document.querySelectorAll('section')
    form.addEventListener('submit',formSubmit)

    window.onscroll=function(){scrollFunction();scrollSpy()}
    function scrollFunction(){
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backToTop.style.display= "block";
      } else {
        backToTop.style.display = "none";
      }
    }
    function scrollSpy(){
      sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset&&top<offset+height){
          navElements.forEach(items=>{
            items.classList.remove('activate')
            document.querySelector('nav ul li a[href*='+id+']').classList.add('activate')
          })
        }
      })
    
    }
    backToTop.addEventListener('click',()=>{
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    })
    function formSubmit(e){
      e.preventDefault();
      let emailVal=email.value;
      let phoneVal=phone.value;
      emailValidate(emailVal);
      phoneValidate(phoneVal);
      checkBox();
      if(emailValidate(emailVal)&&phoneValidate(phoneVal)&&checkBox()){
        console.log('done')
        alert(`Thanks for contacting Me!!! I will get back to you soon
        ${emailVal},${phoneVal} `)
        email.value="";
        phone.value='';
        check.checked=false;
      }
    }
    function checkBox(){
      if(!check.checked){
        checkErr.classList.remove('hide');
        checkErr.innerHTML='Please Check the box to proceed'
        check.style.border='2px solid red'
        return false
      }
      else{
        checkErr.classList.add('hide');
        checkErr.innerHTML=''
        check.style.border='2px solid green'
        return true
      }

    }
    function emailValidate(emailVal){
      if(emailVal.trim().length==0&&!emailVal.includes('@')){
        emailErr.classList.remove('hide');
        emailErr.innerHTML='Please Enter a valid Email id'
        email.style.border='2px solid red'
        return false
      }
      else{
        emailErr.classList.add('hide');
        emailErr.innerHTML=''
        email.style.border='2px solid green'
        return true
      }
    }
    function phoneValidate(phoneVal){
      if(phoneVal.length !== 10){
        phErr.classList.remove('hide');
        phErr.innerHTML='Please Enter a valid phone number'
        phone.style.border='2px solid red'
        return false
      }
      else{
        phErr.classList.add('hide');
        phErr.innerHTML=''
        phone.style.border='2px solid green'
        return true
      }
    }
