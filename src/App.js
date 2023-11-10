import Globe from "react-globe.gl";

const N = 30;
const gData = new Array(N).fill(5).map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  size: Math.random() / 3,
  color: "#fff",
}));

const arcsData = gData.map((d) => ({
  startLat: d.lat,
  startLng: d.lng,
  endLat: gData[Math.floor(Math.random() * 30)].lat,
  endLng: gData[Math.floor(Math.random() * 30)].lng,
  color: ["#1E8328", "#74FF82"],
}));

export default function Home() {
  return (
    <div>
      {/* <img src="/items.jpeg" /> */}
      <Globe
        width={1000}
        height={700}
        globeImageUrl="/map.jpg"
        pointsData={gData}
        arcsData={arcsData}
        arcColor={["#1E8328", "#74FF82"]}
        arcStroke={1}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
        pointAltitude={0}
        pointRadius={1}
        pointColor="color"
        backgroundColor="#123530"
        onPointClick={(...args) => console.log(args)}
      />
    </div>
  );
}
