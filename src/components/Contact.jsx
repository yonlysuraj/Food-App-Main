const Contact = () => {
  return (
    <div className='contact'>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum veniam illum eveniet doloribus quo quibusdam nesciunt, ipsam recusandae magni rem, ab ratione eaque voluptatem mollitia, consequuntur dignissimos ipsa asperiores ut? Quidem laboriosam quasi dignissimos nulla.</p>
         <form>
          <input type="text" className=" border border-black p-2 m-2 " placeholder="name" />
          <input type="text" className=" border border-black p-2 m-2"  placeholder="contact"/>
          <button className=" border border-black p-2 m-2">submit</button>
         </form>
    </div>

  )
}

export default Contact;