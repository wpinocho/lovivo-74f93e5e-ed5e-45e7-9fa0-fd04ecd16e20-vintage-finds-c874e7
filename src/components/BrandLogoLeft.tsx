export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-3 group">
      <img 
        src="/logo.svg" 
        alt="Vintage Revival Logo"
        className="h-10 w-10 object-contain transition-transform group-hover:scale-110" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground leading-none">Vintage Revival</span>
        <span className="text-xs text-muted-foreground">Circular Fashion</span>
      </div>
    </a>
  )
}