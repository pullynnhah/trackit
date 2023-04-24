import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import AuthPage from "../components/auth/AuthPage";

import { LOGIN_FIELDS } from "../constants/fields";

import { UserContext } from "../contexts/UserContext";

import { login } from "../services/api";

export default function LoginPage() {
  const [form, setForm] = useState(LOGIN_FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {}));

  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    login(form)
      .then(res => {
        setIsLoading(false);
        const { name, image, token } = res.data;
        const newUser = { name, image, token };
        setUser(newUser);
        window.localStorage.setItem("trackit", JSON.stringify(newUser));
        navigate("/today");
      })
      .catch(err => {
        const { message, details } = err.response.data;

        let text = message;
        if (details) {
          text += details.reduce((acc, d) => `${acc}\n❌ ${d}`, "\n");
        }
        window.alert(text);
        const newForm = { ...form };
        for (const name in newForm) newForm[name] = "";
        setForm(newForm);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (user) navigate("/today");
  }, [user, navigate]);

  return (
    <AuthPage
      fields={LOGIN_FIELDS}
      btnText="Entrar"
      link="/signup"
      linkText="Não tem uma conta? Cadastre-se!"
      form={form}
      isLoading={isLoading}
      handleForm={handleForm}
      handleSubmit={handleSubmit}
    />
  );
}
