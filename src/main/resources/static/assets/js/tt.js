const medicineData = {
    migraine: {
        vata: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Shankhapushpi (Convolvulus pluricaulis)",
                        description: "Shankhapushpi is formulated with the extract of Convolvulus pluricaulis. This herbal remedy is known for its calming properties and is traditionally used to support brain function and alleviate migraines in male children with Vata Prakruti.",
                        formulation: "Extract of Convolvulus pluricaulis",
                        articleReference: "Ayurveda in Pediatrics: A Review on Herbs Used in Children",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Brahmi (Bacopa monnieri)",
                        description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is renowned for its cognitive-enhancing properties. It is often recommended in Ayurveda to support mental clarity and alleviate migraines in adult males with Vata Prakruti.",
                        formulation: "Extract of Bacopa monnieri",
                        articleReference: "Bacopa monnieri: A Neutraceutical Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Ashwagandha (Withania somnifera)",
                        description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic properties and is used to support overall well-being, including mental health. It may help alleviate migraines in elderly males with Vata Prakruti.",
                        formulation: "Extract of Withania somnifera",
                        articleReference: "Withania somnifera: A Review",
                        articleLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9638656/"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Shankhapushpi (Convolvulus pluricaulis)",
                        description: "Shankhapushpi is formulated with the extract of Convolvulus pluricaulis. This herbal remedy is known for its calming properties and is traditionally used to support brain function and alleviate migraines in female children with Vata Prakruti.",
                        formulation: "Extract of Convolvulus pluricaulis",
                        articleReference: "Ayurveda in Pediatrics: A Review on Herbs Used in Children",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Shatavari (Asparagus racemosus)",
                        description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It is commonly recommended in Ayurveda to balance Pitta and alleviate migraines in adult females with Vata Prakruti.",
                        formulation: "Extract of Asparagus racemosus",
                        articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Shatavari (Asparagus racemosus)",
                        description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It is commonly recommended in Ayurveda to balance Pitta and alleviate migraines in older females with Vata Prakruti.",
                        formulation: "Extract of Asparagus racemosus",
                        articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                }
            }
        },
        pitta: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Not specified",
                        description: "Ayurvedic recommendations for migraines in male children with Pitta Prakruti may vary based on individual factors. Consult with an Ayurvedic practitioner for personalized advice.",
                        formulation: "",
                        articleReference: "",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Brahmi (Bacopa monnieri)",
                        description: "Brahmi is commonly used to balance Pitta dosha and support cognitive function. It may help alleviate migraines in adult males with Pitta Prakruti.",
                        formulation: "Extract of Bacopa monnieri",
                        articleReference: "Brahmi (Bacopa monnieri): A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Shatavari (Asparagus racemosus)",
                        description: "Shatavari is commonly recommended in Ayurveda to balance Pitta dosha and alleviate migraines in older males with Pitta Prakruti.",
                        formulation: "Extract of Asparagus racemosus",
                        articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Not specified",
                        description: "Ayurvedic recommendations for migraines in female children with Pitta Prakruti may vary based on individual factors. Consult with an Ayurvedic practitioner for personalized advice.",
                        formulation: "",
                        articleReference: "",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Brahmi (Bacopa monnieri)",
                        description: "Brahmi is commonly used to balance Pitta dosha and support cognitive function. It may help alleviate migraines in adult females with Pitta Prakruti.",
                        formulation: "Extract of Bacopa monnieri",
                        articleReference: "Brahmi (Bacopa monnieri): A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Shatavari (Asparagus racemosus)",
                        description: "Shatavari is commonly recommended in Ayurveda to balance Pitta dosha and alleviate migraines in older females with Pitta Prakruti.",
                        formulation: "Extract of Asparagus racemosus",
                        articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                }
            }
        },
        kapha: {
            male: {
                child: {
                    
                    upTo: 15,
                    medicine: {
                        name: "Triphala Guggulu",
                        description: "Triphala Guggulu is recommended for male children with Kapha prakruti experiencing migraines in Ayurveda. It helps balance Kapha dosha and supports overall well-being.",
                        formulation: "Combination of Triphala and Guggulu",
                        articleReference: "Ayurvedic Management of Migraines in Children",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Shadbindu Taila",
                        description: "Shadbindu Taila is one possible herbal remedy for adult males with Kapha prakruti experiencing migraines in Ayurveda. It is known for its benefits in promoting nasal health and alleviating headaches.",
                        formulation: "Oil formulation with Shadbindu herbs",
                        articleReference: "Herbal Oils in Ayurveda: A Comprehensive Overview",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                old: {
                    from:51,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is one possible herbal remedy for older males with Kapha prakruti experiencing migraines in Ayurveda. It consists of a blend of three pungent herbs and is believed to balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink:"https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is one potential remedy for female children with Kapha prakruti experiencing migraines in Ayurveda. It is believed to balance Kapha dosha and promote digestive health.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is one potential remedy for adult females with Kapha prakruti experiencing migraines in Ayurveda. It is believed to balance Kapha dosha and promote overall well-being.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                },
                old: {
                    from:51,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is one potential remedy for older females with Kapha prakruti experiencing migraines in Ayurveda. It is believed to balance Kapha dosha and promote digestive health.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-migraine"
                    }
                }
            }
        }
        // Add more prakrutis or age groups as needed
    },
    diarrhea: {
        vata: {
          male: {
            child: {
              upTo: 15,
              medicine: {
                name: "Musta (Cyperus rotundus) powder",
                description: "Musta powder is a commonly recommended medication in Ayurveda for male children with Vata Prakruti experiencing diarrhea.",
                formulation: "Powder",
                articleReference: "Ayurvedic Management of Diarrhea in Children",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            adult: {
              from: 16,
              to: 50,
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for adult males with Vata Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Approaches to Diarrhea in Adults",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            old: {
              from: 51,
              medicine: {
                name: "Bilwadi Gulika",
                description: "Bilwadi Gulika is a specific and commonly recommended medication in Ayurveda for older males with Vata Prakruti experiencing diarrhea.",
                formulation: "Herbal Pill",
                articleReference: "Herbal Remedies for Diarrhea in the Elderly",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            }
          },
          female: {
            child: {
              upTo: 15,
              medicine: {
                name: "Musta (Cyperus rotundus) powder",
                description: "Musta powder is a commonly recommended medication in Ayurveda for female children with Vata Prakruti experiencing diarrhea.",
                formulation: "Powder",
                articleReference: "Ayurvedic Management of Diarrhea in Children",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            adult: {
              from: 16,
              to: 50,
              medicine: {
                name: "Bilwadi Gulika",
                description: "Bilwadi Gulika is a specific and commonly recommended medication in Ayurveda for adult females with Vata Prakruti experiencing diarrhea.",
                formulation: "Herbal Pill",
                articleReference: "Herbal Remedies for Diarrhea in Adults",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            old: {
              from: 51,
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for older females with Vata Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Approaches to Diarrhea in the Elderly",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            }
          }
        
        },
        pitta: {
          male: {
            child: {
              upTo: 15,
              medicine: {
                name: "Kutajghan Vati",
                description: "Kutajghan Vati is a specific and commonly recommended medication in Ayurveda for male children with Pitta Prakruti experiencing diarrhea.",
                formulation: "Herbal Tablet",
                articleReference: "Ayurvedic Management of Diarrhea in Children",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            adult: {
              from: 16,
              to: 50,
              medicine: {
                name: "Bilwadi Gulika",
                description: "Bilwadi Gulika is a specific and commonly recommended medication in Ayurveda for adult males with Pitta Prakruti experiencing diarrhea.",
                formulation: "Herbal Pill",
                articleReference: "Herbal Remedies for Diarrhea in Adults",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            old: {
              from: 51,
              medicine: {
                name: "Bilwadi Gulika",
                description: "Bilwadi Gulika is a specific and commonly recommended medication in Ayurveda for older males with Pitta Prakruti experiencing diarrhea.",
                formulation: "Herbal Pill",
                articleReference: "Herbal Remedies for Diarrhea in the Elderly",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            }
          },
          // Repeat the structure for pitta prakruti females
        },
        kapha: {
          male: {
            child: {
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for male children with Kapha Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Management of Diarrhea in Children",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            adult: {
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for adult males with Kapha Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Approaches to Diarrhea in Adults",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            old: {
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for older males with Kapha Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Approaches to Diarrhea in the Elderly",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            }
          },
          female: {
            child: {
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for female children with Kapha Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Management of Diarrhea in Children",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            adult: {
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for adult females with Kapha Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Approaches to Diarrhea in Adults",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            },
            old: {
              medicine: {
                name: "Kutajarishta",
                description: "Kutajarishta is a specific and commonly recommended medication in Ayurveda for older females with Kapha Prakruti experiencing diarrhea.",
                formulation: "Liquid Extract",
                articleReference: "Ayurvedic Approaches to Diarrhea in the Elderly",
                articleLink: "https://www.carakasamhitaonline.com/index.php/Atisara_Chikitsa"
              }
            }
          }
        }
      },
      GastroesophagealRefluxDisease : {
        vata: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in male children with Vata Prakruti experiencing GERD.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Amla (Emblica officinalis)",
                        description: "Amla is formulated with the extract of Emblica officinalis. This herbal remedy is rich in antioxidants and is commonly recommended in Ayurveda to support digestive health and alleviate GERD symptoms in adult males with Vata Prakruti.",
                        formulation: "Extract of Emblica officinalis",
                        articleReference: "Emblica officinalis and Its Phytochemicals: A Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Triphala Churna",
                        description: "Triphala Churna is recommended for older males with Vata Prakruti experiencing GERD in Ayurveda. It is a combination of three fruits and is believed to support digestive balance.",
                        formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                        articleReference: "Triphala: A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in female children with Vata Prakruti experiencing GERD.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Amla (Emblica officinalis)",
                        description: "Amla is formulated with the extract of Emblica officinalis. This herbal remedy is rich in antioxidants and is commonly recommended in Ayurveda to support digestive health and alleviate GERD symptoms in adult females with Vata Prakruti.",
                        formulation: "Extract of Emblica officinalis",
                        articleReference: "Emblica officinalis and Its Phytochemicals: A Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Triphala Churna",
                        description: "Triphala Churna is recommended for older females with Vata Prakruti experiencing GERD in Ayurveda. It is a combination of three fruits and is believed to support digestive balance.",
                        formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                        articleReference: "Triphala: A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                }
            }
        },
        pitta: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Coriander (Coriandrum sativum)",
                        description: "Coriander is formulated with the extract of Coriandrum sativum. This herbal remedy is known for its cooling properties and is traditionally used to support digestive health in male children with Pitta Prakruti experiencing GERD.",
                        formulation: "Extract of Coriandrum sativum",
                        articleReference: "Coriandrum sativum: A Review on Its Medicinal Uses",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                    },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Aloe Vera",
                        description: "Aloe Vera is commonly used in Ayurveda to soothe inflammation and support digestive health. It may help alleviate GERD symptoms in adult males with Pitta Prakruti.",
                        formulation: "Aloe Vera gel or juice",
                        articleReference: "Aloe Vera: A Short Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in older males with Pitta Prakruti experiencing GERD.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Coriander (Coriandrum sativum)",
                        description: "Coriander is formulated with the extract of Coriandrum sativum. This herbal remedy is known for its cooling properties and is traditionally used to support digestive health in female children with Pitta Prakruti experiencing GERD.",
                        formulation: "Extract of Coriandrum sativum",
                        articleReference: "Coriandrum sativum: A Review on Its Medicinal Uses",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Aloe Vera",
                        description: "Aloe Vera is commonly used in Ayurveda to soothe inflammation and support digestive health. It may help alleviate GERD symptoms in adult females with Pitta Prakruti.",
                        formulation: "Aloe Vera gel or juice",
                        articleReference: "Aloe Vera: A Short Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in older females with Pitta Prakruti experiencing GERD.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                }
            }
        },
        kapha: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Ginger (Zingiber officinale)",
                        description: "Ginger is formulated with the extract of Zingiber officinale. This herbal remedy is known for its warming properties and is traditionally used to support digestive health in male children with Kapha Prakruti experiencing GERD.",
                        formulation: "Extract of Zingiber officinale",
                        articleReference: "Zingiber officinale: A Review on Its Health Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for adult males with Kapha Prakruti experiencing GERD in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for older males with Kapha Prakruti experiencing GERD in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Ginger (Zingiber officinale)",
                        description: "Ginger is formulated with the extract of Zingiber officinale. This herbal remedy is known for its warming properties and is traditionally used to support digestive health in female children with Kapha Prakruti experiencing GERD.",
                        formulation: "Extract of Zingiber officinale",
                        articleReference: "Zingiber officinale: A Review on Its Health Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for adult females with Kapha Prakruti experiencing GERD in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for older females with Kapha Prakruti experiencing GERD in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gerd"
                    }
                }
            }
        }
        // Add more prakrutis or age groups as needed
    },
    pepticUlcers: {
        vata: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in male children with Vata Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Amla (Emblica officinalis)",
                        description: "Amla is formulated with the extract of Emblica officinalis. This herbal remedy is rich in antioxidants and is commonly recommended in Ayurveda to support digestive health and alleviate peptic ulcers symptoms in adult males with Vata Prakruti.",
                        formulation: "Extract of Emblica officinalis",
                        articleReference: "Emblica officinalis and Its Phytochemicals: A Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Triphala Churna",
                        description: "Triphala Churna is recommended for older males with Vata Prakruti experiencing peptic ulcers in Ayurveda. It is a combination of three fruits and is believed to support digestive balance.",
                        formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                        articleReference: "Triphala: A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in female children with Vata Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Amla (Emblica officinalis)",
                        description: "Amla is formulated with the extract of Emblica officinalis. This herbal remedy is rich in antioxidants and is commonly recommended in Ayurveda to support digestive health and alleviate peptic ulcers symptoms in adult females with Vata Prakruti.",
                        formulation: "Extract of Emblica officinalis",
                        articleReference: "Emblica officinalis and Its Phytochemicals: A Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Triphala Churna",
                        description: "Triphala Churna is recommended for older females with Vata Prakruti experiencing peptic ulcers in Ayurveda. It is a combination of three fruits and is believed to support digestive balance.",
                        formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                        articleReference: "Triphala: A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                }
            }
        },
        pitta: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Coriander (Coriandrum sativum)",
                        description: "Coriander is formulated with the extract of Coriandrum sativum. This herbal remedy is known for its cooling properties and is traditionally used to support digestive health in male children with Pitta Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Coriandrum sativum",
                        articleReference: "Coriandrum sativum: A Review on Its Medicinal Uses",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Aloe Vera",
                        description: "Aloe Vera is commonly used in Ayurveda to soothe inflammation and support digestive health. It may help alleviate peptic ulcers symptoms in adult males with Pitta Prakruti.",
                        formulation: "Aloe Vera gel or juice",
                        articleReference: "Aloe Vera: A Short Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in older males with Pitta Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Coriander (Coriandrum sativum)",
                        description: "Coriander is formulated with the extract of Coriandrum sativum. This herbal remedy is known for its cooling properties and is traditionally used to support digestive health in female children with Pitta Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Coriandrum sativum",
                        articleReference: "Coriandrum sativum: A Review on Its Medicinal Uses",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Aloe Vera",
                        description: "Aloe Vera is commonly used in Ayurveda to soothe inflammation and support digestive health. It may help alleviate peptic ulcers symptoms in adult females with Pitta Prakruti.",
                        formulation: "Aloe Vera gel or juice",
                        articleReference: "Aloe Vera: A Short Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Licorice (Glycyrrhiza glabra)",
                        description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing properties and is traditionally used to support digestive health in older females with Pitta Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Glycyrrhiza glabra",
                        articleReference: "Glycyrrhiza glabra: A Review on Its Therapeutic Potential",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                }
            }
        },
        kapha: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Ginger (Zingiber officinale)",
                        description: "Ginger is formulated with the extract of Zingiber officinale. This herbal remedy is known for its warming properties and is traditionally used to support digestive health in male children with Kapha Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Zingiber officinale",
                        articleReference: "Zingiber officinale: A Review on Its Health Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for adult males with Kapha Prakruti experiencing peptic ulcers in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for older males with Kapha Prakruti experiencing peptic ulcers in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Ginger (Zingiber officinale)",
                        description: "Ginger is formulated with the extract of Zingiber officinale. This herbal remedy is known for its warming properties and is traditionally used to support digestive health in female children with Kapha Prakruti experiencing peptic ulcers.",
                        formulation: "Extract of Zingiber officinale",
                        articleReference: "Zingiber officinale: A Review on Its Health Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for adult females with Kapha Prakruti experiencing peptic ulcers in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Trikatu Churna",
                        description: "Trikatu Churna is recommended for older females with Kapha Prakruti experiencing peptic ulcers in Ayurveda. It consists of a blend of Black Pepper, Long Pepper, and Ginger, believed to support digestion and balance Kapha dosha.",
                        formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                        articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-peptic-ulcers"
                    }
                }
            }
        }
        // Add more prakrutis or age groups as needed
    },
    depression: {
        vata: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Ayurvedic Abhyanga",
                        description: "Ayurvedic Abhyanga is a therapeutic massage using warm herbal oils. It is recommended for male children with Vata Prakruti experiencing depression. Abhyanga is believed to calm the nervous system and promote relaxation.",
                        articleReference: "Ayurvedic Oil Massage (Abhyanga): A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Shirodhara",
                        description: "Shirodhara is an Ayurvedic therapy involving the continuous pouring of warm oil on the forehead. It is recommended for adult males with Vata Prakruti experiencing depression. Shirodhara is believed to balance the mind and promote mental calmness.",
                        articleReference: "Shirodhara: A Review of Its Therapeutic Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Nasya",
                        description: "Nasya is an Ayurvedic therapy involving the administration of herbal oils or powders through the nasal passages. It is recommended for older males with Vata Prakruti experiencing depression. Nasya is believed to support mental clarity and emotional balance.",
                        articleReference: "Nasya: A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Ayurvedic Abhyanga",
                        description: "Ayurvedic Abhyanga is a therapeutic massage using warm herbal oils. It is recommended for female children with Vata Prakruti experiencing depression. Abhyanga is believed to calm the nervous system and promote relaxation.",
                        articleReference: "Ayurvedic Oil Massage (Abhyanga): A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Shirodhara",
                        description: "Shirodhara is an Ayurvedic therapy involving the continuous pouring of warm oil on the forehead. It is recommended for adult females with Vata Prakruti experiencing depression. Shirodhara is believed to balance the mind and promote mental calmness.",
                        articleReference: "Shirodhara: A Review of Its Therapeutic Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Nasya",
                        description: "Nasya is an Ayurvedic therapy involving the administration of herbal oils or powders through the nasal passages. It is recommended for older females with Vata Prakruti experiencing depression. Nasya is believed to support mental clarity and emotional balance.",
                        articleReference: "Nasya: A Comprehensive Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                }
            }
        },
        pitta: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Sheetali Pranayama",
                        description: "Sheetali Pranayama is a cooling breathing technique recommended for male children with Pitta Prakruti experiencing depression. It involves inhaling through a rolled tongue and exhaling through the nose, promoting a sense of calmness.",
                        articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Shatavari (Asparagus racemosus)",
                        description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It is recommended for adult males with Pitta Prakruti experiencing depression.",
                        formulation: "Extract of Asparagus racemosus",
                        articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Brahmi (Bacopa monnieri)",
                        description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is renowned for its cognitive-enhancing properties and is recommended for older males with Pitta Prakruti experiencing depression.",
                        formulation: "Extract of Bacopa monnieri",
                        articleReference: "Bacopa monnieri: A Neutraceutical Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Sheetali Pranayama",
                        description: "Sheetali Pranayama is a cooling breathing technique recommended for female children with Pitta Prakruti experiencing depression. It involves inhaling through a rolled tongue and exhaling through the nose, promoting a sense of calmness.",
                        articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Shatavari (Asparagus racemosus)",
                        description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It is recommended for adult females with Pitta Prakruti experiencing depression.",
                        formulation: "Extract of Asparagus racemosus",
                        articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Brahmi (Bacopa monnieri)",
                        description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is renowned for its cognitive-enhancing properties and is recommended for older females with Pitta Prakruti experiencing depression.",
                        formulation: "Extract of Bacopa monnieri",
                        articleReference: "Bacopa monnieri: A Neutraceutical Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                }
            }
        },
        kapha: {
            male: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Kapalabhati Pranayama",
                        description: "Kapalabhati Pranayama is a dynamic breathing technique recommended for male children with Kapha Prakruti experiencing depression. It involves rapid abdominal contractions and forceful exhalations, promoting energy and mental clarity.",
                        articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Ashwagandha (Withania somnifera)",
                        description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic properties and is recommended for adult males with Kapha Prakruti experiencing depression.",
                        formulation: "Extract of Withania somnifera",
                        articleReference: "Withania somnifera: A Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Shirodhara",
                        description: "Shirodhara is an Ayurvedic therapy involving the continuous pouring of warm oil on the forehead. It is recommended for older males with Kapha Prakruti experiencing depression. Shirodhara is believed to balance the mind and promote mental calmness.",
                        articleReference: "Shirodhara: A Review of Its Therapeutic Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                }
            },
            female: {
                child: {
                    upTo: 15,
                    medicine: {
                        name: "Kapalabhati Pranayama",
                        description: "Kapalabhati Pranayama is a dynamic breathing technique recommended for female children with Kapha Prakruti experiencing depression. It involves rapid abdominal contractions and forceful exhalations, promoting energy and mental clarity.",
                        articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                adult: {
                    from: 16,
                    to: 50,
                    medicine: {
                        name: "Ashwagandha (Withania somnifera)",
                        description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic properties and is recommended for adult females with Kapha Prakruti experiencing depression.",
                        formulation: "Extract of Withania somnifera",
                        articleReference: "Withania somnifera: A Review",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                },
                old: {
                    from: 51,
                    medicine: {
                        name: "Shirodhara",
                        description: "Shirodhara is an Ayurvedic therapy involving the continuous pouring of warm oil on the forehead. It is recommended for older females with Kapha Prakruti experiencing depression. Shirodhara is believed to balance the mind and promote mental calmness.",
                        articleReference: "Shirodhara: A Review of Its Therapeutic Benefits",
                        articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-depression"
                    }
                }
            }
        }
        // Add more prakrutis or age groups as needed
    },
  rheumatoidArthritis: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Ayurvedic Abhyanga",
                    description: "Ayurvedic Abhyanga is a therapeutic massage using warm herbal oils. It is recommended for male children with Vata Prakruti experiencing Rheumatoid Arthritis. Abhyanga is believed to promote joint flexibility and alleviate stiffness.",
                    articleReference: "Ayurvedic Oil Massage (Abhyanga): A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Pinda Sweda",
                    description: "Pinda Sweda is a therapeutic treatment involving the application of hot poultices filled with medicinal herbs. It is recommended for adult males with Vata Prakruti experiencing Rheumatoid Arthritis. Pinda Sweda is believed to reduce pain and inflammation in joints.",
                    articleReference: "Pinda Sweda: An Ayurvedic Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Nasya",
                    description: "Nasya is an Ayurvedic therapy involving the administration of herbal oils or powders through the nasal passages. It is recommended for older males with Vata Prakruti experiencing Rheumatoid Arthritis. Nasya is believed to alleviate joint pain and inflammation.",
                    articleReference: "Nasya: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Ayurvedic Abhyanga",
                    description: "Ayurvedic Abhyanga is a therapeutic massage using warm herbal oils. It is recommended for female children with Vata Prakruti experiencing Rheumatoid Arthritis. Abhyanga is believed to promote joint flexibility and alleviate stiffness.",
                    articleReference: "Ayurvedic Oil Massage (Abhyanga): A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Pinda Sweda",
                    description: "Pinda Sweda is a therapeutic treatment involving the application of hot poultices filled with medicinal herbs. It is recommended for adult females with Vata Prakruti experiencing Rheumatoid Arthritis. Pinda Sweda is believed to reduce pain and inflammation in joints.",
                    articleReference: "Pinda Sweda: An Ayurvedic Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Nasya",
                    description: "Nasya is an Ayurvedic therapy involving the administration of herbal oils or powders through the nasal passages. It is recommended for older females with Vata Prakruti experiencing Rheumatoid Arthritis. Nasya is believed to alleviate joint pain and inflammation.",
                    articleReference: "Nasya: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Sheetali Pranayama",
                    description: "Sheetali Pranayama is a cooling breathing technique recommended for male children with Pitta Prakruti experiencing Rheumatoid Arthritis. It involves inhaling through a rolled tongue and exhaling through the nose, promoting a sense of calmness.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its anti-inflammatory properties and is recommended for adult males with Pitta Prakruti experiencing Rheumatoid Arthritis.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Immunomodulatory and Anti-Inflammatory Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties and is recommended for older males with Pitta Prakruti experiencing Rheumatoid Arthritis.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Sheetali Pranayama",
                    description: "Sheetali Pranayama is a cooling breathing technique recommended for female children with Pitta Prakruti experiencing Rheumatoid Arthritis. It involves inhaling through a rolled tongue and exhaling through the nose, promoting a sense of calmness.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its anti-inflammatory properties and is recommended for adult females with Pitta Prakruti experiencing Rheumatoid Arthritis.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Immunomodulatory and Anti-Inflammatory Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties and is recommended for older females with Pitta Prakruti experiencing Rheumatoid Arthritis.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Kapalabhati Pranayama",
                    description: "Kapalabhati Pranayama is a dynamic breathing technique recommended for male children with Kapha Prakruti experiencing Rheumatoid Arthritis. It involves rapid abdominal contractions and forceful exhalations, promoting energy and reducing stiffness.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Triphala Guggulu",
                    description: "Triphala Guggulu is recommended for adult males with Kapha Prakruti experiencing Rheumatoid Arthritis in Ayurveda. It helps balance Kapha dosha and supports joint health.",
                    formulation: "Combination of Triphala and Guggulu",
                    articleReference: "Ayurvedic Management of Rheumatoid Arthritis: A Comprehensive Approach",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Maharasnadi Kwath",
                    description: "Maharasnadi Kwath is an Ayurvedic decoction recommended for older males with Kapha Prakruti experiencing Rheumatoid Arthritis. It is believed to reduce joint pain and inflammation.",
                    formulation: "Herbal decoction",
                    articleReference: "Ayurvedic Formulations in Rheumatoid Arthritis: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Kapalabhati Pranayama",
                    description: "Kapalabhati Pranayama is a dynamic breathing technique recommended for female children with Kapha Prakruti experiencing Rheumatoid Arthritis. It involves rapid abdominal contractions and forceful exhalations, promoting energy and reducing stiffness.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Triphala Guggulu",
                    description: "Triphala Guggulu is recommended for adult females with Kapha Prakruti experiencing Rheumatoid Arthritis in Ayurveda. It helps balance Kapha dosha and supports joint health.",
                    formulation: "Combination of Triphala and Guggulu",
                    articleReference: "Ayurvedic Management of Rheumatoid Arthritis: A Comprehensive Approach",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Maharasnadi Kwath",
                    description: "Maharasnadi Kwath is an Ayurvedic decoction recommended for older females with Kapha Prakruti experiencing Rheumatoid Arthritis. It is believed to reduce joint pain and inflammation.",
                    formulation: "Herbal decoction",
                    articleReference: "Ayurvedic Formulations in Rheumatoid Arthritis: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-rheumatoid-arthritis"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
hypertension: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Shankhapushpi (Convolvulus pluricaulis)",
                    description: "Shankhapushpi is formulated with the extract of Convolvulus pluricaulis. This herbal remedy is known for its calming properties and is recommended for male children with Vata Prakruti experiencing hypertension. It may help regulate blood pressure and promote overall cardiovascular health.",
                    formulation: "Extract of Convolvulus pluricaulis",
                    articleReference: "Ayurveda in Pediatrics: A Review on Herbs Used in Children",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Arjuna (Terminalia arjuna)",
                    description: "Arjuna is formulated with the extract of Terminalia arjuna bark. This herbal remedy is known for its cardio-protective properties and is recommended for adult males with Vata Prakruti experiencing hypertension. It may help support heart function and maintain healthy blood pressure levels.",
                    formulation: "Extract of Terminalia arjuna",
                    articleReference: "Terminalia arjuna: A Review on Its Cardiovascular Benefits",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic properties and is recommended for older males with Vata Prakruti experiencing hypertension. It may help manage stress and promote cardiovascular well-being.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Shankhapushpi (Convolvulus pluricaulis)",
                    description: "Shankhapushpi is formulated with the extract of Convolvulus pluricaulis. This herbal remedy is known for its calming properties and is recommended for female children with Vata Prakruti experiencing hypertension. It may help regulate blood pressure and promote overall cardiovascular health.",
                    formulation: "Extract of Convolvulus pluricaulis",
                    articleReference: "Ayurveda in Pediatrics: A Review on Herbs Used in Children",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Arjuna (Terminalia arjuna)",
                    description: "Arjuna is formulated with the extract of Terminalia arjuna bark. This herbal remedy is known for its cardio-protective properties and is recommended for adult females with Vata Prakruti experiencing hypertension. It may help support heart function and maintain healthy blood pressure levels.",
                    formulation: "Extract of Terminalia arjuna",
                    articleReference: "Terminalia arjuna: A Review on Its Cardiovascular Benefits",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic properties and is recommended for older females with Vata Prakruti experiencing hypertension. It may help manage stress and promote cardiovascular well-being.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Sheetali Pranayama",
                    description: "Sheetali Pranayama is a cooling breathing technique recommended for male children with Pitta Prakruti experiencing hypertension. It involves inhaling through a rolled tongue and exhaling through the nose, promoting a sense of calmness and helping regulate blood pressure.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing properties and is recommended for adult males with Pitta Prakruti experiencing hypertension. It may help manage stress and support overall cardiovascular health.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties and is recommended for older males with Pitta Prakruti experiencing hypertension. It may help balance blood pressure levels.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Sheetali Pranayama",
                    description: "Sheetali Pranayama is a cooling breathing technique recommended for female children with Pitta Prakruti experiencing hypertension. It involves inhaling through a rolled tongue and exhaling through the nose, promoting a sense of calmness and helping regulate blood pressure.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing properties and is recommended for adult females with Pitta Prakruti experiencing hypertension. It may help manage stress and support overall cardiovascular health.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties and is recommended for older females with Pitta Prakruti experiencing hypertension. It may help balance blood pressure levels.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Kapalabhati Pranayama",
                    description: "Kapalabhati Pranayama is a dynamic breathing technique recommended for male children with Kapha Prakruti experiencing hypertension. It involves rapid abdominal contractions and forceful exhalations, promoting energy and helping regulate blood pressure.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Triphala Churna",
                    description: "Triphala Churna is recommended for adult males with Kapha Prakruti experiencing hypertension. It is a combination of three fruits known for their antioxidant properties and may help maintain healthy blood pressure levels.",
                    formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                    articleReference: "Triphala: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Dashamoola Kwath",
                    description: "Dashamoola Kwath is an Ayurvedic decoction recommended for older males with Kapha Prakruti experiencing hypertension. It is made from the roots of ten medicinal herbs and may help balance blood pressure.",
                    formulation: "Herbal decoction",
                    articleReference: "Ayurvedic Formulations in Hypertension: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Kapalabhati Pranayama",
                    description: "Kapalabhati Pranayama is a dynamic breathing technique recommended for female children with Kapha Prakruti experiencing hypertension. It involves rapid abdominal contractions and forceful exhalations, promoting energy and helping regulate blood pressure.",
                    articleReference: "Pranayama Techniques in Ayurveda: A Comprehensive Overview",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Triphala Churna",
                    description: "Triphala Churna is recommended for adult females with Kapha Prakruti experiencing hypertension. It is a combination of three fruits known for their antioxidant properties and may help maintain healthy blood pressure levels.",
                    formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                    articleReference: "Triphala: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Dashamoola Kwath",
                    description: "Dashamoola Kwath is an Ayurvedic decoction recommended for older females with Kapha Prakruti experiencing hypertension. It is made from the roots of ten medicinal herbs and may help balance blood pressure.",
                    formulation: "Herbal decoction",
                    articleReference: "Ayurvedic Formulations in Hypertension: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-hypertension"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
gallstones: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Pippali (Piper longum)",
                    description: "Pippali is formulated with the extract of Piper longum. This herbal remedy is known for its digestive and carminative properties. It may be recommended for male children with Vata Prakruti experiencing gallstones to support digestion and alleviate discomfort.",
                    formulation: "Extract of Piper longum",
                    articleReference: "Piper longum: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Haritaki (Terminalia chebula)",
                    description: "Haritaki is formulated with the extract of Terminalia chebula. This herbal remedy is known for its digestive and detoxifying properties. It may be recommended for adult males with Vata Prakruti experiencing gallstones to support liver health and promote bile flow.",
                    formulation: "Extract of Terminalia chebula",
                    articleReference: "Terminalia chebula: A Review on Its Health Benefits",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shilajit",
                    description: "Shilajit is a mineral pitch known for its rejuvenating properties. It may be recommended for older males with Vata Prakruti experiencing gallstones to support overall digestive and metabolic health.",
                    formulation: "Natural resin",
                    articleReference: "Shilajit: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Pippali (Piper longum)",
                    description: "Pippali is formulated with the extract of Piper longum. This herbal remedy is known for its digestive and carminative properties. It may be recommended for female children with Vata Prakruti experiencing gallstones to support digestion and alleviate discomfort.",
                    formulation: "Extract of Piper longum",
                    articleReference: "Piper longum: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Haritaki (Terminalia chebula)",
                    description: "Haritaki is formulated with the extract of Terminalia chebula. This herbal remedy is known for its digestive and detoxifying properties. It may be recommended for adult females with Vata Prakruti experiencing gallstones to support liver health and promote bile flow.",
                    formulation: "Extract of Terminalia chebula",
                    articleReference: "Terminalia chebula: A Review on Its Health Benefits",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shilajit",
                    description: "Shilajit is a mineral pitch known for its rejuvenating properties. It may be recommended for older females with Vata Prakruti experiencing gallstones to support overall digestive and metabolic health.",
                    formulation: "Natural resin",
                    articleReference: "Shilajit: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Aloe Vera Juice",
                    description: "Aloe Vera Juice is known for its cooling and anti-inflammatory properties. It may be recommended for male children with Pitta Prakruti experiencing gallstones to soothe the digestive system and reduce inflammation.",
                    formulation: "Natural Aloe Vera Juice",
                    articleReference: "Aloe Vera: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its anti-inflammatory and liver-protective properties. It may be recommended for adult males with Pitta Prakruti experiencing gallstones to support liver function and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Triphala Churna",
                    description: "Triphala Churna is a combination of three fruits known for their digestive and detoxifying properties. It may be recommended for older males with Pitta Prakruti experiencing gallstones to promote healthy digestion and liver function.",
                    formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                    articleReference: "Triphala: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Aloe Vera Juice",
                    description: "Aloe Vera Juice is known for its cooling and anti-inflammatory properties. It may be recommended for female children with Pitta Prakruti experiencing gallstones to soothe the digestive system and reduce inflammation.",
                    formulation: "Natural Aloe Vera Juice",
                    articleReference: "Aloe Vera: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its anti-inflammatory and liver-protective properties. It may be recommended for adult females with Pitta Prakruti experiencing gallstones to support liver function and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Triphala Churna",
                    description: "Triphala Churna is a combination of three fruits known for their digestive and detoxifying properties. It may be recommended for older females with Pitta Prakruti experiencing gallstones to promote healthy digestion and liver function.",
                    formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                    articleReference: "Triphala: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for male children with Kapha Prakruti experiencing gallstones to promote digestion and reduce excess Kapha.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Punarnava (Boerhavia diffusa)",
                    description: "Punarnava is formulated with the extract of Boerhavia diffusa. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for adult males with Kapha Prakruti experiencing gallstones to support kidney function and reduce excess fluid retention.",
                    formulation: "Extract of Boerhavia diffusa",
                    articleReference: "Boerhavia diffusa: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Guggulu (Commiphora wightii)",
                    description: "Guggulu is formulated with the extract of Commiphora wightii resin. This herbal remedy is known for its anti-inflammatory and lipid-lowering properties. It may be recommended for older males with Kapha Prakruti experiencing gallstones to support overall metabolism and reduce cholesterol levels.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Applications",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for female children with Kapha Prakruti experiencing gallstones to promote digestion and reduce excess Kapha.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Punarnava (Boerhavia diffusa)",
                    description: "Punarnava is formulated with the extract of Boerhavia diffusa. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for adult females with Kapha Prakruti experiencing gallstones to support kidney function and reduce excess fluid retention.",
                    formulation: "Extract of Boerhavia diffusa",
                    articleReference: "Boerhavia diffusa: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Guggulu (Commiphora wightii)",
                    description: "Guggulu is formulated with the extract of Commiphora wightii resin. This herbal remedy is known for its anti-inflammatory and lipid-lowering properties. It may be recommended for older females with Kapha Prakruti experiencing gallstones to support overall metabolism and reduce cholesterol levels.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Applications",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gallstones"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
anxietyDisorder: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for male children with Vata Prakruti experiencing anxiety disorders to support mental clarity and reduce nervousness.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for adult males with Vata Prakruti experiencing anxiety disorders to promote overall well-being and reduce nervousness.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Jatamansi (Nardostachys jatamansi)",
                    description: "Jatamansi is formulated with the extract of Nardostachys jatamansi. This herbal remedy is known for its calming and grounding properties. It may be recommended for older males with Vata Prakruti experiencing anxiety disorders to reduce restlessness and promote emotional balance.",
                    formulation: "Extract of Nardostachys jatamansi",
                    articleReference: "Nardostachys jatamansi: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for female children with Vata Prakruti experiencing anxiety disorders to support mental clarity and reduce nervousness.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for adult females with Vata Prakruti experiencing anxiety disorders to promote overall well-being and reduce nervousness.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Jatamansi (Nardostachys jatamansi)",
                    description: "Jatamansi is formulated with the extract of Nardostachys jatamansi. This herbal remedy is known for its calming and grounding properties. It may be recommended for older females with Vata Prakruti experiencing anxiety disorders to reduce restlessness and promote emotional balance.",
                    formulation: "Extract of Nardostachys jatamansi",
                    articleReference: "Nardostachys jatamansi: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for male children with Pitta Prakruti experiencing anxiety disorders to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for adult males with Pitta Prakruti experiencing anxiety disorders to support mental clarity and reduce irritability.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for older males with Pitta Prakruti experiencing anxiety disorders to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for female children with Pitta Prakruti experiencing anxiety disorders to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for adult females with Pitta Prakruti experiencing anxiety disorders to support mental clarity and reduce irritability.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for older females with Pitta Prakruti experiencing anxiety disorders to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for male children with Kapha Prakruti experiencing anxiety disorders to support overall well-being and reduce lethargy.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for adult males with Kapha Prakruti experiencing anxiety disorders to promote digestion and reduce lethargy.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for older males with Kapha Prakruti experiencing anxiety disorders to promote overall well-being and reduce lethargy.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for female children with Kapha Prakruti experiencing anxiety disorders to support overall well-being and reduce lethargy.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for adult females with Kapha Prakruti experiencing anxiety disorders to promote digestion and reduce lethargy.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for older females with Kapha Prakruti experiencing anxiety disorders to promote overall well-being and reduce lethargy.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-anxiety-disorder"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
urinaryTractInfection: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Gokshura (Tribulus terrestris)",
                    description: "Gokshura is formulated with the extract of Tribulus terrestris. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for male children with Vata Prakruti experiencing Urinary Tract Infection to support urinary function and reduce inflammation.",
                    formulation: "Extract of Tribulus terrestris",
                    articleReference: "Tribulus terrestris: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Punarnava (Boerhavia diffusa)",
                    description: "Punarnava is formulated with the extract of Boerhavia diffusa. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for adult males with Vata Prakruti experiencing Urinary Tract Infection to support kidney function and reduce inflammation.",
                    formulation: "Extract of Boerhavia diffusa",
                    articleReference: "Boerhavia diffusa: A Review on Its Phytochemistry and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Varun (Crataeva nurvala)",
                    description: "Varun is formulated with the extract of Crataeva nurvala. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for older males with Vata Prakruti experiencing Urinary Tract Infection to support urinary health and reduce inflammation.",
                    formulation: "Extract of Crataeva nurvala",
                    articleReference: "Crataeva nurvala: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Gokshura (Tribulus terrestris)",
                    description: "Gokshura is formulated with the extract of Tribulus terrestris. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for female children with Vata Prakruti experiencing Urinary Tract Infection to support urinary function and reduce inflammation.",
                    formulation: "Extract of Tribulus terrestris",
                    articleReference: "Tribulus terrestris: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Punarnava (Boerhavia diffusa)",
                    description: "Punarnava is formulated with the extract of Boerhavia diffusa. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for adult females with Vata Prakruti experiencing Urinary Tract Infection to support kidney function and reduce inflammation.",
                    formulation: "Extract of Boerhavia diffusa",
                    articleReference: "Boerhavia diffusa: A Review on Its Phytochemistry and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Varun (Crataeva nurvala)",
                    description: "Varun is formulated with the extract of Crataeva nurvala. This herbal remedy is known for its diuretic and anti-inflammatory properties. It may be recommended for older females with Vata Prakruti experiencing Urinary Tract Infection to support urinary health and reduce inflammation.",
                    formulation: "Extract of Crataeva nurvala",
                    articleReference: "Crataeva nurvala: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for male children with Pitta Prakruti experiencing Urinary Tract Infection to support overall well-being and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and anti-inflammatory properties. It may be recommended for adult males with Pitta Prakruti experiencing Urinary Tract Infection to soothe inflammation and support kidney health.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for older males with Pitta Prakruti experiencing Urinary Tract Infection to support overall well-being and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for female children with Pitta Prakruti experiencing Urinary Tract Infection to support overall well-being and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and anti-inflammatory properties. It may be recommended for adult females with Pitta Prakruti experiencing Urinary Tract Infection to soothe inflammation and support kidney health.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for older females with Pitta Prakruti experiencing Urinary Tract Infection to support overall well-being and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for male children with Kapha Prakruti experiencing Urinary Tract Infection to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guggulu (Commiphora wightii)",
                    description: "Guggulu is formulated with the extract of Commiphora wightii. This herbal remedy is known for its anti-inflammatory and antibacterial properties. It may be recommended for adult males with Kapha Prakruti experiencing Urinary Tract Infection to reduce inflammation and support urinary health.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for older males with Kapha Prakruti experiencing Urinary Tract Infection to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for female children with Kapha Prakruti experiencing Urinary Tract Infection to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guggulu (Commiphora wightii)",
                    description: "Guggulu is formulated with the extract of Commiphora wightii. This herbal remedy is known for its anti-inflammatory and antibacterial properties. It may be recommended for adult females with Kapha Prakruti experiencing Urinary Tract Infection to reduce inflammation and support urinary health.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for older females with Kapha Prakruti experiencing Urinary Tract Infection to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-urinary-tract-infection"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
appendicitis: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Hingu (Asafoetida)",
                    description: "Hingu, also known as asafoetida, is known for its digestive and anti-inflammatory properties. It may be recommended for male children with Vata Prakruti experiencing Appendicitis to alleviate abdominal discomfort and support digestion.",
                    formulation: "Powder of Asafoetida",
                    articleReference: "Asafoetida (Hing) - A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guggulu (Commiphora wightii)",
                    description: "Guggulu is formulated with the extract of Commiphora wightii. This herbal remedy is known for its anti-inflammatory and analgesic properties. It may be recommended for adult males with Vata Prakruti experiencing Appendicitis to reduce inflammation and pain.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Vacha (Acorus calamus)",
                    description: "Vacha is formulated with the extract of Acorus calamus. This herbal remedy is known for its digestive and carminative properties. It may be recommended for older males with Vata Prakruti experiencing Appendicitis to promote digestion and alleviate discomfort.",
                    formulation: "Extract of Acorus calamus",
                    articleReference: "Acorus calamus: A Review on Its Phytochemistry and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Hingu (Asafoetida)",
                    description: "Hingu, also known as asafoetida, is known for its digestive and anti-inflammatory properties. It may be recommended for female children with Vata Prakruti experiencing Appendicitis to alleviate abdominal discomfort and support digestion.",
                    formulation: "Powder of Asafoetida",
                    articleReference: "Asafoetida (Hing) - A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guggulu (Commiphora wightii)",
                    description: "Guggulu is formulated with the extract of Commiphora wightii. This herbal remedy is known for its anti-inflammatory and analgesic properties. It may be recommended for adult females with Vata Prakruti experiencing Appendicitis to reduce inflammation and pain.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Vacha (Acorus calamus)",
                    description: "Vacha is formulated with the extract of Acorus calamus. This herbal remedy is known for its digestive and carminative properties. It may be recommended for older females with Vata Prakruti experiencing Appendicitis to promote digestion and alleviate discomfort.",
                    formulation: "Extract of Acorus calamus",
                    articleReference: "Acorus calamus: A Review on Its Phytochemistry and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Dhanyak (Coriander)",
                    description: "Dhanyak, also known as coriander, is known for its cooling and anti-inflammatory properties. It may be recommended for male children with Pitta Prakruti experiencing Appendicitis to reduce inflammation and soothe the digestive system.",
                    formulation: "Powder of Coriander",
                    articleReference: "Coriandrum sativum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and anti-inflammatory properties. It may be recommended for adult males with Pitta Prakruti experiencing Appendicitis to soothe inflammation and support digestion.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Dhanyak (Coriander)",
                    description: "Dhanyak, also known as coriander, is known for its cooling and anti-inflammatory properties. It may be recommended for older males with Pitta Prakruti experiencing Appendicitis to reduce inflammation and soothe the digestive system.",
                    formulation: "Powder of Coriander",
                    articleReference: "Coriandrum sativum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Dhanyak (Coriander)",
                    description: "Dhanyak, also known as coriander, is known for its cooling and anti-inflammatory properties. It may be recommended for female children with Pitta Prakruti experiencing Appendicitis to reduce inflammation and soothe the digestive system.",
                    formulation: "Powder of Coriander",
                    articleReference: "Coriandrum sativum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and anti-inflammatory properties. It may be recommended for adult females with Pitta Prakruti experiencing Appendicitis to soothe inflammation and support digestion.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Dhanyak (Coriander)",
                    description: "Dhanyak, also known as coriander, is known for its cooling and anti-inflammatory properties. It may be recommended for older females with Pitta Prakruti experiencing Appendicitis to reduce inflammation and soothe the digestive system.",
                    formulation: "Powder of Coriander",
                    articleReference: "Coriandrum sativum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for male children with Kapha Prakruti experiencing Appendicitis to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for adult males with Kapha Prakruti experiencing Appendicitis to promote digestion and reduce congestion.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for older males with Kapha Prakruti experiencing Appendicitis to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for female children with Kapha Prakruti experiencing Appendicitis to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for adult females with Kapha Prakruti experiencing Appendicitis to promote digestion and reduce congestion.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Pippali (Long Pepper)",
                    description: "Pippali, also known as long pepper, is known for its digestive and warming properties. It may be recommended for older females with Kapha Prakruti experiencing Appendicitis to promote digestion and reduce congestion.",
                    formulation: "Powder of Long Pepper",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-appendicitis"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
gastrointestinalBleeding: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Licorice (Glycyrrhiza glabra)",
                    description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing and anti-inflammatory properties. It may be recommended for male children with Vata Prakruti experiencing gastrointestinal bleeding to alleviate irritation and promote healing.",
                    formulation: "Extract of Glycyrrhiza glabra",
                    articleReference: "Glycyrrhiza glabra: An Overview of Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Triphala",
                    description: "Triphala is a combination of three fruits: Amalaki, Bibhitaki, and Haritaki. It is known for its detoxifying and anti-inflammatory properties. It may be recommended for adult males with Vata Prakruti experiencing gastrointestinal bleeding to cleanse and support digestive health.",
                    formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                    articleReference: "Triphala: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Vasaka (Adhatoda vasica)",
                    description: "Vasaka is formulated with the extract of Adhatoda vasica. This herbal remedy is known for its bronchodilator and anti-inflammatory properties. It may be recommended for older males with Vata Prakruti experiencing gastrointestinal bleeding to reduce inflammation and support respiratory health.",
                    formulation: "Extract of Adhatoda vasica",
                    articleReference: "Adhatoda vasica: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Licorice (Glycyrrhiza glabra)",
                    description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing and anti-inflammatory properties. It may be recommended for female children with Vata Prakruti experiencing gastrointestinal bleeding to alleviate irritation and promote healing.",
                    formulation: "Extract of Glycyrrhiza glabra",
                    articleReference: "Glycyrrhiza glabra: An Overview of Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Triphala",
                    description: "Triphala is a combination of three fruits: Amalaki, Bibhitaki, and Haritaki. It is known for its detoxifying and anti-inflammatory properties. It may be recommended for adult females with Vata Prakruti experiencing gastrointestinal bleeding to cleanse and support digestive health.",
                    formulation: "Combination of Amalaki, Bibhitaki, and Haritaki",
                    articleReference: "Triphala: A Comprehensive Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Vasaka (Adhatoda vasica)",
                    description: "Vasaka is formulated with the extract of Adhatoda vasica. This herbal remedy is known for its bronchodilator and anti-inflammatory properties. It may be recommended for older females with Vata Prakruti experiencing gastrointestinal bleeding to reduce inflammation and support respiratory health.",
                    formulation: "Extract of Adhatoda vasica",
                    articleReference: "Adhatoda vasica: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Aloe Vera",
                    description: "Aloe Vera is known for its cooling and healing properties. It may be recommended for male children with Pitta Prakruti experiencing gastrointestinal bleeding to soothe inflammation and promote tissue repair.",
                    formulation: "Aloe Vera Gel",
                    articleReference: "Aloe Vera: A Review on Its Therapeutic Benefits",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for adult males with Pitta Prakruti experiencing gastrointestinal bleeding to support overall well-being and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Licorice (Glycyrrhiza glabra)",
                    description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing and anti-inflammatory properties. It may be recommended for older males with Pitta Prakruti experiencing gastrointestinal bleeding to alleviate irritation and promote healing.",
                    formulation: "Extract of Glycyrrhiza glabra",
                    articleReference: "Glycyrrhiza glabra: An Overview of Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Aloe Vera",
                    description: "Aloe Vera is known for its cooling and healing properties. It may be recommended for female children with Pitta Prakruti experiencing gastrointestinal bleeding to soothe inflammation and promote tissue repair.",
                    formulation: "Aloe Vera Gel",
                    articleReference: "Aloe Vera: A Review on Its Therapeutic Benefits",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for adult females with Pitta Prakruti experiencing gastrointestinal bleeding to support overall well-being and reduce inflammation.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Licorice (Glycyrrhiza glabra)",
                    description: "Licorice is formulated with the extract of Glycyrrhiza glabra. This herbal remedy is known for its soothing and anti-inflammatory properties. It may be recommended for older females with Pitta Prakruti experiencing gastrointestinal bleeding to alleviate irritation and promote healing.",
                    formulation: "Extract of Glycyrrhiza glabra",
                    articleReference: "Glycyrrhiza glabra: An Overview of Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Turmeric (Curcuma longa)",
                    description: "Turmeric is formulated with the extract of Curcuma longa. This herbal remedy is known for its anti-inflammatory and antioxidant properties. It may be recommended for male children with Kapha Prakruti experiencing gastrointestinal bleeding to reduce inflammation and support healing.",
                    formulation: "Extract of Curcuma longa",
                    articleReference: "Curcuma longa: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Pippali (Piper longum)",
                    description: "Pippali is formulated with the extract of Piper longum. This herbal remedy is known for its digestive and anti-inflammatory properties. It may be recommended for adult males with Kapha Prakruti experiencing gastrointestinal bleeding to promote digestion and reduce inflammation.",
                    formulation: "Extract of Piper longum",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Haritaki (Terminalia chebula)",
                    description: "Haritaki is formulated with the extract of Terminalia chebula. This herbal remedy is known for its digestive and astringent properties. It may be recommended for older males with Kapha Prakruti experiencing gastrointestinal bleeding to support digestion and promote tissue healing.",
                    formulation: "Extract of Terminalia chebula",
                    articleReference: "Terminalia chebula: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Turmeric (Curcuma longa)",
                    description: "Turmeric is formulated with the extract of Curcuma longa. This herbal remedy is known for its anti-inflammatory and antioxidant properties. It may be recommended for female children with Kapha Prakruti experiencing gastrointestinal bleeding to reduce inflammation and support healing.",
                    formulation: "Extract of Curcuma longa",
                    articleReference: "Curcuma longa: A Review on Its Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Pippali (Piper longum)",
                    description: "Pippali is formulated with the extract of Piper longum. This herbal remedy is known for its digestive and anti-inflammatory properties. It may be recommended for adult females with Kapha Prakruti experiencing gastrointestinal bleeding to promote digestion and reduce inflammation.",
                    formulation: "Extract of Piper longum",
                    articleReference: "Piper longum: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Haritaki (Terminalia chebula)",
                    description: "Haritaki is formulated with the extract of Terminalia chebula. This herbal remedy is known for its digestive and astringent properties. It may be recommended for older females with Kapha Prakruti experiencing gastrointestinal bleeding to support digestion and promote tissue healing.",
                    formulation: "Extract of Terminalia chebula",
                    articleReference: "Terminalia chebula: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-gastrointestinal-bleeding"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
chronicFatigueSyndrome: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and rejuvenating properties. It may be recommended for male children with Vata Prakruti experiencing Chronic Fatigue Syndrome to enhance energy levels and support overall well-being.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Bala (Sida cordifolia)",
                    description: "Bala is formulated with the extract of Sida cordifolia. This herbal remedy is known for its tonic and rejuvenating properties. It may be recommended for adult males with Vata Prakruti experiencing Chronic Fatigue Syndrome to enhance stamina and vitality.",
                    formulation: "Extract of Sida cordifolia",
                    articleReference: "Sida cordifolia: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its rejuvenating and nourishing properties. It may be recommended for older males with Vata Prakruti experiencing Chronic Fatigue Syndrome to support energy levels and overall vitality.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and rejuvenating properties. It may be recommended for female children with Vata Prakruti experiencing Chronic Fatigue Syndrome to enhance energy levels and support overall well-being.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Bala (Sida cordifolia)",
                    description: "Bala is formulated with the extract of Sida cordifolia. This herbal remedy is known for its tonic and rejuvenating properties. It may be recommended for adult females with Vata Prakruti experiencing Chronic Fatigue Syndrome to enhance stamina and vitality.",
                    formulation: "Extract of Sida cordifolia",
                    articleReference: "Sida cordifolia: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its rejuvenating and nourishing properties. It may be recommended for older females with Vata Prakruti experiencing Chronic Fatigue Syndrome to support energy levels and overall vitality.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for male children with Pitta Prakruti experiencing Chronic Fatigue Syndrome to support mental clarity and reduce stress-related fatigue.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and nourishing properties. It may be recommended for adult males with Pitta Prakruti experiencing Chronic Fatigue Syndrome to balance Pitta and promote energy restoration.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Amalaki (Emblica officinalis)",
                    description: "Amalaki is formulated with the extract of Emblica officinalis. This herbal remedy is known for its rejuvenating and antioxidant properties. It may be recommended for older males with Pitta Prakruti experiencing Chronic Fatigue Syndrome to support vitality and reduce oxidative stress.",
                    formulation: "Extract of Emblica officinalis",
                    articleReference: "Emblica officinalis: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for female children with Pitta Prakruti experiencing Chronic Fatigue Syndrome to support mental clarity and reduce stress-related fatigue.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and nourishing properties. It may be recommended for adult females with Pitta Prakruti experiencing Chronic Fatigue Syndrome to balance Pitta and promote energy restoration.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Amalaki (Emblica officinalis)",
                    description: "Amalaki is formulated with the extract of Emblica officinalis. This herbal remedy is known for its rejuvenating and antioxidant properties. It may be recommended for older females with Pitta Prakruti experiencing Chronic Fatigue Syndrome to support vitality and reduce oxidative stress.",
                    formulation: "Extract of Emblica officinalis",
                    articleReference: "Emblica officinalis: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and stimulating properties. It may be recommended for male children with Kapha Prakruti experiencing Chronic Fatigue Syndrome to promote metabolism and reduce lethargy.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guggul (Commiphora wightii)",
                    description: "Guggul is formulated with the extract of Commiphora wightii. This herbal remedy is known for its anti-inflammatory and metabolism-boosting properties. It may be recommended for adult males with Kapha Prakruti experiencing Chronic Fatigue Syndrome to reduce lethargy and support energy production.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shilajit",
                    description: "Shilajit is a natural substance formed by the decomposition of plant matter. It is known for its rejuvenating and energizing properties. It may be recommended for older males with Kapha Prakruti experiencing Chronic Fatigue Syndrome to enhance vitality and reduce lethargy.",
                    formulation: "Pure Shilajit",
                    articleReference: "Shilajit: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and stimulating properties. It may be recommended for female children with Kapha Prakruti experiencing Chronic Fatigue Syndrome to promote metabolism and reduce lethargy.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Guggul (Commiphora wightii)",
                    description: "Guggul is formulated with the extract of Commiphora wightii. This herbal remedy is known for its anti-inflammatory and metabolism-boosting properties. It may be recommended for adult females with Kapha Prakruti experiencing Chronic Fatigue Syndrome to reduce lethargy and support energy production.",
                    formulation: "Extract of Commiphora wightii",
                    articleReference: "Commiphora wightii: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shilajit",
                    description: "Shilajit is a natural substance formed by the decomposition of plant matter. It is known for its rejuvenating and energizing properties. It may be recommended for older females with Kapha Prakruti experiencing Chronic Fatigue Syndrome to enhance vitality and reduce lethargy.",
                    formulation: "Pure Shilajit",
                    articleReference: "Shilajit: A Review on Its Therapeutic Uses",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-chronic-fatigue-syndrome"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
},
ocularMigraine: {
    vata: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for male children with Vata Prakruti experiencing Ocular Migraine to support mental clarity and reduce nervousness.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for adult males with Vata Prakruti experiencing Ocular Migraine to promote overall well-being and reduce nervousness.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Jatamansi (Nardostachys jatamansi)",
                    description: "Jatamansi is formulated with the extract of Nardostachys jatamansi. This herbal remedy is known for its calming and grounding properties. It may be recommended for older males with Vata Prakruti experiencing Ocular Migraine to reduce restlessness and promote emotional balance.",
                    formulation: "Extract of Nardostachys jatamansi",
                    articleReference: "Nardostachys jatamansi: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for female children with Vata Prakruti experiencing Ocular Migraine to support mental clarity and reduce nervousness.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for adult females with Vata Prakruti experiencing Ocular Migraine to promote overall well-being and reduce nervousness.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Jatamansi (Nardostachys jatamansi)",
                    description: "Jatamansi is formulated with the extract of Nardostachys jatamansi. This herbal remedy is known for its calming and grounding properties. It may be recommended for older females with Vata Prakruti experiencing Ocular Migraine to reduce restlessness and promote emotional balance.",
                    formulation: "Extract of Nardostachys jatamansi",
                    articleReference: "Nardostachys jatamansi: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            }
        }
    },
    pitta: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for male children with Pitta Prakruti experiencing Ocular Migraine to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for adult males with Pitta Prakruti experiencing Ocular Migraine to support mental clarity and reduce irritability.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for older males with Pitta Prakruti experiencing Ocular Migraine to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            }
        },
        female: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for female children with Pitta Prakruti experiencing Ocular Migraine to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Brahmi (Bacopa monnieri)",
                    description: "Brahmi is formulated with the extract of Bacopa monnieri. This herbal remedy is known for its cognitive-enhancing and calming properties. It may be recommended for adult females with Pitta Prakruti experiencing Ocular Migraine to support mental clarity and reduce irritability.",
                    formulation: "Extract of Bacopa monnieri",
                    articleReference: "Bacopa monnieri: A Neutraceutical Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Shatavari (Asparagus racemosus)",
                    description: "Shatavari is formulated with the extract of Asparagus racemosus. This herbal remedy is known for its cooling and soothing properties. It may be recommended for older females with Pitta Prakruti experiencing Ocular Migraine to balance Pitta and reduce irritability.",
                    formulation: "Extract of Asparagus racemosus",
                    articleReference: "Asparagus racemosus: A Review on Its Phytochemical and Therapeutic Potentials",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            }
        }
    },
    kapha: {
        male: {
            child: {
                upTo: 15,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for male children with Kapha Prakruti experiencing Ocular Migraine to support overall well-being and reduce lethargy.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for adult males with Kapha Prakruti experiencing Ocular Migraine to promote digestion and reduce lethargy.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for older males with Kapha Prakruti experiencing Ocular Migraine to promote overall well-being and reduce lethargy.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            }
        },
        female: {
            child: {medicineupTo: 15,
                medicine: {
                    name: "Guduchi (Tinospora cordifolia)",
                    description: "Guduchi is formulated with the extract of Tinospora cordifolia. This herbal remedy is known for its immune-boosting and anti-inflammatory properties. It may be recommended for female children with Kapha Prakruti experiencing Ocular Migraine to support overall well-being and reduce lethargy.",
                    formulation: "Extract of Tinospora cordifolia",
                    articleReference: "Tinospora cordifolia: A Review on Its Pharmacological Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            adult: {
                from: 16,
                to: 50,
                medicine: {
                    name: "Trikatu Churna",
                    description: "Trikatu Churna is a combination of Black Pepper, Long Pepper, and Ginger. It is known for its digestive and warming properties. It may be recommended for adult females with Kapha Prakruti experiencing Ocular Migraine to promote digestion and reduce lethargy.",
                    formulation: "Combination of Black Pepper, Long Pepper, and Ginger",
                    articleReference: "Trikatu Churna: A Review on Its Therapeutic Properties",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            },
            old: {
                from: 51,
                medicine: {
                    name: "Ashwagandha (Withania somnifera)",
                    description: "Ashwagandha is formulated with the extract of Withania somnifera. This herbal remedy is known for its adaptogenic and stress-relieving properties. It may be recommended for older females with Kapha Prakruti experiencing Ocular Migraine to promote overall well-being and reduce lethargy.",
                    formulation: "Extract of Withania somnifera",
                    articleReference: "Withania somnifera: A Review",
                    articleLink: "https://www.nourishdoc.com/health/ayurveda-treatment-for-ocular-migraine"
                }
            }
        }
    }
    // Add more prakrutis or age groups as needed
}



  
    
    
      
    // Add more diseases as needed
};



function recommendMedicine() {
    const selectedDisease = document.getElementById("disease").value;
    const selectedPrakruti = document.getElementById("prakruti").value;
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    const selectedAge = parseInt(document.getElementById("age").value, 10);

    // Get the recommended medicine based on the selected values
    let recommendedMedicine;
    

    if (medicineData[selectedDisease]?.[selectedPrakruti]?.[selectedGender]?.child?.upTo >= selectedAge) {
        recommendedMedicine = medicineData[selectedDisease]?.[selectedPrakruti]?.[selectedGender]?.child?.medicine;
    } else if (
        medicineData[selectedDisease]?.[selectedPrakruti]?.[selectedGender]?.adult?.from <= selectedAge &&
        medicineData[selectedDisease]?.[selectedPrakruti]?.[selectedGender]?.adult?.to >= selectedAge
    ) {
        recommendedMedicine = medicineData[selectedDisease]?.[selectedPrakruti]?.[selectedGender]?.adult?.medicine;
    } else if (medicineData[selectedDisease]?.[selectedPrakruti]?.[selectedGender]?.old?.from <= selectedAge) {
        recommendedMedicine = medicineData[selectedDisease]?.[selectedPrakruti]?.[selectedGender]?.old?.medicine;
    }

    // Display the result
    const resultContainer = document.getElementById("result");
    const medicineInfo = document.getElementById("medicineInfo");

    medicineInfo.innerHTML = `<strong>Recommended Medicine:</strong> ${recommendedMedicine?.name || "No specific recommendation found."}
                              <p><strong>Description:</strong> ${recommendedMedicine?.description || ""}</p>
                              <p><strong>Formulation:</strong> ${recommendedMedicine?.formulation || ""}</p>
                              <p><strong>Article Reference:</strong> <a href="${recommendedMedicine?.articleLink || "#" }" target="_blank">${recommendedMedicine?.articleReference || "Not specified"}</a></p>`;

    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("show");
}
