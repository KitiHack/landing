import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Support Page"
        description="Contact Astrus."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
