import { TitleText } from "../Common/TitleText";
import Titles from "../Common/Titles";
import SocialMedia from "../socialMedia/SocialMedia";

const ContactMe = () => {
  return (
    <>
      <Titles title={TitleText.titleContactMe} />
      <div className="p-2 mt-8 mb-8">
        <SocialMedia
          contactStyle={true}
          contactMe={true}
        />
      </div>
    </>
  );
};

export default ContactMe;
