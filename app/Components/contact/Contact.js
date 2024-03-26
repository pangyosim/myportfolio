import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_pt27hpn", "template_4a79z7o", form.current, "62U_TGbxR3Tk_wYzj").then(
      result => {
        alert("성공적으로 이메일이 전송되었습니다.");
        form.current.reset();
      },
      error => {
        console.log(error.text);
        alert("이메일이 전송이 실패되었습니다.");
      },
    );
  };
  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'> <i className="fa-solid fa-envelope"></i> &nbsp;&nbsp;spg9687@gmail.com</h3><br></br><br></br>
          <h3 className='contact__title'> <i className="fa-solid fa-phone"></i> &nbsp;&nbsp;010-9334-6260</h3><br></br><br></br>
          <h3 className='contact__title'> <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;서울시 송파구 오금동</h3><br></br><br></br>
          {/* <p className='contact__details'>Dont Like Forms? Send Me an Email. 👋</p> */}
        </div>
        
        <form ref={form} className='contact__form' onSubmit={sendEmail}>
          <div className='contact__form-div'>
            <input className='contact__form-input' type="email" name="user_email" placeholder="답변받으실 이메일 " required/>
          </div>

          <div className='contact__form-div'>
            <input className='contact__form-input' type="text" name="ask_title" placeholder="제목" maxLength={20} required/>
          </div>

          <div className='contact__form-div contact__form-area'>
            <textarea className='contact__form-input' name="ask_message" placeholder="내용" required></textarea>
          </div>
          <button className='btn' type="submit" value="메일 보내기">메일보내기</button>
        </form>
      </div>
    </section>
  )
}

export default Contact