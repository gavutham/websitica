import Tile from "../Tile/Tile";
import "./Center.scss";

const data = [
  {
    title: "Let Me Love You - Krix",
    artist: "Single",
    time: "4:17",
    img: "/Rectangle 25.png",
  },
  {
    title: "Wantin Man go d0 - Burna",
    artist: "African Giant",
    time: "2:30",
    img: "/Rectangle 24.png",
  },
  {
    title: "Stand Strong",
    artist: "Single",
    time: "2:02",
    img: "/Rectangle 23.png",
  },
  {
    title: "Closa-Ybee",
    artist: "Obi datti",
    time: "3:23",
    img: "/Rectangle 22.png",
  },
  {
    title: "Let Me Love You - Krix",
    artist: "Single",
    time: "4:17",
    img: "/Rectangle 21.png",
  },
];

const Center = () => {
  return (
    <div className="center">
      {data.map((d) => (
        <Tile
          key={d.title}
          title={d.title}
          artist={d.artist}
          path={d.img}
          time={d.time}
        />
      ))}
    </div>
  );
};

export default Center;
