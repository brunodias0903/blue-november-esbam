import HoverCard from "../../components/HoverCard";
import {
  AboutContainer,
  CardContainer,
  ContainerAboutProstata,
  TitleAboutProstata,
} from "./styles";

import imageDoencas from "../../assets/doencas.jpg";
import imageMentalHealth from "../../assets/saude_mental.jpg";
import imageSexuality from "../../assets/sexualidade.jpg";

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

      <ContainerAboutProstata>
        <section>
          <TitleAboutProstata>Sobre o Cancêr de próstata</TitleAboutProstata>
          <p>
            O câncer de próstata é uma condição que afeta a glândula prostática,
            parte do sistema reprodutivo masculino, situada logo abaixo da
            bexiga. Essa pequena glândula, com formato semelhante ao de uma
            maçã, desempenha um papel essencial na produção do sêmen, o fluido
            espesso que contém espermatozoides e é liberado durante a atividade
            sexual.
          </p>
          <br />
          <br />
          <p>
            No Brasil, o câncer de próstata é o segundo tipo de câncer mais
            comum entre os homens, ficando atrás apenas do câncer de pele não
            melanoma. Estatísticas do Instituto Nacional do Câncer (INCA),
            estimam cerca de 71 mil novos casos diagnosticados em 2023,
            representando um grande desafio para a saúde pública. Esse tipo de
            câncer, em muitos casos, evolui de forma silenciosa, sem apresentar
            sintomas claros nas fases iniciais, o que reforça a importância da
            realização de exames preventivos regulares, como o toque retal e o
            exame de PSA (antígeno prostático específico).
          </p>
        </section>
      </ContainerAboutProstata>
    </AboutContainer>
  );
};

export default About;
