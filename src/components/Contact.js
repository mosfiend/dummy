import React from "react"

function Contact({header}) {

    return (<>
    <h4>{header}</h4>
<form id="contact" className="contact">
<label>Name</label>
<input id="name-field" className="input" type="text" name="name"/>

<label>Subject</label>
<input id="submit-field" className="input" type="text" name="subject"/>

<label>Email</label>
<input id="name-field" className="input" type="text" name="name"/>

<label>Message</label>
<textarea id="name-field" className="input" />

<input id="submit" className="submit-btn" type="submit"/>
</form>
    </>)
}




export default Contact