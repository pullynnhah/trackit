import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthPage from "../components/AuthPage";
import { LOGIN_FIELDS } from "../contants/fields";
import { login } from "../services/api";

export default function LoginPage() {
  const [form, setForm] = useState(
    LOGIN_FIELDS.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
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
    login(form)
      .then(res => {
        setIsLoading(false);
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
        setIsLoading(false);
      });
  }

  return (
    <AuthPage
      fields={LOGIN_FIELDS}
      btnText="Entrar"
      link="/"
      linkText="Não tem uma conta? Cadastre-se!"
      form={form}
      isLoading={isLoading}
      handleForm={handleForm}
      handleSubmit={handleSubmit}
    />
  );
}
