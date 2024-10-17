const drugs = [
    {
        category: "Renin–Angiotensin–Aldosterone System (RAAS)",
        brand: "Prinivil, Zestril",
        generic: "Lisinopril",
        brandSyllables: "Prin-i-vil, Zes-tril",
        genericSyllables: "Li-si-no-pril"
    },
    {
        category: "Renin–Angiotensin–Aldosterone System (RAAS)",
        brand: "Vasotec",
        generic: "Enalapril",
        brandSyllables: "Va-so-tec",
        genericSyllables: "E-na-la-pril"
    },
    {
        category: "Renin–Angiotensin–Aldosterone System (RAAS)",
        brand: "Altace",
        generic: "Ramipril",
        brandSyllables: "Al-tace",
        genericSyllables: "Ra-mi-pril"
    },
    {
        category: "Renin–Angiotensin–Aldosterone System (RAAS)",
        brand: "Cozaar",
        generic: "Losartan",
        brandSyllables: "Co-zaar",
        genericSyllables: "Lo-sar-tan"
    },
    {
        category: "Renin–Angiotensin–Aldosterone System (RAAS)",
        brand: "Benicar",
        generic: "Olmesartan",
        brandSyllables: "Be-ni-car",
        genericSyllables: "Ol-me-sar-tan"
    },
    {
        category: "Renin–Angiotensin–Aldosterone System (RAAS)",
        brand: "Diovan",
        generic: "Valsartan",
        brandSyllables: "Di-o-van",
        genericSyllables: "Val-sar-tan"
    },
    {
        category: "Beta Blockers",
        brand: "Tenormin",
        generic: "Atenolol",
        brandSyllables: "Te-nor-min",
        genericSyllables: "A-te-no-lol"
    },
    {
        category: "Beta Blockers",
        brand: "Lopressor",
        generic: "Metoprolol tartrate",
        brandSyllables: "Lo-pres-sor",
        genericSyllables: "Me-to-pro-lol tar-trate"
    },
    {
        category: "Beta Blockers",
        brand: "Toprol XL",
        generic: "Metoprolol succinate",
        brandSyllables: "Top-rol XL",
        genericSyllables: "Me-to-pro-lol suc-ci-nate"
    },
    {
        category: "Beta Blockers",
        brand: "Bystolic",
        generic: "Nebivolol",
        brandSyllables: "By-stol-ic",
        genericSyllables: "Ne-bi-vo-lol"
    },
    {
        category: "Beta Blockers",
        brand: "Inderal",
        generic: "Propranolol",
        brandSyllables: "In-de-ral",
        genericSyllables: "Pro-pra-no-lol"
    },
    {
        category: "Beta Blockers",
        brand: "Coreg",
        generic: "Carvedilol",
        brandSyllables: "Co-reg",
        genericSyllables: "Car-ve-di-lol"
    },
    {
        category: "Calcium Channel Blockers",
        brand: "Procardia XL",
        generic: "Nifedipine XL",
        brandSyllables: "Pro-car-di-a XL",
        genericSyllables: "Ni-fe-di-pine XL"
    },
    {
        category: "Calcium Channel Blockers",
        brand: "Norvasc",
        generic: "Amlodipine",
        brandSyllables: "Nor-vasc",
        genericSyllables: "Am-lo-di-pine"
    },
    {
        category: "Calcium Channel Blockers",
        brand: "Cardizem CD",
        generic: "Diltiazem",
        brandSyllables: "Car-di-zem CD",
        genericSyllables: "Dil-ti-a-zem"
    },
    {
        category: "Diuretics",
        brand: "Microzide",
        generic: "Hydrochlorothiazide",
        brandSyllables: "Mi-cro-zide",
        genericSyllables: "Hy-dro-chlo-ro-thi-a-zide"
    },
    {
        category: "Diuretics",
        brand: "Zaroxolyn",
        generic: "Metolazone",
        brandSyllables: "Za-rox-o-lyn",
        genericSyllables: "Me-to-la-zone"
    },
    {
        category: "Diuretics",
        brand: "Lasix",
        generic: "Furosemide",
        brandSyllables: "La-six",
        genericSyllables: "Fu-ro-se-mide"
    },
    {
        category: "Diuretics",
        brand: "Demadex",
        generic: "Torsemide",
        brandSyllables: "De-ma-dex",
        genericSyllables: "Tor-se-mide"
    },
    {
        category: "Diuretics",
        brand: "Bumex",
        generic: "Bumetanide",
        brandSyllables: "Bu-mex",
        genericSyllables: "Bu-me-ta-nide"
    },
    {
        category: "Diuretics",
        brand: "Aldactone",
        generic: "Spironolactone",
        brandSyllables: "Al-dac-tone",
        genericSyllables: "Spi-ro-no-lac-tone"
    },
    {
        category: "Statins",
        brand: "Pravachol",
        generic: "Pravastatin",
        brandSyllables: "Pra-va-chol",
        genericSyllables: "Pra-va-sta-tin"
    },
    {
        category: "Statins",
        brand: "Zocor",
        generic: "Simvastatin",
        brandSyllables: "Zo-cor",
        genericSyllables: "Sim-va-sta-tin"
    },
    {
        category: "Statins",
        brand: "Vytorin",
        generic: "Simvastatin/ezetimibe",
        brandSyllables: "Vy-to-rin",
        genericSyllables: "Sim-va-sta-tin/e-ze-ti-mibe"
    },
    {
        category: "Statins",
        brand: "Lipitor",
        generic: "Atorvastatin",
        brandSyllables: "Li-pi-tor",
        genericSyllables: "A-tor-va-sta-tin"
    },
    {
        category: "Statins",
        brand: "Crestor",
        generic: "Rosuvastatin",
        brandSyllables: "Cres-tor",
        genericSyllables: "Ro-su-va-sta-tin"
    },
    {
        category: "Other Agents for Dyslipidemias",
        brand: "Tricor",
        generic: "Fenofibrate",
        brandSyllables: "Tri-cor",
        genericSyllables: "Fe-no-fi-brate"
    },
    {
        category: "Other Agents for Dyslipidemias",
        brand: "Lopid",
        generic: "Gemfibrozil",
        brandSyllables: "Lo-pid",
        genericSyllables: "Gem-fi-bro-zil"
    },
    {
        category: "Other Agents for Dyslipidemias",
        brand: "Lovaza",
        generic: "Omega-3 Acid Ethyl Esters",
        brandSyllables: "Lo-va-za",
        genericSyllables: "O-me-ga-3 A-cid E-thyl Es-ters"
    },
    {
        category: "Other Agents for Dyslipidemias",
        brand: "Niaspan",
        generic: "Niacin",
        brandSyllables: "Ni-a-span",
        genericSyllables: "Ni-a-cin"
    },
    {
        category: "Other Agents for Dyslipidemias",
        brand: "Zetia",
        generic: "Ezetimibe",
        brandSyllables: "Ze-tia",
        genericSyllables: "E-ze-ti-mibe"
    },
    {
        category: "Other Agents for Dyslipidemias",
        brand: "Welchol",
        generic: "Colesevelam",
        brandSyllables: "Wel-chol",
        genericSyllables: "Co-le-se-ve-lam"
    },
    {
        category: "Antiplatelets",
        brand: "Aspirin",
        generic: "Aspirin",
        brandSyllables: "As-pi-rin",
        genericSyllables: "As-pi-rin"
    },
    {
        category: "Antiplatelets",
        brand: "Aggrenox",
        generic: "Aspirin/Dipyridamole",
        brandSyllables: "Ag-gre-nox",
        genericSyllables: "As-pi-rin/Di-py-ri-da-mole"
    },
    {
        category: "Antiplatelets",
        brand: "Plavix",
        generic: "Clopidogrel",
        brandSyllables: "Pla-vix",
        genericSyllables: "Clo-pi-do-grel"
    },
    {
        category: "Antiplatelets",
        brand: "Effient",
        generic: "Prasugrel",
        brandSyllables: "Ef-fient",
        genericSyllables: "Pra-su-grel"
    },
    {
        category: "Antiplatelets",
        brand: "Brilinta",
        generic: "Ticagrelor",
        brandSyllables: "Bri-lin-ta",
        genericSyllables: "Ti-ca-gre-lor"
    },
    {
        category: "Traditional anticoagulants",
        brand: "Coumadin",
        generic: "Warfarin",
        brandSyllables: "Cou-ma-din",
        genericSyllables: "War-fa-rin"
    },
    {
        category: "Traditional anticoagulants",
        brand: "Lovenox",
        generic: "Enoxaparin",
        brandSyllables: "Lo-ve-nox",
        genericSyllables: "E-noxa-pa-rin"
    },
    {
        category: "Novel Oral Anticoagulants (NOACs)",
        brand: "Pradaxa",
        generic: "Dabigatran",
        brandSyllables: "Pra-dax-a",
        genericSyllables: "Da-bi-ga-tran"
    },
    {
        category: "Novel Oral Anticoagulants (NOACs)",
        brand: "Xarelto",
        generic: "Rivaroxaban",
        brandSyllables: "Xa-rel-to",
        genericSyllables: "Ri-va-ro-xa-ban"
    },
    {
        category: "Novel Oral Anticoagulants (NOACs)",
        brand: "Eliquis",
        generic: "Apixaban",
        brandSyllables: "E-li-quis",
        genericSyllables: "A-pi-xa-ban"
    },
    {
        category: "Antianginals",
        brand: "Nitrostat",
        generic: "Nitroglycerin",
        brandSyllables: "Ni-tro-stat",
        genericSyllables: "Ni-tro-glyc-er-in"
    },
    {
        category: "Antianginals",
        brand: "Imdur",
        generic: "Isosorbide mononitrate",
        brandSyllables: "Im-dur",
        genericSyllables: "I-so-sor-bide mo-no-ni-trate"
    },
    {
        category: "Antianginals",
        brand: "Ranexa",
        generic: "Ranolazine",
        brandSyllables: "Ra-nex-a",
        genericSyllables: "Ra-no-la-zine"
    },
    {
        category: "Other Cardiovascular Agents",
        brand: "Cordarone, Pacerone",
        generic: "Amiodarone",
        brandSyllables: "Cor-da-rone, Pa-ce-rone",
        genericSyllables: "A-mi-o-da-rone"
    },
    {
        category: "Other Cardiovascular Agents",
        brand: "Lanoxin",
        generic: "Digoxin",
        brandSyllables: "La-nox-in",
        genericSyllables: "Di-gox-in"
    },
    {
        category: "Neurologic Drugs",
        brand: "Imitrex",
        generic: "Sumatriptan",
        brandSyllables: "Im-i-trex",
        genericSyllables: "Su-ma-trip-tan"
    },
    {
        category: "Neurologic Drugs",
        brand: "Relpax",
        generic: "Eletriptan",
        brandSyllables: "Rel-pax",
        genericSyllables: "E-le-trip-tan"
    },
    {
        category: "Neurologic Drugs",
        brand: "Maxalt",
        generic: "Rizatriptan",
        brandSyllables: "Max-alt",
        genericSyllables: "Ri-za-trip-tan"
    },
    {
        category: "Neurologic Drugs",
        brand: "Fioricet",
        generic: "Butalbital/acetaminophen/caffeine",
        brandSyllables: "Fio-ri-cet",
        genericSyllables: "Bu-tal-bi-tal/a-ce-ta-min-o-phen/caf-feine"
    },
    {
        category: "Neurologic Drugs",
        brand: "Fiorinal",
        generic: "Butalbital/aspirin/caffeine",
        brandSyllables: "Fio-ri-nal",
        genericSyllables: "Bu-tal-bi-tal/as-pi-rin/caf-feine"
    },
    {
        category: "Neurologic Drugs",
        brand: "Dilantin",
        generic: "Phenytoin",
        brandSyllables: "Di-lan-tin",
        genericSyllables: "Phe-ny-to-in"
    },
    {
        category: "Neurologic Drugs",
        brand: "Depakote, Depakene",
        generic: "Valproic acid",
        brandSyllables: "De-pa-kote, De-pa-kene",
        genericSyllables: "Val-pro-ic a-cid"
    },
    {
        category: "Neurologic Drugs",
        brand: "Lamictal",
        generic: "Lamotrigine",
        brandSyllables: "La-mic-tal",
        genericSyllables: "La-mo-tri-gine"
    },
    {
        category: "Neurologic Drugs",
        brand: "Tegretol, Carbatrol",
        generic: "Carbamazepine",
        brandSyllables: "Te-gre-tol, Car-ba-trol",
        genericSyllables: "Car-ba-ma-ze-pine"
    },
    {
        category: "Neurologic Drugs",
        brand: "Trileptal",
        generic: "Oxcarbazepine",
        brandSyllables: "Tri-lep-tal",
        genericSyllables: "Ox-car-ba-ze-pine"
    },
    {
        category: "Neurologic Drugs",
        brand: "Keppra",
        generic: "Levetiracetam",
        brandSyllables: "Kep-pra",
        genericSyllables: "Le-ve-ti-ra-ce-tam"
    },
    {
        category: "Opioid Analgesics",
        brand: "MS Contin",
        generic: "Morphine",
        brandSyllables: "M-S Con-tin",
        genericSyllables: "Mor-phine"
    },
    {
        category: "Opioid Analgesics",
        brand: "Dilaudid",
        generic: "Hydromorphone",
        brandSyllables: "Di-lau-did",
        genericSyllables: "Hy-dro-mor-phone"
    },
    {
        category: "Opioid Analgesics",
        brand: "Oxycontin",
        generic: "Oxycodone",
        brandSyllables: "Ox-y-con-tin",
        genericSyllables: "Oxy-co-done"
    },
    {
        category: "Opioid Analgesics",
        brand: "Percocet, Roxicet",
        generic: "Oxycodone/acetaminophen",
        brandSyllables: "Per-co-cet, Rox-i-cet",
        genericSyllables: "Oxy-co-done/a-ce-ta-min-o-phen"
    },
    {
        category: "Opioid Analgesics",
        brand: "Duragesic",
        generic: "Fentanyl",
        brandSyllables: "Du-ra-ge-sic",
        genericSyllables: "Fen-ta-nyl"
    },
    {
        category: "Opioid Analgesics",
        brand: "Vicodin, Norco",
        generic: "Hydrocodone/acetaminophen",
        brandSyllables: "Vi-co-din, Nor-co",
        genericSyllables: "Hy-dro-co-done/a-ce-ta-min-o-phen"
    },
    {
        category: "Opioid Analgesics",
        brand: "Suboxone",
        generic: "Buprenorphine/naloxone",
        brandSyllables: "Sub-ox-one",
        genericSyllables: "Bu-pre-nor-phine/na-lo-xone"
    },
    {
        category: "Opioid Analgesics",
        brand: "Tylenol #3, Tylenol #4",
        generic: "Codeine/acetaminophen",
        brandSyllables: "Ty-le-nol",
        genericSyllables: "Co-deine/a-ce-ta-min-o-phen"
    },
    {
        category: "Opioid Analgesics",
        brand: "Ultram",
        generic: "Tramadol",
        brandSyllables: "Ul-tram",
        genericSyllables: "Tra-ma-dol"
    },
    {
        category: "Non-Steroidal Anti-inflammatory Drugs (NSAIDs)",
        brand: "Mobic",
        generic: "Meloxicam",
        brandSyllables: "Mo-bic",
        genericSyllables: "Me-lo-xi-cam"
    },
    {
        category: "Non-Steroidal Anti-inflammatory Drugs (NSAIDs)",
        brand: "Naprosyn, Aleve",
        generic: "Naproxen",
        brandSyllables: "Na-pro-syn, A-leve",
        genericSyllables: "Na-prox-en"
    },
    {
        category: "Non-Steroidal Anti-inflammatory Drugs (NSAIDs)",
        brand: "Advil, Motrin",
        generic: "Ibuprofen",
        brandSyllables: "Ad-vil, Mo-trin",
        genericSyllables: "I-bu-pro-fen"
    },
    {
        category: "Non-Steroidal Anti-inflammatory Drugs (NSAIDs)",
        brand: "Voltaren",
        generic: "Diclofenac",
        brandSyllables: "Vol-ta-ren",
        genericSyllables: "Di-clo-fe-nac"
    },
    {
        category: "Non-Steroidal Anti-inflammatory Drugs (NSAIDs)",
        brand: "Celebrex",
        generic: "Celecoxib",
        brandSyllables: "Cel-e-brex",
        genericSyllables: "Ce-le-cox-ib"
    },
    {
        category: "Muscle Relaxants",
        brand: "Soma",
        generic: "Carisoprodol",
        brandSyllables: "So-ma",
        genericSyllables: "Ca-ri-so-pro-dol"
    },
    {
        category: "Muscle Relaxants",
        brand: "Flexeril",
        generic: "Cyclobenzaprine",
        brandSyllables: "Flex-er-il",
        genericSyllables: "Cy-clo-ben-za-prine"
    },
    {
        category: "Adjunct Medications for Pain",
        brand: "Neurontin",
        generic: "Gabapentin",
        brandSyllables: "Neu-ron-tin",
        genericSyllables: "Ga-ba-pen-tin"
    },
    {
        category: "Adjunct Medications for Pain",
        brand: "Lyrica",
        generic: "Pregabalin",
        brandSyllables: "Ly-ri-ca",
        genericSyllables: "Pre-ga-ba-lin"
    },
    {
        category: "Adjunct Medications for Pain",
        brand: "Lidoderm",
        generic: "Lidocaine patch",
        brandSyllables: "Li-do-derm",
        genericSyllables: "Li-do-caine patch"
    },
    {
        category: "Alzheimer's Disease",
        brand: "Aricept",
        generic: "Donepezil",
        brandSyllables: "Ar-i-cept",
        genericSyllables: "Do-ne-pe-zil"
    },
    {
        category: "Alzheimer's Disease",
        brand: "Namenda XR",
        generic: "Memantine",
        brandSyllables: "Na-men-da XR",
        genericSyllables: "Me-man-tine"
    },
    {
        category: "Smoking Cessation",
        brand: "Nicoderm CQ",
        generic: "Nicotine Patch",
        brandSyllables: "Ni-co-derm CQ",
        genericSyllables: "Ni-co-tine Patch"
    },
    {
        category: "Smoking Cessation",
        brand: "Chantix",
        generic: "Varenicline",
        brandSyllables: "Chan-tix",
        genericSyllables: "Va-ren-i-cline"
    }
    // Continue adding more drugs as per the provided list
];

export default drugs;
