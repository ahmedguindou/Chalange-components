function Footer (){
    return (
        <>
        <section id="contact">
      <h2 className="text-important">contact me</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Email" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button>Send</button>
      </form>
    </section>
    <footer>
      <p>Copyritghts &copy; GOMYCODE 2020</p>
    </footer>
    </>
    )
}
export default Footer 