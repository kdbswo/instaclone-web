import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import BottomBox from "../components/auth/BottmBox";
import Button from "../components/auth/Button";
import AuthLayout from "../components/auth/Container";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import PageTitle from "../components/PageTitle";
import routes from "../routes";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmitValid = (data) => {
    console.log(data);
  };
  const onSubmitInvalid = (data) => {
    console.log(data, "invalid");
  };
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div style={{ marginBottom: 20 }}>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            ref={register({
              required: "Username is required",
              minLength: 5,
            })}
            name="username"
            type="text"
            placeholder="사용자 이름"
          />
          <Input
            ref={register({ required: "Password is required" })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <Button type="submit" value="로그인" />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Facebook으로 로그인</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="계정이 없으신가요?"
        linkText="가입하기"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
