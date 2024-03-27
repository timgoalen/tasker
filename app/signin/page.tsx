import Header from "../ui/header/Header";
import SignInForm from "../ui/signin/SignInForm";
import RegisterForm from "../ui/signin/RegisterForm";

export default function Page() {
  return (
    <>
      <Header title="Register/Sign In" />

      <RegisterForm />
      {/* <SignInForm /> */}
    </>
  );
}
