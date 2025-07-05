// "use client";

// import { useState, useEffect } from "react";
// import { Globe, ChevronDown } from "lucide-react";

// interface Language {
//   code: string;
//   name: string;
//   flag: string;
// }

// const languages: Language[] = [
//   { code: "en", name: "English", flag: "🇺🇸" },
//   { code: "es", name: "Español", flag: "🇪🇸" },
//   { code: "fr", name: "Français", flag: "🇫🇷" },
//   { code: "de", name: "Deutsch", flag: "🇩🇪" },
//   { code: "it", name: "Italiano", flag: "🇮🇹" },
//   { code: "pt", name: "Português", flag: "🇵🇹" },
//   { code: "ru", name: "Русский", flag: "🇷🇺" },
//   { code: "zh", name: "中文", flag: "🇨🇳" },
//   { code: "ja", name: "日本語", flag: "🇯🇵" },
//   { code: "ko", name: "한국어", flag: "🇰🇷" },
//   { code: "ar", name: "العربية", flag: "🇸🇦" },
//   { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
// ];

// interface LanguageSelectorProps {
//   className?: string;
// }

// const LanguageSelector: React.FC<LanguageSelectorProps> = ({
//   className = "",
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState<Language>(
//     languages[0],
//   );
//   const [, setTranslations] = useState<Record<string, any>>({});

//   // Load translations when language changes
//   useEffect(() => {
//     loadTranslations(selectedLanguage.code);
//   }, [selectedLanguage]);

//   const loadTranslations = async (languageCode: string) => {
//     try {
//       // For now, we'll use a simple translation object
//       // In a real app, you'd load translations from an API or translation service
//       const translationData = await getTranslations(languageCode);
//       setTranslations(translationData);

//       // Update document language
//       document.documentElement.lang = languageCode;

//       // Store selected language in localStorage
//       localStorage.setItem("selectedLanguage", languageCode);
//     } catch (error) {
//       console.error("Failed to load translations:", error);
//     }
//   };

//   const getTranslations = async (languageCode: string) => {
//     // This is a simplified translation system
//     // In production, you'd use a proper translation service like i18next, react-intl, or Google Translate API
//     const translations: Record<string, Record<string, string>> = {
//       en: {
//         welcome: "Welcome",
//         login: "Login",
//         register: "Register",
//         dashboard: "Dashboard",
//         transactions: "Transactions",
//         transfer: "Transfer",
//         balance: "Balance",
//         account: "Account",
//         settings: "Settings",
//         logout: "Logout",
//       },
//       es: {
//         welcome: "Bienvenido",
//         login: "Iniciar sesión",
//         register: "Registrarse",
//         dashboard: "Panel de control",
//         transactions: "Transacciones",
//         transfer: "Transferir",
//         balance: "Saldo",
//         account: "Cuenta",
//         settings: "Configuración",
//         logout: "Cerrar sesión",
//       },
//       fr: {
//         welcome: "Bienvenue",
//         login: "Connexion",
//         register: "S'inscrire",
//         dashboard: "Tableau de bord",
//         transactions: "Transactions",
//         transfer: "Transfert",
//         balance: "Solde",
//         account: "Compte",
//         settings: "Paramètres",
//         logout: "Déconnexion",
//       },
//       de: {
//         welcome: "Willkommen",
//         login: "Anmelden",
//         register: "Registrieren",
//         dashboard: "Dashboard",
//         transactions: "Transaktionen",
//         transfer: "Überweisung",
//         balance: "Kontostand",
//         account: "Konto",
//         settings: "Einstellungen",
//         logout: "Abmelden",
//       },
//       // Add more languages as needed
//     };

//     return translations[languageCode] || translations.en;
//   };

//   const handleLanguageSelect = (language: Language) => {
//     setSelectedLanguage(language);
//     setIsOpen(false);
//   };

//   // Load saved language on component mount
//   useEffect(() => {
//     const savedLanguage = localStorage.getItem("selectedLanguage");
//     if (savedLanguage) {
//       const language = languages.find((lang) => lang.code === savedLanguage);
//       if (language) {
//         setSelectedLanguage(language);
//       }
//     }
//   }, []);

//   return (
//     <div className={`relative ${className}`}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 transition-colors hover:bg-gray-50"
//       >
//         <Globe className="h-4 w-4 text-gray-600" />
//         <span className="text-lg">{selectedLanguage.flag}</span>
//         <span className="text-sm font-medium text-gray-700">
//           {selectedLanguage.code.toUpperCase()}
//         </span>
//         <ChevronDown
//           className={`h-4 w-4 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 z-50 mt-1 max-h-60 w-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
//           {languages.map((language) => (
//             <button
//               key={language.code}
//               onClick={() => handleLanguageSelect(language)}
//               className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 ${
//                 selectedLanguage.code === language.code
//                   ? "bg-blue-50 text-blue-600"
//                   : "text-gray-700"
//               }`}
//             >
//               <span className="text-lg">{language.flag}</span>
//               <span className="text-sm font-medium">{language.name}</span>
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Click outside to close */}
//       {isOpen && (
//         <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default LanguageSelector;
