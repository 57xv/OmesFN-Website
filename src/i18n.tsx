"use client";

import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'fr' | 'pt';

type Translations = {
    nav: {
        home: string;
        about: string;
        players: string;
        tournaments: string;
        community: string;
        join: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
    };
    about: {
        title: string;
        description: string;
    };
    players: {
        title: string;
    };
    tournaments: {
        title: string;
        subtitle: string;
        status: {
            upcoming: string;
            live: string;
            completed: string;
        }
    };
    features: {
        title: string;
        scrims: string;
        scrimsDesc: string;
        customs: string;
        customsDesc: string;
        rules: string;
        rulesDesc: string;
        moderation: string;
        moderationDesc: string;
    };
    footer: {
        rights: string;
    };
    community: {
        title: string;
        description: string;
        cta: string;
    };
    stats: {
        title: string;
        subtitle: string;
        cta: string;
    };
};

const translations: Record<Language, Translations> = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            players: 'Buyers',
            tournaments: 'Tournaments',
            community: 'Community',
            join: 'Discord',
        },
        hero: {
            title: 'OmesFN',
            subtitle: 'Best Fortnite checker on the market',
            cta: 'Join Discord',
        },
        about: {
            title: 'Who are we',
            description: 'OmesFN is the best Fortnite checker on the market. We provide a reliable and fast service to check your Fortnite accounts.',
        },
        players: {
            title: 'Our Buyers',
        },
        tournaments: {
            title: 'Fortnite Tournaments',
            subtitle: 'Play in the most competitive Fortnite tournaments and show your skills to the world.',
            status: {
                upcoming: 'Upcoming',
                live: 'Live',
                completed: 'Completed',
            }
        },
        features: {
            title: 'Why OmesFN?',
            scrims: 'Proxyless',
            scrimsDesc: 'No proxy required, perfect for low budget.',
            customs: 'No Skips',
            customsDesc: 'Check your combos without skipping any accounts.',
            rules: 'Affordable',
            rulesDesc: 'Our services are affordable and we have different plans.',
            moderation: 'Secure',
            moderationDesc: 'You don\'t have to worry about your security.',
        },
        footer: {
            rights: 'All rights reserved.',
        },
        community: {
            title: 'Have questions?',
            description: 'In Discord you can request and get help from our support team. This is also the place to buy a plan', 
            cta: 'Join Discord',
        },
        stats: {
            title: 'Your Evolution Starts Here',
            subtitle: 'Access your dashboard to see detailed statistics of your performance, KD, wins and much more.',
            cta: 'View My Profile',
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            players: 'Acheteurs',
            tournaments: 'Tournois',
            community: 'Communauté',
            join: 'Discord',
        },
        hero: {
            title: 'OmesFN',
            subtitle: 'Le meilleur vérificateur Fortnite sur le marché',
            cta: 'Rejoindre Discord',
        },
        about: {
            title: 'Qui sommes-nous',
            description: 'OmesFN est le meilleur vérificateur Fortnite sur le marché. Nous fournissons un service fiable et rapide pour vérifier vos comptes Fortnite.',
        },
        players: {
            title: 'Nos Acheteurs',
        },
        tournaments: {
            title: 'Tournois Fortnite',
            subtitle: 'Jouez dans les tournois Fortnite les plus compétitifs et montrez vos compétences au monde entier.',
            status: {
                upcoming: 'À venir',
                live: 'En direct',
                completed: 'Terminé',
            }
        },
        features: {
            title: 'Pourquoi OmesFN?',
            scrims: 'Sans Proxy',
            scrimsDesc: 'Aucun proxy requis, parfait pour petit budget.',
            customs: 'Sans Sauts',
            customsDesc: 'Vérifiez vos combinaisons sans sauter de comptes.',
            rules: 'Abordable',
            rulesDesc: 'Nos services sont abordables et nous avons différents forfaits.',
            moderation: 'Sécurisé',
            moderationDesc: 'Vous n\'avez pas à vous soucier de votre sécurité.',
        },
        footer: {
            rights: 'Tous droits réservés.',
        },
        community: {
            title: 'Vous avez des questions?',
            description: 'Sur Discord, vous pouvez demander et obtenir de l\'aide de notre équipe de support. C\'est aussi l\'endroit pour acheter un forfait', 
            cta: 'Rejoindre Discord',
        },
        stats: {
            title: 'Votre Évolution Commence Ici',
            subtitle: 'Accédez à votre tableau de bord pour voir les statistiques détaillées de votre performance, KD, victoires et bien plus encore.',
            cta: 'Voir Mon Profil',
        }
    },
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            players: 'Compradores',
            tournaments: 'Torneios',
            community: 'Comunidade',
            join: 'Discord',
        },
        hero: {
            title: 'OmesFN',
            subtitle: 'O melhor verificador Fortnite do mercado',
            cta: 'Entrar no Discord',
        },
        about: {
            title: 'Quem somos nós',
            description: 'OmesFN é o melhor verificador Fortnite do mercado. Nós fornecemos um serviço confiável e rápido para verificar suas contas Fortnite.',
        },
        players: {
            title: 'Nossos Jogadores Pro',
        },
        tournaments: {
            title: 'Torneios Fortnite',
            subtitle: 'Jogue nos torneios Fortnite mais competitivos e mostre suas habilidades para o mundo.',
            status: {
                upcoming: 'Próximos',
                live: 'Ao vivo',
                completed: 'Concluídos',
            }
        },
        features: {
            title: 'Por que OmesFN?',
            scrims: 'Sem Proxy',
            scrimsDesc: 'Nenhum proxy necessário, perfeito para baixo orçamento.',
            customs: 'Sem Pulos',
            customsDesc: 'Verifique suas combinações sem pular nenhuma conta.',
            rules: 'Acessível',
            rulesDesc: 'Nossos serviços são acessíveis e temos diferentes planos.',
            moderation: 'Seguro',
            moderationDesc: 'Você não precisa se preocupar com sua segurança.',
        },
        footer: {
            rights: 'Todos os direitos reservados.',
        },
        community: {
            title: 'Tem dúvidas?',
            description: 'No Discord você pode solicitar e obter ajuda da nossa equipe de suporte. Este também é o lugar para comprar um plano', 
            cta: 'Entrar no Discord',
        },
        stats: {
            title: 'Seu Evolução Começa Aqui',
            subtitle: 'Acesse seu painel para ver estatísticas detalhadas do seu desempenho, KD, vitórias e muito mais.',
            cta: 'Ver Meu Perfil',
        }
    },
};

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within a I18nProvider');
    }
    return context;
};
