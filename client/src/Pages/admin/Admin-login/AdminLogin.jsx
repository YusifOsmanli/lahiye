import React, { useContext } from "react";
import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import dataContexts from "../../../context/context";

const AdminLogin = () => {
  const { isLoginAdmin, setIsLoginAdmin, userData } = useContext(dataContexts);
  const navigate = useNavigate();
  const initialValuess = {
    email: "",
    password: "",
  };

  const validationSchemaa = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmitt = (values) => {
    console.log("Form data:", values);
    const user = userData.find(user => user.email === values.email);
    if(user.isAdmin==true){
        axios
      .post("http://localhost:7070/users/login", {
        ...values,
      })
      .then((res) => {
        localStorage.setItem("tokenAdmin", res.data.token);
        console.log(res);
        navigate("/admin");
        setIsLoginAdmin(localStorage.setItem("isLoginAdmin", JSON.stringify(true)));
      });
    }
  };

  return (
    <div className="admin-login ">
      <main class="main-content snipcss-oBfoM" id="MainContent">
        <wlm class="wlm-content">
          <div class="page-width page-content">
            <div class="grid">
              <div class="grid__item medium-up--one-third medium-up--push-one-third">
                <header class="section-header">
                  <h1 class="section-header__title">Admin panele giriş yap</h1>
                </header>
                <div class="note note--success hide" id="ResetSuccess">
                  Şifrenizi güncellemeniz için size bir bağlantı içeren bir
                  e-posta gönderdik.
                </div>
                <div id="CustomerLoginForm" class="form-vertical">
                  <div>
                    <Formik
                      initialValues={initialValuess}
                      validationSchema={validationSchemaa}
                      onSubmit={handleSubmitt}
                    >
                      <Form>
                        <div>
                          <label htmlFor="email">Email:</label>
                          <Field
                            type="email"
                            class="input-full"
                            id="email"
                            name="email"
                          />
                          <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                          <label htmlFor="password">Password:</label>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            class="input-full"
                          />
                          <ErrorMessage name="password" component="div" />
                        </div>
                        <button
                          type="submit"
                          class="btn btn--full btn--no-animate"
                        >
                          Giriş yap
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
                <div id="RecoverPasswordForm" class="hide">
                  <h2>Şifrenizi sıfırlayın</h2>
                  <p>
                    Şifrenizi sıfırlamanız için size bir e-posta göndereceğiz.
                  </p>
                  <div class="form-vertical">
                    <form
                      method="post"
                      action="/account/recover"
                      accept-charset="UTF-8"
                      onsubmit='window.Shopify.recaptchaV3.addToken(this, "recover_customer_password"); return false;'
                    >
                      <input
                        type="hidden"
                        name="form_type"
                        value="recover_customer_password"
                      />
                      <input type="hidden" name="utf8" value="✓" />
                      <label for="RecoverEmail">E-posta</label>
                      <input
                        type="email"
                        value=""
                        name="email"
                        id="RecoverEmail"
                        class="input-full"
                        autocorrect="off"
                        autocapitalize="off"
                      />
                      <p>
                        <input type="submit" class="btn" value="Gönder" />
                      </p>
                      <button type="button" id="HideRecoverPasswordLink">
                        İptal et
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </wlm>
        <div id="wlmpnf" class="style-Ankbg">
          <div class="page-width">
            <div class="grid">
              <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
                <div class="section-header text-center">
                  <h1>
                    <span class="wlm-title-pnf"></span>
                  </h1>
                </div>
                <div class="rte">
                  <div class="wlm-message-pnf"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="wlm-pwd-form" class="style-UK8No">
          <div id="wlm-wrapper">
            <div class="wlm-form-holder">
              <div id="wlm-pwd-error">Invalid Password</div>
              <input
                type="password"
                placeholder="Enter passcode"
                id="wlm-pwd"
                onkeypress='if( event.keyCode == 13 &amp;&amp; typeof wlm == "object" &amp;&amp; typeof wlm.unlockByAuth == "function" ) { event.preventDefault(); wlm.unlockByAuth(this); }'
              />
              <a
                href="javascript:void(0);"
                id="wlm-pwd-form-button"
                onclick='if( typeof wlm == "object" &amp;&amp; typeof wlm.unlockByAuth == "function" ) wlm.unlockByAuth(this);'
              >
                Enter
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;
