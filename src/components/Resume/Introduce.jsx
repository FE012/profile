import styled from "styled-components";
import { Title } from "../Resume/Title";

const IntroduceBox = styled.article`
  margin-top: 35px;
  p {
    font-size: var(--main-font);
    font-weight: var(--regular-weight);
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`;

function Introduce() {
  return (
    <IntroduceBox>
      <Title>😊 자기소개</Title>
      <p>
        <strong>
          안녕하세요! 배움과 성장을 추구하는 신입 프론트엔드 개발자,
          김예본입니다.
        </strong>{" "}
        코드스테이츠 부트 캠프를 통해 개발을 배우고 수료하였습니다. 수료 후에는
        기술들에 대해 공부하며 시간을 보내고 있습니다. 요즘에는 가독성 좋은
        코드로 작성하는 것에 흥미를 느끼고 있습니다.
      </p>
      <p>
        <strong>개발 공부를 하기 전까지는</strong> 학원에서 아이들에게 피아노를
        가르치는 일을 했습니다. 3년동안 아이들을 가르치면서 즐거웠지만, 아이들이
        성장하는 모습을 보며 문득 나는 지금의 자리에서 얼마나 성장할 수
        있을까라는 생각이 들었습니다. 강사로서 성장하기 위해서 티칭 능력 향상을
        위한 책도 읽어보고, 세미나도 참가하면서 다양한 정보를 찾아봤지만
        가르치는 노하우도 비즈니스 노하우이다 보니 정보 공유 문화가 활성화되지
        않았다는 사실을 깨달았습니다.
      </p>
      <p>
        이러한 문화에 익숙해질 때쯤{" "}
        <strong>
          개발자들은 코드를 서로 공유하고, 리뷰하며 서로의 성장을 진심으로
          돕는다는 것을 알게 되면서 그 문화에 매력을 느꼈습니다. 그 문화에 섞여
          제가 가진 것들을 나누고 싶어 개발을 시작하게 되었습니다.
        </strong>
      </p>
      <p>
        공부할 개발 언어에 대해 찾아보던 중 웹사이트를 보다가 마우스를 호버하면
        글씨가 움직이고, 스크롤을 내리면 애니메이션이 움직이는 것을 보게
        되었습니다. 이런 사이트를 어떻게 만드는지 찾아보다가 프론트엔드 개발자가
        눈에 보이는 것들을 만든다는 것을 알게 되었습니다. 이외에도{" "}
        <strong>
          평소에 사용하기 불편했던 웹들을 경험하면서 사용자 친화적인 UX 웹을
          만드는 일에 기여하고 싶어 프론트엔드 개발을 선택하게 되었습니다.
        </strong>
      </p>
    </IntroduceBox>
  );
}

export default Introduce;
