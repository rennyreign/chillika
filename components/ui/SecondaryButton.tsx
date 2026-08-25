type SecondaryButtonProps = {
  label: string
  href?: string
  heightPx?: number
  paddingXPx?: number
  background?: string
  color?: string
  border?: string
  borderRadiusPx?: number
  fullWidth?: boolean
  className?: string
}

export default function SecondaryButton({
  label,
  href = "#",
  heightPx = 52,
  paddingXPx = 27,
  background = "rgba(0,0,0,0.18)",
  color = "#FFFFFF",
  border = "1px solid rgba(255,255,255,0.82)",
  borderRadiusPx = 8,
  fullWidth = false,
  className = "",
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center font-sans font-semibold text-[14px] transition-all duration-[180ms] ease-out hover:-translate-y-[1px] ${fullWidth ? "w-full" : ""} ${className}`}
      style={{
        height: `${heightPx}px`,
        paddingLeft: `${paddingXPx}px`,
        paddingRight: `${paddingXPx}px`,
        background,
        color,
        border,
        borderRadius: `${borderRadiusPx}px`,
      }}
    >
      {label}
    </a>
  )
}
