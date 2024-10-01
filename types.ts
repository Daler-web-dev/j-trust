interface Main {
    header: Header;
    footer: Footer;
    hero: Hero;
    financial: Financial;
    services: ServicesWeOffer;
    form: ConsultationRequestForm;
    servicesWeOffer: ServicesWeOffer;
}



// Header

interface HeaderLinks {
    number_1: string;
    number_2: string;
    button_text: string;
}

interface HeaderAbout {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
}

interface HeaderServices {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
}

interface BecameAClient {
    title: string;
    p1: string;
}

interface Header {
    nav: {
        home: string;
        about: HeaderAbout;
        services: HeaderServices;
        auditReports: string;
        becameAClient: BecameAClient;
        links: HeaderLinks;
    };
}


// Footer

interface FooterAddress {
    title: string;
    street: string;
}

interface FooterAbout {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
}

interface FooterServices {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
}

interface BecameAClient {
    title: string;
    p1: string;
}

interface FooterMore {
    title: string;
    auditReports: string;
    becameAClient: BecameAClient;
}

interface FooterContacts {
    title: string;
    email: string;
    number_1: string;
    number_2: string;
}

interface FooterCompany {
    title: string;
    termsAndConditions: string;
    privacyPolicy: string;
}

interface Footer {
    address: FooterAddress;
    about: FooterAbout;
    services: FooterServices;
    more: FooterMore;
    contacts: FooterContacts;
    company: FooterCompany;
}

// Main Page

interface HomePage {
    header: Header;
    hero: Hero;
    financial: Financial;
    servicesWeOffer: ServicesWeOffer;
    footer: Footer;
    forma: ConsultationRequestForm;
}



// Main Page Hero Section

interface Hero {
    company: string;
    title: string;
    subtitle: string;
    text: string;
    button: string;
}

// Main Page Financial Layouts Section

interface FinancialService {
    title: string;
    description: string;
}

interface Financial {
    title: string;
    subtitle: string;
    generalInformation: FinancialService;
    antiCrisisManagement: FinancialService;
    dueDiligence: FinancialService;
    mandatoryAudit: FinancialService;
    initiativeAudit: FinancialService;
    auditOfProjects: FinancialService;
}


// Main Page Services Section


interface ServicesWeOffer {
    title: string;
    text_1: string;
    text_2: string;
    button: string;
}

// Main Page Forma Section


interface ConsultationRequestForm {
    title: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    phone_2: string;
    phone_3: string;
    phone_4: string;
    button: string;
    button_2: string;
    toast: {
        title: string;
        description: string;
    };
}


// About Page Main Section

interface AboutPage {
    title: string;
    description_1: string;
    description_2: string;
    description_3: string;
    services: {
        title: string;
        opt: string[];
    };
    clients: {
        title: string;
        companies: {
            title: string;
            description: string;
        }[];
    };
}


// About Page Vacancies Section

interface VacancyPosition {
    location: string;
    position: string;
}

interface JobListing {
    careerTitle: string;
    careerDescription: string;
    auditors: string;
    locationHeader: string;
    positionHeader: string;
    positions: VacancyPosition[];
    requirements: string;
    requirementsList: string[];
    registrationNotice: string;
}

interface VacancyForm {
    formTitle: string;
    personalInfo: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: string;
    position: string;
    languages: string;
    skills: string;
    additionalSkills: string;
    workExperience: string;
    startDate: string;
    endDate: string;
    company: string;
    companyDescription: string;
    jobTitle: string;
    responsibilities: string;
    education: string;
    eduStartDate: string;
    eduEndDate: string;
    institution: string;
    degree: string;
    specialization: string;
    certificates: string;
    certName: string;
    certDescription: string;
    submit: string;
    requiredField: string;
    skillsPlaceholder: string;
    additionalSkillsPlaceholder: string;
    responsibilitiesPlaceholder: string;
    certDescriptionPlaceholder: string;
}

interface Vacancies {
    jobListing: JobListing;
    forma: VacancyForm;
}


// About Page Clients Section

interface ClientCategory {
    title: string;
    companies: string[];
}

interface Clients {
    title: string;
    description: string;
    nonProfit: ClientCategory;
    industrial: ClientCategory;
    foreignInvestment: ClientCategory;
    unions: ClientCategory;
    trading: ClientCategory;
}


// About Page Founders Section

interface Founders {
    title: string;
    description: string;
}


// About Page Specialists Section


interface Specialists {
    ourSpecialists: string[];
    qualificationRequirementsForSpecialists: {
        mainRequirements: string[];
        requirementsForAuditorAssistants: string[];
    };
    complianceWithAuditorEthics: {
        description: string;
    };
    sectionTitles: {
        ourSpecialists: string;
        qualificationRequirements: string;
        mainRequirements: string;
        requirementsForAuditorAssistants: string;
        complianceWithAuditorEthics: string;
    };
}


// About Page Management Section


interface Management {
    title: string;
    clientPrinciple: string;
    managementPrinciple: string;
}


// Work Principles Page

interface WorkPrinciples {
    title: string;
    card: {
        title: string;
        description: string;
        date: string;
    };
    partnerAuditorControl: PartnerAuditorControl
}
interface PartnerAuditorControl {
    title: string;
    description: string[];
};

// Services Page Main Section

interface Services {
    main: Main;
    generalInformation: GeneralInformation;
    antiCrisisManagement: AntiCrisisManagement;
    procedureDueDiligence: ProcedureDueDiligence;
    requiredAudit: RequiredAudit;
    initiativeAudit: InitiativeAudit;
    projectGrandsAudit: ProjectGrandsAudit;
    consulting: Consulting;
    accounting: Accounting;
}

interface Main {
    title: string;
    card_1: Card;
    card_2: Card;
    card_3: Card;
    card_4: Card;
    card_5: Card;
    card_6: Card;
    card_7: Card;
    card_8: Card;
}

interface Card {
    title: string;
    description: string;
}

interface GeneralInformation {
    title: string;
    text_1: string;
    text_2: string;
}

interface AntiCrisisManagement {
    title: string;
    introduction: string;
    section_1: string;
    section_2: string;
}

interface ProcedureDueDiligence {
    title: string;
    introduction: string;
    section_1: string;
    section_2: string;
    points: string[];
    section_3: string;
    section_4: string;
}

interface RequiredAudit {
    title: string;
    introduction: string;
    section_1: string;
    section_2: string;
    points: string[];
    section_3: string;
    section_4: string;
}

interface InitiativeAudit {
    title: string;
    description: string;
    conditions: InitiativeConditions;
    goals: InitiativeGoals;
    purposeO: InitiativePurposeO;
    initiativeAuditCanBeConducted: string[];
    opportunities: InitiativeOpportunities;
}

interface InitiativeConditions {
    title: string;
    subject: string;
    terms: string;
    responsibility: string;
}

interface InitiativeGoals {
    title: string;
    text: string;
}

interface InitiativePurposeO {
    title: string;
    text: string;
}

interface InitiativeOpportunities {
    title: string;
    text: string;
}

interface ProjectGrandsAudit {
    title: string;
    description: string;
    conducting: string;
    auditPlan: string;
    documentationCheck: string;
    documentationPoints: string[];
    company: string;
    projects: { name: string }[];
}

interface Consulting {
    title: string;
    description: string;
    questions_title: string;
    questions: string[];
    offer: string;
    consultationAreas_title: string;
    consultationAreas: string[];
    consultationTypes_title: string;
    consultationTypes: {
        [key: string]: {
            title: string;
            description: string;
        }
    };
}


interface Accounting {
    title: string;
    description: string;
    points_title: string;
    points: string[];
    importance_title: string;
    importance: string;
    service_offer_title: string;
    service_offer: string;
    contract_benefits_title: string;
    contract_benefits: string;
    quality_assurance_title: string;
    quality_assurance: string;
    service_includes_title: string;
    service_includes: string[];
}

// Audit Conclusion Page

interface AuditConclusions {
    title: string;
    description: string;
}


// Became A Client Page


interface BecomeAClient {
    title: string;
    forma: {
        warning: string;
        name: string;
        surname: string;
        email: string;
        phone: string;
        company: string;
        role: string;
        typeAudit: string;
        typeAudit_1: string;
        typeAudit_2: string;
        typeAudit_3: string;
        mainJob: string;
        mainJob_1: string;
        mainJob_2: string;
        mainJob_3: string;
        status: string;
        status_placeholder: string;
        time: string;
        time_1: string;
        time_2: string;
        time_3: string;
        tax: string;
        tax_1: string;
        tax_2: string;
        currency: string;
        currency_1: string;
        currency_2: string;
        method: string;
        method_1: string;
        method_2: string;
        employees: string;
        accounting: string;
        banks: string;
        invoices: string;
        revenue: string;
        turnover: string;
        date: string;
        assets: string;
        branches: string;
        additional: string;
        submit: string;
        writeCount: string;
        writePrice: string;
    };
}


//  Help Page

interface Help {
    topText: TopText
    middleTable: MiddleTable
    bottomForm: BottomForm
}

interface TopText {
    help: {
        title: string;
        training: {
            title: string;
            content: (string | string[])[];
        };
        program: {
            title: string;
            table: {
                number: number;
                group: string;
                topic: string;
                planned_date: string;
                actual_date: string;
                responsible: string;
            }[];
        };
    };
}


interface MiddleTable {
    title: string;
    sections: {
        sectionTitle: string;
        rows: {
            number: string;
            info: string;
            criteria: string;
            score: string;
        }[];
    }[];
    responsibleNote: string;
}


interface BottomForm {
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    requiredMessage: string;
    maxLengthMessage: string;
    submitButton: string;
}


// About Founders 

// Define the types for founders translation
interface FoundersTranslation {
    title: string;
    description: string;
}

// Define the structure of the About Company Page context
interface AboutCompanyPage {
    founders: FoundersTranslation;
}

// Define the Translate Context type
interface TranslateContextType {
    aboutCompanyPage: AboutCompanyPage;
}


// About Clients Page



interface ClientsTranslation {
    title: string;
    description: string;
    nonProfit: {
        title: string;
        companies: string[];
    };
    industrial: {
        title: string;
        companies: string[];
    };
    foreignInvestment: {
        title: string;
        companies: string[];
    };
    unions: {
        title: string;
        companies: string[];
    };
    trading: {
        title: string;
        companies: string[];
    };
}

interface AboutCompanyPage {
    clients: ClientsTranslation;
}

interface TranslateContextType {
    aboutCompanyPage: AboutCompanyPage;
}


//  About Page

interface Service {
    opt: string[];
    title: string;
}

// Define the structure of the client translation
interface Client {
    title: string;
    description: string;
}

// Define the structure for clients
interface AboutClients {
    title: string;
    companies: Client[];
}

// Define the structure for the about page translation
interface AboutPage {
    title: string;
    description_1: string;
    description_2: string;
    description_3: string;
    services: Service;
    clients: AboutClients;
}

// Define the TranslateContext type
interface TranslateContextType {
    aboutPage: AboutPage;
}


//  ABOUT Management Page

// Define the structure of the management translation
interface ManagementTranslation {
    title: string;
    clientPrinciple: string;
    managementPrinciple: string;
}

// Define the structure for aboutCompanyPage translation
interface AboutCompanyPage {
    management: ManagementTranslation;
}

// Define the TranslateContext type
interface TranslateContextType {
    aboutCompanyPage: AboutCompanyPage;
}

// ABOUT Our Specialists Page



// Define the structure for the qualification requirements
interface QualificationRequirements {
    mainRequirements: string[];
    requirementsForAuditorAssistants: string[];
}

// Define the structure for the specialists translation
interface SpecialistsTranslation {
    sectionTitles: {
        ourSpecialists: string;
        qualificationRequirements: string;
        mainRequirements: string;
        requirementsForAuditorAssistants: string;
        complianceWithAuditorEthics: string;
    };
    ourSpecialists: string[];
    qualificationRequirementsForSpecialists: QualificationRequirements;
    complianceWithAuditorEthics: {
        description: string;
    };
}

// Define the structure for aboutCompanyPage translation
interface AboutCompanyPage {
    specialists: SpecialistsTranslation;
}

// Define the TranslateContext type
interface TranslateContextType {
    aboutCompanyPage: AboutCompanyPage;
}

//  Vacancies Page

// types/Translation.ts
interface JobListingTranslation {
    careerTitle: string;
    careerDescription: string;
    auditors: string;
    locationHeader: string;
    positionHeader: string;
    positions: { location: string; position: string; }[];
    requirements: string;
    requirementsList: string[];
    registrationNotice: string;
}

interface VacanciesFormTranslation {
    formTitle: string;
    personalInfo: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: string;
    position: string;
    languages: string;
    skills: string;
    additionalSkills: string;
    workExperience: string;
    startDate: string;
    endDate: string;
    company: string;
    certDescriptionPlaceholder: string;
    submitButtonText: string;
}
