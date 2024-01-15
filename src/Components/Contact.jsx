import React from 'react'

function Contact() {
  return (
   <div className="contact">
    <main>
        <h1>Contact us</h1>
        <form>
            <div>
                <label >Name: </label>
                <input type='text' name='name' id='name' required placeholder='Enter your name' />
            </div>
            <div>
                <label >Email: </label>
                <input type='email' name='email' id='email' required placeholder='Enter your email'/>
            </div>
            <div>
                <label >Message: </label>
                <input type='text' name='msg' id='msg' required placeholder='Tell us about your query...'/>

                
            </div>
            <button type='submit'>Send</button>
        </form>
    </main>
   </div>

  );
};

export default Contact;