import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

import $ from 'jquery'
import 'boxicons/css/boxicons.min.css'


function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
     

  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
 require("bootstrap/dist/js/bootstrap.bundle.min.js");
    //jquery

      $(window).scroll(function () {
      if (
        $(this).scrollTop() >= $("#top").offset().top - 200 &&
        $(this).scrollTop() <= $("#about").offset().top - 200
      ) {
        $("nav div li").removeClass("active");
        $("nav div li:eq(0)").addClass("active");
        $("#top").css({ "font-size": "100%" });
        $("#about ").css({ "font-size": "80%" });
        $("#mybuild").css({ "font-size": "80%" });
        $("#myskill ").css({ "font-size": "80%" });
        $("#cv ").css({ "font-size": "80%" });
        $("#contact ").css({ "font-size": "80%" });
        document.title = "Portofolio";
      }
      if (
        $(this).scrollTop() >= $("#about").offset().top - 200 &&
        $(this).scrollTop() <= $("#mybuild").offset().top - 200
      ) {
        $("nav div li").removeClass("active");
        $("nav div li:eq(1)").addClass("active");
        $("#top").css({ "font-size": "0" });
        $("#about ").css({ "font-size": "100%" });
        $("#mybuild").css({ "font-size": "80%" });
        $("#myskill ").css({ "font-size": "80%" });
        $("#cv ").css({ "font-size": "80%" });
        $("#contact ").css({ "font-size": "80%" });
        document.title = "Tentang saya";
      }
      if (
        $(this).scrollTop() >= $("#mybuild").offset().top - 200 &&
        $(this).scrollTop() <= $("#myskill").offset().top - 200
      ) {
        $("nav div li").removeClass("active");
        $("nav div li:eq(2)").addClass("active");
        $("#top").css({ "font-size": "80%" });
        $("#about ").css({ "font-size": "80%" });
        $("#mybuild").css({ "font-size": "100%" });
        $("#myskill ").css({ "font-size": "80%" });
        $("#cv ").css({ "font-size": "80%" });
        $("#contact ").css({ "font-size": "80%" });
        document.title = "Contoh";
      }
      if (
        $(this).scrollTop() >= $("#myskill").offset().top - 200 &&
        $(this).scrollTop() <= $("#cv").offset().top - 200
      ) {
        $("nav div li").removeClass("active");
        $("nav div li:eq(3)").addClass("active");
        $("#top").css({ "font-size": "80%" });
        $("#about ").css({ "font-size": "80%" });
        $("#mybuild").css({ "font-size": "80%" });
        $("#myskill ").css({ "font-size": "100%" });
        $("#cv ").css({ "font-size": "80%" });
        $("#contact ").css({ "font-size": "80%" });
        document.title = "Pengetahuan";
      }

      if (
        $(this).scrollTop() >= $("#cv").offset().top - 200 &&
        $(this).scrollTop() <= $("#contact").offset().top - 200
      ) {
        $("nav div li").removeClass("active");
        $("nav div li:eq(4)").addClass("active");
        $("#top").css({ "font-size": "80%" });
        $("#about ").css({ "font-size": "80%" });
        $("#mybuild").css({ "font-size": "80%" });
        $("#myskill ").css({ "font-size": "80%" });
        $("#cv ").css({ "font-size": "100%" });
        $("#contact ").css({ "font-size": "80%" });
        document.title = "CV";
      }
      if (
        $(this).scrollTop() > $("#contact").offset().top - 400 &&
        $(this).scrollTop() < $("#contact").offset().top + 300
      ) {
        $("nav div li").removeClass("active");
        $("nav div li:eq(5)").addClass("active");
        $("#top").css({ "font-size": "80%" });
        $("#about ").css({ "font-size": "80%" });
        $("#mybuild").css({ "font-size": "80%" });
        $("#myskill ").css({ "font-size": "80%" });
        $("#cv ").css({ "font-size": "80%" });
        $("#contact ").css({ "font-size": "100%" });
        document.title = "Kontak";
      }
    });

    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .on("click", function (e) {
        // On-page links
        if (
          window.location.pathname.replace(/^\/#/, "") ==
            this.pathname.replace(/^\/#/, "") &&
          window.location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);

          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            e.preventDefault();

            window.scrollTo(target.offset().top, target.offset().top);
          }
        }
      });
      //javascript
       window.scrollTo(0, 0);
      window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      var nva = document.getElementById("navId");
      var nv1 = document.getElementById("top");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        nva.classList.add("fixed-top");
      } else {
        nva.classList.remove("fixed-top");
        if (window.screenY == nv1.offsettop) {
        } else {
        }
      }
    }
  
      window.scrollTo(0,0);
      

    

    const body = document.querySelector('body'),
  
  
  
    modeSwitch = body.querySelector(".toggle-switch1"),
    modeText = body.querySelector(".mode-text");

 

  




modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
       
    } else {
      

    }
});

    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>

           
     
  
  
    <title>Portofolio</title>

<h1>aaaa</h1>


      <nav class="navbar navbar-expand-lg  " id='navId'  >
     

     <div class="container">
      
     
       <button class="navbar-toggler nl me-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
   <i class='bx bx-menu fs-1 nl' ></i>
      
    </button>
        <a class="navbar-brand nl  fw-bold  me-2" href="/">Arif Rahman S</a>
      
       <div class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
        
       
       
        
                     <ul class="navbar-nav  ms-auto  mb-2 mb-lg-0 text-start "  id='myDIV'>
                  
            
                     <li class="active nav-item"><a  className='nav-link' href="#top">Beranda
                     <div className=' mt-2' >

</div></a></li>
                <li class=" nav-item"><a  className='nav-link' href="#about">Tentang Saya
                <div className=' mt-2' >

</div></a></li>
                <li class=" nav-item"><a  className='nav-link' href="#mybuild">Contoh
                <div className=' mt-2' >

</div></a></li>
                <li class=" nav-item"><a  className='nav-link' href="#myskill">Keahlian
                <div className=' mt-2' >

</div></a></li>
                <li class=" nav-item"><a  className='nav-link' href="#cv">CV
                <div className=' mt-2' >

</div></a></li>
                <li class=" nav-item"><a  className='nav-link' href="#contact">Kontak
                <div className=' mt-2' >

</div></a></li>
         
          
           
         </ul>
         
       
       
      
                
       
       </div>

       <div className='ms-2 me-4'>
       <button class="toggle-switch1 bg-transparent   border-0  ">
         <span class="mode-text text  ms-auto me-auto nav-link nl" ><i class="fa fa-sun-o" aria-hidden="true"></i></span>   
        <span class=" switch ms-2 me-2"></span>
           <span class="mode-text text  ms-auto me-auto nav-link nl" ><i class="fa fa-moon-o" aria-hidden="true"></i></span>   
          
        </button>
        <div className=' mt-2 lin' >

</div>
</div>
     
<div class="dropdown ">
 

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/">Bahasa Indonesia</a></li>
    <li><a class="dropdown-item" href="/jp">Japan</a></li>
    <li><a class="dropdown-item" href="/en">English</a></li>
  </ul>
  <div className=' mt-2 lin' >

</div>
</div>
        
       
     </div>
     
   </nav>




    
<div className='container-fluid ' id="top" data-anchor="top">
    <div class="container mt-5 pt-5" >
        <div class="row p-0">
            
            <div class="col-sm-6 col-md-8 align-self-center ">
              

                <h1>Halo Saya Arif Rahman S.</h1>
                <p>biarkan lambat karena itu baik dan jangan pernah menyerah  </p>
                <ul class=" nav  mb-2 mb-lg-0 text-start  navc">
                    <li class="active nav-item"><a className='nav-link btn btn-dark m-2' href="https://www.instagram.com/arifesrahman/">Instagram</a></li>
                    <li class="nav-item"><a className='nav-link btn btn-dark m-2 ' href="https://www.facebook.com/ax7war/">Facebook</a></li>
                    <li class="nav-item"><a className='nav-link btn btn-dark m-2' href="https://www.linkedin.com/in/arif-sadita-166bb1202/">Linked</a></li>
                    <li class="nav-item"><a className='nav-link btn btn-dark m-2'  href="https://github.com/ariefrahman111">Github</a></li>
                    <li class="nav-item"><a className='nav-link btn btn-dark m-2'  href="https://twitter.com/ArifSadita">Twitter</a></li>
                </ul>
            
            </div>
            <div class="col-sm-6 col-md-4 text-end p-5">
            <img id="divimg " className='w-100 '  src='https://myweb-arif.web.app/static/media/pasfoto.dd02f54b3b5c6e8b4840.png' alt="..."/>
            </div>
           
           
        </div>
       
        
        </div>
        </div>
       
<div className=''  id="about" data-anchor="about">   
<div className='container ' >
          
            <div class="linear"></div>
         
            <section class="page-section ">
        
                <div class="row justify-content-center">
                    <div class="col-sm-6 col-md col-lg text-center align-self-center p-5">  <img id="divimg " className='w-75  rounded-5 ' src='https://myweb-arif.web.app/static/media/123.fb0c21a3d8fb0d5c7a0a.png' alt=".."/>
                     
        
                    </div>
                    <div class="col-sm-4 col-md col-lg align-self-center text-left p-5 shadow rounded-3 p-3 h-100"> 
                        <h2 class="text-start">Tentang Saya</h2>
                       <p class="">Saya Arif Rahman pertama kali membuat project di universitas saya juga
                            baru lulus prodi D3 Manajemen informatika
                            universitas Riau Pada tahun 2020, setelah lulus saya menjadi freelance dalam pembuatan Website,
                            aplikasi mobile dan
                            lainnya, </p>
                       
                         
                           
                    </div>
                </div>
            </section>
        
        
        
        
        
        
        </div></div>
     

     <div className='py-5 '  id="mybuild"  data-anchor="mybuild">
        <div className='container p-5' >
      
           
            <div class="linear"></div>
          
         
        
                <div class="row">
                    
        <div className='col-md-12 col-lg-2 align-self-center '>
        <h2 class="text-start">Contoh</h2>
        <p  class="text-start">Berikut adalah Contoh Website atau Mobile yang pernah saya bikin </p>
        </div>
                    <div class="col-sm col-md-12 col-lg-10 text-start ">
                    
                        <div class="scrollmenu ">
        <div className=' rounded '>
                            <a className='btn btn p-0  m-2 shadow' href="https://apisari.web.app/">
                          <h1 className='p-5 textlight'>Apisari</h1>
                               </a>
                            
                               <a className='btn btn p-0  m-2 shadow' href="https://online-antrian.web.app/">
                          <h1 className='p-5 textlight'>A O</h1>
                               </a>
                         </div>
                         
        
                        </div>
        
        
                    </div>
        
                </div>
        
             
        
        
        
        
        </div></div>

        <div className='py-5 '  id="myfigma"  data-anchor="myfigma">
        <div className='container p-5' >
      
           
            <div class="linear"></div>
          
         
        
                <div class="row">
                    
        <div className='col-md-12 col-lg-2 align-self-center '>
        <h2 class="text-start">Figma</h2>
        <p  class="text-start">Berikut adalah Contoh UI Desain yang pernah saya bikin </p>
        </div>
                    <div class="col-sm col-md-12 col-lg-10 text-start ">
                    
                        <div class="scrollmenu ">
        <div className=' rounded '>
        
            
                            <a className='btn btn p-0  m-2 shadow' href="https://www.figma.com/community/file/1202350633065958527">
                            <img  className=' textlight bgui'  src='https://s3-alpha.figma.com/hub/file/2945613537/d27cbe85-821e-4e08-a5f8-d1536761336d-cover.png'></img>
                               </a>
                            
                        
                         </div>
                         
        
                        </div>
        
        
                    </div>
        
                </div>
        
             
        
        
        
        
        </div></div>
        
        <div className='py-5  '  id="myskill"  data-anchor="myskill">
        <div class="text-center container p-5">
        
          
            <div class="linear"></div>
          
            <div className='row'>
           
              <div className=' col-md col-lg-2 align-self-center'>
 <h2 class="text-start">Keahlian</h2>
              <p  class="text-start">Berikut adalah bahasa programan yang saya pelajari </p>
              </div>
              <div className='col-sm col-md-12 col-lg-10'>
              <div class="row ">
                <div class="col-sm col-md-6 col-lg-3">
                    <div class="thumbnai shadow rounded p-3 h-100">
                        <img id="divimg2" className='w-100' src="https://cdn3.iconfinder.com/data/icons/illustricon-tech/512/browser.development-512.png" alt="..."/>
                        <h2  class="text-center">Frontend</h2>
                        <div class="caption text-start">
                            <h3 class="text-center">Basic</h3>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Html
                            </p>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Css
                            </p>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Javascript
                            </p>
                            <h3 class="text-center">Framework</h3>
                        
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> React.Js
                            </p>
                           
        
                        </div>
        
                    </div>
        
                </div>
                <div class="col-sm col-md-6 col-lg-3">
                    <div class="thumbnai shadow rounded p-3 h-100">
                        <img id="divimg2" className='w-100' src="https://cdn3.iconfinder.com/data/icons/illustricon-tech/512/development.browser.gears.-512.png" alt="..."/>
                        <h2 class="text-center">Backend</h2>
                        <div class="caption text-start">
                            <p ><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Python</p>
                           
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Php</p>
                          
                            <p ><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Nodejs</p>
                           
                        </div>
        
                    </div>
        
                </div>
                <div class="col-sm col-md-6 col-lg-3">
                    <div class="thumbnai  shadow rounded p-3 h-100">
                        <img id="divimg2"  className='w-100' src="https://cdn3.iconfinder.com/data/icons/illustricon-tech-v/512/mobile_maintenance-256.png" alt="..."/>
                        <h2>Mobile</h2>
                        <div class="caption text-start">
                            <h3 class="text-center">Cross Platform</h3>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> React
                                Native</p>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Flutter </p>
                            <h3 class="text-center">Android</h3>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Java
                            </p>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Kotlin
                            </p>
        
                        </div>
        
                    </div>
        
                </div>
                <div class="col-sm col-md-6 col-lg-3">
                    <div class="thumbnai  shadow rounded p-3 h-100">
                        <img id="divimg2" className='w-100' src="https://cdn3.iconfinder.com/data/icons/illustricon-tech-v/512/data_base-256.png" alt="..."/>
                        <h2>Database</h2>
                        <div class="caption text-start">
                            <h3 class="text-center">Sql</h3>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> MySQL
                            </p>
                            
                            <h3 class="text-center">No Sql</h3>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> MongoDb
                            </p>
                            <p><img width="20px" src="https://www.iconarchive.com/download/i86039/graphicloads/100-flat-2/check-1.ico"/> Firebase
                            </p>
        
                        </div>
        
                    </div>
        
                </div>
        
            </div>
              </div>
            </div>
           
        </div>
        </div>


        <div className='py-5   bgl'  id="cv" data-anchor="cv">
<div className='container '>
      
        <div className='row'>
            <div className='col-sm col-md-12 col-lg-2 align-self-center '>  <h2>CV</h2>
            <p className='text-start'>Download Cv dalam bentuk pdf  dibawah ini</p>
         
            <a  className='btn btn-dark' href='https://myweb-arif.web.app/static/media/Arif.58bc16a0959c2c96ae40.pdf' target="_blank" download>Download Pdf</a>
            </div>
            <div className=' col-md-12 col-lg-10'>  
            <div className='container-fluid cv  shadow'  >
           
           
           
        
                <section class="row   "> 
               
                    <div class="col-sm col-md  align-self-center  ">
                    <img id="divimg " className=' w-100 p-5' src='https://myweb-arif.web.app/static/media/pasfoto.dd02f54b3b5c6e8b4840.png' alt="..."/>
                   <div className='p-4'>
                    <div className=' row '>
                 
                      <p className='col-2 '>  <i class='bx bx-phone-call fs-1'   ></i>  </p>

                      <p className='col align-self-center'>+6282286362102  </p>
                      </div>
                      <div className=' row '>
                 
                      <p className='col-2 '><i class='bx bx-envelope fs-1' ></i> </p>

                 <p className='col align-self-center'> arifes1996@gmail.com </p>
                 </div>
                 <div className=' row '>
                 
                 <p className='col-2' >  <i class='bx bx-map fs-1'  ></i>  </p>

                 <p className='col align-self-center'>Jl. Lintas Timur Km 12.5  Pekanbaru, Riau  </p>
                 </div>
                 </div>  

            
                 <div class="row  ">
                                <div className='col-2 me-2  align-self-center'>
                                <div class="text-center">
  <button type="button" class="btn-circle"><i class='bx bxs-graduation fs-2'  ></i></button>
</div>
         
    </div>
                                <div className='col p-0 m-0 align-self-center '>
                              
       <span className=' fs-2 '>Pendidikan</span>

                                </div>
                           
                       
                           </div>
                           <div className='line'></div>
                 
                    <div className='p-3'>
                  
                    <p class="w-100 text-start">SMK Bina Terampil Jurusan Teknik Otomotif : 2014-2017</p>
                    <p class="w-100 text-start">D3 Manajemen Informatika Fakultas Matematika Dan Ilmu Pengetauhan Alam Universitas Riau : 2017-2020</p>
                       </div>
                            <div class="row  ">
                                <div className='col-2 me-2  align-self-center'>
                                <div class="text-center">
  <button type="button" class="btn-circle"><i class='bx bxs-heart text-center  fs-3' ></i></button>
</div>
         
    </div>
                                <div className='col p-0 m-0 align-self-center '>
                              
       <span className=' fs-2 '>hobi</span>

                                </div>
                           
                       
                           </div>
                           <div className='line'></div>
                                <div className='py-3'>
                    <p class="w-100 text-start">Pemrograman, nonton film, makan </p>
        </div>
                    </div>
                    <div class="col-sm col-md align-self-start ">
                 
                <div className='py-5 '>    
               <h1 className='fw-bold '>Arif Rahman S</h1>
              <ul class=" nav me-2  text-start ">
              <li class="active nav-item"><a className='nav-link' href="https://www.instagram.com/arifesrahman/">Instagram</a></li>
              <li class="nav-item"><a className='nav-link' href="https://www.facebook.com/ax7war/">Facebook</a></li>
              <li class="nav-item"><a className='nav-link' href="https://www.linkedin.com/in/arif-sadita-166bb1202/">Linked</a></li>
              <li class="nav-item"><a className='nav-link'  href="https://github.com/ariefrahman111">Github</a></li>
              <li class="nav-item"><a className='nav-link'  href="https://twitter.com/ArifSadita">Twitter</a></li>
          </ul>
</div>
                    

                    
<div class="row  ">
                                <div className='col-2 me-2  align-self-center'>
                                <div class="text-center">
  <button type="button" class="btn-circle"><i class="fa fa-user fs-3" aria-hidden="true"></i> </button>
</div>
         
    </div>
                                <div className='col p-0 m-0 align-self-center '>
                              
       <span className=' fs-2 '>Tentang Saya</span>

                                </div>
                           
                       
                           </div>
                           <div className='line'></div>
                    
                   <div className='py-3'>
                   <p class="w-100 text-start">Nama Saya Arif Rahman S. Saya lulusan D3 managemen informatika di salah satu universitas negeri</p>
                            </div>
                            
                            <div class="row  ">
                                <div className='col-2 me-2  align-self-center'>
                                <div class="text-center">
  <button type="button" class="btn-circle"><i class="bx bx-file fs-3" aria-hidden="true"></i> </button>
</div>
         
    </div>
                                <div className='col p-0 m-0 align-self-center '>
                              
       <span className=' fs-2 '>Keahlian</span>

                                </div>
                           
                       
                           </div>
                           <div className='line'></div>
                            <div className='py-3'>
                    <p class="w-100 text-start">Mampu Mengoperasikan komputer berupa Software perkantoran, Microsoft Office, dan Software desain, Merakit Komputer, Pemerograman PHP, Java, C++, Javascript, Python, Jaringan Komputer dan UI/IX desain</p>
</div>
<div class="row  ">
                                <div className='col-2 me-2  align-self-center'>
                                <div class="text-center">
  <button type="button" class="btn-circle"><i class='bx bxs-briefcase fs-2'></i></button>
</div>
         
    </div>
                                <div className='col p-0 m-0 align-self-center '>
                              
       <span className=' fs-2 '>Pengalaman</span>

                                </div>
                           
                       
                           </div>
                           <div className='line'></div>
                           
                            <div className='py-3'>
                    <p class="w-100 text-start">Dilo Pekanbaru, Sebagai website
Developer. Di sana, saya belajar mengenai
bagaimana website itu di gunakan dan apa
saja keuntungan untuk pengguna</p>
                   </div>
                       
                    </div>
                </section>
       
                </div>
                   </div>
            
        </div>
 </div>

        
        
        
        
        
        </div>


<div className='container-fluid '>  <div id="contact" className='container'  data-anchor="contact">
           
            <div class="linear"></div>
           
            <div className='row '>
                <div className='col-sm col-md-2 align-self-center'> <h2 class="text-start">Kontak</h2>
                 <p class="text-start">Berikut ini merupakan kontak saya anda bisa berikan saran pesan dan lainnya</p></div>
            <div class="col-sm col-md-10 forms "><h5>Kirim pesan</h5><div class="mt-4  inputs ">
                <input type="text" class="form-control" placeholder="Name"/>
                <input type="text" class="form-control" placeholder="Email"/>
                <textarea class="form-control" placeholder="Type your message"></textarea>
                </div>
                <div class="button mt-4 text-left">
                    <button class="btn btn-dark text-white btnlogin">kirim</button>
                    </div>
                    </div>
            </div>
          
        </div>
    </div>
      
    <div className='container-fluid '>   <div class="row   p-5">
                <div class="col-md-7 align-self-center">
                 
                    <p><span class="glyphicon glyphicon-map-marker"></span> Pekanbaru, Riau Indonesia</p>
                  
                   
        
                </div>
        
                <div class="col-md-2">
                    <ul class="nav navbar-nav navb ">
                        <h4 class="text-left ">BUILD</h4>
                        <li className='nav-item'><a className='nav-link text-decoration-none ' href="#about ">Aplikasi Mobile</a></li>
                        <li><a   className='nav-link text-decoration-none ' href="#services">Website</a></li>
                        <li><a   className='nav-link text-decoration-none ' href="#portfolio">Desain Grahpic</a></li>
                        <li><a  className='nav-link text-decoration-none ' href="#pricing">Marketing</a></li>
                        <li><a  className='nav-link text-decoration-none ' href="#contact">Plan Software</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul class="nav navbar-nav navb">
                        <h4 class="text-left">LINK </h4>
                        <li ><a  className='nav-link text-decoration-none ' href="#top">Home</a></li>
                        <li><a  className=' nav-link text-decoration-none ' href="#about">About</a></li>
                        <li><a   className='nav-link text-decoration-none ' href="#mybuild">Example</a></li>
                        <li><a  className='nav-link text-decoration-none ' href="#myskills">Skills</a></li>
                        <li><a  className='nav-link text-decoration-none ' href="#cv">Cv</a></li>
                        <li><a   className='nav-link text-decoration-none ' href="#contact">Contact</a></li>
        
                    </ul>
                </div>
        
        
            </div>   
        
                <div className='py-2'>Theme Made By Arif Rahman  </div>
          
        </div>
         
       
 
      
  
    

  




    </main>
  )
}

export default Home
