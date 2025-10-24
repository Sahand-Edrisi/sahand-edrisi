import { TitleText } from "../Common/TitleText";
import Titles from "../Common/Titles";
import SocialMedia from "../socialMedia/SocialMedia";

const ContactMe = () => {
  return (
    <>
      <Titles title={TitleText.titleContactMe} />
      <div className="p-2 pt-6 pb-6">
        <SocialMedia
          contactStyle={true}
          contactMe={true}
        />
      </div>
    </>
  );
};

export default ContactMe;
