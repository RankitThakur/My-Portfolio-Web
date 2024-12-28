import HomeLayout from "../../components/layouts/HomeLayout";
import "react-quill/dist/quill.snow.css";
import CustomHead from "../../components/Head";

export default function Contact() {

  return (
    <>
      <CustomHead
        description="Contact me over this form or via email (simon@koeck.dev). I will get back to you as soon as possible. If you have any questions, feel free to contact me."
        title="Rankit Thakur | Contact"
      />
      <HomeLayout>
        <div className="container px-4 pt-12 pb-20 mx-auto">

        </div>
      </HomeLayout>
    </>
  );
}
