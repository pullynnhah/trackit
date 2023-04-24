import { useState } from "react";

import { useNavigate } from "react-router-dom";

import AuthPage from "../components/auth/AuthPage";

import { SIGNUP_FIELDS } from "../constants/fields";

import { signup } from "../services/api";

export default function LoginPage() {
  const [form, setForm] = useState(
    SIGNUP_FIELDS.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    signup(form)
      .then(res => {
        setIsLoading(false);
        navigate("/");
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

  return (
    <AuthPage
      fields={SIGNUP_FIELDS}
      btnText="Cadastrar"
      link="/"
      linkText="Já tem uma conta? Faça login!"
      form={form}
      isLoading={isLoading}
      handleForm={handleForm}
      handleSubmit={handleSubmit}
    />
  );
}
