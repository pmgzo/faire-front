export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10 w-full">
      <h1 className="font-['InterBold'] text-[#8600BD] text-xl grid justify-items-center">
        Experiences
      </h1>
      {children}
    </div>
  );
}
