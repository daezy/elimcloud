export type ServiceModule = {
  title: string;
  desc: string;
};

export type ServiceItem = {
  slug: string;
  type: "accounting" | "erp";
  label: string;
  title: string;
  tagline: string;
  intro: string;
  photo: string;
  accentColor: "pink" | "purple";
  modules: ServiceModule[];
  benefits: string[];
};

// ─── ECPAS — Accounting ─────────────────────────────────────────────────────

const accountingModules: ServiceModule[] = [
  {
    title: "Sales & Revenue Management",
    desc: "Create quotations, sales orders, invoices and receipts. Track outstanding payments, manage credit limits, and get a real-time view of revenue across all your customers and sales channels.",
  },
  {
    title: "Purchases & Accounts Payable",
    desc: "Manage supplier invoices, purchase orders, and payment schedules. Automate three-way matching of POs to GRNs to supplier invoices and track outstanding liabilities across all vendors.",
  },
  {
    title: "Inventory & Stock Control",
    desc: "Track stock in real time across multiple stores and locations. Set reorder levels, manage batch and serial numbers, perform stock-takes, and view movement history for every item.",
  },
  {
    title: "Banking & Cash Management",
    desc: "Reconcile bank statements, manage petty cash, and track multi-currency transactions. Create payment vouchers and get full visibility into your cash position at any time.",
  },
  {
    title: "General Ledger & Financial Reporting",
    desc: "Post journals, manage chart of accounts, and generate IFRS-compliant financial statements — including Profit & Loss, Balance Sheet, and Cash Flow — at the press of a button.",
  },
  {
    title: "Tax & Statutory Compliance",
    desc: "Automate VAT calculations, generate WHT schedules, and produce FIRS-compliant tax reports. Stay audit-ready with properly coded transactions and a complete electronic audit trail.",
  },
];

const multibranchModule: ServiceModule = {
  title: "Multi-Branch & Company Setup",
  desc: "Run multiple business locations or independent companies from one subscription. Consolidate reports across branches or view each entity separately with granular access controls.",
};

const payrollModule: ServiceModule = {
  title: "Payroll & HR Integration",
  desc: "Process monthly payrolls, calculate statutory deductions (PAYE, NHF, Pension), generate payslips, and post salary journals directly to the general ledger — no manual re-entry.",
};

const projectModule: ServiceModule = {
  title: "Contracts & Project Costing",
  desc: "Create project budgets, assign cost codes, and track actual vs budgeted spend at every stage. Generate progress billing and retention statements tied directly to contract milestones.",
};

const timesheetModule: ServiceModule = {
  title: "Timesheet & Billing",
  desc: "Log billable hours by employee and project. Generate time-based invoices automatically, track write-offs, and monitor profitability per client engagement in real time.",
};

const rentalModule: ServiceModule = {
  title: "Rental Income & Property Management",
  desc: "Set up property units, configure tenancy agreements, and automate rent billing on schedule. Track arrears, manage service charges, and reconcile all property income to the ledger.",
};

const constructionModule: ServiceModule = {
  title: "Progress Billing & Retention",
  desc: "Issue valuations, raise interim certificates, and manage contractor retentions. Calculate escalation adjustments and produce final account statements aligned with contract terms.",
};

const logisticsModule: ServiceModule = {
  title: "Logistics & Delivery Tracking",
  desc: "Create delivery notes, track shipment status, and reconcile deliveries to sales orders. Monitor freight costs by route and link logistics expenses directly to the cost of sales.",
};

const fixedAssetsModule: ServiceModule = {
  title: "Fixed Assets Management",
  desc: "Track all your capital assets from acquisition through disposal. Calculate depreciation automatically, manage asset transfers, and maintain a complete audit trail.",
};

const maintenanceModule: ServiceModule = {
  title: "Maintenance Management",
  desc: "Schedule and track preventive and corrective maintenance for your assets and equipment. Reduce downtime and extend asset lifecycle with systematic maintenance planning.",
};

const riskModule: ServiceModule = {
  title: "Risk & Control Management",
  desc: "Implement internal controls, manage audit processes, and maintain compliance. Identify, assess, and mitigate risks with systematic monitoring and reporting tools.",
};

export const services: ServiceItem[] = [
  // ── Custom ERP Solutions (from user request) ──
  {
    slug: "ehps",
    type: "erp",
    label: "HRMS & Payroll",
    title: "Elim HRMS & Payroll Software",
    tagline:
      "Automate payroll, HR, and statutory compliance — all in one platform.",
    intro:
      "Elim HRMS & Payroll Software is a comprehensive solution for managing your workforce from hire to retire. Handle employee records, process monthly payroll with full statutory deductions (PAYE, Pension, NHF, NHIS), manage leave and loans, track medical benefits, and generate audit-ready reports — all from one integrated platform. Configurable for organisations of any size across multiple locations and salary structures.",
    photo: "/images/ehps-hero.png",
    accentColor: "purple",
    modules: [
      {
        title: "Employee Records & Onboarding",
        desc: "Maintain complete employee profiles from hire date, manage contracts, job history, qualifications, and emergency contacts in a centralised digital record.",
      },
      {
        title: "Payroll & Compensation",
        desc: "Process monthly payroll for unlimited employees, configure earnings and deduction elements, generate payslips, and post salary journals directly to the general ledger.",
      },
      {
        title: "Leave & Attendance Management",
        desc: "Define leave types and entitlements, track balances in real time, automate approval workflows, and sync attendance data directly to payroll.",
      },
      {
        title: "Loans & Advances",
        desc: "Manage staff loan applications, set repayment schedules, and auto-deduct instalments each payroll cycle with full transaction history per employee.",
      },
      {
        title: "Statutory Compliance & Reporting",
        desc: "Automate PAYE, pension (PenCom), NHF, and NHIS calculations. Generate schedule files for remittance and produce FIRS-compliant reports for every pay period.",
      },
    ],
    benefits: [
      "Automated payroll and payslip generation",
      "Full statutory deduction compliance (PAYE, Pension, NHF, NHIS)",
      "Configurable leave policies and approval workflows",
      "Loan and advance management with auto-deduction",
      "Multi-location and multi-department support",
      "Direct general ledger integration",
    ],
  },
  {
    slug: "ehps-oce",
    type: "erp",
    label: "Hospitality HRMS",
    title: "Elim Hospitality HRMS & Payroll",
    tagline:
      "Purpose-built HR and payroll for hotels, restaurants, and hospitality businesses.",
    intro:
      "Elim Hospitality HRMS & Payroll is a specialised workforce management solution designed for the unique demands of the hospitality industry. From managing shift rosters and seasonal staff to processing tips, service charges, and hospitality-specific payroll structures, it gives hotel groups, restaurants, and resorts the HR tools they need to run lean and stay compliant — across every property and outlet.",
    photo: "/images/ehps-oce-hero.png",
    accentColor: "purple",
    modules: [
      {
        title: "Shift & Roster Management",
        desc: "Build and publish shift schedules across departments and outlets. Track clock-in/out, manage shift swaps, and sync attendance directly to payroll — eliminating manual timesheet reconciliation.",
      },
      {
        title: "Tips, Gratuity & Service Charge Processing",
        desc: "Configure automatic distribution of tips and service charges per employee role or department. Calculate gratuity accurately and include it seamlessly in each pay run.",
      },
      {
        title: "Seasonal & Contract Staff Management",
        desc: "Onboard and offboard seasonal workers quickly, manage fixed-term contracts, and maintain a talent pool for peak periods — all within the same system as your permanent headcount.",
      },
      {
        title: "Multi-Property HR & Payroll",
        desc: "Manage staff across multiple hotel properties, restaurants, or outlets from one dashboard. Run consolidated payroll or process each property independently with full inter-property reporting.",
      },
      {
        title: "Employee Self-Service Portal",
        desc: "Let staff view payslips, apply for leave, check shift schedules, and request loans from any device — reducing HR admin load and improving employee satisfaction.",
      },
    ],
    benefits: [
      "Shift scheduling and real-time attendance tracking",
      "Automated tips and service charge distribution",
      "Seasonal and contract staff lifecycle management",
      "Multi-property payroll from a single platform",
      "Full statutory compliance (PAYE, Pension, NHF, NHIS)",
      "Employee self-service on any device",
    ],
  },
  {
    slug: "pos",
    type: "erp",
    label: "POS",
    title: "Elim POS Software",
    tagline: "Integrated Online & Offline Hybrid POS & Accounting System.",
    intro:
      "Elim POS Software is a customizable, integrated POS and accounting system for multi-branch retail businesses. Supports online/offline operation, centralized management, inventory, purchasing, sales, and financial accounting. Scalable for single or multiple locations.",
    photo: "/images/pos-hero.png",
    accentColor: "purple",
    modules: [
      {
        title: "Multi-Branch Management",
        desc: "Centralized management for all branches and locations.",
      },
      {
        title: "Inventory & Warehousing",
        desc: "Unlimited inventory, stock transfers, and real-time tracking.",
      },
      {
        title: "Point of Sales",
        desc: "Sales, invoicing, receipts, and customer management.",
      },
      {
        title: "Financial Accounting",
        desc: "Integrated accounting, cash, bank, and financial reports.",
      },
      {
        title: "User & Module Management",
        desc: "Unlimited users, permissions, and audit trails.",
      },
    ],
    benefits: [
      "Online and offline hybrid operation",
      "Centralized inventory and sales management",
      "Integrated accounting and reporting",
      "Unlimited users and locations",
      "Customizable to business needs",
    ],
  },
  {
    slug: "hms",
    type: "erp",
    label: "HMS",
    title: "Elim Hotel Management System (HMS)",
    tagline: "Comprehensive hotel management and ERP solution.",
    intro:
      "Elim HMS is a complete hotel management system covering reservations, guest management, billing, housekeeping, inventory, and financials. Designed for hotels, groups, and chains seeking integrated operations and real-time reporting.",
    photo: "/images/hms-hero.png",
    accentColor: "purple",
    modules: [
      {
        title: "Reservations & Front Desk",
        desc: "Room booking, check-in/out, and guest management.",
      },
      {
        title: "Housekeeping & Maintenance",
        desc: "Task scheduling, room status, and maintenance tracking.",
      },
      {
        title: "Inventory & Procurement",
        desc: "Manage hotel inventory, suppliers, and procurement.",
      },
      {
        title: "Billing & Financials",
        desc: "Automated billing, invoicing, and financial reporting.",
      },
      {
        title: "Group/Chain Management",
        desc: "Multi-property management and consolidated reporting.",
      },
    ],
    benefits: [
      "End-to-end hotel operations management",
      "Integrated billing and financials",
      "Real-time inventory and procurement",
      "Multi-property/group support",
      "Comprehensive guest experience management",
    ],
  },
  {
    slug: "hospitalerp",
    type: "erp",
    label: "Hospital ERP",
    title: "Elim Hospital ERP",
    tagline:
      "Comprehensive enterprise hospital management and accounting ERP software.",
    intro:
      "Elim Hospital ERP is a customizable hospital management and accounting solution for hospitals of all sizes. Integrates outpatient/inpatient management, pharmacy, billing, HR/payroll, inventory, and financials. Supports multi-branch, online/offline, and cloud deployment.",
    photo: "/images/hospitalerp-hero.png",
    accentColor: "purple",
    modules: [
      {
        title: "Patient & Clinical Management",
        desc: "Outpatient/inpatient, pharmacy, and medical records.",
      },
      {
        title: "Billing & Insurance",
        desc: "Automated billing, insurance, and HMO management.",
      },
      {
        title: "HR & Payroll",
        desc: "Staff management, payroll, and statutory compliance.",
      },
      {
        title: "Inventory & Procurement",
        desc: "Medical and general inventory, procurement, and suppliers.",
      },
      {
        title: "Multi-Branch & Cloud",
        desc: "Centralized management for multiple hospitals/branches.",
      },
    ],
    benefits: [
      "Integrated hospital operations and accounting",
      "Automated billing and insurance",
      "HR, payroll, and compliance",
      "Multi-branch and cloud support",
      "Customizable for any hospital size",
    ],
  },
  // ── ECPAS ──────────────────────────────────────────────────────────────────
  {
    slug: "retail",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Retail Business",
    tagline: "Run every storefront from one cloud dashboard.",
    intro:
      "ECPAS for Retail gives you an end-to-end accounting platform built for businesses that operate physical or online storefronts. Track point-of-sale income, manage stock levels across multiple locations, and reconcile every transaction to your books automatically. Whether you run a single boutique or a chain of outlets, ECPAS scales with you and ensures your numbers are always accurate and audit-ready.",
    photo: "/images/retail-service.png",
    accentColor: "pink",
    modules: [
      accountingModules[0],
      accountingModules[2],
      accountingModules[1],
      accountingModules[3],
      accountingModules[4],
      multibranchModule,
      fixedAssetsModule,
    ],
    benefits: [
      "Real-time stock levels across all store locations",
      "Automated daily sales reconciliation",
      "Multi-branch income and expense consolidation",
      "Customer credit and outstanding balance tracking",
      "VAT and FIRS-compliant reporting",
      "Integrated payroll for shop staff",
    ],
  },
  {
    slug: "manufacturing",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Manufacturing Companies",
    tagline: "From raw materials to finished goods — fully accounted for.",
    intro:
      "ECPAS for Manufacturing connects your production floor to your accounting suite. Track raw material procurement, work-in-progress valuations, and finished goods inventory in one system. Cost every production run accurately, manage supplier payables, and produce financial reports that reflect the true profitability of each product line. Designed for Nigerian manufacturers who need cloud accounting that understands production economics.",
    photo: "/images/manufacturing-service.png",
    accentColor: "pink",
    modules: [
      {
        title: "Bill of Materials & Production Costing",
        desc: "Define bills of materials for each product, cost production runs at standard or actual cost, and track variances. Automatically post WIP entries and transfer finished goods to inventory.",
      },
      accountingModules[2],
      accountingModules[1],
      accountingModules[4],
      accountingModules[5],
      payrollModule,
      fixedAssetsModule,
    ],
    benefits: [
      "Accurate cost-of-production per batch or run",
      "Raw material consumption tracking",
      "Supplier and procurement management",
      "Multi-warehouse inventory visibility",
      "PAYE and pension payroll for factory staff",
      "FIRS-compliant financial statements",
    ],
  },
  {
    slug: "professional",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Professional Business",
    tagline: "Bill your time, manage your clients, grow your practice.",
    intro:
      "ECPAS for Professional Services is built for consultancies, law firms, accounting practices, and agencies. It ties client billing directly to timesheet records, manages retainer agreements, and gives you real-time profitability per client. Combined with integrated payroll, cash flow forecasting, and FIRS-compliant reporting, it is the only financial platform your professional firm will ever need.",
    photo: "/images/professional-service.png",
    accentColor: "pink",
    modules: [
      timesheetModule,
      accountingModules[0],
      accountingModules[1],
      accountingModules[3],
      accountingModules[4],
      payrollModule,
    ],
    benefits: [
      "Time-based and milestone client billing",
      "Retainer income tracking and reconciliation",
      "Staff timesheet approval workflows",
      "Cash flow forecasting and planning",
      "WHT and VAT compliance",
      "Per-engagement profitability analysis",
    ],
  },
  {
    slug: "real-estate",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Real Estate Companies",
    tagline: "One platform for every property in your portfolio.",
    intro:
      "ECPAS for Real Estate pulls every aspect of your property business into one accounting system. Manage development project costs, track rental income across your entire portfolio, bill tenants on schedule, and reconcile all transactions to your general ledger automatically. Whether you are a developer, property manager, or investor, ECPAS gives you the financial clarity to make confident decisions.",
    photo: "/images/realestate-service.png",
    accentColor: "pink",
    modules: [
      rentalModule,
      projectModule,
      accountingModules[1],
      accountingModules[3],
      accountingModules[4],
      accountingModules[5],
    ],
    benefits: [
      "Automated rent and service charge billing",
      "Development project cost tracking",
      "Tenant arrears and statement management",
      "Retention and milestone billing",
      "Multi-property portfolio consolidation",
      "FIRS-compliant tax and statutory reports",
    ],
  },
  {
    slug: "contract",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Contract Services",
    tagline: "Every contract costed, every milestone billed.",
    intro:
      "ECPAS for Contract Services is designed for businesses that win, execute, and bill on contracts. Create project budgets, assign cost codes, track actual vs planned expenditure, and generate progress claims tied to contract milestones. Manage sub-contractor payments, track retentions, and ensure every contract is profitable and fully reconciled from award to final account.",
    photo: "/images/contract-service.png",
    accentColor: "pink",
    modules: [
      projectModule,
      {
        title: "Sub-Contractor Management",
        desc: "Set up and manage sub-contractor agreements, track their cost claims, process payments, and deduct retentions. Reconcile sub-contractor costs against the main contract budget.",
      },
      accountingModules[1],
      accountingModules[3],
      accountingModules[4],
      accountingModules[5],
    ],
    benefits: [
      "Contract budget creation and cost tracking",
      "Progress billing and milestone invoicing",
      "Sub-contractor payment management",
      "Retention deduction and release tracking",
      "WHT compliance for contractor payments",
      "Project profitability reporting",
    ],
  },
  {
    slug: "engineering",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Engineering Services",
    tagline: "Financial precision for complex engineering projects.",
    intro:
      "ECPAS for Engineering Services gives engineering firms a complete financial platform — from project cost tracking and timesheet billing through to multi-currency procurement and FIRS-compliant reporting. Manage equipment costs, track project margins in real time, and ensure every billable hour and expense is captured accurately before it impacts your bottom line.",
    photo: "/images/engineering-service.png",
    accentColor: "pink",
    modules: [
      timesheetModule,
      projectModule,
      accountingModules[2],
      accountingModules[3],
      accountingModules[4],
      payrollModule,
    ],
    benefits: [
      "Technical staff timesheet and expense tracking",
      "Project budget vs actual cost monitoring",
      "Equipment and plant cost allocation",
      "Multi-currency procurement management",
      "Engineer payroll and statutory deductions",
      "FIRS-compliant financial reporting",
    ],
  },
  {
    slug: "distribution",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Trading & Distribution",
    tagline: "From purchase order to delivery — every naira tracked.",
    intro:
      "ECPAS for Trading & Distribution gives you complete visibility from supplier purchase order through to customer delivery. Manage multiple warehouses, track goods in transit, reconcile delivery notes to invoices, and monitor the profitability of every product SKU. Built for Nigerian distributors who need fast, accurate financial reporting across a high-volume transaction environment.",
    photo: "/images/distribution-service.png",
    accentColor: "pink",
    modules: [
      accountingModules[0],
      accountingModules[2],
      logisticsModule,
      accountingModules[1],
      accountingModules[3],
      accountingModules[4],
    ],
    benefits: [
      "Multi-warehouse stock visibility",
      "Automated delivery reconciliation",
      "Supplier and customer credit management",
      "Freight cost allocation to cost of sales",
      "Fast-moving vs slow-moving stock analysis",
      "FIRS-compliant VAT and WHT reports",
    ],
  },
  {
    slug: "construction",
    type: "accounting",
    label: "ECPAS",
    title: "Cloud Accounting for Construction Industry",
    tagline: "Track every cost, from groundbreaking to handover.",
    intro:
      "ECPAS for Construction is purpose-built for civil and building contractors. Create detailed project budgets, track expenditure by cost code and work package, manage sub-contractor billing and retentions, and produce accurate valuations at every stage. Integrated payroll handles site labour, while robust financial reporting keeps directors and lenders informed throughout the project lifecycle.",
    photo: "/images/construction-service.png",
    accentColor: "pink",
    modules: [
      constructionModule,
      projectModule,
      {
        title: "Site Procurement & Materials Management",
        desc: "Raise purchase orders for materials and plant hire, track deliveries to site, and reconcile supplier invoices against goods received. Monitor material waste and overspend by work package.",
      },
      accountingModules[3],
      accountingModules[4],
      payrollModule,
    ],
    benefits: [
      "Project budget creation by cost code",
      "Progress valuation and interim certificates",
      "Sub-contractor cost and retention tracking",
      "Materials procurement and waste monitoring",
      "Site payroll with PAYE and pension",
      "Bank draw-down reporting for lenders",
    ],
  },

  // ── ECPBES ─────────────────────────────────────────────────────────────────
  {
    slug: "real-estate",
    type: "erp",
    label: "ECPBES",
    title: "ERP for Real Estate Companies",
    tagline: "End-to-end ERP from land acquisition to property sale.",
    intro:
      "ECPBES for Real Estate is a full enterprise platform covering every stage of the property lifecycle — from land acquisition and development through sales, leasing, and property management. Integrate procurement, project management, CRM, HR, and financials in one system. Close deals faster, control development costs, and manage every unit in your portfolio from a single cloud dashboard.",
    photo: "/images/realestate-service.png",
    accentColor: "purple",
    modules: [
      {
        title: "Property Development & Sales",
        desc: "Track land acquisition costs, development budgets, and unit sales. Manage reservation agreements, instalment payment schedules, and generate completion statements automatically.",
      },
      {
        title: "Lease & Tenancy Management",
        desc: "Configure property units, manage tenancy agreements, automate rent billing, track arrears, and process lease renewals — all linked directly to the financial ledger.",
      },
      {
        title: "Project & Contract Management",
        desc: "Create development project plans, assign contractors, track cost against budget, manage retentions, and generate progress reports for investors and lenders.",
      },
      {
        title: "CRM & Sales Pipeline",
        desc: "Manage property leads, track buyer interactions, automate follow-ups, and monitor conversion rates from enquiry through reservation to completion.",
      },
      {
        title: "Supply Chain & Procurement",
        desc: "Raise and approve purchase orders for materials and services, manage approved vendor lists, and track every naira of procurement spend against project budgets.",
      },
      {
        title: "HR, Payroll & Financials",
        desc: "Process payroll for all staff, manage leave and attendance, and generate IFRS-compliant consolidated financial statements across all companies and projects.",
      },
    ],
    benefits: [
      "360° view of every property in your portfolio",
      "Automated rent and instalment billing",
      "Development cost vs budget tracking",
      "Buyer and tenant CRM in one platform",
      "Multi-company financial consolidation",
      "Investor and lender reporting ready",
    ],
  },
  {
    slug: "general",
    type: "erp",
    label: "ECPBES",
    title: "ERP for General Business Services",
    tagline: "One integrated system to run your entire business.",
    intro:
      "ECPBES for General Business is an all-in-one ERP designed for small and mid-market Nigerian companies that have outgrown basic accounting software. It connects your financials, inventory, procurement, sales, HR, and payroll into a single cloud system — eliminating duplicate data entry, reducing errors, and giving management a real-time view of the entire business from any device.",
    photo: "/images/professional-service.png",
    accentColor: "purple",
    modules: [
      {
        title: "Financial Management",
        desc: "General ledger, accounts payable/receivable, budgeting, multi-currency, bank reconciliation, and comprehensive IFRS-compliant reporting for directors and auditors.",
      },
      {
        title: "Sales & Customer Management (CRM)",
        desc: "Manage your entire pipeline — leads, quotations, sales orders, invoicing, and receipts — with full customer history and outstanding balance tracking.",
      },
      {
        title: "Inventory & Procurement",
        desc: "Control stock across multiple locations, manage purchase orders, and automate reorder points. Track every item from supplier to shelves to customer.",
      },
      {
        title: "Project Accounting",
        desc: "Create project budgets, allocate staff and resources, track costs by project code, and report on profitability per project or contract.",
      },
      {
        title: "HR & Payroll",
        desc: "Manage employee records, process monthly payroll, calculate PAYE, pension, and NHF, generate payslips, and post journals automatically.",
      },
      {
        title: "Management Reporting",
        desc: "Build custom dashboards, schedule automated KPI reports, and give different management levels access to the insights they need in real time.",
      },
      fixedAssetsModule,
      maintenanceModule,
      riskModule,
    ],
    benefits: [
      "Single source of truth across all departments",
      "Elimination of duplicate data entry",
      "Real-time business performance dashboards",
      "IFRS and FIRS-compliant reporting",
      "Role-based access for all team members",
      "Scales as your business grows",
    ],
  },
  {
    slug: "professional",
    type: "erp",
    label: "ECPBES",
    title: "ERP for Professional Services",
    tagline: "Beyond accounting — a complete business management platform.",
    intro:
      "ECPBES for Professional Services takes consultancies, law firms, IT companies, and agencies beyond traditional financial management. Connect your sales pipeline to project delivery, billing, and financial reporting in one unified platform. Track every billable hour, manage multi-project portfolios, and give partners and directors the real-time profitability data they need to run a high-performance practice.",
    photo: "/images/erp-general-service.png",
    accentColor: "purple",
    modules: [
      timesheetModule,
      {
        title: "Project Portfolio Management",
        desc: "Plan and track multiple engagements simultaneously. Define project phases, assign team members, monitor budgets vs actuals, and flag at-risk projects before it is too late.",
      },
      {
        title: "CRM & Business Development",
        desc: "Track opportunities, manage proposals, and monitor win rates. Link won deals directly to project setup so delivery starts the moment a contract is signed.",
      },
      {
        title: "Resource Planning",
        desc: "View team utilisation across all active projects. Allocate capacity intelligently to maximise billable hours and avoid burnout or under-utilisation.",
      },
      {
        title: "Client Billing & Revenue Recognition",
        desc: "Generate time-based, milestone, and retainer invoices. Manage revenue recognition in line with IFRS 15 and track deferred revenue automatically.",
      },
      payrollModule,
      riskModule,
    ],
    benefits: [
      "Full visibility from pitch to final invoice",
      "Billable utilisation tracking per consultant",
      "Retainer and milestone revenue management",
      "IFRS 15 compliant revenue recognition",
      "Partner-level profitability dashboards",
      "Integrated HR for consultant lifecycle management",
    ],
  },
  {
    slug: "contract",
    type: "erp",
    label: "ECPBES",
    title: "ERP for Contract Services",
    tagline: "Manage contracts, resources, and finances in one platform.",
    intro:
      "ECPBES for Contract Services is an integrated ERP built for businesses whose revenue comes from winning and executing contracts. Manage the full lifecycle from tender to final account — tracking project costs, sub-contractor relationships, site procurement, HR, and financials in one connected system. Reduce cost overruns, improve margin visibility, and produce contract-ready reports at any point during execution.",
    photo: "/images/contract-service.png",
    accentColor: "purple",
    modules: [
      {
        title: "Contract Lifecycle Management",
        desc: "Set up contracts with milestones, cost codes, and payment schedules. Track progress claims, approve variations, and manage extensions of time from a single contract register.",
      },
      {
        title: "Sub-Contractor Management",
        desc: "Register sub-contractors, create back-to-back sub-contract terms, process payment applications, deduct retentions, and issue performance certificates.",
      },
      projectModule,
      {
        title: "Site Procurement",
        desc: "Raise procurement orders for materials, plant, and services. Match deliveries to purchase orders, process invoices, and control expenditure against site budgets.",
      },
      {
        title: "HR & Site Payroll",
        desc: "Manage site crew records, process daily gangs, calculate weekly or monthly payroll,  deduct statutory contributions, and post payroll costs to project codes.",
      },
      accountingModules[4],
    ],
    benefits: [
      "End-to-end contract register and tracking",
      "Variation order management",
      "Sub-contractor payment and retention control",
      "Real-time cost vs budget per contract",
      "Site procurement and materials control",
      "Consolidated financial reporting across all contracts",
    ],
  },
  {
    slug: "engineering",
    type: "erp",
    label: "ECPBES",
    title: "ERP for Engineering Services",
    tagline: "Integrated ERP for complex engineering organisations.",
    intro:
      "ECPBES for Engineering Services connects every function of an engineering business — from bid management and project execution through to equipment maintenance, HR, and financial reporting. Manage multi-disciplinary project teams, track equipment utilisation, control procurement, and give engineers, project managers, and directors access to the real-time data they need to deliver on time and on budget.",
    photo: "/images/engineering-service.png",
    accentColor: "purple",
    modules: [
      {
        title: "Project Management & Scheduling",
        desc: "Build work-breakdown structures, assign resources, set milestones, and track progress against baseline schedules. Flag deviations early with automated variance reporting.",
      },
      {
        title: "Equipment & Asset Management",
        desc: "Track all plant, vehicles, and test equipment. Schedule preventive maintenance, log breakdowns, record repair costs, and allocate equipment usage to project cost codes.",
      },
      timesheetModule,
      {
        title: "Procurement & Supply Chain",
        desc: "Manage technical procurement from specification to delivery. Handle long-lead items, manage approved supplier lists, and track import costs for equipment sourced overseas.",
      },
      {
        title: "HR & Workforce Management",
        desc: "Manage engineers, technicians, and support staff. Track certifications and competency requirements, manage leave, and process multi-grade payrolls with statutory deductions.",
      },
      accountingModules[4],
      fixedAssetsModule,
    ],
    benefits: [
      "Project progress vs baseline tracking",
      "Equipment utilisation and maintenance scheduling",
      "Technical procurement management",
      "Multi-discipline resource planning",
      "Engineer certification and competency tracking",
      "IFRS-compliant project financial reporting",
    ],
  },
  {
    slug: "distribution",
    type: "erp",
    label: "ECPBES",
    title: "ERP for Trading & Distribution",
    tagline: "Full supply chain control — from supplier to customer.",
    intro:
      "ECPBES for Trading & Distribution gives you an integrated ERP that spans the entire supply chain. Automate procurement replenishment, manage multi-warehouse stock, process high volumes of sales orders and deliveries, and integrate logistics costs into your financial reporting. Whether you distribute FMCG, pharmaceuticals, or industrial goods, ECPBES gives you the speed and accuracy your operation demands.",
    photo: "/images/distribution-service.png",
    accentColor: "purple",
    modules: [
      {
        title: "Warehouse Management",
        desc: "Manage multiple warehouses with bin-level location tracking. Process goods inward, putaway, picking, packing, and dispatch with full traceability from PO to delivery.",
      },
      {
        title: "Order Management",
        desc: "Handle high-volume sales orders, check real-time stock availability, allocate and pick automatically, and generate delivery notes and invoices in one seamless workflow.",
      },
      logisticsModule,
      {
        title: "Procurement & Replenishment",
        desc: "Automate purchase order generation based on reorder points. Manage supplier lead times, approved vendor lists, and landed cost calculations for imported goods.",
      },
      {
        title: "HR & Fleet Management",
        desc: "Manage drivers, warehouse staff, and office personnel. Track vehicle maintenance, fuel consumption, and route costs. Process payroll across all grades and locations.",
      },
      accountingModules[4],
    ],
    benefits: [
      "Multi-warehouse real-time stock visibility",
      "Automated replenishment and PO generation",
      "High-volume order processing",
      "Delivery route and fleet management",
      "Landed cost and import duty tracking",
      "Consolidated P&L per product category",
    ],
  },
  {
    slug: "construction",
    type: "erp",
    label: "ECPBES",
    title: "ERP for Construction Industry",
    tagline: "Full project lifecycle management for construction companies.",
    intro:
      "ECPBES for Construction is an end-to-end ERP that integrates every function of a construction or civil engineering company. Bid management, contract administration, project costing, procurement, sub-contractor management, site HR, plant and equipment tracking, and financial reporting — all in one cloud platform. Built for Nigerian contractors who need to manage multiple live projects and report accurately to clients and regulators.",
    photo: "/images/construction-service.png",
    accentColor: "purple",
    modules: [
      {
        title: "Bid & Tender Management",
        desc: "Build detailed bill-of-quantities estimates, track tender submissions, manage pre-qualification documents, and convert won bids directly into live project budgets.",
      },
      constructionModule,
      {
        title: "Sub-Contractor & Supplier Management",
        desc: "Register contractors, issue subcontract orders, process payment applications, manage performance bonds, and track retention across all active projects.",
      },
      {
        title: "Plant, Equipment & Fleet",
        desc: "Track ownership and hire plant across all sites. Schedule maintenance, log breakdowns, allocate usage costs to projects, and monitor fleet fuel consumption.",
      },
      {
        title: "Site HR & Labour Management",
        desc: "Record daily site attendance, manage different labour grades and gangs, process weekly or monthly payroll, and post all labour costs to the right project cost codes.",
      },
      accountingModules[4],
      fixedAssetsModule,
    ],
    benefits: [
      "Tender-to-project budget conversion",
      "Real-time cost vs contract value tracking",
      "Multi-project portfolio management",
      "Plant and equipment cost allocation",
      "Site payroll with statutory deductions",
      "Client and lender reporting dashboards",
    ],
  },
  {
    slug: "production",
    type: "erp",
    label: "ECPBES",
    title: "ERP for Production Companies",
    tagline: "Integrated ERP from raw material to finished product.",
    intro:
      "ECPBES for Production Companies delivers a fully integrated ERP that connects your production floor to your boardroom. Manage bills of materials, production planning and scheduling, quality control, maintenance, warehouse, procurement, HR, and financials in a single cloud system. Achieve tighter cost control, reduce waste, improve on-time delivery, and generate the accurate financial reports your business needs to grow.",
    photo: "/images/manufacturing-service.png",
    accentColor: "purple",
    modules: [
      {
        title: "Production Planning & Scheduling",
        desc: "Create production orders, schedule work centres, manage capacity, and track work-in-progress across multiple production lines. Automatically generate material requirements from production plans.",
      },
      {
        title: "Bill of Materials & Formula Management",
        desc: "Define multi-level BOMs or production formulas, manage version control, and ensure every production run uses the correct specification. Track yield rates and scrap percentages by product.",
      },
      {
        title: "Quality Control",
        desc: "Define inspection checkpoints, log quality test results, manage non-conformances, and enforce hold-and-release workflows before finished goods are dispatched to customers.",
      },
      {
        title: "Maintenance Management",
        desc: "Schedule preventive maintenance for all production machinery. Log breakdowns, track repair costs, manage spare parts inventory, and ensure equipment reliability for production continuity.",
      },
      {
        title: "Supply Chain & Warehouse",
        desc: "Manage raw material procurement, inbound goods inspection, multi-location storage, and finished goods dispatch. Control stock levels with automated reorder points and min/max settings.",
      },
      {
        title: "HR, Payroll & Financials",
        desc: "Manage all production and office staff, process payroll with statutory deductions, track shift attendance, and generate IFRS-compliant financial statements including full cost of production reports.",
      },
    ],
    benefits: [
      "Production schedule and capacity planning",
      "Accurate cost-of-production per SKU",
      "Quality control and non-conformance tracking",
      "Predictive maintenance scheduling",
      "Raw material procurement automation",
      "IFRS cost of production financial reporting",
    ],
  },
];

export function getService(
  type: "accounting" | "erp",
  slug: string,
): ServiceItem | undefined {
  return services.find((s) => s.type === type && s.slug === slug);
}

export const accountingServices = services.filter(
  (s) => s.type === "accounting",
);
export const erpServices = services.filter((s) => s.type === "erp");
