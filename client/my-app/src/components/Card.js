import "./style.css";

const Card = ({ url, cat, msg }) => {
  return (
    <a
      href="#"
      className="group m-2 flex w-[20vw] flex-col justify-between rounded-md shadow-xl shadow-slate-500"
    >
      <div>
        <img
          className="w-min[100px] mx-auto h-[20vw] w-[15vw] p-2 duration-1000 group-hover:scale-110"
          src={url}
        />
      </div>
      <div className="p-2 text-center text-[2vw] font-bold">{cat}</div>
      <div className="bg-red-700 p-2 text-center text-[2vw] text-white">
        <p className="animate-bounce">{msg}</p>
      </div>
    </a>
  );
};

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <Card
        url={"https://m.media-amazon.com/images/I/71UIENuQxXL._AC_UL320_.jpg"}
        cat={"T-shirt for men"}
        msg={"Upto 25% OFF"}
      />
      <Card
        url={"https://m.media-amazon.com/images/I/61Us41zzwzL._AC_UL320_.jpg"}
        cat={"Ethnic dress for women"}
        msg={"Upto 35% OFF"}
      />
      <Card
        url={"https://m.media-amazon.com/images/I/817vbwH32IL._AC_UL320_.jpg"}
        cat={"Kids special"}
        msg={"Upto 30% OFF"}
      />
      <Card
        url={"https://m.media-amazon.com/images/I/61yHco6LIqL._AC_UL320_.jpg"}
        cat={"Electronics zone"}
        msg={"Special offers"}
      />
    </div>
  );
};

export default Cards;
