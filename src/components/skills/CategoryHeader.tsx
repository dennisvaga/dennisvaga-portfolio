interface CategoryHeaderProps {
  title: string;
}

export default function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <div className="mb-4">
      <h3 className="text-sm uppercase tracking-wider text-primary/80 font-medium">
        {title}
      </h3>
      <div className="h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mt-1"></div>
    </div>
  );
}
