import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact
} from "react-icons/fa"


function Skills() {

  return (

    <section id="skills" className="skills">


      <h2>
        مهارت‌ها
      </h2>



      <div className="skill-list">


        <div className="skill-card">

          <FaHtml5 className="skill-icon html-icon"/>

          <span>
            HTML
          </span>

        </div>



        <div className="skill-card">

          <FaCss3Alt className="skill-icon css-icon"/>

          <span>
            CSS
          </span>

        </div>



        <div className="skill-card">

          <FaJs className="skill-icon js-icon"/>

          <span>
            JavaScript
          </span>

        </div>



        <div className="skill-card">

          <FaReact className="skill-icon react-icon"/>

          <span>
            React
          </span>

        </div>



      </div>


    </section>

  )

}


export default Skills