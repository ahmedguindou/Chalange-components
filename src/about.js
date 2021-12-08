import first from "./John-Doe.jpg"
function Aboutt(){
    return(
            <>
    <section id="about-me">
      <h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src={first} alt="jhon-doe" />
    </section>
            </>
    )
}
export default Aboutt 