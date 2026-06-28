import luxury1 from "../assets/luxury1.png"
import luxury2 from "../assets/luxury2.png"
import luxury3 from "../assets/luxury3.png"

import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"

import nexora1 from "../assets/01-cover.png"
import nexora2 from "../assets/02-dashboard.png"
import nexora3 from "../assets/03-sections.png"

function Projects() {

  return (

    <section 
    id="projects" 
    className="projects">


      <h2>
        پروژه‌ها
      </h2>




      <div className="project-list">



        <div className="project-card">

          <div className="project-image">

<img src={luxury1}/>
<img src={luxury2}/>
<img src={luxury3}/>

</div>

          <h3>
            Luxury Store
          </h3>


          <p>
            طراحی سایت فروشگاه لباس لوکس با طراحی مدرن و ریسپانسیو
          </p>


          <span>
            React • CSS
          </span>



          <a
          href="https://mohamadkazemerad-sketch.github.io/luxury-store/"
          target="_blank"
          >
            مشاهده پروژه
          </a>



        </div>






        <div className="project-card">

         <div className="project-image">

<img src={service1}/>
<img src={service2}/>
<img src={service3}/>

</div>
         
<h3>
  Abolfazl Service
</h3>


          <p>
            طراحی سایت معرفی خدمات تعمیرات پکیج و کولر گازی
          </p>


          <span>
            HTML • CSS • JavaScript
          </span>



          <a
          href="https://mohamadkazemerad-sketch.github.io/abolfazl-site/"
          target="_blank"
          >
            مشاهده پروژه
          </a>



        </div>

        <div className="project-card">

  <div className="project-image">

<img src={nexora1}/>

<img src={nexora2}/>

<img src={nexora3}/>

</div>


  <h3>
    NEXORA SaaS
  </h3>


  <p>
    طراحی لندینگ پیج مدرن SaaS با React، طراحی ریسپانسیو و رابط کاربری حرفه‌ای
  </p>


  <span>
    React • Vite • CSS
  </span>


  <a
  href="https://mohamadkazemerad-sketch.github.io/nexora-saas/"
  target="_blank"
  >
    مشاهده پروژه
  </a>


</div>



      </div>


    </section>

  )

}


export default Projects