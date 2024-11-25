import PinkOctober from "../../assets/pink-october-2.jpg";
import HoverCard from "../../components/HoverCard";
import { AboutContainer, AboutPinkOctoberImg, CardContainer } from "./styles";

// import images
import imageSexuality from "../../assets/sexualidade.jpg";
import imageMentalHealth from "../../assets/saude_mental.jpg";
import imageDoencas from "../../assets/doencas.jpg";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <CardContainer>
        <HoverCard
          imageSrc={imageMentalHealth}
          content="É hora de superar os tabus e preconceitos que cercam a saúde mental masculina. A frase homem não chora reflete a ideia equivocada de que os homens não devem mostrar fragilidades ou expressar emoções. Infelizmente, isso leva muitos homens a reprimir seus sentimentos, prejudicando a si mesmos e às pessoas ao seu redor."
          titleCard="Saude Mental"
        />
        <HoverCard
          imageSrc={imageSexuality}
          content="O tratamento do câncer de próstata pode impactar a vida sexual devido a efeitos colaterais como redução da libido, desmotivação ou depressão. No entanto, é possível manter uma vida sexual ativa durante esse período, aproveitando a oportunidade para redescobrir e explorar novas sensibilidades do corpo."
          titleCard="Sexualidade"
        />
        <HoverCard
          imageSrc={imageDoencas}
          content="Homens apresentam altos índices de mortalidade e menor expectativa de vida devido à baixa adesão aos cuidados preventivos, influenciada por tabus e sentimento de invulnerabilidade. Doenças cardiovasculares, cânceres (próstata, pulmão), doenças cerebrovasculares, infecções e cirrose hepática estão entre as principais causas de morte. Fatores como tabagismo, consumo excessivo de álcool, sedentarismo e alimentação inadequada aumentam os riscos."
          titleCard="Doenças que mais matam homens"
        />
      </CardContainer>

      <AboutPinkOctoberImg src={PinkOctober} />
    </AboutContainer>
  );
};

export default About;
