import styled from "styled-components";

import DotsLoader from "../DotsLoader";

import { Input } from "../../styles/Input";

export default function AuthForm({ fields, btnText, isLoading, form, handleForm, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      {fields.map(f => (
        <Input
          disabled={isLoading}
          key={f.name}
          {...f}
          value={form[f.name]}
          onChange={handleForm}
          required
        />
      ))}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <DotsLoader width="51" height="13" /> : btnText}
      </Button>
    </Form>
  );
}

const Form = styled.form``;

const Button = styled.button`
  width: 100%;
  height: 45px;
  top: 381px;

  background: #52b6ff;
  border-radius: 5px;

  color: #fff;
  font-size: 21px;
  line-height: 26px;
`;
