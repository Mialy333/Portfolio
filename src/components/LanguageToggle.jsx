import { useLanguage } from "../i18n/useLanguage";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full border border-neutral-700 text-sm"
      role="group"
      aria-label="Choix de la langue / Language"
    >
      {["fr", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 font-medium uppercase transition-colors ${
            lang === code
              ? "bg-neutral-200 text-neutral-900"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
