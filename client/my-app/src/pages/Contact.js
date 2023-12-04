import "../components/style.css";

const Contact = () => {
  return (
    <div className="grid h-[90vh] place-content-center bg-purple-600">
      <h1 className="text-center text-3xl font-bold text-white">Contact Us</h1>
      <lable>Name</lable>
      <input name="" className="rounded-lg"></input>
      <lable>Email</lable>
      <input name="" className="rounded-lg"></input>
      <lable>Message</lable>
      <textarea name="" className="h-[100px] rounded-lg"></textarea>
    </div>
  );
};

export default Contact;
