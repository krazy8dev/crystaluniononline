// "use client";

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";

// interface TranslationContextType {
//   currentLanguage: string;
//   setLanguage: (languageCode: string) => void;
//   t: (key: string) => string;
//   translations: Record<string, string>;
// }

// const TranslationContext = createContext<TranslationContextType | undefined>(
//   undefined,
// );

// interface TranslationProviderProps {
//   children: ReactNode;
// }

// export const TranslationProvider: React.FC<TranslationProviderProps> = ({
//   children,
// }) => {
//   const [currentLanguage, setCurrentLanguage] = useState("en");
//   const [translations, setTranslations] = useState<Record<string, string>>({});

//   const translationData: Record<string, Record<string, string>> = {
//     en: {
//       // General
//       welcome: "Welcome",
//       login: "Login",
//       logout: "Logout",
//       cancel: "Cancel",
//       confirm_logout: "Confirm Logout",
//       logout_confirmation_message: "Are you sure you want to logout?",
//       Crystal Union _trust_bank: "Crystal Union ",
//       more_than_banking: "More than banking",

//       // Navigation
//       home: "Home",
//       about_us: "About Us",
//       accounts: "Accounts",
//       support: "Support",
//       help_center: "Help Center",
//       contact_us: "Contact Us",
//       my_account: "My Account",
//       account_summary: "Account Summary",
//       account_details: "Account Details",
//       transactions: "Transactions",
//       transfer: "Transfer",
//       transfer_to_same_bank: "Transfer to same bank",
//       transfer_to_other_bank: "Transfer to other bank",
//       international_transfer: "International Transfer",
//       dashboard: "Dashboard",
//       users: "Users",
//       create_transactions: "Create Transactions",
//       transactions_list: "Transactions List",

//       // E-Banking
//       e_banking: "E-Banking",
//       account_balance: "Account Balance",
//       last_transaction: "Last Transaction",
//       quick_actions: "Quick Actions",
//       view_all_transactions: "View All Transactions",
//       make_transfer: "Make Transfer",
//       download_statement: "Download Statement",

//       // Admin
//       admin_dashboard: "Admin Dashboard",
//       total_users: "Total Users",
//       total_transactions: "Total Transactions",
//       pending_transactions: "Pending Transactions",
//       system_status: "System Status",

//       // Forms
//       amount: "Amount",
//       recipient: "Recipient",
//       account_number: "Account Number",
//       description: "Description",
//       submit: "Submit",
//       save: "Save",
//       delete: "Delete",
//       edit: "Edit",
//       create: "Create",
//       update: "Update",

//       // Messages
//       success: "Success",
//       error: "Error",
//       loading: "Loading...",
//       no_data: "No data available",
//       try_again: "Try again",

//       // Time
//       today: "Today",
//       yesterday: "Yesterday",
//       this_week: "This Week",
//       this_month: "This Month",
//       this_year: "This Year",
//     },
//     es: {
//       // General
//       welcome: "Bienvenido",
//       login: "Iniciar sesión",
//       logout: "Cerrar sesión",
//       cancel: "Cancelar",
//       confirm_logout: "Confirmar cierre de sesión",
//       logout_confirmation_message:
//         "¿Estás seguro de que quieres cerrar sesión?",
//       Crystal Union _trust_bank: "Crystal Union ",
//       more_than_banking: "Más que banca",

//       // Navigation
//       home: "Inicio",
//       about_us: "Acerca de Nosotros",
//       accounts: "Cuentas",
//       support: "Soporte",
//       help_center: "Centro de Ayuda",
//       contact_us: "Contáctanos",
//       my_account: "Mi Cuenta",
//       account_summary: "Resumen de Cuenta",
//       account_details: "Detalles de Cuenta",
//       transactions: "Transacciones",
//       transfer: "Transferir",
//       transfer_to_same_bank: "Transferir al mismo banco",
//       transfer_to_other_bank: "Transferir a otro banco",
//       international_transfer: "Transferencia Internacional",
//       dashboard: "Panel de Control",
//       users: "Usuarios",
//       create_transactions: "Crear Transacciones",
//       transactions_list: "Lista de Transacciones",

//       // E-Banking
//       e_banking: "Banca Electrónica",
//       account_balance: "Saldo de Cuenta",
//       last_transaction: "Última Transacción",
//       quick_actions: "Acciones Rápidas",
//       view_all_transactions: "Ver Todas las Transacciones",
//       make_transfer: "Hacer Transferencia",
//       download_statement: "Descargar Estado de Cuenta",

//       // Admin
//       admin_dashboard: "Panel de Administración",
//       total_users: "Total de Usuarios",
//       total_transactions: "Total de Transacciones",
//       pending_transactions: "Transacciones Pendientes",
//       system_status: "Estado del Sistema",

//       // Forms
//       amount: "Cantidad",
//       recipient: "Destinatario",
//       account_number: "Número de Cuenta",
//       description: "Descripción",
//       submit: "Enviar",
//       save: "Guardar",
//       delete: "Eliminar",
//       edit: "Editar",
//       create: "Crear",
//       update: "Actualizar",

//       // Messages
//       success: "Éxito",
//       error: "Error",
//       loading: "Cargando...",
//       no_data: "No hay datos disponibles",
//       try_again: "Intentar de nuevo",

//       // Time
//       today: "Hoy",
//       yesterday: "Ayer",
//       this_week: "Esta Semana",
//       this_month: "Este Mes",
//       this_year: "Este Año",
//     },
//     fr: {
//       // General
//       welcome: "Bienvenue",
//       login: "Connexion",
//       logout: "Déconnexion",
//       cancel: "Annuler",
//       confirm_logout: "Confirmer la déconnexion",
//       logout_confirmation_message:
//         "Êtes-vous sûr de vouloir vous déconnecter ?",
//       Crystal Union _trust_bank: "Crystal Union ",
//       more_than_banking: "Plus que la banque",

//       // Navigation
//       home: "Accueil",
//       about_us: "À Propos",
//       accounts: "Comptes",
//       support: "Support",
//       help_center: "Centre d'Aide",
//       contact_us: "Contactez-nous",
//       my_account: "Mon Compte",
//       account_summary: "Résumé du Compte",
//       account_details: "Détails du Compte",
//       transactions: "Transactions",
//       transfer: "Transfert",
//       transfer_to_same_bank: "Transfert vers la même banque",
//       transfer_to_other_bank: "Transfert vers une autre banque",
//       international_transfer: "Transfert International",
//       dashboard: "Tableau de Bord",
//       users: "Utilisateurs",
//       create_transactions: "Créer des Transactions",
//       transactions_list: "Liste des Transactions",

//       // E-Banking
//       e_banking: "E-Banking",
//       account_balance: "Solde du Compte",
//       last_transaction: "Dernière Transaction",
//       quick_actions: "Actions Rapides",
//       view_all_transactions: "Voir Toutes les Transactions",
//       make_transfer: "Effectuer un Transfert",
//       download_statement: "Télécharger le Relevé",

//       // Admin
//       admin_dashboard: "Tableau de Bord Admin",
//       total_users: "Total des Utilisateurs",
//       total_transactions: "Total des Transactions",
//       pending_transactions: "Transactions en Attente",
//       system_status: "État du Système",

//       // Forms
//       amount: "Montant",
//       recipient: "Destinataire",
//       account_number: "Numéro de Compte",
//       description: "Description",
//       submit: "Soumettre",
//       save: "Enregistrer",
//       delete: "Supprimer",
//       edit: "Modifier",
//       create: "Créer",
//       update: "Mettre à jour",

//       // Messages
//       success: "Succès",
//       error: "Erreur",
//       loading: "Chargement...",
//       no_data: "Aucune donnée disponible",
//       try_again: "Réessayer",

//       // Time
//       today: "Aujourd'hui",
//       yesterday: "Hier",
//       this_week: "Cette Semaine",
//       this_month: "Ce Mois",
//       this_year: "Cette Année",
//     },
//     de: {
//       // General
//       welcome: "Willkommen",
//       login: "Anmelden",
//       logout: "Abmelden",
//       cancel: "Abbrechen",
//       confirm_logout: "Abmeldung bestätigen",
//       logout_confirmation_message:
//         "Sind Sie sicher, dass Sie sich abmelden möchten?",
//       Crystal Union _trust_bank: "Crystal Union ",
//       more_than_banking: "Mehr als Banking",

//       // Navigation
//       home: "Startseite",
//       about_us: "Über Uns",
//       accounts: "Konten",
//       support: "Support",
//       help_center: "Hilfecenter",
//       contact_us: "Kontaktieren Sie uns",
//       my_account: "Mein Konto",
//       account_summary: "Kontozusammenfassung",
//       account_details: "Kontodetails",
//       transactions: "Transaktionen",
//       transfer: "Überweisung",
//       transfer_to_same_bank: "Überweisung an dieselbe Bank",
//       transfer_to_other_bank: "Überweisung an andere Bank",
//       international_transfer: "Internationale Überweisung",
//       dashboard: "Dashboard",
//       users: "Benutzer",
//       create_transactions: "Transaktionen erstellen",
//       transactions_list: "Transaktionsliste",

//       // E-Banking
//       e_banking: "E-Banking",
//       account_balance: "Kontostand",
//       last_transaction: "Letzte Transaktion",
//       quick_actions: "Schnellaktionen",
//       view_all_transactions: "Alle Transaktionen anzeigen",
//       make_transfer: "Überweisung tätigen",
//       download_statement: "Kontoauszug herunterladen",

//       // Admin
//       admin_dashboard: "Admin Dashboard",
//       total_users: "Gesamte Benutzer",
//       total_transactions: "Gesamte Transaktionen",
//       pending_transactions: "Ausstehende Transaktionen",
//       system_status: "Systemstatus",

//       // Forms
//       amount: "Betrag",
//       recipient: "Empfänger",
//       account_number: "Kontonummer",
//       description: "Beschreibung",
//       submit: "Absenden",
//       save: "Speichern",
//       delete: "Löschen",
//       edit: "Bearbeiten",
//       create: "Erstellen",
//       update: "Aktualisieren",

//       // Messages
//       success: "Erfolg",
//       error: "Fehler",
//       loading: "Laden...",
//       no_data: "Keine Daten verfügbar",
//       try_again: "Erneut versuchen",

//       // Time
//       today: "Heute",
//       yesterday: "Gestern",
//       this_week: "Diese Woche",
//       this_month: "Dieser Monat",
//       this_year: "Dieses Jahr",
//     },
//   };

//   const setLanguage = (languageCode: string) => {
//     setCurrentLanguage(languageCode);
//     localStorage.setItem("selectedLanguage", languageCode);
//   };

//   const t = (key: string): string => {
//     const currentTranslations =
//       translationData[currentLanguage] || translationData.en;
//     return currentTranslations[key] || key;
//   };

//   useEffect(() => {
//     const savedLanguage = localStorage.getItem("selectedLanguage");
//     if (savedLanguage && translationData[savedLanguage]) {
//       setCurrentLanguage(savedLanguage);
//     }
//   }, []);

//   useEffect(() => {
//     const currentTranslations =
//       translationData[currentLanguage] || translationData.en;
//     setTranslations(currentTranslations);
//   }, [currentLanguage]);

//   return (
//     <TranslationContext.Provider
//       value={{
//         currentLanguage,
//         setLanguage,
//         t,
//         translations,
//       }}
//     >
//       {children}
//     </TranslationContext.Provider>
//   );
// };

// export const useTranslation = (): TranslationContextType => {
//   const context = useContext(TranslationContext);
//   if (context === undefined) {
//     throw new Error("useTranslation must be used within a TranslationProvider");
//   }
//   return context;
// };
