export const translations = {
  EN: {
    govtApp: "IMP PROJECT",
    home: "Home",
    police: "Police Officers",
    jjBoard: "JJ Board Officials",
    ngo: "NGO Officials",
    social: "Social Workers",
    jjAct: "Juvenile Justice Act",
    contacts: "Contacts",
    searchPlaceholder: "Search services, schemes, NGOs...",
  },
  HI: {
    govtApp: "महत्वपूर्ण परियोजना",
    home: "होम",
    police: "पुलिस अधिकारी",
    jjBoard: "जेजे बोर्ड अधिकारी",
    ngo: "एनजीओ अधिकारी",
    social: "सामाजिक कार्यकर्ता",
    jjAct: "किशोर न्याय अधिनियम",
    contacts: "संपर्क",
    searchPlaceholder: "सेवाएँ, योजनाएँ, एनजीओ खोजें...",
  },
  MR: {
    govtApp: "आयएमपी प्रकल्प",
    home: "होम",
    police: "पोलीस अधिकारी",
    jjBoard: "JJ बोर्ड अधिकारी",
    ngo: "एनजीओ अधिकारी",
    social: "सामाजिक कार्यकर्ता",
    jjAct: "नाबालक न्याय कायदा",
    contacts: "संपर्क",
    searchPlaceholder: "सेवा, योजना, NGO शोधा...",
  },
};

export function t(lang = "EN", key) {
  return (translations[lang] && translations[lang][key]) || translations.EN[key] || key;
}