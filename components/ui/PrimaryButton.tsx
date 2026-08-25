type PrimaryButtonProps = {
  label: string
  href?: string
  heightPx?: number
  paddingXPx?: number
  background?: string
  color?: string
  borderRadiusPx?: number
  fullWidth?: boolean
  className?: string
}

export default function PrimaryButton({
  label,
  href = "#",
  heightPx = 52,
  paddingXPx = 27,
  background = "#D85D18",
  color = "#FFFFFF",
  borderRadiusPx = 8,
  fullWidth = false,
  className = "",
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center font-sans font-semibold text-[14px] transition-all duration-[180ms] ease-out hover:-translate-y-[1px] hover:brightness-90 ${fullWidth ? "w-full" : ""} ${className}`}
      style={{
        height: `${heightPx}px`,
        paddingLeft: `${paddingXPx}px`,
        paddingRight: `${paddingXPx}px`,
        background,
        color,
        borderRadius: `${borderRadiusPx}px`,
        boxShadow: "0 5px 14px rgba(120,55,15,0.18)",
      }}
    >
      {label}
    </a>
  )
}
