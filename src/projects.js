import sec from "./proj1.jpg"
import two from "./proj2.jpg"
import three from "./proj3.jpg"
import four from "./proj4.jpg"
function Projet (){

  const arr =[{title:"Project 1", img:sec},{title:"Project 2",img:two},{title:"Project 3",img:three},{title:"Project 4",img:four}  ]
    return(
        <>
            <section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">

  {  arr.map(el=> <div className="project-card">
        <img src={el.img} alt="project" />
        <h3>{el.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
          aliquam.
        </p>
        <p><a href="#">Github Link</a></p>
      </div> ) } 
    </div>
  </section>
  </>
    )
}
export default Projet 