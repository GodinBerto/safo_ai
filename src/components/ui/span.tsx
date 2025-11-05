export default function Span(props: { children: React.ReactNode }) {
  return (
    <span className="w-fit flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-1 text-sm text-white hover:bg-white/20 backdrop-blur-md transition">
      {props.children}
    </span>
  );
}
