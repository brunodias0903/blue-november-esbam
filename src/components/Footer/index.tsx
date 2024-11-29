import { esbamWebsite, gitHubBruno, gitHubEduardo } from "../../constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { FooterContainer, FooterText } from "./styles";

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <FooterContainer>
      <FooterText>
        &copy; 2024{" "}
        <a href={gitHubBruno} style={{ cursor: "pointer" }}>
          <FooterText
            style={{
              margin: "0px 5px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {width && width > 768 ? "BRUNO DIAS" : "BRUNO"}
          </FooterText>
        </a>{" "}
        ,{" "}
        <a href={gitHubEduardo} style={{ cursor: "pointer" }}>
          <FooterText
            style={{
              margin: "0px 5px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {width && width > 768 ? "EDUARDO LIRA" : "EDUARDO"}
          </FooterText>
        </a>{" "}
        &{" "}
        <a href={esbamWebsite} style={{ cursor: "pointer" }}>
          <FooterText
            style={{
              marginLeft: "5px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            ESBAM
          </FooterText>
        </a>
        . Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
