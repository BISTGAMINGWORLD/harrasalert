document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    
    const translations = {
        en: {
            header: {
                title: "Women Harassment Alert System",
                tagline: "Immediate Support for Women in Distress",
                emergency: "Emergency",
                report: "Report Incident",
                knowledge: "Knowledge Center",
                contacts: "Emergency Contacts"
            },
            sos: {
                title: "Emergency SOS",
                description: "Press the button below if you're in immediate danger to send an alert to emergency services.",
                button: "SOS EMERGENCY",
                alertTitle: "EMERGENCY ALERT ACTIVATED",
                contacting: "Contacting nearest emergency services...",
                countdown: "Sending location data in",
                seconds: "seconds",
                cancel: "Cancel Alert",
                sent: "Alert sent! Emergency services have been notified."
            },
            form: {
                title: "Report an Incident",
                progress: "Form Completion",
                name: "Name",
                contact: "Contact Number",
                contactPlaceholder: "10-digit phone number",
                email: "Email Address",
                location: "Location",
                detectLocation: "Detect Location",
                detecting: "Detecting...",
                incidentDate: "Incident Date",
                incidentType: "Incident Type",
                selectType: "Select Type",
                verbal: "Verbal Harassment",
                physical: "Physical Harassment",
                stalking: "Stalking",
                cyber: "Cyber Harassment",
                workplace: "Workplace Harassment",
                other: "Other",
                details: "Incident Details",
                detailsPlaceholder: "Please provide as much information as possible about the incident",
                evidence: "Evidence Upload (if available)",
                evidenceHelp: "You can upload photos, screenshots, or documents related to the incident",
                consent: "I consent to share this information with relevant authorities",
                submit: "Submit Report",
                required: "is required",
                invalidPhone: "Please enter a valid 10-digit phone number",
                consentRequired: "You must consent to share this information"
            },
            knowledge: {
                title: "Knowledge Center",
                harassment: {
                    question: "What to do if you're harassed?",
                    intro: "If you're facing harassment:",
                    steps: [
                        "Move to a safe location or public area with other people",
                        "Call emergency services if you're in immediate danger",
                        "Document the incident (time, location, description)",
                        "Report to authorities (police, campus security, HR)",
                        "Seek support from trusted friends, family, or counselors"
                    ]
                },
                types: {
                    question: "Types of harassment and how to identify them",
                    verbal: "Verbal Harassment: Unwanted comments, jokes, slurs, or threats.",
                    physical: "Physical Harassment: Unwanted touching, assault, blocking movement.",
                    stalking: "Stalking: Following, watching, or monitoring someone without consent.",
                    cyber: "Cyber Harassment: Online threats, intimidation, sharing private info.",
                    workplace: "Workplace Harassment: Quid pro quo requests, hostile environment."
                },
                legal: {
                    question: "Legal rights and protections",
                    intro: "Women are protected from harassment under various laws:",
                    laws: [
                        "Sexual Harassment of Women at Workplace Act, 2013",
                        "Protection of Women from Domestic Violence Act, 2005",
                        "Indian Penal Code Sections 354, 354A, 354B, 354C, 354D",
                        "Information Technology Act for cyber harassment"
                    ],
                    rights: "You have the right to file an FIR at any police station regardless of where the incident occurred."
                },
                safety: {
                    question: "Safety tips for everyday situations",
                    tips: [
                        "Keep emergency contacts on speed dial",
                        "Share your location with trusted contacts when traveling",
                        "Use safety apps that can alert contacts in emergencies",
                        "Trust your instincts and remove yourself from uncomfortable situations",
                        "Travel in groups when possible, especially at night",
                        "Be aware of your surroundings and limit distractions"
                    ]
                }
            },
            contacts: {
                title: "Emergency Contacts",
                phone: "Phone",
                email: "Email",
                hours: "Hours",
                womensHelpline: {
                    name: "Women's Helpline",
                    number: "1091",
                    hours: "24/7",
                    description: "National helpline for women in distress"
                },
                police: {
                    name: "Police Emergency",
                    number: "100",
                    hours: "24/7",
                    description: "For immediate police assistance"
                },
                domestic: {
                    name: "Domestic Violence Helpline",
                    number: "181",
                    hours: "24/7",
                    description: "Support for domestic violence victims"
                },
                ncw: {
                    name: "National Commission for Women",
                    number: "011-26942369",
                    email: "ncw@nic.in",
                    hours: "Mon-Fri: 9am-5:30pm",
                    description: "For complaints and legal guidance"
                }
            },
            modal: {
                success: "Report Submitted Successfully",
                received: "Your incident report has been received and is being processed.",
                reference: "Reference Number:",
                save: "Please save this reference number for future communication.",
                followup: "Someone from our team will contact you within 24 hours.",
                close: "Close"
            },
            footer: {
                about: "About Us",
                aboutText: "The Women Harassment Alert System is dedicated to providing immediate support and resources to women facing harassment.",
                quickLinks: "Quick Links",
                resources: "Resources",
                resourceLinks: [
                    "Safety Guidelines",
                    "Legal Support",
                    "Counseling Services",
                    "Community Support"
                ],
                copyright: "Women Harassment Alert System © 2025 | All Rights Reserved",
                emergency: "In case of emergency, please contact the police immediately at"
            }
        },
        hi: {
            header: {
                title: "महिला उत्पीड़न चेतावनी प्रणाली",
                tagline: "संकट में महिलाओं के लिए तत्काल सहायता",
                emergency: "आपातकाल",
                report: "घटना की रिपोर्ट करें",
                knowledge: "ज्ञान केंद्र",
                contacts: "आपातकालीन संपर्क"
            },
            sos: {
                title: "आपातकालीन SOS",
                description: "यदि आप तत्काल खतरे में हैं तो आपातकालीन सेवाओं को अलर्ट भेजने के लिए नीचे दिए गए बटन को दबाएं।",
                button: "आपातकालीन SOS",
                alertTitle: "आपातकालीन अलर्ट सक्रिय",
                contacting: "निकटतम आपातकालीन सेवाओं से संपर्क किया जा रहा है...",
                countdown: "स्थान डेटा भेजा जा रहा है",
                seconds: "सेकंड में",
                cancel: "अलर्ट रद्द करें",
                sent: "अलर्ट भेजा गया! आपातकालीन सेवाओं को सूचित किया गया है।"
            },
            form: {
                title: "घटना की रिपोर्ट करें",
                progress: "फॉर्म पूर्णता",
                name: "नाम",
                contact: "संपर्क नंबर",
                contactPlaceholder: "10-अंकों का फोन नंबर",
                email: "ईमेल पता",
                location: "स्थान",
                detectLocation: "स्थान का पता लगाएं",
                detecting: "पता लगा रहे हैं...",
                incidentDate: "घटना की तारीख",
                incidentType: "घटना का प्रकार",
                selectType: "प्रकार चुनें",
                verbal: "मौखिक उत्पीड़न",
                physical: "शारीरिक उत्पीड़न",
                stalking: "पीछा करना",
                cyber: "साइबर उत्पीड़न",
                workplace: "कार्यस्थल उत्पीड़न",
                other: "अन्य",
                details: "घटना का विवरण",
                detailsPlaceholder: "कृपया घटना के बारे में जितनी हो सके उतनी जानकारी प्रदान करें",
                evidence: "सबूत अपलोड (यदि उपलब्ध हो)",
                evidenceHelp: "आप घटना से संबंधित फोटो, स्क्रीनशॉट या दस्तावेज अपलोड कर सकते हैं",
                consent: "मैं इस जानकारी को संबंधित अधिकारियों के साथ साझा करने के लिए सहमत हूं",
                submit: "रिपोर्ट जमा करें",
                required: "आवश्यक है",
                invalidPhone: "कृपया एक वैध 10-अंकों का फोन नंबर दर्ज करें",
                consentRequired: "आपको यह जानकारी साझा करने के लिए सहमति देनी होगी"
            },
            knowledge: {
                title: "ज्ञान केंद्र",
                harassment: {
                    question: "यदि आपका उत्पीड़न हो तो क्या करें?",
                    intro: "यदि आप उत्पीड़न का सामना कर रहे हैं:",
                    steps: [
                        "सुरक्षित स्थान या अन्य लोगों के साथ सार्वजनिक क्षेत्र में जाएं",
                        "यदि आप तत्काल खतरे में हैं तो आपातकालीन सेवाओं को कॉल करें",
                        "घटना का दस्तावेज (समय, स्थान, विवरण) बनाएं",
                        "अधिकारियों को रिपोर्ट करें (पुलिस, कैंपस सुरक्षा, HR)",
                        "विश्वसनीय दोस्तों, परिवार या परामर्शदाताओं से सहायता प्राप्त करें"
                    ]
                },
                types: {
                    question: "उत्पीड़न के प्रकार और उन्हें कैसे पहचानें",
                    verbal: "मौखिक उत्पीड़न: अवांछित टिप्पणियां, मजाक, अपमान या धमकी।",
                    physical: "शारीरिक उत्पीड़न: अवांछित स्पर्श, हमला, आवाजाही को रोकना।",
                    stalking: "पीछा करना: बिना सहमति के किसी का पीछा करना, देखना या निगरानी करना।",
                    cyber: "साइबर उत्पीड़न: ऑनलाइन धमकी, डराना, निजी जानकारी साझा करना।",
                    workplace: "कार्यस्थल उत्पीड़न: क्विड प्रो क्वो अनुरोध, शत्रुतापूर्ण वातावरण।"
                },
                legal: {
                    question: "कानूनी अधिकार और सुरक्षा",
                    intro: "महिलाओं को विभिन्न कानूनों के तहत उत्पीड़न से सुरक्षा प्रदान की गई है:",
                    laws: [
                        "कार्यस्थल पर महिलाओं का यौन उत्पीड़न अधिनियम, 2013",
                        "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005",
                        "भारतीय दंड संहिता धारा 354, 354A, 354B, 354C, 354D",
                        "साइबर उत्पीड़न के लिए सूचना प्रौद्योगिकी अधिनियम"
                    ],
                    rights: "आपको घटना कहीं भी हुई हो, किसी भी पुलिस स्टेशन पर FIR दर्ज कराने का अधिकार है।"
                },
                safety: {
                    question: "रोजमर्रा की स्थितियों के लिए सुरक्षा युक्तियां",
                    tips: [
                        "आपातकालीन संपर्कों को स्पीड डायल पर रखें",
                        "यात्रा करते समय विश्वसनीय संपर्कों के साथ अपना स्थान साझा करें",
                        "सुरक्षा ऐप्स का उपयोग करें जो आपातकाल में संपर्कों को सूचित कर सकें",
                        "अपनी अंतर्ज्ञान पर भरोसा करें और असहज स्थितियों से बाहर निकलें",
                        "जब संभव हो, विशेष रूप से रात में समूहों में यात्रा करें",
                        "अपने आसपास के वातावरण के प्रति सचेत रहें और ध्यान भटकाने वाली चीजों को सीमित करें"
                    ]
                }
            },
            contacts: {
                title: "आपातकालीन संपर्क",
                phone: "फोन",
                email: "ईमेल",
                hours: "घंटे",
                womensHelpline: {
                    name: "महिला हेल्पलाइन",
                    number: "1091",
                    hours: "24/7",
                    description: "संकट में महिलाओं के लिए राष्ट्रीय हेल्पलाइन"
                },
                police: {
                    name: "पुलिस आपातकाल",
                    number: "100",
                    hours: "24/7",
                    description: "तत्काल पुलिस सहायता के लिए"
                },
                domestic: {
                    name: "घरेलू हिंसा हेल्पलाइन",
                    number: "181",
                    hours: "24/7",
                    description: "घरेलू हिंसा पीड़ितों के लिए सहायता"
                },
                ncw: {
                    name: "राष्ट्रीय महिला आयोग",
                    number: "011-26942369",
                    email: "ncw@nic.in",
                    hours: "सोम-शुक्र: सुबह 9 बजे - शाम 5:30 बजे",
                    description: "शिकायतों और कानूनी मार्गदर्शन के लिए"
                }
            },
            modal: {
                success: "रिपोर्ट सफलतापूर्वक जमा की गई",
                received: "आपकी घटना की रिपोर्ट प्राप्त हो गई है और प्रक्रियाधीन है।",
                reference: "संदर्भ संख्या:",
                save: "कृपया भविष्य के संचार के लिए इस संदर्भ संख्या को सहेजें।",
                followup: "हमारी टीम का कोई सदस्य 24 घंटे के भीतर आपसे संपर्क करेगा।",
                close: "बंद करें"
            },
            footer: {
                about: "हमारे बारे में",
                aboutText: "महिला उत्पीड़न चेतावनी प्रणाली का उद्देश्य उत्पीड़न का सामना करने वाली महिलाओं को तत्काल सहायता और संसाधन प्रदान करना है।",
                quickLinks: "त्वरित लिंक",
                resources: "संसाधन",
                resourceLinks: [
                    "सुरक्षा दिशानिर्देश",
                    "कानूनी सहायता",
                    "परामर्श सेवाएं",
                    "सामुदायिक समर्थन"
                ],
                copyright: "महिला उत्पीड़न चेतावनी प्रणाली © 2025 | सर्वाधिकार सुरक्षित",
                emergency: "आपातकाल में, कृपया पुलिस से तुरंत संपर्क करें"
            }
        },
        bn: {
            header: {
                title: "নারী হয়রানি সতর্কতা সিস্টেম",
                tagline: "সংকটে থাকা নারীদের জন্য তাৎক্ষণিক সহায়তা",
                emergency: "জরুরী",
                report: "ঘটনা রিপোর্ট করুন",
                knowledge: "জ্ঞান কেন্দ্র",
                contacts: "জরুরী যোগাযোগ"
            },
            sos: {
                title: "জরুরী SOS",
                description: "আপনি যদি তাৎক্ষণিক বিপদে থাকেন তবে জরুরী পরিষেবাগুলিতে সতর্কতা পাঠাতে নীচের বোতামটি টিপুন।",
                button: "জরুরী SOS",
                alertTitle: "জরুরী সতর্কতা সক্রিয়",
                contacting: "নিকটতম জরুরী পরিষেবাগুলির সাথে যোগাযোগ করা হচ্ছে...",
                countdown: "অবস্থান তথ্য পাঠানো হচ্ছে",
                seconds: "সেকেন্ডে",
                cancel: "সতর্কতা বাতিল করুন",
                sent: "সতর্কতা পাঠানো হয়েছে! জরুরী পরিষেবাগুলিকে অবহিত করা হয়েছে।"
            },
            form: {
                title: "ঘটনা রিপোর্ট করুন",
                progress: "ফর্ম সম্পূর্ণতা",
                name: "নাম",
                contact: "যোগাযোগের নম্বর",
                contactPlaceholder: "10-সংখ্যার ফোন নম্বর",
                email: "ইমেইল ঠিকানা",
                location: "অবস্থান",
                detectLocation: "অবস্থান সনাক্ত করুন",
                detecting: "সনাক্ত করা হচ্ছে...",
                incidentDate: "ঘটনার তারিখ",
                incidentType: "ঘটনার ধরন",
                selectType: "ধরন নির্বাচন করুন",
                verbal: "মৌখিক হয়রানি",
                physical: "শারীরিক হয়রানি",
                stalking: "পিছু নেওয়া",
                cyber: "সাইবার হয়রানি",
                workplace: "কর্মক্ষেত্রে হয়রানি",
                other: "অন্যান্য",
                details: "ঘটনার বিবরণ",
                detailsPlaceholder: "অনুগ্রহ করে ঘটনা সম্পর্কে যতটা সম্ভব তথ্য প্রদান করুন",
                evidence: "প্রমাণ আপলোড (যদি উপলব্ধ থাকে)",
                evidenceHelp: "আপনি ঘটনা সম্পর্কিত ছবি, স্ক্রিনশট বা নথি আপলোড করতে পারেন",
                consent: "আমি এই তথ্য সংশ্লিষ্ট কর্তৃপক্ষের সাথে শেয়ার করতে সম্মত",
                submit: "রিপোর্ট জমা দিন",
                required: "প্রয়োজনীয়",
                invalidPhone: "দয়া করে একটি বৈধ 10-সংখ্যার ফোন নম্বর লিখুন",
                consentRequired: "আপনাকে এই তথ্য শেয়ার করতে সম্মতি দিতে হবে"
            },
            knowledge: {
                title: "জ্ঞান কেন্দ্র",
                harassment: {
                    question: "আপনি হয়রানির সম্মুখীন হলে কী করবেন?",
                    intro: "আপনি যদি হয়রানির সম্মুখীন হন:",
                    steps: [
                        "নিরাপদ স্থানে বা অন্য লোকদের সাথে সার্বজনিক এলাকায় যান",
                        "আপনি যদি তাৎক্ষণিক বিপদে থাকেন তবে জরুরী পরিষেবাগুলিতে কল করুন",
                        "ঘটনাটি নথিভুক্ত করুন (সময়, অবস্থান, বিবরণ)",
                        "কর্তৃপক্ষকে রিপোর্ট করুন (পুলিশ, ক্যাম্পাস নিরাপত্তা, HR)",
                        "বিশ্বস্ত বন্ধু, পরিবার বা পরামর্শদাতাদের কাছ থেকে সহায়তা নিন"
                    ]
                },
                types: {
                    question: "হয়রানির প্রকারগুলি এবং সেগুলি কীভাবে চিহ্নিত করবেন",
                    verbal: "মৌখিক হয়রানি: অবাঞ্ছিত মন্তব্য, রসিকতা, অপমান বা হুমকি।",
                    physical: "শারীরিক হয়রানি: অবাঞ্ছিত স্পর্শ, আক্রমণ, চলাফেরা বাধাগ্রস্ত করা।",
                    stalking: "পিছু নেওয়া: সম্মতি ছাড়া কাউকে অনুসরণ করা, পর্যবেক্ষণ করা বা নজরদারি করা।",
                    cyber: "সাইবার হয়রানি: অনলাইনে হুমকি, ভয় দেখানো, ব্যক্তিগত তথ্য শেয়ার করা।",
                    workplace: "কর্মক্ষেত্রে হয়রানি: কুইড প্রো কো অনুরোধ, শত্রুতাপূর্ণ পরিবেশ।"
                },
                legal: {
                    question: "আইনি অধিকার এবং সুরক্ষা",
                    intro: "নারীদের বিভিন্ন আইনের অধীনে হয়রানি থেকে সুরক্ষা দেওয়া হয়:",
                    laws: [
                        "কর্মক্ষেত্রে মহিলাদের যৌন হয়রানি আইন, 2013",
                        "গার্হস্থ্য সহিংসতা থেকে মহিলাদের সুরক্ষা আইন, 2005",
                        "ভারতীয় দণ্ডবিধি ধারা 354, 354A, 354B, 354C, 354D",
                        "সাইবার হয়রানির জন্য তথ্য প্রযুক্তি আইন"
                    ],
                    rights: "ঘটনা যেখানেই ঘটুক না কেন, আপনার যেকোনো পুলিশ স্টেশনে FIR দায়ের করার অধিকার আছে।"
                },
                safety: {
                    question: "প্রতিদিনের পরিস্থিতিতে নিরাপত্তা টিপস",
                    tips: [
                        "জরুরী যোগাযোগগুলি স্পিড ডায়ালে রাখুন",
                        "ভ্রমণের সময় বিশ্বস্ত যোগাযোগের সাথে আপনার অবস্থান শেয়ার করুন",
                        "নিরাপত্তা অ্যাপ ব্যবহার করুন যা জরুরী অবস্থায় যোগাযোগগুলিতে সতর্ক করতে পারে",
                        "আপনার সহজাত বোধের উপর আস্থা রাখুন এবং অস্বস্তিকর পরিস্থিতি থেকে নিজেকে সরিয়ে নিন",
                        "যখন সম্ভব, বিশেষ করে রাতে দলে ভ্রমণ করুন",
                        "আপনার আশেপাশের বিষয়ে সচেতন থাকুন এবং বিভ্রান্তি সীমিত করুন"
                    ]
                }
            },
            contacts: {
                title: "জরুরী যোগাযোগ",
                phone: "ফোন",
                email: "ইমেইল",
                hours: "সময়",
                womensHelpline: {
                    name: "মহিলা হেল্পলাইন",
                    number: "1091",
                    hours: "24/7",
                    description: "বিপদগ্রস্ত মহিলাদের জন্য জাতীয় হেল্পলাইন"
                },
                police: {
                    name: "পুলিশ জরুরী",
                    number: "100",
                    hours: "24/7",
                    description: "অবিলম্বে পুলিশি সহায়তার জন্য"
                },
                domestic: {
                    name: "গার্হস্থ্য সহিংসতা হেল্পলাইন",
                    number: "181",
                    hours: "24/7",
                    description: "গার্হস্থ্য সহিংসতার শিকারদের সমর্থন"
                },
                ncw: {
                    name: "জাতীয় মহিলা কমিশন",
                    number: "011-26942369",
                    email: "ncw@nic.in",
                    hours: "সোম-শুক্র: সকাল 9টা - বিকেল 5.30টা",
                    description: "অভিযোগ এবং আইনি নির্দেশনার জন্য"
                }
            },
            modal: {
                success: "রিপোর্ট সফলভাবে জমা দেওয়া হয়েছে",
                received: "আপনার ঘটনার রিপোর্ট গৃহীত হয়েছে এবং প্রক্রিয়া করা হচ্ছে।",
                reference: "রেফারেন্স নম্বর:",
                save: "অনুগ্রহ করে ভবিষ্যত যোগাযোগের জন্য এই রেফারেন্স নম্বরটি সংরক্ষণ করুন।",
                followup: "আমাদের দলের কেউ 24 ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে।",
                close: "বন্ধ করুন"
            },
            footer: {
                about: "আমাদের সম্পর্কে",
                aboutText: "নারী হয়রানি সতর্কতা সিস্টেম হয়রানির সম্মুখীন হওয়া নারীদের তাৎক্ষণিক সহায়তা এবং সংস্থান প্রদান করতে নিবেদিত।",
                quickLinks: "দ্রুত লিঙ্ক",
                resources: "সংস্থান",
                resourceLinks: [
                    "নিরাপত্তা নির্দেশিকা",
                    "আইনি সহায়তা",
                    "পরামর্শ সেবা",
                    "সামাজিক সমর্থন"
                ],
                copyright: "নারী হয়রানি সতর্কতা সিস্টেম © 2025 | সর্বস্বত্ব সংরক্ষিত",
                emergency: "জরুরী অবস্থায়, অনুগ্রহ করে অবিলম্বে পুলিশের সাথে যোগাযোগ করুন"
            }
        },
        te: {
            header: {
                title: "మహిళా వేధింపుల హెచ్చరిక వ్యవస్థ",
                tagline: "ఇబ్బందిలో ఉన్న మహిళలకు తక్షణ సహాయం",
                emergency: "అత్యవసర",
                report: "సంఘటన నివేదిక",
                knowledge: "జ్ఞాన కేంద్రం",
                contacts: "అత్యవసర సంప్రదింపులు"
            },
            sos: {
                title: "అత్యవసర SOS",
                description: "మీరు తక్షణ ప్రమాదంలో ఉంటే అత్యవసర సేవలకు హెచ్చరికను పంపడానికి దిగువ బటన్‌ను నొక్కండి.",
                button: "అత్యవసర SOS",
                alertTitle: "అత్యవసర హెచ్చరిక సక్రియం చేయబడింది",
                contacting: "సమీప అత్యవసర సేవలను సంప్రదిస్తోంది...",
                countdown: "స్థాన డేటాను పంపుతోంది",
                seconds: "సెకన్లలో",
                cancel: "హెచ్చరికను రద్దు చేయండి",
                sent: "హెచ్చరిక పంపబడింది! అత్యవసర సేవలకు తెలియజేయబడింది."
            },
            form: {
                title: "సంఘటన నివేదిక సమర్పించండి",
                progress: "ఫారమ్ పూర్తి",
                name: "పేరు",
                contact: "సంప్రదింపు నంబర్",
                contactPlaceholder: "10-అంకెల ఫోన్ నంబర్",
                email: "ఇమెయిల్ చిరునామా",
                location: "ప్రదేశం",
                detectLocation: "ప్రదేశాన్ని కనుగొనండి",
                detecting: "కనుగొంటోంది...",
                incidentDate: "సంఘటన తేదీ",
                incidentType: "సంఘటన రకం",
                selectType: "రకాన్ని ఎంచుకోండి",
                verbal: "మౌఖిక వేధింపు",
                physical: "శారీరక వేధింపు",
                stalking: "వెంటాడటం",
                cyber: "సైబర్ వేధింపు",
                workplace: "పని ప్రదేశంలో వేధింపు",
                other: "ఇతర",
                details: "సంఘటన వివరాలు",
                detailsPlaceholder: "దయచేసి సంఘటన గురించి సాధ్యమైనంత ఎక్కువ సమాచారాన్ని అందించండి",
                evidence: "సాక్ష్యం అప్‌లోడ్ (అందుబాటులో ఉంటే)",
                evidenceHelp: "మీరు సంఘటనకు సంబంధించిన ఫోటోలు, స్క్రీన్‌షాట్‌లు లేదా పత్రాలను అప్‌లోడ్ చేయవచ్చు",
                consent: "నేను ఈ సమాచారాన్ని సంబంధిత అధికారులతో పంచుకోవడానికి అంగీకరిస్తున్నాను",
                submit: "నివేదికను సమర్పించండి",
                required: "అవసరం",
                invalidPhone: "దయచేసి చెల్లుబాటు అయ్యే 10-అంకెల ఫోన్ నంబర్‌ను నమోదు చేయండి",
                consentRequired: "మీరు ఈ సమాచారాన్ని పంచుకోవడానికి అంగీకరించాలి"
            },
            knowledge: {
                title: "జ్ఞాన కేంద్రం",
                harassment: {
                    question: "మీరు వేధింపులకు గురైతే ఏమి చేయాలి?",
                    intro: "మీరు వేధింపులను ఎదుర్కొంటుంటే:",
                    steps: [
                        "ఇతర వ్యక్తులతో సురక్షితమైన ప్రదేశానికి లేదా పబ్లిక్ ప్రదేశానికి వెళ్లండి",
                        "మీరు తక్షణ ప్రమాదంలో ఉంటే అత్యవసర సేవలకు కాల్ చేయండి",
                        "సంఘటనను దస్తావేజు చేయండి (సమయం, స్థానం, వివరణ)",
                        "అధికారులకు నివేదించండి (పోలీసు, క్యాంపస్ భద్రత, HR)",
                        "నమ్మకమైన స్నేహితులు, కుటుంబం లేదా కౌన్సెలర్ల నుండి సహాయం పొందండి"
                    ]
                },
                types: {
                    question: "వేధింపుల రకాలు మరియు వాటిని గుర్తించడం ఎలా",
                    verbal: "మౌఖిక వేధింపు: అవాంఛిత వ్యాఖ్యలు, జోకులు, దూషణలు లేదా బెదిరింపులు.",
                    physical: "శారీరక వేధింపు: అవాంఛిత స్పర్శ, దాడి, కదలికను నిరోధించడం.",
                    stalking: "వెంటాడటం: సమ్మతి లేకుండా ఎవరినైనా అనుసరించడం, చూడటం లేదా పర్యవేక్షించడం.",
                    cyber: "సైబర్ వేధింపు: ఆన్‌లైన్ బెదిరింపులు, భయపెట్టడం, వ్యక్తిగత సమాచారాన్ని పంచుకోవడం.",
                    workplace: "పని ప్రదేశంలో వేధింపు: క్విడ్ ప్రో క్వో అభ్యర్థనలు, శత్రుత్వ వాతావరణం."
                },
                legal: {
                    question: "చట్టపరమైన హక్కులు మరియు రక్షణలు",
                    intro: "మహిళలు వివిధ చట్టాల ద్వారా వేధింపుల నుండి రక్షించబడతారు:",
                    laws: [
                        "కార్యస్థలంలో మహిళల లైంగిక వేధింపుల చట్టం, 2013",
                        "గృహ హింస నుండి మహిళల రక్షణ చట్టం, 2005",
                        "భారతీయ శిక్షా స్మృతి సెక్షన్లు 354, 354A, 354B, 354C, 354D",
                        "సైబర్ వేధింపుల కోసం సమాచార సాంకేతిక చట్టం"
                    ],
                    rights: "సంఘటన ఎక్కడ జరిగినా సంబంధం లేకుండా ఏదైనా పోలీస్ స్టేషన్‌లో FIR నమోదు చేయడానికి మీకు హక్కు ఉంది."
                },
                safety: {
                    question: "రోజువారీ పరిస్థితుల కోసం భద్రతా చిట్కాలు",
                    tips: [
                        "అత్యవసర సంప్రదింపులను స్పీడ్ డయల్‌లో ఉంచండి",
                        "ప్రయాణిస్తున్నప్పుడు నమ్మకమైన సంప్రదింపులతో మీ స్థానాన్ని పంచుకోండి",
                        "అత్యవసర పరిస్థితుల్లో సంప్రదింపులకు హెచ్చరించగల భద్రతా యాప్‌లను ఉపయోగించండి",
                        "మీ సహజ జ్ఞానాన్ని నమ్మండి మరియు అసౌకర్యమైన పరిస్థితుల నుండి మిమ్మల్ని మీరు తొలగించుకోండి",
                        "సాధ్యమైనప్పుడు, ముఖ్యంగా రాత్రి సమయాల్లో సమూహాలలో ప్రయాణించండి",
                        "మీ చుట్టూ ఉన్న వాటి గురించి తెలుసుకోండి మరియు ధ్యానం మళ్లించే అంశాలను పరిమితం చేయండి"
                    ]
                }
            },
            contacts: {
                title: "అత్యవసర సంప్రదింపులు",
                phone: "ఫోన్",
                email: "ఇమెయిల్",
                hours: "గంటలు",
                womensHelpline: {
                    name: "మహిళల హెల్ప్‌లైన్",
                    number: "1091",
                    hours: "24/7",
                    description: "కష్టాల్లో ఉన్న మహిళల కోసం జాతీయ హెల్ప్‌లైన్"
                },
                police: {
                    name: "పోలీస్ అత్యవసరం",
                    number: "100",
                    hours: "24/7",
                    description: "తక్షణ పోలీస్ సహాయం కోసం"
                },
                domestic: {
                    name: "గృహ హింస హెల్ప్‌లైన్",
                    number: "181",
                    hours: "24/7",
                    description: "గృహ హింస బాధితులకు మద్దతు"
                },
                ncw: {
                    name: "జాతీయ మహిళా కమిషన్",
                    number: "011-26942369",
                    email: "ncw@nic.in",
                    hours: "సోమ-శుక్ర: ఉ.9 - సా.5:30",
                    description: "ఫిర్యాదులు మరియు చట్టపరమైన మార్గదర్శకత్వం కోసం"
                }
            },
            modal: {
                success: "నివేదిక విజయవంతంగా సమర్పించబడింది",
                received: "మీ సంఘటన నివేదిక స్వీకరించబడింది మరియు ప్రాసెస్ చేయబడుతోంది.",
                reference: "రిఫరెన్స్ నంబర్:",
                save: "భవిష్యత్తు కమ్యూనికేషన్ కోసం దయచేసి ఈ రిఫరెన్స్ నంబర్‌ను సేవ్ చేయండి.",
                followup: "మా బృందం నుండి ఎవరో ఒకరు 24 గంటల్లోపు మిమ్మల్ని సంప్రదిస్తారు.",
                close: "మూసివేయి"
            },
            footer: {
                about: "మా గురించి",
                aboutText: "మహిళా వేధింపుల హెచ్చరిక వ్యవస్థ వేధింపులు ఎదుర్కొంటున్న మహిళలకు తక్షణ సహాయం మరియు వనరులను అందించడం లక్ష్యంగా పెట్టుకుంది.",
                quickLinks: "త్వరిత లింక్‌లు",
                resources: "వనరులు",
                resourceLinks: [
                    "భద్రతా మార్గదర్శకాలు",
                    "చట్టపరమైన మద్దతు",
                    "కౌన్సెలింగ్ సేవలు",
                    "సమాజ మద్దతు"
                ],
                copyright: "మహిళా వేధింపుల హెచ్చరిక వ్యవస్థ © 2025 | అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి",
                emergency: "అత్యవసర పరిస్థితిలో, దయచేసి వెంటనే పోలీసును సంప్రదించండి"
            }
        },
        ta: {
            header: {
                title: "பெண்கள் துன்புறுத்தல் எச்சரிக்கை அமைப்பு",
                tagline: "துன்பத்தில் உள்ள பெண்களுக்கு உடனடி ஆதரவு",
                emergency: "அவசரநிலை",
                report: "சம்பவத்தை புகாரளிக்கவும்",
                knowledge: "அறிவு மையம்",
                contacts: "அவசர தொடர்புகள்"
            },
            sos: {
                title: "அவசர SOS",
                description: "நீங்கள் உடனடி ஆபத்தில் இருந்தால், அவசர சேவைகளுக்கு எச்சரிக்கையை அனுப்ப கீழே உள்ள பொத்தானை அழுத்தவும்.",
                button: "அவசர SOS",
                alertTitle: "அவசர எச்சரிக்கை செயல்படுத்தப்பட்டது",
                contacting: "அருகிலுள்ள அவசர சேவைகளைத் தொடர்புகொள்கிறது...",
                countdown: "இருப்பிடத் தரவு அனுப்பப்படுகிறது",
                seconds: "விநாடிகளில்",
                cancel: "எச்சரிக்கையை ரத்து செய்",
                sent: "எச்சரிக்கை அனுப்பப்பட்டது! அவசர சேவைகளுக்கு அறிவிக்கப்பட்டுள்ளது."
            },
            form: {
                title: "சம்பவத்தை புகாரளிக்கவும்",
                progress: "படிவம் நிறைவு",
                name: "பெயர்",
                contact: "தொடர்பு எண்",
                contactPlaceholder: "10-இலக்க தொலைபேசி எண்",
                email: "மின்னஞ்சல் முகவரி",
                location: "இடம்",
                detectLocation: "இருப்பிடத்தைக் கண்டறியவும்",
                detecting: "கண்டறிகிறது...",
                incidentDate: "சம்பவத் தேதி",
                incidentType: "சம்பவ வகை",
                selectType: "வகையைத் தேர்ந்தெடுக்கவும்",
                verbal: "வாய்மொழி துன்புறுத்தல்",
                physical: "உடல் துன்புறுத்தல்",
                stalking: "பின் தொடர்தல்",
                cyber: "இணைய துன்புறுத்தல்",
                workplace: "பணியிட துன்புறுத்தல்",
                other: "மற்றவை",
                details: "சம்பவ விவரங்கள்",
                detailsPlaceholder: "சம்பவத்தைப் பற்றி முடிந்தவரை தகவல்களை வழங்கவும்",
                evidence: "ஆதாரம் பதிவேற்றம் (இருந்தால்)",
                evidenceHelp: "நீங்கள் சம்பவம் தொடர்பான புகைப்படங்கள், திரைக்காட்சிகள் அல்லது ஆவணங்களைப் பதிவேற்றலாம்",
                consent: "இந்த தகவலை சம்பந்தப்பட்ட அதிகாரிகளுடன் பகிர்ந்து கொள்ள நான் ஒப்புக்கொள்கிறேன்",
                submit: "அறிக்கையை சமர்ப்பிக்கவும்",
                required: "தேவை",
                invalidPhone: "தயவுசெய்து சரியான 10-இலக்க தொலைபேசி எண்ணை உள்ளிடவும்",
                consentRequired: "இந்த தகவலைப் பகிர ஒப்புதல் அளிக்க வேண்டும்"
            },
            knowledge: {
                title: "அறிவு மையம்",
                harassment: {
                    question: "நீங்கள் துன்புறுத்தப்பட்டால் என்ன செய்வது?",
                    intro: "நீங்கள் துன்புறுத்தலை எதிர்கொண்டால்:",
                    steps: [
                        "மற்ற மக்களுடன் பாதுகாப்பான இடத்திற்கு அல்லது பொது இடத்திற்குச் செல்லுங்கள்",
                        "நீங்கள் உடனடி ஆபத்தில் இருந்தால் அவசர சேவைகளை அழைக்கவும்",
                        "சம்பவத்தை ஆவணப்படுத்துங்கள் (நேரம், இடம், விளக்கம்)",
                        "அதிகாரிகளிடம் புகார் செய்யுங்கள் (காவல்துறை, வளாக பாதுகாப்பு, HR)",
                        "நம்பகமான நண்பர்கள், குடும்பம் அல்லது ஆலோசகர்களிடமிருந்து ஆதரவைப் பெறுங்கள்"
                    ]
                },
                types: {
                    question: "துன்புறுத்தல் வகைகள் மற்றும் அவற்றை எவ்வாறு அடையாளம் காண்பது",
                    verbal: "வாய்மொழி துன்புறுத்தல்: விரும்பத்தகாத கருத்துகள், நகைச்சுவைகள், அவதூறுகள் அல்லது அச்சுறுத்தல்கள்.",
                    physical: "உடல் துன்புறுத்தல்: விரும்பத்தகாத தொடுதல், தாக்குதல், இயக்கத்தைத் தடுத்தல்.",
                    stalking: "பின் தொடர்தல்: ஒப்புதல் இல்லாமல் யாரையாவது பின்தொடர்தல், கவனித்தல் அல்லது கண்காணித்தல்.",
                    cyber: "இணைய துன்புறுத்தல்: ஆன்லைன் அச்சுறுத்தல்கள், பயமுறுத்தல், தனிப்பட்ட தகவல்களைப் பகிர்தல்.",
                    workplace: "பணியிட துன்புறுத்தல்: க்விட் ப்ரோ க்வோ கோரிக்கைகள், விரோத சூழல்."
                },
                legal: {
                    question: "சட்ட உரிமைகள் மற்றும் பாதுகாப்புகள்",
                    intro: "பெண்கள் பல்வேறு சட்டங்களின் கீழ் துன்புறுத்தலில் இருந்து பாதுகாக்கப்படுகிறார்கள்:",
                    laws: [
                        "பணியிடத்தில் பெண்களின் பாலியல் துன்புறுத்தல் சட்டம், 2013",
                        "குடும்ப வன்முறையிலிருந்து பெண்கள் பாதுகாப்பு சட்டம், 2005",
                        "இந்திய தண்டனைச் சட்டப் பிரிவுகள் 354, 354A, 354B, 354C, 354D",
                        "இணைய துன்புறுத்தலுக்கான தகவல் தொழில்நுட்பச் சட்டம்"
                    ],
                    rights: "சம்பவம் எங்கு நடந்தாலும் எந்த காவல் நிலையத்திலும் FIR பதிவு செய்ய உங்களுக்கு உரிமை உண்டு."
                },
                safety: {
                    question: "அன்றாட சூழ்நிலைகளுக்கான பாதுகாப்பு குறிப்புகள்",
                    tips: [
                        "அவசர தொடர்புகளை வேக டயலில் வைக்கவும்",
                        "பயணிக்கும்போது நம்பகமான தொடர்புகளுடன் உங்கள் இருப்பிடத்தைப் பகிரவும்",
                        "அவசரநிலைகளில் தொடர்புகளுக்கு எச்சரிக்கை செய்யக்கூடிய பாதுகாப்பு பயன்பாடுகளைப் பயன்படுத்தவும்",
                        "உங்கள் உள்ளுணர்வை நம்பி அசௌகரியமான சூழ்நிலைகளில் இருந்து உங்களை நீக்கிக் கொள்ளுங்கள்",
                        "முடிந்தவரை, குறிப்பாக இரவில் குழுக்களாகப் பயணம் செய்யுங்கள்",
                        "உங்களைச் சுற்றியுள்ளவற்றைப் பற்றி விழிப்புடன் இருங்கள் மற்றும் கவனச்சிதறல்களைக் குறைக்கவும்"
                    ]
                }
            },
            contacts: {
                title: "அவசர தொடர்புகள்",
                phone: "தொலைபேசி",
                email: "மின்னஞ்சல்",
                hours: "நேரங்கள்",
                womensHelpline: {
                    name: "பெண்கள் உதவி மையம்",
                    number: "1091",
                    hours: "24/7",
                    description: "துன்பத்தில் உள்ள பெண்களுக்கான தேசிய உதவி மையம்"
                },
                police: {
                    name: "காவல்துறை அவசரநிலை",
                    number: "100",
                    hours: "24/7",
                    description: "உடனடி காவல்துறை உதவிக்கு"
                },
                domestic: {
                    name: "குடும்ப வன்முறை உதவி மையம்",
                    number: "181",
                    hours: "24/7",
                    description: "குடும்ப வன்முறை பாதிக்கப்பட்டவர்களுக்கு ஆதரவு"
                },
                ncw: {
                    name: "தேசிய மகளிர் ஆணையம்",
                    number: "011-26942369",
                    email: "ncw@nic.in",
                    hours: "திங்கள்-வெள்ளி: காலை 9 மணி - மாலை 5:30 மணி",
                    description: "புகார்கள் மற்றும் சட்ட வழிகாட்டுதலுக்கு"
                }
            },
            modal: {
                success: "அறிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
                received: "உங்கள் சம்பவ அறிக்கை பெறப்பட்டு செயலாக்கப்படுகிறது.",
                reference: "குறிப்பு எண்:",
                save: "எதிர்கால தொடர்புக்காக இந்த குறிப்பு எண்ணை சேமிக்கவும்.",
                followup: "எங்கள் குழுவில் இருந்து யாரோ ஒருவர் 24 மணி நேரத்திற்குள் உங்களைத் தொடர்பு கொள்வார்.",
                close: "மூடு"
            },
            footer: {
                about: "எங்களைப் பற்றி",
                aboutText: "பெண்கள் துன்புறுத்தல் எச்சரிக்கை அமைப்பு துன்புறுத்தலை எதிர்கொள்ளும் பெண்களுக்கு உடனடி ஆதரவையும் வளங்களையும் வழங்குவதை நோக்கமாகக் கொண்டுள்ளது.",
                quickLinks: "விரைவு இணைப்புகள்",
                resources: "வளங்கள்",
                resourceLinks: [
                    "பாதுகாப்பு வழிகாட்டுதல்கள்",
                    "சட்ட ஆதரவு",
                    "ஆலோசனை சேவைகள்",
                    "சமூக ஆதரவு"
                ],
                copyright: "பெண்கள் துன்புறுத்தல் எச்சரிக்கை அமைப்பு © 2025 | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
                emergency: "அவசரநிலையில், காவல்துறையை உடனடியாக தொடர்பு கொள்ளவும்"
            }
        }
    };
    
    
    // Function to change the language
    function changeLanguage(lang) {
        const translation = translations[lang] || translations.en;
        
        // Update title and tagline
        document.querySelector('.logo-container h1').innerHTML = `<i class="fas fa-shield-alt"></i> ${translation.header.title}`;
        document.querySelector('.tagline').textContent = translation.header.tagline;
        
        // Update navigation links
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks[0].innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${translation.header.emergency}`;
        navLinks[1].innerHTML = `<i class="fas fa-file-alt"></i> ${translation.header.report}`;
        navLinks[2].innerHTML = `<i class="fas fa-book"></i> ${translation.header.knowledge}`;
        navLinks[3].innerHTML = `<i class="fas fa-phone"></i> ${translation.header.contacts}`;
        
        // Update SOS section
        document.querySelector('.emergency-section h2').innerHTML = `<i class="fas fa-exclamation-circle"></i> ${translation.sos.title}`;
        document.querySelector('.emergency-description').textContent = translation.sos.description;
        document.querySelector('.sos-button').innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${translation.sos.button}`;
        
        // Update modal
        document.querySelector('.modal-header h2').innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${translation.sos.alertTitle}`;
        document.querySelector('.modal-body > p').textContent = translation.sos.contacting;
        document.querySelector('#countdown p').innerHTML = `${translation.sos.countdown} <span id="timer">5</span> ${translation.sos.seconds}`;
        document.querySelector('#cancelSOS').textContent = translation.sos.cancel;
        document.querySelector('#alertSent p').innerHTML = `<i class="fas fa-check-circle"></i> ${translation.sos.sent}`;
        
        // Update form section
        // (This is a partial implementation - you would add all form elements)
        document.querySelector('.report-section h2').innerHTML = `<i class="fas fa-file-alt"></i> ${translation.form.title}`;
        document.querySelector('.progress-info span:first-child').textContent = `${translation.form.progress}:`;
        
        // Update knowledge center section
        document.querySelector('.knowledge-section h2').innerHTML = `<i class="fas fa-book"></i> ${translation.knowledge.title}`;
        
        // Update accordion content
        // (This is a partial implementation)
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders[0].querySelector('span').textContent = translation.knowledge.harassment.question;
        accordionHeaders[1].querySelector('span').textContent = translation.knowledge.types.question;
        accordionHeaders[2].querySelector('span').textContent = translation.knowledge.legal.question;
        accordionHeaders[3].querySelector('span').textContent = translation.knowledge.safety.question;
        
        // Update contacts section
        document.querySelector('.contacts-section h2').innerHTML = `<i class="fas fa-phone"></i> ${translation.contacts.title}`;
        
        // Update footer
        // (This is a partial implementation)
        document.querySelectorAll('.footer-section h3')[0].textContent = translation.footer.about;
        document.querySelectorAll('.footer-section p')[0].textContent = translation.footer.aboutText;
        document.querySelectorAll('.footer-section h3')[1].textContent = translation.footer.quickLinks;
        document.querySelectorAll('.footer-section h3')[2].textContent = translation.footer.resources;
        document.querySelector('.copyright').textContent = translation.footer.copyright;
        document.querySelector('.emergency-note').innerHTML = `${translation.footer.emergency} <a href="tel:100">100</a>`;
    }
    
    // Add event listener for language selection
    languageSelect.addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    // Initial language setting
    changeLanguage(languageSelect.value);
});
