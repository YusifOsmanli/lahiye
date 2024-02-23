import React, { useContext, useState } from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import dataContext from "../../../context/context";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const { userData, setUserData } = useContext(dataContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      isAdmin: false,
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios.post("http://localhost:7070/users/register", values).then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success('Register Successfully')
        setUserData([...userData, res.data]);
      });
      resetForm();
    },
  });

  return (
    <div className="register">
      <wlm class="wlm-content snipcss0-0-0-1 snipcss-efOhP">
        <div class="page-width page-content snipcss0-1-1-2">
          <div class="grid snipcss0-2-2-3">
            <div class="grid__item medium-up--one-third medium-up--push-one-third snipcss0-3-3-4">
              <header class="section-header snipcss0-4-4-5">
                <h1 class="section-header__title snipcss0-5-5-6">
                  Hesap Oluştur
                </h1>
              </header>
              <div class="form-vertical snipcss0-4-4-7">
                <form onSubmit={formik.handleSubmit} class="snipcss0-5-7-8">
                  <label htmlFor="name" class="snipcss0-6-8-11">
                    İSİM
                  </label>
                  <input
                    id="name"
                    type="text"
                    class="input-full snipcss0-6-8-12"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}

                  <label htmlFor="surname" class="snipcss0-6-8-13">
                    SOYADI
                  </label>
                  <input
                    id="surname"
                    type="text"
                    class="input-full snipcss0-6-8-14"
                    {...formik.getFieldProps("surname")}
                  />
                  {formik.touched.surname && formik.errors.surname ? (
                    <div>{formik.errors.surname}</div>
                  ) : null}

                  <label htmlFor="email" class="snipcss0-6-8-15">
                    E-POSTA
                  </label>
                  <input
                    id="email"
                    type="email"
                    class="input-full snipcss0-6-8-16"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}

                  <label htmlFor="password" class="snipcss0-6-8-17">
                    ŞİFRE
                  </label>
                  <input
                    id="password"
                    type="password"
                    class="input-full snipcss0-6-8-18"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}

                  <button
                    type="submit"
                    className="btn btn--full btn--no-animate snipcss0-7-24-25"
                  >
                    Oluştur
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </wlm>
    </div>
  );
};

export default Register;
