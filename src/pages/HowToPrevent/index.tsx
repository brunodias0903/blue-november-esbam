import CustomHowToPreventImage from "../../assets/how_to_prevent.png";
import { HowToPreventContainer, HowToPreventImage,
  TitlePrevent, SectionSignals
 } from "./styles";

const HowToPrevent = () => {
  return (
    <HowToPreventContainer>
      <section>
        <TitlePrevent>Prevenção</TitlePrevent>
        <HowToPreventImage src={CustomHowToPreventImage} />
      </section>

      <SectionSignals>
        <TitlePrevent>Sintomas do câncer de próstata</TitlePrevent>
        <p>O câncer de próstata é reconhecido por sua fase inicial de evolução silenciosa, na qual muitos pacientes não manifestam sintomas aparentes. Entretanto, quando os sinais surgem, podem incluir:</p>
        <ul className="list-sintomas">
          <li>dor ao urinar;</li>
          <li>necessidade de urinar com maior frequência durante o dia ou à noite;</li>
          <li>presença de sangue na urina ou sêmen;</li>
          <li>dor na região pélvica, nas costas ou nos quadris;</li>
          <li>disfunção erétil;</li>
          <li>dor durante a ejaculação;</li>
          <li>em casos raros, dor óssea;</li>
        </ul>
      </SectionSignals>

    </HowToPreventContainer>
  );
};

export default HowToPrevent;
