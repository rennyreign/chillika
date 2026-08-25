type MenuCardProps = {
  src: string
  alt: string
  title: string
}

export default function MenuCard({ src, alt, title }: MenuCardProps) {
  return (
    <article
      className="relative overflow-hidden group transition-all duration-[220ms] ease-out"
      style={{
        height: "250px",
        border: "1px solid #D85D18",
        borderRadius: "10px",
        background: "#092E21",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[220ms] ease-out group-hover:scale-[1.025]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(4,18,13,0.94) 0%, rgba(4,18,13,0.48) 38%, rgba(4,18,13,0.05) 72%)",
        }}
      />
      <div
        className="absolute"
        style={{ left: "18px", right: "18px", bottom: "16px" }}
      >
        <h3
          className="font-serif font-semibold"
          style={{ color: "#FFFFFF", fontSize: "21px", lineHeight: 1.02 }}
        >
          {title}
        </h3>
        <a
          href="#menu"
          className="inline-block font-sans font-medium transition-colors duration-[180ms] hover:opacity-80"
          style={{ color: "#E8BC6C", fontSize: "13px", marginTop: "10px" }}
        >
          View Dish
        </a>
      </div>
    </article>
  )
}
