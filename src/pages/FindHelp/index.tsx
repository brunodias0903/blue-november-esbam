import { FindHelpContainer, FindHelpP, FindHelpTitle } from "./styles";

const FindHelp = () => {
  return (
    <FindHelpContainer>
      <FindHelpTitle>Busque Ajuda – Novembro Azul em Manaus</FindHelpTitle>
      <FindHelpP>
        <br />O diagnóstico precoce do câncer de próstata pode salvar vidas, e
        buscar ajuda é um passo essencial para garantir o cuidado necessário. Em
        Manaus, diversas instituições oferecem suporte, orientação e serviços de
        saúde para ajudar homens em todas as etapas da prevenção e do
        tratamento. Conheça abaixo alguns locais onde você pode encontrar ajuda:{" "}
        <br /> <br />
        1.{" "}
        <strong>
          Fundação Centro de Controle de Oncologia do Estado do Amazonas
          (FCECON)
        </strong>{" "}
        <br />{" "}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Orellana,+Dom+Pedro,+Manaus+AM"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "underline",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Endereço: Rua Francisco Orellana, Dom Pedro, Manaus – AM
        </a>{" "}
        <br /> A FCECON é referência no tratamento oncológico no estado do Amazonas. Oferece exames preventivos e atendimento especializado em câncer de próstata, além de apoio psicológico e informações sobre tratamentos disponíveis. <br /> <br /> 2.{" "}
        <strong>Unidades Básicas de Saúde (UBS)</strong> <br /> As UBS espalhadas por Manaus realizam exames preventivos, encaminham para consultas com especialistas e oferecem atendimento de saúde para os homens. Verifique a UBS mais próxima de sua casa e agende um atendimento preventivo. O acesso aos serviços é gratuito e visa atender homens em todas as regiões da cidade. <br /> <br /> 3.{" "}
        <strong>Hospital Universitário Getúlio Vargas (HUGV)</strong> <br />{" "}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rua+Tomas+de+Vila+Nova,+300,+Manaus+AM"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "underline",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Endereço: Rua Tomas de Vila Nova, 300, Manaus – AM
        </a>{" "}
        <br /> O HUGV oferece suporte especializado para diagnóstico e tratamento do câncer de próstata. Atende pelo Sistema Único de Saúde (SUS) e conta com uma equipe multidisciplinar de apoio.<br /> <br />
        4. <strong>Grupos de Apoio e ONGs</strong> <br />
        Organizações não governamentais como a Liga Amazonense Contra o Câncer e
        o Instituto Nacional de Câncer (INCA) são importantes aliadas na luta
        contra o câncer de próstata. Elas oferecem acolhimento, apoio emocional
        e assistência aos homens que estão passando pelo tratamento.
        <br />
        <br />
        Neste <strong style={{color: "#1E90FF"}}>Novembro Azul</strong>, cuide da sua saúde e compartilhe essa mensagem com
        as pessoas que você ama. Se precisar de ajuda, não hesite em procurar
        uma das unidades ou grupos de apoio. Quanto mais cedo for a busca por
        cuidados, maiores são as chances de um diagnóstico precoce e de um
        tratamento bem-sucedido.
      </FindHelpP>
    </FindHelpContainer>
  );
};

export default FindHelp;
