import PrimaryButton from "../ui/PrimaryButton"
import SecondaryButton from "../ui/SecondaryButton"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "620px" }}
    >
      {/* Hero image */}
      <img
        src="/chillika/images/home/hero_primary_image.webp"
        alt="Chillika Indian street food hero image"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "60% 50%" }}
      />

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.30)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.56) 33%, rgba(0,0,0,0.18) 66%, rgba(0,0,0,0.06) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.18), transparent 32%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex items-center h-full"
        style={{
          maxWidth: "1320px",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "72px",
        }}
      >
        <div
          className="flex flex-col"
          style={{ maxWidth: "610px", width: "48%" }}
        >
          <h1
            className="font-serif font-semibold text-white"
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              maxWidth: "600px",
            }}
          >
            Chillika – From
            <br />
            Odisha&rsquo;s Soul to
            <br />
            India&rsquo;s Streets
          </h1>

          <p
            className="text-white"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              opacity: 0.96,
              maxWidth: "480px",
              marginTop: "18px",
            }}
          >
            Every bite tells a story. Experience the vibrant flavours of Odisha
            with a modern street food twist.
          </p>

          <div
            className="flex"
            style={{ marginTop: "30px", gap: "16px" }}
          >
            <PrimaryButton label="Explore Menu" href="#menu" />
            <SecondaryButton label="Book a Table" href="#footer" />
          </div>
        </div>
      </div>
    </section>
  )
}
