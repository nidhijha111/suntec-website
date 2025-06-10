
import CommonHeaderForm from "../commonHeaderForm";

export default function HeroSection() {
  return (
    <section className="insurance-section">
      <div className="insurance-container">
        <div className="left-side">
          <img src="/assets/images/hero_image.jpg" alt="Trucks" />
        </div>
        <CommonHeaderForm headerText={true}/>
      </div>
    </section>
  );
}
