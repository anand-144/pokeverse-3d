function Badge({ label, color = "bg-red-500" }) {
  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
        text-white
        ${color}
      `}
    >
      {label}
    </span>
  );
}

export default Badge;