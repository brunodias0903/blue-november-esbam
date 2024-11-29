import BlueNovember from "../../assets/november_blue.jpg";
import {
  HomeBlueNovemberImg,
  HomeContainer,
  HomeContentContainer,
  HomeContentText,
  HomeSubtitle,
  HomeTitle,
  HomeTitleContainer,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitleContainer>
        <HomeTitle>Novembro Azul:</HomeTitle>
        <HomeSubtitle>JUNTOS NA LUTA CONTRA O CÂNCER DE PRÓSTATA</HomeSubtitle>
        <HomeBlueNovemberImg src={BlueNovember} />
      </HomeTitleContainer>
      <HomeContentContainer>
        <HomeContentText>
          O <strong style={{ color: "#1E90FF" }}>Novembro azul</strong> é um
          movimento global dedicado a conscientizar sobre a importância da
          prevenção e do diagnóstico precoce do câncer de próstata. Durante todo
          o mês de novembro, realizamos ações para informar e alertar os homens
          sobre os cuidados com a saúde, incentivando a realização de exames
          regulares, como o PSA e o toque retal, que podem salvar vidas. O
          câncer de próstata é o tipo mais comum entre os homens, mas a detecção
          precoce aumenta significativamente as chances de tratamento e cura.
          Por isso, esteja atento aos sinais do seu corpo, mantenha seus exames
          em dia e converse com um médico regularmente. Participe desta
          campanha, compartilhe essa mensagem e ajude a promover a saúde
          masculina. Juntos, podemos salvar vidas! <br />
          <br />{" "}
          <strong style={{ color: "#1E90FF" }}>
            PREVINA-SE! CUIDAR DE SI É UM ATO DE AMOR.
          </strong>
        </HomeContentText>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;
