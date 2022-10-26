import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import BottomBox from "../components/auth/BottmBox";
import Button from "../components/auth/Button";
import AuthLayout from "../components/auth/Container";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import { FatLink } from "../components/shared";
import routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

function SignUp() {
  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>친구들의 사진과 동영상을 보려면 가입하세요.</Subtitle>
        </HeaderContainer>
        <form>
          <Button type="submit" value="Facebook으로 로그인" />
        </form>
        <Separator />
        <div style={{ marginTop: -15 }} />
        <form>
          <Input type="text" placeholder="이메일 주소" />
          <Input type="password" placeholder="성명" />
          <Input type="password" placeholder="사용자 이름" />
          <Input type="password" placeholder="비밀번호" />
          <Button type="submit" value="가입" />
        </form>
      </FormBox>
      <BottomBox
        cta="계정이 있으신가요?"
        linkText="로그인"
        link={routes.home}
      />
    </AuthLayout>
  );
}
export default SignUp;
